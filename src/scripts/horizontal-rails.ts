type HorizontalScene = {
  element: HTMLElement;
  sticky: HTMLElement;
  viewport: HTMLElement;
  rail: HTMLElement;
  travel: number;
  buffer: number;
};

let cleanupCurrent: (() => void) | undefined;
let activeElements: HTMLElement[] = [];
let lifecycleBound = false;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function initHorizontalRails() {
  const scenes: HorizontalScene[] = [...document.querySelectorAll<HTMLElement>('[data-horizontal-scene]')]
    .map((element) => {
      const sticky = element.querySelector<HTMLElement>('.horizontal-scroll-scene__sticky');
      const viewport = element.querySelector<HTMLElement>('[data-horizontal-viewport]');
      const rail = element.querySelector<HTMLElement>('[data-horizontal-rail]');
      return sticky && viewport && rail ? { element, sticky, viewport, rail, travel: 0, buffer: 0 } : null;
    })
    .filter((scene): scene is HorizontalScene => scene !== null);

  if (!scenes.length) return;
  const sceneElements = scenes.map(({ element }) => element);
  if (cleanupCurrent && sceneElements.length === activeElements.length && sceneElements.every((element, index) => element === activeElements[index])) return;
  cleanupCurrent?.();
  activeElements = sceneElements;

  const desktop = window.matchMedia('(min-width: 901px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let disposed = false;

  const enhanced = () => desktop.matches && !reducedMotion.matches;
  const stickyOffset = () => {
    const offset = Number.parseFloat(getComputedStyle(scenes[0]?.sticky ?? document.documentElement).top);
    return Number.isFinite(offset) ? offset : 0;
  };

  const render = () => {
    frame = 0;
    if (disposed) return;
    if (!enhanced()) return;

    const topOffset = stickyOffset();
    scenes.forEach((scene) => {
      if (!scene.element.classList.contains('is-enhanced') || scene.travel <= 0) return;
      const consumed = topOffset - scene.element.getBoundingClientRect().top;
      const progress = clamp((consumed - scene.buffer) / Math.max(1, scene.travel), 0, 1);
      scene.rail.style.transform = `translate3d(${-scene.travel * progress}px, 0, 0)`;
    });
  };

  const requestRender = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  const reset = (scene: HorizontalScene) => {
    scene.element.classList.remove('is-enhanced');
    scene.element.style.removeProperty('height');
    scene.rail.style.removeProperty('transform');
    scene.travel = 0;
    scene.buffer = 0;
  };

  const preloadSceneImages = (scene: HorizontalScene) => {
    scene.rail.querySelectorAll<HTMLImageElement>('[data-horizontal-image]').forEach((image) => {
      image.loading = 'eager';
    });
  };

  const layout = () => {
    if (disposed) return;
    if (!enhanced()) {
      scenes.forEach(reset);
      return;
    }

    scenes.forEach((scene) => {
      scene.element.classList.add('is-enhanced');
      scene.rail.style.transform = 'translate3d(0, 0, 0)';
      scene.travel = Math.max(0, Math.ceil(scene.rail.scrollWidth - scene.viewport.clientWidth));
      scene.buffer = Math.round(clamp(window.innerHeight * 0.14, 96, 144));

      if (scene.travel <= 1) {
        reset(scene);
        return;
      }

      scene.element.style.height = `${scene.sticky.offsetHeight + scene.travel + scene.buffer * 2}px`;
    });

    requestRender();
  };

  const observer = new ResizeObserver(layout);
  let preloadObserver: IntersectionObserver | undefined;
  scenes.forEach(({ viewport, rail }) => {
    observer.observe(viewport);
    observer.observe(rail);
  });

  if ('IntersectionObserver' in window) {
    preloadObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const scene = scenes.find(({ element }) => element === entry.target);
        if (scene) preloadSceneImages(scene);
        preloadObserver?.unobserve(entry.target);
      });
    }, { rootMargin: '70% 0px' });
    scenes.forEach(({ element }) => preloadObserver?.observe(element));
  } else {
    scenes.forEach(preloadSceneImages);
  }

  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', layout, { passive: true });
  desktop.addEventListener('change', layout);
  reducedMotion.addEventListener('change', layout);
  document.fonts?.ready.then(layout).catch(() => undefined);
  layout();

  cleanupCurrent = () => {
    disposed = true;
    if (frame) window.cancelAnimationFrame(frame);
    observer.disconnect();
    preloadObserver?.disconnect();
    window.removeEventListener('scroll', requestRender);
    window.removeEventListener('resize', layout);
    desktop.removeEventListener('change', layout);
    reducedMotion.removeEventListener('change', layout);
    scenes.forEach(reset);
    activeElements = [];
    cleanupCurrent = undefined;
  };
}

if (typeof document !== 'undefined' && !lifecycleBound) {
  lifecycleBound = true;
  document.addEventListener('astro:page-load', () => initHorizontalRails());
  document.addEventListener('astro:before-preparation', () => cleanupCurrent?.());
}

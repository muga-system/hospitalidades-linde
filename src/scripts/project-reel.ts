type ProjectReel = {
  element: HTMLElement;
  stage: HTMLElement;
  panels: HTMLElement[];
};

let cleanupCurrent: (() => void) | undefined;
let activeElement: HTMLElement | undefined;
let lifecycleBound = false;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function initProjectReels() {
  const element = document.querySelector<HTMLElement>('[data-project-reel]');
  const stage = element?.querySelector<HTMLElement>('.solution-detail__photo-stage');
  const panels = element ? [...element.querySelectorAll<HTMLElement>('[data-reel-panel]')] : [];

  if (!element || !stage || panels.length < 2) {
    cleanupCurrent?.();
    return;
  }

  if (activeElement === element && cleanupCurrent) return;
  cleanupCurrent?.();
  activeElement = element;

  const reel: ProjectReel = { element, stage, panels };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let disposed = false;

  const render = () => {
    frame = 0;
    if (disposed) return;

    const viewportHeight = reel.stage.clientHeight;
    const scrollRange = Math.max(1, reel.element.offsetHeight - viewportHeight);
    const localProgress = clamp(-reel.element.getBoundingClientRect().top / scrollRange, 0, 1);
    const position = localProgress * (reel.panels.length - 1);
    const counterMotion = reducedMotion.matches ? 0 : 1;
    const mediaMotion = reducedMotion.matches ? 0 : 0.09;

    reel.panels.forEach((panel, index) => {
      const distance = index - position;
      const sceneDistance = clamp(distance, -1, 1);

      panel.style.setProperty('--reel-scene-y', `${sceneDistance * viewportHeight}px`);
      panel.style.setProperty('--reel-media-y', `${-sceneDistance * viewportHeight * mediaMotion}px`);
      panel.style.setProperty('--reel-content-y', `${-sceneDistance * viewportHeight * counterMotion}px`);
      panel.style.setProperty('--reel-content-opacity', '1');
    });
  };

  const requestRender = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', requestRender, { passive: true });
  reducedMotion.addEventListener('change', requestRender);
  render();

  cleanupCurrent = () => {
    disposed = true;
    if (frame) window.cancelAnimationFrame(frame);
    window.removeEventListener('scroll', requestRender);
    window.removeEventListener('resize', requestRender);
    reducedMotion.removeEventListener('change', requestRender);
    activeElement = undefined;
    cleanupCurrent = undefined;
  };
}

if (typeof document !== 'undefined' && !lifecycleBound) {
  lifecycleBound = true;
  document.addEventListener('astro:page-load', () => initProjectReels());
  document.addEventListener('astro:before-preparation', () => cleanupCurrent?.());
}

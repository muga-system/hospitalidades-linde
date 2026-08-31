let initialized = false;

export function initProjectExplorer() {
  if (initialized) return;
  const explorer = document.querySelector<HTMLElement>('[data-project-explorer]');
  if (!explorer) return;
  initialized = true;
  const filterPanel = explorer.querySelector<HTMLElement>('[data-filter-panel]');
  const filterToggle = explorer.querySelector<HTMLButtonElement>('[data-filter-toggle]');
  const viewToggles = [...explorer.querySelectorAll<HTMLAnchorElement>('[data-view-toggle]')];
  const filterButtons = [...explorer.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const cards = [...explorer.querySelectorAll<HTMLElement>('[data-project-card]')];
  const noResults = explorer.querySelector<HTMLElement>('[data-no-results]');
  let mapRequested = false;

  const loadMap = async () => {
    if (mapRequested) return;
    mapRequested = true;
    const { initProjectMap } = await import('./project-map');
    initProjectMap();
  };
  const setView = (view: 'map' | 'grid', replace = false) => {
    explorer.dataset.view = view;
    if (view === 'map') void loadMap();
    if (replace) {
      const url = new URL(window.location.href);
      if (view === 'grid') url.searchParams.set('view', 'grid'); else url.searchParams.delete('view');
      history.replaceState(null, '', url);
    }
  };
  const initialView = new URLSearchParams(window.location.search).get('view') === 'grid' ? 'grid' : 'map';
  setView(initialView);
  viewToggles.forEach((toggle) => toggle.addEventListener('click', (event) => {
    event.preventDefault();
    setView((toggle.dataset.viewToggle as 'map' | 'grid') ?? 'map', true);
  }));
  filterToggle?.addEventListener('click', () => {
    const opened = filterToggle.getAttribute('aria-expanded') === 'true';
    filterToggle.setAttribute('aria-expanded', String(!opened));
    if (filterPanel) filterPanel.hidden = opened;
  });
  filterButtons.forEach((button) => button.addEventListener('click', async () => {
    const filter = button.dataset.filter ?? 'all';
    filterButtons.forEach((target) => target.classList.toggle('is-active', target === button));
    let visible = 0;
    cards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.solutions?.split(' ').includes(filter);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    if (noResults) noResults.hidden = visible !== 0;
    const { filterProjectMarkers } = await import('./project-map');
    filterProjectMarkers(filter);
  }));
}

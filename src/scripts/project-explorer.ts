let initializedExplorer: HTMLElement | undefined;

export function initProjectExplorer() {
  const explorer = document.querySelector<HTMLElement>('[data-project-explorer]');
  if (!explorer || initializedExplorer === explorer) return;
  initializedExplorer = explorer;

  const filterPanel = explorer.querySelector<HTMLElement>('[data-filter-panel]');
  const filterToggle = explorer.querySelector<HTMLButtonElement>('[data-filter-toggle]');
  const filterButtons = [...explorer.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const cards = [...explorer.querySelectorAll<HTMLElement>('[data-project-card]')];
  const noResults = explorer.querySelector<HTMLElement>('[data-no-results]');

  const applyFilter = (filter: string) => {
    filterButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.filter === filter));
    let visible = 0;
    cards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.solutions?.split(' ').includes(filter);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    if (noResults) noResults.hidden = visible !== 0;
  };

  filterToggle?.addEventListener('click', () => {
    const opened = filterToggle.getAttribute('aria-expanded') === 'true';
    filterToggle.setAttribute('aria-expanded', String(!opened));
    if (filterPanel) filterPanel.hidden = opened;
  });
  filterButtons.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter ?? 'all')));
  applyFilter('all');
}

if (typeof document !== 'undefined') {
  document.addEventListener('astro:page-load', initProjectExplorer);
  document.addEventListener('astro:before-preparation', () => { initializedExplorer = undefined; });
}

import { Map, Marker, NavigationControl, Popup, setWorkerUrl } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

type MapProject = {
  slug: string;
  name: string;
  city: string;
  province: string;
  lat: number;
  lng: number;
  areaM2: number;
  status: string;
  solutionSlugs: string[];
};

let map: Map | undefined;
let markerEntries: { marker: Marker; project: MapProject }[] = [];

function getProjects() {
  const data = document.querySelector<HTMLScriptElement>('[data-map-projects]');
  if (!data?.textContent) return [] as MapProject[];
  try { return JSON.parse(data.textContent) as MapProject[]; } catch { return [] as MapProject[]; }
}

function popupContent(project: MapProject) {
  const element = document.createElement('div');
  element.innerHTML = `<p class="map-popup__eyebrow">${project.status} · demo</p><p class="map-popup__title">${project.name}</p><p class="map-popup__meta">${project.city}, ${project.province} · ${project.areaM2} m²</p><a class="map-popup__link" href="/proyectos/${project.slug}/">Ver proyecto ↗</a>`;
  return element;
}

export function initProjectMap() {
  const host = document.querySelector<HTMLElement>('[data-project-map]');
  const canvas = host?.querySelector<HTMLElement>('[data-map-canvas]');
  if (!host || !canvas || map) return;
  const projects = getProjects();
  if (!projects.length) return;
  try {
    setWorkerUrl(workerUrl);
    const initializedMap = new Map({
      container: canvas,
      center: [-71.46, -41.55],
      zoom: 6.25,
      maxZoom: 13,
      minZoom: 4.5,
      attributionControl: { compact: true },
      style: {
        version: 8,
        sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap contributors' } },
        layers: [{ id: 'osm', type: 'raster', source: 'osm', paint: { 'raster-saturation': -0.65, 'raster-brightness-min': 0.64, 'raster-brightness-max': 0.92 } }],
      },
    });
    map = initializedMap;
    initializedMap.addControl(new NavigationControl({ showCompass: false }), 'top-right');
    markerEntries = projects.map((project, index) => {
      const markerElement = document.createElement('button');
      markerElement.className = 'map-pin';
      markerElement.type = 'button';
      markerElement.title = `Abrir ${project.name}`;
      markerElement.setAttribute('aria-label', `Abrir ${project.name}`);
      markerElement.textContent = String(index + 1);
      const marker = new Marker({ element: markerElement, anchor: 'center' })
        .setLngLat([project.lng, project.lat])
        .setPopup(new Popup({ offset: 18, closeButton: true }).setDOMContent(popupContent(project)))
        .addTo(initializedMap);
      return { marker, project };
    });
    host.classList.add('is-loaded');
    window.dispatchEvent(new Event('linde:map-ready'));
  } catch {
    host.classList.remove('is-loaded');
  }
}

export function filterProjectMarkers(filter: string) {
  markerEntries.forEach(({ marker, project }) => {
    const visible = filter === 'all' || project.solutionSlugs.includes(filter);
    marker.getElement().style.display = visible ? '' : 'none';
  });
}

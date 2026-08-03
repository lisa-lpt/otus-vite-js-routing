import { renderRouteContent } from './router/router';

export function renderApp(rootEl: HTMLElement) {
  rootEl.innerHTML = `
    <header id="header">ШАПКА</header>
    <section id="center"></section>
  `;

  const dynamicEl = document.querySelector<HTMLElement>('#center');

  window.addEventListener('popstate', () => renderRouteContent(dynamicEl!));
  renderRouteContent(dynamicEl!);
}

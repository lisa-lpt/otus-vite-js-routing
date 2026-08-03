import { renderLoginPage } from '../pages/login.ts';
import { render404Page } from '../pages/404.ts';
import { getLocationPath } from '../util/route.ts';
import { renderProfileFormPage } from '../pages/profileForm.ts';
import { renderProfilePage } from '../pages/profile.ts';

const basePath = __BASE_PATH__;

export function renderRouteContent(parentEl: HTMLElement) {
  const path = getLocationPath();
  if (path === '/') {
    return renderLoginPage(parentEl);
  }
  if (path === '/profileForm') {
    return renderProfileFormPage(parentEl);
  }
  if (path === '/profile') {
    return renderProfilePage(parentEl);
  }
  return render404Page(parentEl);
}

export const navigateTo = (route: string, el: HTMLElement) => {
  history.pushState(null, '', basePath + route);
  renderRouteContent(el);
};

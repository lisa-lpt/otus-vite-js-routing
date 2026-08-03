const basePath = __BASE_PATH__;

export const createRoute = (route = '') => {
  return basePath + route;
};

export function getLocationPath() {
  return window.location.pathname.replace(basePath, '/');
}

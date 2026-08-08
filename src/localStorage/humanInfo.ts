import type { HumanInfo } from '../store';

const HUMAN_INFO_KEY = 'humanInfo';

export const getLocalStorageHumanInfo = (): HumanInfo | null => {
  try {
    const data = localStorage.getItem(HUMAN_INFO_KEY);
    if (data) return JSON.parse(data);
  } catch {
    // no-op
  }
  return null;
};

export const setLocalStorageHumanInfo = (data: HumanInfo | null) => {
  if (data) {
    localStorage.setItem(HUMAN_INFO_KEY, JSON.stringify(data));
    return;
  }
  localStorage.removeItem(HUMAN_INFO_KEY);
};

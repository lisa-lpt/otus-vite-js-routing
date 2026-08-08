import type { PetInfo } from '../store';

const PET_INFO_KEY = 'petInfo';

export const getLocalStoragePetInfo = (): PetInfo | null => {
  try {
    const data = localStorage.getItem(PET_INFO_KEY);
    if (data) return JSON.parse(data);
  } catch {
    // no-op
  }
  return null;
};

export const setLocalStoragePetInfo = (data: PetInfo | null) => {
  if (data) {
    localStorage.setItem(PET_INFO_KEY, JSON.stringify(data));
    return;
  }
  localStorage.removeItem(PET_INFO_KEY);
};

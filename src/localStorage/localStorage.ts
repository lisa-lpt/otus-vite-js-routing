// export const ACCOUNT_DETAILS_KEY = 'accountDetails';

import { store } from '../store';

export function getLocalStorage(AccountDetailsKey: any) {
  const list = localStorage.getItem(AccountDetailsKey);
  if (!list) return [];
  return JSON.parse(list);
}

export function setLocalStorage(
  AccountDetailsKey: string,
  accountDetailsArr: any
) {
  if (!accountDetailsArr) return;
  localStorage.setItem(AccountDetailsKey, JSON.stringify(accountDetailsArr));
}

export function setLocalStorageStoreHuman() {
  const localStorageHuman = getLocalStorage('human');
  const humanDetails = store.getState().humanInfo;
  const humanDetailsArray = Object.values(humanDetails);
  localStorageHuman.push(humanDetailsArray);
  setLocalStorage('human', humanDetailsArray);
}

export function setLocalStorageStorePet() {
  const localStoragePet = getLocalStorage('pet');
  const petDetails = store.getState().petInfo;
  const petDetailsArray = Object.values(petDetails);
  localStoragePet.push(petDetailsArray);
  setLocalStorage('pet', petDetailsArray);
}

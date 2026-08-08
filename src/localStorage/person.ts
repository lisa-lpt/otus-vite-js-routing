import type { Person } from '../store';

const PERSON_KEY = 'person';

export const getLocalStoragePerson = (): Person | null => {
  try {
    const person = localStorage.getItem(PERSON_KEY);
    if (person === 'human' || person === 'pet') {
      return person;
    }
  } catch {
    // no-op
  }
  return null;
};

export const setLocalStoragePerson = (data: Person | null) => {
  if (data) {
    localStorage.setItem(PERSON_KEY, data);
    return;
  }
  localStorage.removeItem(PERSON_KEY);
};

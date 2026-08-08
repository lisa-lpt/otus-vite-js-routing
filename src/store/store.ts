import {
  getLocalStorageHumanInfo,
  getLocalStoragePerson,
  getLocalStoragePetInfo,
  setLocalStorageHumanInfo,
  setLocalStoragePerson,
  setLocalStoragePetInfo,
} from '../localStorage';
import { configureStore, type Reducer } from './configureStore';

export interface PetInfo {
  petType: string;
  petName: string;
  petSize: string;
  petColor: string;
  petAge: string;
}

export interface HumanInfo {
  name: string;
  surname: string;
  age: string;
  hobby: string;
  email: string;
}

export type Person = 'human' | 'pet';

type AppAction =
  | {
      type: 'addInfoToHuman';
      payload: Partial<HumanInfo>;
    }
  | {
      type: 'addInfoToPet';
      payload: Partial<PetInfo>;
    }
  | { type: 'setPerson'; payload: Person }
  | { type: 'clearState' };

type AppState = {
  person: Person;
  humanInfo: HumanInfo;
  petInfo: PetInfo;
};

const defaultState: AppState = {
  person: 'human',
  humanInfo: {
    name: 'John',
    surname: 'Doe',
    age: '37',
    hobby: 'skiing',
    email: 'aaa@aaa.com',
  },
  petInfo: {
    petType: 'cat',
    petName: 'Mr. Orange',
    petSize: 'small',
    petColor: 'orange',
    petAge: '2',
  },
};

export const reducer: Reducer<AppState, AppAction> = (state, action) => {
  switch (action.type) {
    case 'addInfoToHuman': {
      const newState = {
        ...state,
        humanInfo: {
          ...state.humanInfo,
          ...action.payload,
        },
      };
      setLocalStorageHumanInfo(newState.humanInfo);
      return newState;
    }
    case 'addInfoToPet': {
      const newState = {
        ...state,
        petInfo: {
          ...state.petInfo,
          ...action.payload,
        },
      };
      setLocalStoragePetInfo(newState.petInfo);
      return newState;
    }
    case 'setPerson': {
      const newState = {
        ...state,
        person: action.payload,
      };
      setLocalStoragePerson(newState.person);
      return newState;
    }
    case 'clearState': {
      setLocalStoragePerson(null);
      setLocalStorageHumanInfo(null);
      setLocalStoragePetInfo(null);
      return defaultState;
    }
    default:
      return state;
  }
};

defaultState.person = getLocalStoragePerson() || defaultState.person;
defaultState.humanInfo = getLocalStorageHumanInfo() || defaultState.humanInfo;
defaultState.petInfo = getLocalStoragePetInfo() || defaultState.petInfo;

export const store = configureStore(reducer, defaultState);

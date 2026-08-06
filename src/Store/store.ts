import { configureStore, type Reducer } from './configureStore';

interface PetInfo {
  petType: string;
  petName: string;
  petSize: string;
  petColor: string;
  petAge: string;
}

interface HumanInfo {
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
  | { type: 'setPerson'; payload: Person };

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
    case 'addInfoToHuman':
      return {
        ...state,
        humanInfo: {
          ...state.humanInfo,
          ...action.payload,
        },
      };
    case 'addInfoToPet':
      return {
        ...state,
        petInfo: {
          ...state.petInfo,
          ...action.payload,
        },
      };
    case 'setPerson':
      return {
        ...state,
        person: action.payload,
      };
    default:
      return state;
  }
};

export const store = configureStore(reducer, defaultState);

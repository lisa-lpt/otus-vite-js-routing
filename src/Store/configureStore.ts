type Action =
  | { type: 'human'; payloadName: string; payloadSurname: string }
  | { type: 'pet'; payloadPetType: string; payloadPetName: string };

type State = {
  person: string;
  name: string;
  surname: string;
  petType: string;
  petName: string;
};

export type Store<State = any, Action = { type: string }> = {
  getState(): State;
  dispatch(action: Action): any;
  subscribe(cb: () => void): () => void;
};

export type Reducer<State, Action> = (
  state: State | undefined,
  action: Action
) => State;

export type ConfigureStore<State, Action> = (
  reducer: Reducer<State, Action>,
  initialState?: State | undefined
) => Store<State, Action>;

export const reducer: Reducer<State, Action> = (
  state = {
    person: 'human',
    name: 'John',
    surname: 'Doe',
    petType: 'cat',
    petName: 'Mr. Orange',
  },
  action
) => {
  switch (action.type) {
    case 'human':
      return {
        ...state,
        person: (state.person = 'human'),
        name: (state.name = action.payloadName),
        surname: (state.surname = action.payloadSurname),
      };
    case 'pet':
      return {
        ...state,
        person: (state.person = 'pet'),
        petType: (state.petType = action.payloadPetType),
        petName: (state.petName = action.payloadPetName),
      };
    default:
      return state;
  }
};

export const configureStore: ConfigureStore<State, Action> = (
  reducer: Reducer<State, Action>,
  initialState?: any
) => {
  let state = initialState;
  const cbs: Set<() => void> = new Set();
  return {
    getState() {
      return state;
    },
    dispatch(action: Action) {
      state = reducer(state, action);
      cbs.forEach((cb) => cb());
    },
    subscribe(cb: () => void) {
      cbs.add(cb);
      return () => cbs.delete(cb);
    },
  };
};

export const store = configureStore(reducer, {
  person: 'human',
  name: 'John',
  surname: 'Doe',
  petType: 'cat',
  petName: 'Mr. Orange',
});

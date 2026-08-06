export type Store<S = object, A = { type: string }> = {
  getState(): S;
  dispatch(action: A): any;
  subscribe(cb: () => void): () => void;
};

export type Reducer<S, A> = (state: S, action: A) => S;

export const configureStore = <S, A>(
  reducer: Reducer<S, A>,
  initialState: S
) => {
  let state = initialState;
  const cbs: Set<() => void> = new Set();
  return {
    getState() {
      return state;
    },
    dispatch(action: A) {
      state = reducer(state, action);
      cbs.forEach((cb) => cb());
    },
    subscribe(cb: () => void) {
      cbs.add(cb);
      return () => cbs.delete(cb);
    },
  };
};

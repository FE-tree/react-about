import { useState } from 'react';

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    /* const nextState = reducer(state, action);
    setState(nextState); */
    setState((s) => reducer(s, action));
  }

  return [state, dispatch];
}

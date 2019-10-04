import { createSelector } from 'reselect';
import deep from 'deep-get-set';

export const getInitialState = createSelector(
  state => deep(state, 'initialState'),
  initialState => initialState
);

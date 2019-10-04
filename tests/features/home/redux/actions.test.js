import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../../../src/features/home/redux/actions';
import * as types from '../../../../src/features/home/redux/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({trip: {}});

describe('Counter Actions', () => {
  it('should create an action to decrease the count', () => {
    const expectedAction = { type: types.COUNTER_DOWN, name: 'travelers' };
    expect(store.dispatch(actions.counterDown('travelers'))).toEqual(expectedAction);
  });

  it('should create an action to increase the count', () => {
    const expectedAction = { type: types.COUNTER_UP, name: 'travelers' };
    expect(store.dispatch(actions.counterUp('travelers'))).toEqual(expectedAction);
  });
});

describe('Input Actions', () => {
  it('should create an action that sends new input value', () => {
    const expectedAction = { type: types.UPDATE_FIELD, name: 'country', update: 'Germany' };
    expect(store.dispatch(actions.updateField({target: {name: 'country', value: 'Germany'}}))).toEqual(expectedAction);
  });
  it('should create an action that sends new list value', () => {
    const expectedAction = { type: types.UPDATE_LIST, index: 7, name: 'destinations', update: 'Germany' };
    expect(store.dispatch(actions.updateList({target: {id: 'list7', name: 'destinations', value: 'Germany'}}))).toEqual(expectedAction);
  });
  it('should create an action that adds new list item', () => {
    const expectedAction = { type: types.ADD_LIST_ITEM, name: 'destinations' };
    expect(store.dispatch(actions.addListItem('destinations'))).toEqual(expectedAction);
  });
  it('should create an action that remove selected list item', () => {
    const expectedAction = { type: types.REMOVE_LIST_ITEM, name: 'destinations', index: 5 };
    expect(store.dispatch(actions.removeListItem('destinations', 'destinations5'))).toEqual(expectedAction);
  });
});

describe('Calc Actions', () => {
  it('should create an action that calculates duration', () => {
    const expectedAction = { type: types.CALC_DURATION };
    expect(store.dispatch(actions.calcDuration())).toEqual(expectedAction);
  });
  it('should create an action that calculates budget', () => {
    const expectedAction = { type: types.CALC_BUDGET };
    expect(store.dispatch(actions.calcBudget())).toEqual(expectedAction);
  });
})

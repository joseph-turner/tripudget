import reducer from '../../../../src/features/home/redux/reducer';
import * as types from '../../../../src/features/home/redux/constants';
import initialState from '../../../../src/features/home/redux/initialState';

describe('Trip Planner Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle COUNTER_UP', () => {
    expect(reducer({ travelers: 0 }, { type: types.COUNTER_UP, name: 'travelers' })).toEqual({ travelers: 1 });
  });

  it('should handle COUNTER_DOWN', () => {
    expect(reducer({ travelers: 1 }, { type: types.COUNTER_DOWN, name: 'travelers' })).toEqual({ travelers: 0 });
    expect(reducer({ travelers: 0 }, { type: types.COUNTER_DOWN, name: 'travelers' })).toEqual({ travelers: 0 });
  });

  it('should handle UPDATE_FIELD', () => {
    const state = { destinations: { start: '' } };
    const action = { type: types.UPDATE_FIELD, name: 'destinations.start', update: 'Berlin' };
    const expected = { destinations: { start: 'Berlin' }};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle UPDATE_LIST', () => {
    const state = { destinations: ['Paris', 'Annecy', 'Interlaken'] };
    const action = { type: types.UPDATE_LIST, name: 'destinations', index: 3, update: 'Berlin' };
    const expected = { destinations: ['Paris', 'Annecy', 'Interlaken', 'Berlin']};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle ADD_LIST_ITEM', () => {
    const state = { destinations: ['Paris', 'Annecy', 'Interlaken'] };
    const action = { type: types.ADD_LIST_ITEM, name: 'destinations' };
    const expected = { destinations: ['Paris', 'Annecy', 'Interlaken', '']};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle REMOVE_LIST_ITEM', () => {
    const state = { destinations: ['Paris', 'Annecy', 'Interlaken', 'Berlin'] };
    const action = { type: types.REMOVE_LIST_ITEM, name: 'destinations', index: 3 };
    const expected = { destinations: ['Paris', 'Annecy', 'Interlaken']};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle CALC_DURATION', () => {
    const state = { startDate: '2019-05-21', endDate: '2019-05-23', duration: 0 };
    const action = { type: types.CALC_DURATION };
    const expected = { startDate: '2019-05-21', endDate: '2019-05-23', duration: 2 };
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle CALC_BUDGET', () => {
    const state = Object.assign(initialState, {duration: 16});
    const action = { type: types.CALC_BUDGET };
    const expected = {
      name: 'Europia',
      adults: 2,
      children: 0,
      travelers: {
        adults: [
          'Joseph',
          'Devin'
        ],
        children: [
          'Sage'
        ]
      },
      destinations: [
        'Paris',
        'Berlin',
        'Bern'
      ],
      duration: 16,
      startDate: '2019-05-06',
      endDate: '2019-05-22',
      budget: {
        airfare: 500,
        lodging: 50,
        food: 50,
        activities: 50,
        car: 35,
        mpg: 30,
        fuelPrice: 5,
        miles: 2500,
        extraMiles: 25,
        totalAirfare: 1000,
        totalLodging: 800,
        totalFood: 800,
        totalActivities: 800,
        totalCarRental: 560,
        totalMiles: 2900,
        totalFuelCost: 483.33,
        total: 4443.33
      },
      totalTravelers: 2
    };
    expect(reducer(state, action)).toEqual(expected);
  });
});

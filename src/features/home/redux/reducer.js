import moment from 'moment';
import deep from 'deep-get-set';

import initialState from './initialState';
import { UPDATE_FIELD, UPDATE_LIST, ADD_LIST_ITEM, REMOVE_LIST_ITEM, CALC_DURATION, CALC_BUDGET, COUNTER_DOWN, COUNTER_UP } from './constants';

const reducers = [
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    case COUNTER_DOWN:
      newState = {
        ...state,
        [action.name]: state[action.name] > 0 ? state[action.name] - 1 : state[action.name]
      }
      break;

    case COUNTER_UP:
      newState = {
        ...state,
        [action.name]: state[action.name] + 1
      }
      break;

    case UPDATE_FIELD:
      newState = {...state};
      deep(newState, action.name, action.update);
      break;

    case UPDATE_LIST:
      newState = {...state};
      deep(newState, action.name)[action.index] = action.update;
      break;

    case ADD_LIST_ITEM:
      newState = {...state};
      deep(newState, action.name).push('');
      break;

    case REMOVE_LIST_ITEM:
      newState = {...state};
      deep(newState, action.name).splice(action.index, 1);
      break;

    case CALC_DURATION:
      const { startDate, endDate } = state;

      newState = {
        ...state,
        duration: moment(endDate).diff(moment(startDate), 'days')
      }
      break;

    case CALC_BUDGET:
      const { adults, children, duration, budget } = state;
      const { airfare, lodging, food, activities, car, mpg, fuelPrice, miles, extraMiles } = budget;
      const totalTravelers = adults + children;
      const totalAirfare = airfare * totalTravelers;
      const totalLodging = lodging * duration;
      const totalFood = food * duration;
      const totalActivities = activities * duration;
      const totalCarRental = car * duration;
      const totalMiles = Number(miles) + (duration * extraMiles);
      const totalFuelCost = Math.round((totalMiles / mpg * fuelPrice) * 100) / 100;

      newState = {
        ...state,
        totalTravelers,
        budget: {
          ...state.budget,
          totalAirfare,
          totalLodging,
          totalFood,
          totalActivities,
          totalCarRental,
          totalMiles,
          totalFuelCost,
          total: totalAirfare + totalLodging + totalFood + totalActivities + totalCarRental + totalFuelCost
        }
      }

      break;

    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}

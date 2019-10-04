import { UPDATE_FIELD, UPDATE_LIST, ADD_LIST_ITEM, REMOVE_LIST_ITEM, CALC_BUDGET, CALC_DURATION, COUNTER_DOWN, COUNTER_UP } from "./constants";

export const counterDown = (name) => (
  (dispatch) => {
    const action = dispatch({
      type: COUNTER_DOWN,
      name
    });
    dispatch(calcBudget());

    return action;
  }
)

export const counterUp = (name) => (
  (dispatch) => {
    const action = dispatch({
      type: COUNTER_UP,
      name
    });
    dispatch(calcBudget());

    return action;
  }
)

export const updateField = (event) => (
  (dispatch) => {
    const {name, value} = event.target;
    const action = dispatch({
      type: UPDATE_FIELD,
      name,
      update: value
    });
    dispatch(calcDuration());

    return action;
  }
);

export const updateList = (event) => (
  (dispatch) => {
    const {name, value, id} = event.target;
    const index = Number(id.match(/\d+/)[0]);
    const action = dispatch({
      type: UPDATE_LIST,
      index,
      name,
      update: value
    });
    dispatch(calcDuration());

    return action;
  }
);

export const addListItem = (name) => (
  (dispatch) => (
    dispatch({
      type: ADD_LIST_ITEM,
      name
    })
  )
);

export const removeListItem = (name, id) => {
  const index = Number(id.match(/\d+/)[0]);
  return (dispatch) => (
    dispatch({
      type: REMOVE_LIST_ITEM,
      name,
      index
    })
  )
};

export const calcDuration = () => (
  (dispatch) => {
    const action = dispatch({
      type: CALC_DURATION
    });
    dispatch(calcBudget());

    return action;
  }
);

export const calcBudget = () => (
  (dispatch) => (
    dispatch({
      type: CALC_BUDGET
    })
  )
);

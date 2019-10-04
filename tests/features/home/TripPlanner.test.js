import React from 'react';
import { shallow } from 'enzyme';
import { TripPlanner } from '../../../src/features/home/TripPlanner';
import initialState from '../../../src/features/home/redux/initialState';

function noop() {};

describe('home/TripPlanner', () => {
  it('renders node with correct class name', () => {
    const props = {
      trip: {...initialState},
      actions: {
        onClickMinus: noop,
        onClickPlus: noop
      },
    };
    const renderedComponent = shallow(<TripPlanner {...props} />);

    expect(renderedComponent.find('.trip').length).toBe(1);
  });
});

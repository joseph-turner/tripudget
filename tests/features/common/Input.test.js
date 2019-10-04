import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const props = { name: 'input' };
  const renderedComponent = shallow(<Input {...props} />);
  expect(renderedComponent.find('.input').length).toBe(1);
});

import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../../src/features/common/Button';

function noop() {};

describe('common/Button', () => {
  it('renders node with correct class name', () => {
    const props = {
      onClick: noop
    };
    const renderedComponent = shallow(
      <Button {...props} />
    );

    expect(
      renderedComponent.find('.btn').length
    ).toBe(1);
  });
});

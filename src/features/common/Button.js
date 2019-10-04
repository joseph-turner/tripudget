import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { children, className, onClick } = this.props;

    return (
      <button
        className={`btn ${className}`}
        onClick={onClick}
        {...this.props}>
        {children}
      </button>
    );
  }
}

export default Button;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutosizeInput from 'react-input-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from './Button';

export class Counter extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  render() {
    const { counterDown, counterUp, label, name, value = 1 } = this.props;

    function onClickMinus(e) {
      if (counterDown) {
        counterDown(name);
      }
    }

    function onClickPlus(e) {
      if (counterUp) {
        counterUp(name);
      }
    }

    return (
      <div className="counter">
        <p className="counter__label">{label}</p>
        <button className="btn-minus" onClick={onClickMinus}>Less</button>
        <span>{value}</span>
        <button className="btn-add" onClick={onClickPlus}>More</button>
      </div>
    );
  }
}

export class InputList extends Component {
  static propTypes = {};

  render() {
    const { addListItem, className, label, list, name, updateList, removeListItem, ...rest } = this.props;

    function onClickAdd(e) {
      if (addListItem) {
        addListItem(e.target.name);
      }
    }

    function onClickRemove(e) {
      const name = e.target.name;
      const id = e.target.id
      if (removeListItem) {
        removeListItem(name, id);
      }
    }

    const addButton = <Button className="btn--icon" key={name} name={name} onClick={onClickAdd}><FontAwesomeIcon icon="plus-square" /></Button>;
    function removeButton(ind) {
      return <Button className="btn--icon" key={ind} name={name} id={name + ind} onClick={onClickRemove}><FontAwesomeIcon icon="minus-square" /></Button>;
    };

    const items = list.map((li, ind) => {

      // If it's the last in the list show add/remove buttons
      // const suffix = list.length === ind + 1 ? li ? (removeButton(ind), addButton) : addButton : null;

      function suffix() {
        if (list.length === ind + 1) {
          if (list.length > 1) {
            return [removeButton(ind), addButton];
          }
          return addButton;
        }
        return removeButton(ind)
      }

      return (
        <Input
          id={name + ind}
          name={name}
          className={"input--" + name}
          onChange={updateList}
          value={li}
          key={ind}
          suffix={suffix()}
          {...rest}
        />
      );
    });

    return (
      <div className={`input-list ${className}`} id={`${name}List`}>
        <p className="input-list__label">{label}</p>
        {items}
      </div>
    );
  }
}

function safeProps(props) {
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const element = props[key];
      if (typeof element === 'function') {
        delete props[key];
      }
    }
  }
  return props;
}

export default class Input extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    prefix: PropTypes.string,
    readOnly: PropTypes.bool,
    spacer: PropTypes.bool,
    suffix: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    type: PropTypes.oneOf(['date', 'email', 'number', 'password', 'search', 'tel', 'text', 'url']),
    updateField: PropTypes.func,
  };

  render() {
    const { className, disabled = false, id, name, label, prefix, readOnly = false, suffix, type = 'text', updateField, value, ...rest } = this.props;

    const onChange = rest.onChange || updateField;

    return (
      <div className={`input ${className}`} {...safeProps(rest)}>
        {label && <label className="input__label">{label}</label>}
        {prefix && <span className="input__prefix">{prefix}</span>}
        <AutosizeInput
          id={id}
          name={name}
          disabled={disabled}
          className="input__field"
          type={type}
          defaultValue={value}
          onChange={onChange}
          readOnly={readOnly}
        />
        {suffix && <span className="input__suffix">{suffix}</span>}
      </div>
    );
  }
}

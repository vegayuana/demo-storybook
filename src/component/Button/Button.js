import React from 'react';
import propTypes from 'prop-types';
import './button.css';

export default function Button(props) {
  return (
    <button className={props.variant} onClick={props.handleClick} disabled={props.disabled}>{props.label}</button>
  )
}
Button.propTypes={
  variant: propTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  disabled: propTypes.bool
}


import React from 'react';
import PropTypes from 'prop-types';

function Input({
  placeHolder,
  value,
  onChangeHandler,
  type,
  label,
  required,
  className,
  ...props
}) {
  return (
    <div className={`${className ? className : 'Input-Container'}`}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChangeHandler}
        required={required ? true : false}
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChangeHandler: PropTypes.func,
  required: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  type: '',
  value: '',
  onChangeHandler: () => {},
  className: '',
  placeHolder: '',
  required: false,
};

export default Input;

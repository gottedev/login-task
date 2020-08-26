import React from "react";

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
    <div className={`${className ? className : "Input-Container"}`}>
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

export default Input;

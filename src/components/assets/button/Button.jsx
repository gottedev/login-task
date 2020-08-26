import React from "react";

function Button({ text, onClickHandler, type, ...props }) {
  return (
    <button type={type} onClick={onClickHandler} {...props}>
      {text}
    </button>
  );
}

export default Button;

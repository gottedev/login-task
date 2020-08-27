import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, onClickHandler, type, ...props }) {
  return (
    <button type={type} onClick={onClickHandler} {...props}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClickHandler: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  type: '',
  onClickHandler: () => {},
};

export default Button;

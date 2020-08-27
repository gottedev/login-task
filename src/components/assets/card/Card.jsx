import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ className, children, ...props }) => {
  return (
    <div className={className ? className : 'Card-Container'} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Card.defaultProps = {
  className: '',
};

export default Card;

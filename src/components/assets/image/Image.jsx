/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt, className, ...props }) {
  return (
    <div className={`${className || 'Image-Container'}`}>
      <img src={src} alt={alt} {...props} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  src: '',
  alt: '',
};

export default Image;

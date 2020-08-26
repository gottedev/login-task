import React from "react";

function Image({ src, alt, className, ...props }) {
  return (
    <div className={`${className ? className : "Image-Container"}`}>
      <img src={src} alt={alt} {...props} />
    </div>
  );
}

export default Image;

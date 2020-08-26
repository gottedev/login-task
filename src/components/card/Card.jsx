import React from "react";
import "./card.scss";

function Card({ className, children, ...props }) {
  return (
    <div className={className ? className : "Card-Container"} {...props}>
      {children}
    </div>
  );
}

export default Card;

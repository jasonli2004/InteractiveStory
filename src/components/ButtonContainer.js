import React from "react";
import "./ButtonsContainer.css";

const ButtonsContainer = ({ onLeftClick, onRightClick }) => {
  return (
    <div className="button-container">
      <button className="left-button" onClick={onLeftClick}>
        &#8592;
      </button>
      <button className="right-button" onClick={onRightClick}>
        &#8594;
      </button>
    </div>
  );
};

export default ButtonsContainer;

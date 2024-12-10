import React from "react";
import "./ButtonsContainer.css";

const StartButton = ({ onLeftClick, onRightClick }) => {
  return (
    <div className="button-container">
      <button className="left-button" onClick={onLeftClick}>
        Start
      </button>
      <button className="right-button" onClick={onRightClick}>
        Start
      </button>
    </div>
  );
};

export default StartButton;

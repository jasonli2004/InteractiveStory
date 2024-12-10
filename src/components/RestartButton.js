import React from "react";
import "./ButtonsContainer.css";

const RestartButton = ({ onLeftClick, onRightClick }) => {
  return (
    <div className="button-container">
      <button className="left-button" onClick={onLeftClick}>
        Restart
      </button>
      <button className="right-button" onClick={onRightClick}>
        Restart
      </button>
    </div>
  );
};

export default RestartButton;

import React, { useEffect, useState } from "react";
import "./Ladder.css";

const Ladder = ({ moveUpSignal, fallSignal }) => {
  const totalSteps = 12; // Total number of steps in the ladder
  const rungHeight = 8; // Height of each rung in percentage
  const [currentStep, setCurrentStep] = useState(0); // Tracks the person's position
  const [isFalling, setIsFalling] = useState(false); // Tracks whether the person is falling

  useEffect(() => {
    // Trigger movement when the moveUpSignal changes
    if (moveUpSignal > 0) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1)); // Move up one step
    }
  }, [moveUpSignal]);

  useEffect(() => {
    // Trigger falling when the fallSignal changes
    if (fallSignal > 0) {
      setIsFalling(true); // Start falling
    }
  }, [fallSignal]);

  return (
    <div className="ladder">
      <div className="vertical-bar"></div>
      <div className="steps-container">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="ladder-rung"></div>
        ))}
        <img
          src="/assets/images/person.png" // Replace with your person image path
          alt="Person"
          className={`person ${isFalling ? "falling" : ""}`} // Add falling class if triggered
          style={{
            bottom: `${currentStep * rungHeight}%`, // Position based on current step
          }}
        />
      </div>
      <div className="vertical-bar"></div>
    </div>
  );
};

export default Ladder;

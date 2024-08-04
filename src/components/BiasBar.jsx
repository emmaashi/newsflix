import React from "react";
import "../styles/results.css";

const BiasBar = ({ bias }) => {
  const circlePosition = `calc(${bias}% - 10px)`;

  return (
    <div className="bias-bar-container">
      <div className="bias-bar">
        <div className="bias-fill" style={{ width: `${bias}%` }} />
        <div className="bias-circle" style={{ left: circlePosition }} />
      </div>
      <br></br>
      <div className="bias-labels">
        <span className="bias-label">Conservative</span>
        <span className="bias-label">Liberal</span>
      </div>
    </div>
  );
};

export default BiasBar;

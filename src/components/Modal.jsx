import React from 'react';
import "../styles/home.css";

function Modal({ isVisible, onClose, numArticles, selectedTopic }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="center-box">
      <div className="animated-border-box-glow">
        <div className="animated-border-box">
          <h5>{numArticles} articles selected</h5>
          <p>Generate kid-friendly article about {selectedTopic}?</p>
          <div className="button-container">
            <button className="button button-generate">Generate</button>
            <button className="button button-cancel" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
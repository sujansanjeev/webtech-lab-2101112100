import React from 'react';
import Car1 from '../img/Car1.jpg';
import './ModelX.css'; // Import a CSS file for styling

function ModelX() {
  return (
    <div className="model-s-container">
      <img src={Car1} alt="Model x" />
      <div className="model-s-details">
        <div className="details-content">
          <h2>Model x</h2>
          <p>
            The Model x is a luxury electric sedan produced by Tesla. It offers
            impressive performance, long-range electric driving, and advanced
            features. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModelX;

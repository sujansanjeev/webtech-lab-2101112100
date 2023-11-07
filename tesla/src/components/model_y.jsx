import React from 'react';
import Car2 from '../img/Car2.jpg';
import './ModelY.css'; // Import a CSS file for styling


function ModelY() {
    return (
      <div className="model-y-container">
        <img src={Car2} alt="Model Y" />
        <div className="model-y-details">
          <div className="details-content">
            <h2>Model Y</h2>
            <p>
              The Model Y is a luxury electric SUV produced by Tesla. It offers
              impressive performance, compact size, long-range electric driving,
              and advanced features. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModelY;
  
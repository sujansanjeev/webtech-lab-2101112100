import React from 'react';
import Car4 from '../img/Car4.jpg';
import './Model3.css'; // Import a CSS file for styling
import Nav from './Nav'; // Import the Nav component

function Model3() {
  return (
    <div>
      <Nav /> 
      <div className="model-3-container">
        <img src={Car4} alt="Model 3" />
        <div className="model-3-details">
          <div className="details-content">
            <h2>Model 3</h2>
            <p>
              The Model 3 is a compact electric sedan produced by Tesla. It offers
              a balance of performance, efficiency, and modern features. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model3;
import React from 'react';
import Car3 from '../img/Car3.jpg';
import Nav from './Nav';
import './ModelS.css'; // Import a CSS file for styling

function ModelS() {
    return (
     <div>
    <Nav />
      <div className="model-s-container">
        <img src={Car3} alt="Model Y" />
        <div className="model-s-details">
          <div className="details-content">
            <h2>Model S</h2>
            <p>
              The Model S is a luxury electric SUV produced by Tesla. It offers
              impressive performance, spacious interior, long-range electric driving,
              and advanced features. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default ModelS;

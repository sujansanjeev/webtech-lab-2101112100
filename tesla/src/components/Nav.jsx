import React, { useState } from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom';

function Nav() {
  
  return (
    <>
      <nav>
        <div id="NavContentWrapper">
          <div id="TopLogo">
            <img src={Logo} alt="Logo" />
          </div>
                <ul id="Models">
                  <li><Link to="/model-s">MODEL S</Link></li>
                  <li><Link to="/model-3">MODEL 3</Link></li>
                  <li><Link to="/model-x">MODEL X</Link></li>
                  <li><Link to="/model-y">MODEL Y</Link></li>
                </ul>
          <ul id="Others">
            <li>SHOP</li>
            <li>TESLA ACCOUNT</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav

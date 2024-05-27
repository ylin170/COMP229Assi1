// Student Name: Yangying Lin
// Student ID: 300992124
// Date: 2024-05-26

import React from 'react';
import { Link } from 'react-router-dom';
import webLogo from '../WebLogo.png';

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <h1>My Portfolio</h1>
      <nav>
        <img src={webLogo} alt="webLogo" style={{ width: '70px', height: '100px', borderRadius: '50%' }} />
        <Link to="/Home">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/project">Project</Link>| <Link to="/service">Service</Link>| <Link to="/contact">Contact</Link>
        
      </nav>
      <hr />
    </div>
  );
}

export default NavigationBar;

import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">
        <img src='/image/welcome.jpg' alt="welcome" style={{ width: '100%', height: 'auto' }} />
      <h2>Welcome to My Portfolio</h2>
      <p>
      Hello! I'm Yangying Lin, a passionate Software Engineering Technician student dedicated to developing innovative and efficient solutions. 
      <br />
      My portfolio showcases a range of projects and services that reflect my skills in web development, mobile app development, and programming.
      <br />
        I am committed to continuous learning and strive to stay updated with the latest technologies to provide top-notch solutions for any challenge. 
      <br />
        Thank you for visiting, and I look forward to connecting with you!
      </p>
      <Link to="/about">Learn more about me</Link>
      
    </div>
  );
};

export default Home;


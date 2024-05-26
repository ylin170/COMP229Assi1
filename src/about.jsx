

    import React from 'react';
    

    const About = () => {
      return (
        <div className="about">
          <h1>About Me</h1>
          <img src='/image/photoY.jpg' alt="photo1" style={{ width: '150px', height: '200px', borderRadius: '50%' }} />
          <p>My name is Yangying Lin. I am a Software engineering technican student.</p>
          <p>You can download my resume <a href="/ResumeYyl.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
          
        </div>
      );
    };
    
    export default About;

     
import React from 'react';
import './App.css'; 

  const Services = () => {
       return (
         <div className="services">
           <h1>Services</h1>
           <ul className="services-list">
             <li>
               <div className="service-item">
                 <img src='/image/webDevelopment.jpg' alt="webDevelopment" />
                 <span>Web Development</span>
               </div>
             </li>
             <li>
               <div className="service-item">
                 <img src='/image/appDevelopment.jpg' alt="appDevelopment" />
                 <span>Mobile App Development</span>
               </div>
             </li>
             <li>
               <div className="service-item">
                 <img src='/image/programming.jpg' alt="programming" />
                 <span>Programming</span>
               </div>
             </li>
           </ul>
         </div>
       );
  };
     
export default Services;
    
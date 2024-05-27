// Student Name: Yangying Lin
// Student ID: 300992124
// Date: 2024-05-26
/*
import React, { useState } from 'react';
import './App.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p><strong>Email:</strong> ylin170@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> 437-608-1111</p>
        <p><strong>Address:</strong> 123 Progress, Toronto</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
*/

import React, { useState } from 'react';
import './App.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // State variable for pop-up window

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true); // Show pop-up window
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p><strong>Email:</strong> ylin170@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> 437-608-1111</p>
        <p><strong>Address:</strong> 123 Progress, Toronto</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {/* Pop-up window */}
      {submitted && (
        <div className="popup">
          <div className="popup-content">
            <h2>Success!</h2>
            <p>The information is submitted successfully.</p>
            <button onClick={() => setSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

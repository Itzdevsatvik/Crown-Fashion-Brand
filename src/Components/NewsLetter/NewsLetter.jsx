import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './NewsLetter.css';

const NewsLetter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  if (name === 'phoneNumber' && !/^\d*$/.test(value) && value !== '') {
    return; 
  }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceid = 'service_jsjv3im'; 
    const templateid = 'template_sn9rgjc'; 
    const publickey = '5JHoBC4xbQW5gUqor'; 

    const templateparams = {
      from_name: formData.name,
      your_name: formData.name,
      your_email: formData.email,
      your_number: formData.phoneNumber,
    };

    emailjs.send(serviceid , templateid , templateparams , publickey)
    .then((response) => {
      console.log('Email sent successfully' , response);
      setFormData({
        name: '',
        email: '',
        phoneNumber: ''
      });
    })
    .catch((error) => {
      console.error('Email not sent successfully', error);
    });
  };  

  return (
    <div className='newsletter'>
      <h1>Get All Details Of Our catalogue</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="name" 
            placeholder='Your Name' 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div><br />
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder='Your Email id' 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div><br />
        <div>
          <input 
            type="tel" 
            name="phoneNumber" 
            placeholder='Enter Your Phone Number' 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            pattern="[0-9]*"
          />
        </div><br />
        <button className='sub' type="submit">Contact Us</button>
      </form>
    </div>
  );
};

export default NewsLetter;

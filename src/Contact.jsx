import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from './assets/Petro Energy Logo.jpg';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendToWhatsApp = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    const whatsappNumber = '+966558087462';
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/projects">Projects</Link></li>
            <li className="nav-item"><Link to="/services">Services</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
            <li className="nav-item">
              <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            </li>
            <li className="nav-item">
              <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li className="nav-item">
              <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="contact-page-section">
        <div className="inner-container info-column">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p className="gradient-text"><i className="fas fa-map-marker-alt"></i> Cristal Plaza, Exit 21, Southern Branch Rd. Riyad. Saudi Arabia.</p>
            <p className="gradient-text"><i className="fas fa-phone-alt"></i> +966558087462</p>
            <p className="gradient-text"><i className="fas fa-envelope"></i> info@petroenergymiddleeast.com</p>
          </div>
        </div>
        <div className="inner-container logo-column">
          <img src={logo} alt="Petro Energy Logo" className="logo-image" />
        </div>
        <div className="inner-container form-column">
          <form className="contact-form" onSubmit={sendToWhatsApp}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="theme-btn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

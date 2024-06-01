import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import SlidingImages from './SlidingImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const slideLeft = () => {
    // Call a function to slide images to the left
    console.log('Slide images to the left');
  };

  const slideRight = () => {
    // Call a function to slide images to the right
    console.log('Slide images to the right');
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        slideLeft();
      } else if (event.key === 'ArrowRight') {
        slideRight();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo"></div>
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
      <SlidingImages />
      
      
      
    </>
  );
};

export default Projects;

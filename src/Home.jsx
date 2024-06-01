import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './assets/Petro Energy Logo.jpg';
import constImage from './assets/const.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade } from 'swiper/modules';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Home = () => {
  const images = [
    {
      url: constImage,
      caption: (
        <>
          <span className="blue-text">EMPOWERING INNOVATIONS THROUGH </span>
          <span className="green-text"> ENGINEERING SOLUTIONS </span>
        </>
      ),
    },
    // Add more images here if needed
  ];

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
            <li className="nav-item"><Link to="/login"></Link></li>
            <li className="nav-item"><Link to="/dashboard"></Link></li>
            <li className="nav-item">
              <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            </li>
            <li className="nav-item">
              <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li className="nav-item">
              <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            {/* <button type="button" className="btn btn-success">Signup</button> */}

          </ul>
        </nav>
      </header>
      {/* <div className="whatsapp_button">
      <a href="https://api.whatsapp.com/send?phone=+966558087462" target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="WhatsApp Icon" />
      </a>
    </div> */}

      <div className="main-logo">
        <img src={logo} alt="Petro Energy Logo" className="logo-image" />
      </div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
      {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <img src={image.url} alt={image.caption}className="swiper-slide-image" style={{ height: '100vh', width: '100%' }} />
            <div className="caption">{image.caption}</div>
          </SwiperSlide>
           ))}
      
    </Swiper>
   

       
    </>
  );
}

export default Home;

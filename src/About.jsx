import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from './assets/Amaltrading.png'
import logo1 from './assets/longbanner.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const About = () => {
 
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
      <section id="about">
      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h3>About Us</h3>
          <p>Petro Energy Middle East Trading and Contracting Est stands as a beacon of 
excellence in the energy sector of the Middle East. With a strategic focus on 
trading and contracting, we bring forth a wealth of experience and expertise 
to deliver innovative solutions tailored to the specific needs of our clients. 
Our commitment to quality and reliability sets us apart, ensuring that every 
project we undertake is executed with precision and efficiency</p>
        </header>

        <div className="row about-cols">

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="about-col">
              <div className="img">
                <img src="assets/img/about-mission.jpg" alt="" className="img-fluid" />
                
              </div>
              <h2 className="title"><Link to="#">Our Mission</Link></h2>
              <p>
              Petro Energy Middle East Trading and Contracting Est is committed to leading the 
energy sector in the Middle East by delivering innovative, sustainable, and reliable 
solutions. Through our dedication to excellence and environmental stewardship, 
we aim to exceed client expectations and contribute to the growth and prosperity 
of the region
              </p>
            </div>
          </div>

          

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="about-col">
              <div className="img">
                <img src="assets/img/about-vision.jpg" alt="" className="img-fluid" />
                
              </div>
              <h2 className="title"><Link to="#">Our Vision</Link></h2>
              <p>
              At Petro Energy Middle East Trading and Contracting EST, our vision is to
be the premier provider of operation and maintenance (O&M) services,
particularly in the oil and gas sector. We aim to set new standards of
excellence in O&M within the industry. Our unwavering commitment to 
reliability, innovation, and sustainability positions us as a trusted partner in
driving the success and efficiency of our clients' operations, both now and 
in the future.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="sister-companies">
        <div className="container" data-aos="fade-up">
          <header className="section-header sister-companies-header">
            <h2>SISTER COMPANY</h2>
          </header>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide> <img src={logo} alt="Amaltrading" className="logo-image" /></SwiperSlide> */}
        <SwiperSlide><img src={logo1} alt="longbanner" className="logo-image" /></SwiperSlide>
        
      </Swiper>
      </div>
      </section>
      
        
    </>
  );
};

export default About;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './About.css';

// const About = () => {
//   return (
//     <>
//       <header className="header">
//         <div className="logo"></div>
//         <nav className="nav">
//           <ul className="nav-list">
//             <li className="nav-item"><Link to="/">Home</Link></li>
//             <li className="nav-item"><Link to="/about">About</Link></li>
//             <li className="nav-item"><Link to="/projects">Projects</Link></li>
//             <li className="nav-item"><Link to="/services">Services</Link></li>
//             <li className="nav-item"><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//       </header>
//       <section id="about">
//         <div className="container" data-aos="fade-up">
//           <header className="section-header">
//             <h3>About Us</h3>
//             <p>Petro Energy Middle East Trading and Contracting Est stands as a beacon of excellence in the energy sector of the Middle East. With a strategic focus on trading and contracting, we bring forth a wealth of experience and expertise to deliver innovative solutions tailored to the specific needs of our clients. Our commitment to quality and reliability sets us apart, ensuring that every project we undertake is executed with precision and efficiency.</p>
//           </header>
//           <div className="row about-cols">
//             <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
//               <div className="about-col">
//                 <div className="img">
//                   <img src="assets/img/about-mission.jpg" alt="" className="img-fluid" />
//                 </div>
//                 <h2 className="title"><Link to="#">Our Mission</Link></h2>
//                 <p>Petro Energy Middle East Trading and Contracting Est is committed to leading the energy sector in the Middle East by delivering innovative, sustainable, and reliable solutions. Through our dedication to excellence and environmental stewardship, we aim to exceed client expectations and contribute to the growth and prosperity of the region.</p>
//               </div>
//             </div>
//             <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
//               <div className="about-col">
//                 <div className="text-content">
//                   <h2 className="title"><Link to="#">Our Vision</Link></h2>
//                   <p>At Petro Energy Middle East Trading and Contracting EST, our vision is to be the premier provider of operation and maintenance (O&M) services, particularly in the oil and gas sector. We aim to set new standards of excellence in O&M within the industry. Our unwavering commitment to reliability, innovation, and sustainability positions us as a trusted partner in driving the success and efficiency of our clients' operations, both now and in the future.</p>
//                 </div>
//                 <div className="img">
//                   <img src="assets/img/about-vision.jpg" alt="" className="img-fluid" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;

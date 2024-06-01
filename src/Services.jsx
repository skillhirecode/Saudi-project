import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
 

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
      <section className="we-offer-area text-center bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <h2>OUR <span>SERVICES</span></h2>
                            <h4></h4>
                        </div>
                    </div>
                </div>
                <div className="row our-offer-items less-carousel">
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-pen-fancy"></i>
                            <h4>CONSTRUCTION</h4>
                            <p>
                            Petro Energy Middle East Trading and Contracting Est
is a highly experienced and leading building and civil construction 
company, delivering successful projects globally. 
Petro Energy aims to ensure a beneficial construction process
and exceed expectations through meticulous planning, design
and construction.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-dharmachakra"></i>
                            <h4>CONTRACTING</h4>
                            <p>
                            Petro Energy Middle East Trading and Contracting Est is a 
prominent contracting company known for delivering high-quality 
heavy constructionservices in the civil construction industry. 
From its inception, Petro Energy has prioritized fostering enduring 
relationships with clients and has actively contributed to various 
building construction activities
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-tasks"></i>
                            <h4>MAN POWER</h4>
                            <p>
                            Petro Energy Middle East Trading and Contracting Est has pioneered 
innovative and strategic approaches to meet the diverse needs of 
various industries. With a focus on both local and multinational 
companies, we employ a blend of modern and traditional recruitment
strategies to fulfil immediate manpower requirements promptly. 
Our team of experts meticulously evaluates the recruitment process 
to select the most suitable candidates
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-tachometer-alt"></i>
                            <h4>PROJECT SUPPORT</h4>
                            <p>
                            Petro Energy Middle East Trading and Contracting Est offers 
extensive support for new and existing construction projects, 
guiding clients’ personnel through every phase, from planning and 
procurement to installation and validation. Our Total Project 
Support guarantees timely and budget-friendly project completion.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-recycle"></i>
                            <h4>RECRUITMENT SERVICE</h4>
                            <p>
                            Petro Energy Middle East Trading and Contracting Est is a 
premier international recruitment company, renowned for 
placing high-caliber professionals, including those with 
specialized language skills, across major multinational 
companies in various
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-headset"></i>
                            <h4>TRANSPORTATION</h4>
                            <p>
                            We offer a complete spectrum of transportation and logistics 
services tailored to meet the specific needs of contemporary 
businesses and customers. Understanding our clients’ precise 
goals for their internal and external demands, we consistently 
deliver quality services, surpassing other providers in the market. 
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-headset"></i>
                            <h4>OPERATION SERVICE</h4>
                            <p>
                            Operation service, also known as operations and maintenance service, 
refers to the activities and tasks involved in the day-to-day functioning 
and upkeep of systems, equipment, processes, or facilities within an 
organization. These services are essential to ensure the smooth 
operation, reliability, and efficiency of various elements within a 
business or industry
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-headset"></i>
                            <h4>HOTELS AND RESIDENTIAL CLEANING</h4>
                            <p>
                            Petro Energy Middle East Trading and Contracting Est offers a 
comprehensive range of cleaning services for both residential 
and commercial clients. We take pride in meticulously maintaining 
our customers’ premises, upholding the latest industry standards. 
Our services include cleaning oriental rugs, carpeting, upholstery, 
and window treatments, as well as corporate and building 
cleaning
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-headset"></i>
                            <h4>EQUIPMENT RENTAL SERVICE</h4>
                            <p>
                            Petro Energy Middle East Trading and Contracting Est provides a 
comprehensive equipment rental service, offering a variety of 
equipment, machinery, tools, and vehicles for individuals or 
businesses on a specified rental basis. This service allows customers 
to access necessary equipment without a substantial upfront 
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-headset"></i>
                            <h4>SHUT DOWN AND MAINTANENCE</h4>
                            <p>
                            Petro Energy Middle East Trading and Contracting Est offers 
specialized shutdown and maintenance services, addressing planned 
closure and maintenance needs of industrial facilities, equipment, 
or systems. These services are vital for industries requiring
 continuous operation,balancing the need for periodic maintenance, 
repair, or upgrades to ensure safety, compliance, and efficiency 
standards are met
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      
    </>
  );
}

export default Services;

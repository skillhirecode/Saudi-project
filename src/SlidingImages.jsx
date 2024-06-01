import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlidingImages.css';

import image1 from './assets/Al Rayyaan stadium.jpg';
import image2 from './assets/Alkhor.jpg';
import image3 from './assets/Doha sewage.jpg';
import image4 from './assets/Doha.jpg';
import image5 from './assets/Downtown doha.jpg';
import image6 from './assets/Hamad.jpg';
import image7 from './assets/mall of qatar.jpg';
import image8 from './assets/Nesto.jpg';
// Add more images as needed

const SlidingImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="sliding-images">
      <Slider {...settings}>
        
        <div class="sliding-images">
          <img src={image1} alt="Al Rayyaan stadium" />
          <div class="image-caption"><h2>AL RAYYAAN STADIUM</h2></div>
        </div>
        <div class="sliding-images">
          <img src={image2} alt="Alkhor" />
          <div class="image-caption"><h2>ALKHOR</h2></div>
        </div>
        <div class="sliding-images">
          <img src={image3} alt="Doha sewage" />
          <div class="image-caption"><h2>DOHA SEWAGE</h2></div>
        </div>
        <div class="sliding-images">
          <img src={image4} alt="Doha" />
          <div class="image-caption"><h2>DOHA</h2></div>
        </div>
        <div class="sliding-images">
          <img src={image5} alt="Downtown doha" />
          <div class="image-caption"><h2> DOWNTOWN DOHA</h2></div>
        </div>
        <div class="sliding-images">
          <img src={image6} alt="Hamad" />
          <div class="image-caption"><h2>HAMAD</h2></div>
        </div>
        <div class="sliding-images">
          <img src={image7} alt="mall of qatar" />
          <div class="image-caption"><h2>MALL OF QATAR</h2></div>
        </div>
        <div class="sliding-images">
          <img src={image8} alt="Nesto" />
          <div class="image-caption"><h2>NESTO</h2></div>
        </div>
        {/* Add more slides as needed */}
        
      </Slider>
    </div>
  );
};

export default SlidingImages;

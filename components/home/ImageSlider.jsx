// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import elle_slug_2023 from '../../src/assets/images/SLUG23_elle/index'; // Correct import path

const ImageSlider = () => {
  const images = Array.from(elle_slug_2023.values());

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 100%)',
    zIndex: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id} style={{ position: 'relative' }}>
          <img
            src={image.image}
            alt={`Slide ${image.id}`}
            className="w-full lg:h-[600px] md:ml-24 sm:h-[400px] lg:w-2/3 lg:ml-48 md:w-3/4 sm:w-full rounded-xl"
          />
          <div style={overlayStyle}>

          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

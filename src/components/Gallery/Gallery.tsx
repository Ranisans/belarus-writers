import React from 'react';
import Swiper from 'react-id-swiper';

import './Gallery.scss';

interface Global {
  document: Document;
  window: Window;
}

interface Images {
  images: Array<Image>;
}
interface Image {
  alt: string;
  image: string;
}

const Gallery: React.FC<Images> = ({ images }) => {
  const params = {
    speed: 500,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    keyboard: {
      enabled: true,
    },
  }
  return (
    <Swiper {...params}>
      {images.map((img: Image) => {
        return (
          <div 
            className="swiper-slide" 
            key={img.alt}
          >
            <img
              className="swiper-img" 
              src={img.image}
              alt={img.alt}
            />
          </div>
        )
      })}
  </Swiper>
  );
};

export default Gallery;



import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';

import './Gallery.scss';

interface Images {
  images: Array<Image>;
}
interface Image {
  alt: string;
  image: string;
}

const Gallery: React.FC<Images> = ({ images }) => { 
  console.log('window: ', window);
  const config = {
    loop : true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      bulletElement : 'li',
      hideOnClick :true,
      clickable :true,
    },
  };

  // react-awesome-swiper packegae uses window inside, 
  // and server-side rerendering shows error
  // error "window" is not available during server side rendering.
  // I tried this solution
  //  https://chrisfrew.in/the-dreaded-referenceerror-window-is-not-defined/
  return (window !== undefined) ? (
      <AwesomeSwiper
        config={config}
      >
        <div className="swiper-wrapper">
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
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
  ) : null;
};

export default Gallery;



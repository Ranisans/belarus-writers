import React from 'react';
import Swiper from 'react-id-swiper';
import Img, { GatsbyImageProps, FluidObject } from "gatsby-image";

declare module 'gatsby-image' {
  export interface GatsbyImageProps {    
      id: string;
  }
}

declare module 'gatsby-image' {
  export interface FluidObject {    
      src: string;
      originalName: string;
  }
}

import './Gallery.scss';

interface Images {
  images: Array<Image>;
  allImages: Array<GatsbyImageProps>
}
interface Image {
  alt: string;
  image: string;
}

const Gallery: React.FC<Images> = ({ images, allImages }) => {
  let galleryImgs: Array<GatsbyImageProps> = [];
  allImages.map((image: GatsbyImageProps) => {
    images.forEach(el => {
      if (el.image == `/img/${image.fluid.originalName}`) {
        galleryImgs.push(image);
      }
    });
  });
  
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
    loop: true,
  }

  return (
    <Swiper {...params}>
      {galleryImgs.map(({ id, fluid}) => {
        console.log('fluid: ', fluid)
        return (
          <div 
            className="swiper-slide" 
            key={id}
          >
            <Img
              fluid={fluid}
              alt={fluid.originalName}
            />
            <img src={fluid.src} />
          </div>
        )
      })}
    </Swiper>
  );
};

export default Gallery;



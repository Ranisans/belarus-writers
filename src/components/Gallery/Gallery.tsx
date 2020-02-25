import React from 'react';
import Swiper from 'react-id-swiper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Img from "gatsby-image";

import { GatsbyImage, ImgNode } from '../../types';
import theme from '../../../static/themes/theme';

import './Gallery.scss';

interface Images {
  images: Array<Image>;
  allImages: Array<ImgNode>;
}

interface Image {
  alt: string;
  image: string;
}

const useStyles = makeStyles((theme) => {
  return createStyles({
    img: {
      width: 540,
      height: 650,
      [theme.breakpoints.down('xs')]: {
        maxWidth: 540,
        width: '100%',
        height: '100%'
      },
    }
  });
});

const Gallery: React.FC<Images> = ({ images, allImages }) => {
  const classes = useStyles(theme);

  let galleryImgs: Array<GatsbyImage> = [];
  allImages.map((edge) => {
    images.forEach(el => {
      if (el.image == `/img/${edge.node.fluid.originalName}`) {
        let imgData = {
          ...edge.node,
          alt: el.alt, 
        }
        galleryImgs.push(imgData);
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
      {galleryImgs.map(({ id, fluid }) => {
        console.log('fluid: ', fluid)
        return (
          <div 
            className="swiper-slide" 
            key={id}
          >
            <Img
              fluid={fluid}
              alt={fluid.originalName}
              className={classes.img}
            />
          </div>
        )
      })}
    </Swiper>
  );
};

export default Gallery;
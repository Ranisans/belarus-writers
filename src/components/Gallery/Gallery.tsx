import React from 'react';
import Swiper from 'react-id-swiper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';

import { GatsbyImage, ImgNode } from '../../types';
import theme from '../../../static/themes/theme';

import './GalleryStyle.scss';

interface Images {
  images: Array<Image>;
  allImages: Array<ImgNode>;
}

interface Image {
  alt: string;
  image: string;
}

const useStyles = makeStyles(thisTheme => {
  return createStyles({
    img: {
      width: '100%',
      height: '100%',
      [thisTheme.breakpoints.down('xs')]: {
        maxWidth: 540,
        width: '100%',
        height: '100%',
      },
    },
  });
});

const Gallery: React.FC<Images> = ({ images, allImages }) => {
  const classes = useStyles(theme);
  const galleryImgs: Array<GatsbyImage> = [];
  allImages.forEach(edge => {
    images.forEach(el => {
      if (el.image === `/img/${edge.node.fluid.originalName}`) {
        const imgData = {
          ...edge.node,
          alt: el.alt,
        };
        galleryImgs.push(imgData);
      }
    });
  });

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    updateOnWindowResize: true,
    initialSlide: 0,
  };

  return (
    <Swiper {...params}>
      {galleryImgs.map(({ id, fluid, alt }) => {
        return (
          <div className="swiper-slide" key={id}>
            <Img fluid={fluid} alt={alt} className={classes.img} title={alt} />
          </div>
        );
      })}
    </Swiper>
  );
};

export default Gallery;

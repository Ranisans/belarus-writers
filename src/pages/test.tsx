import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import ModalImage, { Lightbox } from "react-modal-image";

// import Gallery from '../components/Gallery/Gallery';
import Layout from '../components/Layout';
import { Data } from '../types';

interface Query {
  data: Data;
}

const Test: React.FC<Query> = ({ data }) => {

  console.log('data: ', data);
  const images = data.allMarkdownRemark.edges;
  console.log(images)
  
  // const urlToTinyImageFile = images[0].node.frontmatter.gallery[0].image
  // const urlToHugeImageFile = images[0].node.frontmatter.gallery[0].image;

  // const [ isOpen, setIsOpen ] = useState(false);

  // const closeLightbox = () => {
  //   setIsOpen(true);
  // };

  return (
    <Layout>
      1111111111111111
      {/* <ModalImage
        small={urlToTinyImageFile}
        large={urlToHugeImageFile}
        alt="Hello World!"
      />
      {
        isOpen && (
          <Lightbox
            medium={urlToTinyImageFile}
            large={urlToHugeImageFile}
            alt="Hello World!"
            onClose={closeLightbox}
          />
        )
      }
      {console.log('2222')} */}
    </Layout>
  );
};

export default Test;

export const data = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            gallery {
              alt
              image
            }
          }
        }
      }
    }
  }
`;

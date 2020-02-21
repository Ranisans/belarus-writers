import * as React from "react";
import Img from "gatsby-image";
import { Lightbox } from "react-modal-image";
import useGallery from "./hooks/useGallery";

const imgStyles: any = {
  css: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.5s, filter 0.25s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "saturate(1.3)",
    },
  },
};

const Gallery = () => {
  console.log('gallery')
  const images = useGallery();
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      <div>
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </div>
        ))}
      </div>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;

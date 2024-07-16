import React from 'react';

function ExampleCarouselImage({ src, alt }) {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
    />
  );
}

export default ExampleCarouselImage;

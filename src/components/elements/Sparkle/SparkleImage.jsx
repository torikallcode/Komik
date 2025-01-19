import React from 'react';

export const SparkleImage = ({ top, left, src, alt }) => (
  <img
    className="absolute max-w-full w-7"
    style={{ top, left }}
    src={src}
    alt={alt}
  />
);

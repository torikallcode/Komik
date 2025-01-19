import React, { useState, useEffect } from 'react';
import { SparkleImage } from './SparkleImage';

export const SparkleGenerator = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      const tempSparkles = [];
      for (let i = 0; i < 5; i++) {
        const position = Math.floor(Math.random() * 4);
        let top = 0, left = 0;

        if (position === 0) {
          top = Math.random() * 100;
          left = '10%';
        } else if (position === 1) {
          top = Math.random() * 100;
          left = 'calc(100% - 28px)';
        } else if (position === 2) {
          top = '10%';
          left = Math.random() * 100;
        } else if (position === 3) {
          top = 'calc(100% - 28px)';
          left = Math.random() * 100;
        }

        tempSparkles.push({ top: `${top}%`, left: `${left}%` });
      }
      setSparkles(tempSparkles);
    };

    generateSparkles();
  }, []);

  return (
    <>
      {sparkles.map((sparkle, index) => (
        <SparkleImage
          key={index}
          top={sparkle.top}
          left={sparkle.left}
          src="/img/Sparkle.png"
          alt={`Sparkle ${index + 1}`}
        />
      ))}
    </>
  );
};

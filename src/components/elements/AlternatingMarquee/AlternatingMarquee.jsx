import React, { useMemo } from 'react';

const ImageWithMarquee = () => {
  // Use a constant for rows since it doesn't need to be in state
  const ROWS = 17;
  const BASE_TEXT = "love you ".repeat(20);

  // Memoize the array of rows to prevent recreation on each render
  const rows = useMemo(() => Array.from({ length: ROWS }, (_, index) => ({
    id: index,
    isEven: index % 2 === 0
  })), []);

  return (
    <div
      className='relative max-w-sm mx-auto h-[360px] overflow-hidden'
      style={{
        backgroundImage: 'url"/img/lovesvgrepo.png")',
        backgroundSize: 'cover',
      }}
    >
      <div className="inset-0 bg-black bg-opacity-50"> {/* Optional overlay */}
        <div className="inset-0 flex flex-col overflow-hidden">
          {rows.map(({ id, isEven }) => (
            <div
              key={id}
              className={`whitespace-nowrap font-poppins leading-tight flex ${isEven ? 'animate-marquee-right' : 'animate-marquee-left'}`}
            >
              <span className="text-white text-opacity-80">{BASE_TEXT}</span>
              <span className="text-white text-opacity-80">{BASE_TEXT}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageWithMarquee;
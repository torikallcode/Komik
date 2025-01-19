import React from 'react';

const HeartText = () => {
  // Function to generate repeating text
  const generateText = (count) => {
    return Array(count).fill("love you ").join("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-2xl leading-tight text-center text-gray-800">
        <pre className="font-sans break-words whitespace-pre-wrap">
          {generateText(3)}
          {"\n"}
          {generateText(5)}
          {"\n"}
          {generateText(7)}
          {"\n"}
          {generateText(9)}
          {"\n"}
          {generateText(11)}
          {"\n"}
          {generateText(13)}
          {"\n"}
          {generateText(15)}
          {"\n"}
          {generateText(13)}
          {"\n"}
          {generateText(11)}
          {"\n"}
          {generateText(9)}
          {"\n"}
          {generateText(7)}
          {"\n"}
          {generateText(5)}
          {"\n"}
          {generateText(3)}
          {"\n"}
          {generateText(2)}
          {"\n"}
          {generateText(1)}
          {"\n"}
          {"me"}
        </pre>
      </div>
    </div>
  );
};

export default HeartText;
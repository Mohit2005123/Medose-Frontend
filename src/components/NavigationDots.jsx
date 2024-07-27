// NavigationDots.js

import React from 'react';

const NavigationDots = ({ total, currentIndex, onDotClick }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

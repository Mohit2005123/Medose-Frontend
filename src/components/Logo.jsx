// src/components/HealthcareLogo.jsx

import React from 'react';

export const HealthcareLogo = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-blue-500 rounded-lg shadow-lg m-4">
      <div className="relative w-6 h-6 bg-white rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-2 bg-blue-500"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-6 bg-blue-500"></div>
        </div>
      </div>
      <div className="ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
};


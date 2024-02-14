"use client"
import React, { useState } from 'react';

function Box() {
  const [isVisible, setIsVisible] = useState(false);

  const showBox = () => {
    setIsVisible(true);
  };

  const hideBox = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center px-4 py-2 bg-white shadow-md">
      <button onClick={showBox} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Show Box
      </button>
      <button onClick={hideBox} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2">
        Hide Box
      </button>

      {isVisible && (
        <div
          className="flex justify-center items-center h-screen"
          style={{ position: 'absolute', width: '96px', height: '72px', backgroundColor: '#d1d5db', transition: 'all 1s ease', opacity: '1' }}
        ></div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-100">
      <Box />
    </div>
  );
}

export default App;

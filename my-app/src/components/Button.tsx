"use client"
import React, { useState } from 'react';

interface ButtonProps {
  colors: string[];
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ colors, label = 'Click Me' }) => {
    // initial colour is the first colour in the array
  const [colorIndex, setColorIndex] = useState(0);

  // Function to handle button click and change color
  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColor = colors[colorIndex];

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: currentColor,
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
      }}
    >
      {label}
    </button>
  );
};

export default Button;

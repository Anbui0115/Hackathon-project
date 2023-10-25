// Button.js
import React, { useState } from 'react';

function NewTstimonialButton({ onButtonClick }) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    maxHeight: '200px'
  };

  const buttonStyle = {
    backgroundColor: '#706f6d', 
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer', 
    maxWidth: '300px',
    textAlign: 'center',
    margin: '20px'
  };
  return (
    <div style={containerStyle}>
      <button onClick={onButtonClick} style={buttonStyle}>
        Leave Your Testimonial
      </button>
    </div>
  );
}

export default NewTstimonialButton;

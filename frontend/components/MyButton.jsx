// Button.js
import React, { useState } from 'react';

function MyButton({ onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      This is a placeholder for "Leave your testimonial" button
    </button>
  );
}

export default MyButton;

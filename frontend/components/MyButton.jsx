// Button.js
import React, { useState } from 'react';

function MyButton({ onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      CAN YOU SEE ME ????
    </button>
  );
}

export default MyButton;

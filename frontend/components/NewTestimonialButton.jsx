// Button.js
import React, { useState } from 'react';

function NewTestimonialButton({ onButtonClick }) {
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
    <div className="z-10 flex justify-center items-center max-h-[200px]">
      <button onClick={onButtonClick} className="bg-inherit text-white hover:bg-stone-500 text-decoration-line: underline transition delay-100 ease-in-out text-xl px-5 py-2.5 border-none rounded-md cursor-pointer max-w-[300px] text-center m-5">
        Leave Your Testimonial
      </button>
    </div>
  );
}

export default NewTestimonialButton;

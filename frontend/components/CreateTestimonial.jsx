"use client"

import { useEffect } from "react";
import React from 'react';

const CreateTestimonial = ({ isOpen, onRequestClose }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === document.querySelector(".modal.open")) {
        onRequestClose();
      }
    };
  
    document.addEventListener("click", handleOutsideClick);
  
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onRequestClose]);
  const handleCloseModal = () => {
    onRequestClose();
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="z-10 absolute left-[30%] top-[15%] h-[auto] bg-white w-[40%] p-10 border-2 rounded-md shadow-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leave your testimonial</h1>
        <button className="" onClick={handleCloseModal}>
          X
        </button>
      </div>
      <hr className="mx-[-2.5rem] my-4" />
      <form 
        className=""
        action=""
      >
        <label className="flex flex-col gap-2 my-2"  htmlFor="">
          First Name
          <input 
            type="text"
            placeholder=""
            className="border-2 border-gray-300 rounded-md p-2" 
          />
        </label>

        <label className="flex flex-col gap-2 my-2"  htmlFor="">
          Last Name
          <input 
            type="text"
            placeholder=""
            className="border-2 border-gray-300 rounded-md p-2" 
          />
        </label>

       

        <label className="flex flex-col gap-2"  htmlFor="">
          Testimonial
          <textarea 
            placeholder="Type your testimonial here"
            className="border-2 border-gray-300 rounded-md p-3" 
            rows="5"   // this sets the height of the textarea
            cols="50"  // this sets the width of the textarea
          ></textarea>
        </label>

        <div className='py-6 flex gap-4 justify-center'>
          <button 
            className="bg-orange-500 hover:bg-gray-600 text-white rounded-md p-2 transition duration-700"
            type="submit"
          >
            Submit
          </button>

          <button className="bg-orange-500 text-white rounded-md p-2 hover:bg-gray-600 transition duration-700">
            Cancel
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default CreateTestimonial;

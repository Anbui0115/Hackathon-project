"use client"
import React from 'react'
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// TestimonialCard.js
const TestimonialCard = ({testimony}) => {

  return (
    <div className={`flex flex-col justify-center items-center gap-2 p-6 mx-auto w-full md:max-w-xl border-stone-300 rounded-md shadow-lg
    hover:bg-stone-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
    `}>
      <div className="text-black font-semibold text-center">{testimony.content}</div>
      <div className="text-center">
        <div className="text-red-400 text-2xl font-semibold text-center">{testimony.name}</div>
        <div className="text-center mt-2">{testimony.role}</div>
      </div>
    </div>
  )
}






export default TestimonialCard

{/* <div className="flex flex-col items-center gap-2">
<div className="text-black  font-semibold">{testimony.content}</div>
<div className="text-red-400 text-2xl font-semibold text-start">- {testimony.name}</div>
</div> */}
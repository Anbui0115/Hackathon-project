"use client"
import React from 'react'
import { motion } from 'framer-motion';

const TestimonialCard = ({testimony}) => {
// console.log('THIS IS TESTIMONY!!!!!!!',testimony)
  return (
    <div className={`flex flex-col justify-center items-center gap-2 p-6 mx-auto w-full md:max-w-xl border-stone-300 rounded-md shadow-lg
     text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
    `}>
      <div className="text-lightcream text-center " >"{testimony.content}"</div>
      <div className="text-center my-10">
        <div className="text-rose-200 text-2xl text-center">{testimony.first_name}</div>
        <div className="text-rose-200 text-2xl text-center">{testimony.last_name}</div>

        <div className="text-lightcream text-center  italic">{testimony.role}</div>
      </div>
    </div>
  )
}

export default TestimonialCard

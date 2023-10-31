"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'

const ServiceCard = () => {

  return (

<div>
    <div className="text-lightcream text-2xl text-center bg-black" >Speciality Services</div>
    <div className={`bg-black flex flex-row justify-center items-center gap-2 p-6 mx-auto w-full
    `}>

      <div className="text-center my-10 md:max-w-l border-stone-300 rounded-md shadow-lg
     text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div className="text-rose-200 text-l text-center">Makeup</div>
         {/* <img
          src="/Makeup.JPG"
          alt="service-pic"
          // objectFit="cover"
          height={50}
          width={50}
          className="mt-10 rounded-sm"
        /> */}
        <div className="text-lightcream text-m text-center">Priyanka offers makeup services for Arengetrams, shows, and photoshoots. Makeup workshops are available on request.</div>
        {/* <div className="text-lightcream  text-center  italic">Dance makeup workshops available on request</div> */}
      </div>

         <div className="text-center my-10 md:max-w-l border-stone-300 rounded-md shadow-lg
     text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div className="text-rose-200 text-m text-center">Emcee/Hosting</div>
        <div className="text-lightcream text-m text-center">Priyanka anchors in Television as a hostess, emcees for shows, productions, and more</div>
        {/* <div className="text-lightcream  text-center  italic">Get in touch with Priyanka for special requests</div> */}
      </div>

         <div className="text-center my-10 md:max-w-l border-stone-300 rounded-md shadow-lg
     text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div className="text-rose-200 text-m text-center">Nattuvangam</div>
        <div className="text-lightcream  text-m text-center">Priyanka offers nattuvangam servies for concerts, productions, and private audio recordings.</div>
        {/* <div className="text-lightcream  text-center  italic">Get in touch with Priyanka for more details</div> */}
      </div>
    </div>
  </div>
  )
}

export default ServiceCard

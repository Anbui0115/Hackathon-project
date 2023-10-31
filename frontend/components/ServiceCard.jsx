"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'

const ServiceCard = () => {

  return (

<div>
    <div className="text-lightcream text- 3xl text-center " >Speciality Services</div>
    <div className={`bg-black flex flex-row justify-center items-center gap-2 p-6 mx-auto w-full
    `}>

      <div className="text-center my-10 md:max-w-xl border-stone-300 rounded-md shadow-lg
     text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div className="text-rose-200 text-3xl text-center">Makeup</div>
         {/* <img
          src="/Makeup.JPG"
          alt="service-pic"
          // objectFit="cover"
          height={50}
          width={50}
          className="mt-10 rounded-sm"
        /> */}
        <div className="text-lightcream  text-2xl text-center">Priyanka offers makeup services for Arengetrams, shows, photoshoots, and more.</div>
        <div className="text-lightcream  text-center  italic">Dance makeup workshops available on request</div>
      </div>

         <div className="text-center my-10 md:max-w-xl border-stone-300 rounded-md shadow-lg
     text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div className="text-rose-200 text-3xl text-center">Emcee/Hosting</div>
        <div className="text-lightcream text-2xl text-center">Priyanka anchors in Television as a hostess, emcees for shows, productions, and more</div>
        <div className="text-lightcream  text-center  italic">Contact Priyanka for special requests</div>
      </div>

         <div className="text-center my-10 md:max-w-xl border-stone-300 rounded-md shadow-lg
     text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div className="text-rose-200 text-3xl text-center">Other</div>
        <div className="text-lightcream  text-2xl text-center">Priyanka models and acts in theatre productions.</div>
        <div className="text-lightcream  text-center  italic">Contact Priyanka if you are interested to learn more</div>
      </div>
    </div>
  </div>
  )
}

export default ServiceCard

"use client"
import React from 'react'
import { motion } from 'framer-motion';

const DanceClassCard = ({danceclass}) => {
// console.log('THIS IS CLASS!!!!!!!',class)

let classId= danceclass?.dance_class_id

  return (
    <div className={`z-5 bg-black bg-opacity-80 text-didactGothic bg-inherit  flex flex-col justify-center items-center gap-2 p-6 mx-auto w-full md:max-w-xl border-stone-300 rounded-md shadow-lg
     text-m transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
    `}>
      <div className="text-lightcream text-center" >{danceclass.dance_class_id===1? "Beginner": danceclass.dance_class_id === 2? "Intermediate": danceclass.dance_class_id===3? "Advanced/Senior" :null}</div>
      {danceclass.dance_class_id===1?(<div></div>):danceclass.dance_class_id === 2?(<div></div>): null}

      <div className="text-center my-10">
        {/* dance classes */}
        {/* [pic of class and timings] */}
        {/* status- approved */}
        {/* description */}

      </div>
    </div>
  )
}

export default DanceClassCard

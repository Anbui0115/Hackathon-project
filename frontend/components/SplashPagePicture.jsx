import React from 'react'
import Image from 'next/image'
import AnimatedText from './AnimatedText'

const SplashPagePicture = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">

      <div className="text-white mb-32 flex-1 text-center font-semibold flex flex-col gap-4">
        <div className="text-5xl">
          {/* <AnimatedText timer={100}  message={"PRIYANKA RAGHURAMAN"} /> */}
          PRIYANKA RAGHURAMAN
        </div>
        <div className="text-3xl">
          {/* BHARATHANATYAM EXPONENT */}
          <AnimatedText timer={50}  message={"BHARATHANATYAM EXPONENT"} />
        </div>
      </div>

      <div className="flex-1 h-screen">
        <Image
          src="/splash_pic.JPG"
          alt="Splash Page Picture"
          // objectFit="cover"
          height={10000}
          width={5000}

          // layout="fill"
          className="mt-10 rounded-sm"
        />
      </div>
    </div>
  )
}

export default SplashPagePicture

"use client"

import React from 'react'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import DanceClassCard from '@/components/DanceClassCard';

import Link from 'next/link';
import { useRouter } from "next/navigation";
import { UserGlobalState } from "@/context/UserContext";

const DanceRegistration = () => {
  const { sessionUser, setSessionUser } = UserGlobalState();
  const router = useRouter();

  const danceLevels = {
    "Beginner": {
      "id": 1,
      "class_one": "Monday at 5:00 pm",
      "class_two": "Thursday at 6:00 pm",
      "level": "Beginner",
      "description": "Fundamentals & Basics: Adavus, Jathis, Mudras, Padha Bhedas and Theory",
      "imageUrl": "/dance_school/PXL_20231025_012124652.MP.jpg"
    },
    "Intermediate": {
      "id": 2,
      "class_one": "Monday at 6:00 pm",
      "class_two": "Friday at 6:00 pm",
      "level": "Intermediate",
      "description": "Fundamentals & Items: Pushpanjalis, Alarippus, Jathiswarams, Dance Theory, etc",
      "imageUrl": "/dance_school/Photo from Priyanka Raghuraman(7).jpg"
    },
    "Advanced": {
      "id": 3,
      "class_one": "Monday at 7:00 pm",
      "class_two": "Saturday 9:30 am",
      "level": "Advanced",
      "description": "Advanced Dance items: Padhams, Varnams, Javalis, etc",
      "imageUrl": "/dance_school/Photo from Priyanka Raghuraman(9).jpg"
    },
    "Senior": {
      "id": 4,
      "class_one": "Available on request",
      "class_two": "Available on request",
      "level": "Senior",
      "description": "One-on-One mentorship and training available for senior artists looking to sharpen their technique and performance skills",
      "imageUrl": "/dance_school/Photo from Priyanka Raghuraman(1).jpg"
    }
  };

const renderDanceCards = () => {
    return Object.keys(danceLevels).map((level) => {
      const { class_one, class_two, description, imageUrl } = danceLevels[level];

      return (
        <DanceClassCard
          key={level}
          level={level}
          classOne={class_one}
          classTwo={class_two}
          description={description}
          imageUrl={imageUrl}
        />
      );
    });
  };

  if (!sessionUser) {
    router.push('/login');
  }
  else {
    return (
      <>
      <NavBar />
      <section className='flex flex-col items-center h-screen'>

        <div className='flex justify-center w-full h-1/2'>
                {renderDanceCards()}
        </div>


        <div className= 'flex flex-col justify-center h-auto bg-black w-[70%] tracking-wider border-none rounded-md shadow-2xl text-lightcream font-didactGothic m-20'>
            <div className='flex justify-center '>
            <h1 className='text-2xl font-elsie mb-2 text-lightcream'>Register For Dance Lessons</h1>
            </div>
            <hr className='mx-[-2.5rem] my-[4rem]' />
            <form className='flex flex-col text-didactgothic justify-center align-center items-start border-cream p-8 rounded-md'>

            <label className='my-4' >
                <div className='my-5 font-bold text-l'>How Many Years of Dance Experience do you have?</div>
                <select className='rounded-md text-black text-l p-2 border-2  shadow-2xl bg-lightcream '>
                  <option className="text-m " value="1">Beginner: 0-3 years of experience</option>
                  <option className="text-m" value="2">Intermediate: 3-6 years of experience</option>
                  <option className="text-m" value="3">Advanced: 6-10 years of experience</option>
                  <option className="text-m" value="4">Senior: 10+ years of experience</option>
                </select>


            </label>

            <label className='mt-5 mb-1'>
                <div className='font-bold mb-1 text-l'>What is your age? </div>
                <div className='mt-2 mb-2'>(Why we ask this: We want to place you in the most appropriate group for your age and skill level)</div>
            <input className='rounded-md mt-3 mb-1 w-[10%] bg-lightcream border-0 border-b-2 border-lightcream outline-none shadow-2xl p-2 text-black text-m'
                placeholder="Ex. 6"/>
            </label>

            <label className='mb-2 mt-4'>
                <div className='font-semibold text-l'>Where are you located? (We offer in-person and online classes)</div>
                <input className="rounded-md mt-5 mb-2 w-[100%] text-black  font-semibold outline-none text-m border-0 border-b-2 border-lightcream shadow-2xl p-2 bg-lightcream"
                placeholder='Fremont, CA'
                />
            </label>

            <label className='mt-5 mb-1'>
                <div className='mt-5 mb-5 font-bold text-l'>Tell us more about your background, experience, dance aspirations or any specific requirements you have so we can get to know you better!</div>

                <div className='my-2 font-semibold'>1. Do you practice any other dance styles or art forms? </div>
                <div className='my-2 font-semibold'>2. How long have you been dancing?</div>
                <div className='my-2 font-semibold'>3. What are you hoping to learn from your time at Priyada Arts?</div>
                <div className='my-2 font-semibold'>4. When are you looking to start attending lessons?</div>

                <textarea
                className='flex text-didactGothic justify-center outline-none text-black text-m border-1 border-cream p-6 focus-none resize-none mt-3 mb-1 rounded-md shadow-2xl w-full bg-lightcream'
                placeholder='Ex. Hi! I have 10 years of experience in Bharathanatyam and have practiced a few other styles as well briefly. I am hoping to expand my peformance skills and technique nuances under your mentorship.'
                rows="10"   // this sets the height of the textarea
                cols="70"  // this sets the width of the textarea
                >
                </textarea>

                <div className='mt-5 mb-5 font-semibold text-l'>Whether you're looking to join regular classes or have a special request, we look forward to working with you!</div>


            </label>

            <div className='py-6 flex gap-4 justify-center items-center self-center text-m font-semibold'>
                <button
                className="bg-teal-700 tracking-wider hover:bg-stone-500 text-lightcream rounded-md p-3 transition duration-700"
                type="submit"
                >
                Submit
                </button>


                <button
                  className="bg-teal-700 font-semibold text-white rounded-md p-2 hover:bg-stone-500 transition duration-700"
                  onClick={() => router.push('/')}
                >
                  Cancel
                </button>
            </div>

            </form>

        </div>
        </section>
      <Footer />
      <ChatBot />
    </>
  )
  }
}

export default DanceRegistration

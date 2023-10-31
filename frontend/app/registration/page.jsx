
"use client"

import React from 'react'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

import Link from 'next/link';
import { useRouter } from "next/navigation";
import { UserGlobalState } from "@/context/UserContext";

const DanceRegistration = () => {
  const {sessionUser, setSessionUser} = UserGlobalState()
  const router = useRouter()
  if (!sessionUser) {
    router.push('/login')
  }
  else {
    return (
      <>
      <NavBar />
      <section className='bg-black flex justify-center'>
        <div className= 'flex flex-col justify-center h-auto bg-inherit w-[70%] tracking-wider border-none rounded-md shadow-2xl text-lightcream font-worksans'>
            <div className='flex justify-center '>
            <h1 className='text-5xl font-laila mb-2 '>Register For Dance Lessons</h1>
            </div>
            <hr className='mx-[-2.5rem] my-[4rem]' />
            <form className='flex flex-col justify-center align-center items-start border-4 border-cream p-8 rounded-md'>
            <label className='my-4' >
                <div className='my-5 font-semibold text-xl'>How Many Years of Dance Experience do you have?</div>
                <select className='text-black text-xl font-semibold rounded-md p-4 border-2  shadow-2xl bg-white '>
                  <option className="text-xl " value="1">Beginner: 0-3 years of experience</option>
                  <option className="text-xl" value="2">Intermediate: 3-6 years of experience</option>
                  <option className="text-xl" value="3">Advanced: 6-10 years of experience</option>
                  <option className="text-xl" value="4">Senior: 10+ years of experience</option>
                </select>


            </label>

            <label className='mt-5 mb-1'>
                <div className='font-bold mb-1 text-xl'>What is your age? </div>
                <div className='mt-2 mb-2'>(Why we ask this: We want to place you in the most appropriate group for your age and skill level)</div>
            <input className='mt-3 mb-1 w-[10%] text-lightcream border-0 border-b-2 border-lightcream outline-none shadow-2xl p-2 bg-inherit font-semibold'
                placeholder="Ex. 6"/>
            </label>

            <label className='mb-2 mt-4'>
                <div className='font-semibold text-xl'>Where are you located? (We offer in-person and online classes)</div>
                <input className="mt-5 mb-2 w-[100%] text-lightcream font-semibold outline-none border-0 border-b-2 border-lightcream shadow-2xl p-2 bg-inherit"
                placeholder='Fremont, CA'
                />
            </label>

            <label className='mt-5 mb-1'>
                <div className='mt-5 mb-5 font-semibold text-xl'>Tell us more about your background, experience, dance aspirations or any specific requirements you have so we can get to know you better!</div>

                <div className='my-2 font-semibold'>1. Do you practice any other dance styles or art forms? </div>
                <div className='my-2 font-semibold'>2. How long have you been dancing?</div>
                <div className='my-2 font-semibold'>3. What are you hoping to learn from your time at Priyada Arts?</div>
                <div className='my-2 font-semibold'>4. When are you looking to start attending lessons?</div>

                <textarea
                className='flex justify-center outline-none text-cream border-2 border-cream p-6 focus-none resize-none mt-3 mb-1 rounded-md shadow-2xl w-full bg-inherit'
                placeholder='Ex. Hi! I have 10 years of experience in Bharathanatyam and have practiced a few other styles as well briefly. I am hoping to expand my peformance skills and technique nuances under your mentorship.'
                rows="10"   // this sets the height of the textarea
                cols="70"  // this sets the width of the textarea
                >
                </textarea>

                <div className='mt-5 mb-5 font-semibold text-xl'>Whether you're looking to join regular classes or have a special request, we look forward to working with you!</div>


            </label>

            <div className='py-6 flex gap-4 justify-center items-center self-center font-semibold'>
                <button
                className="bg-teal-700 tracking-wider hover:bg-stone-500 text-lightcream rounded-md p-3 transition duration-700"
                type="submit"
                >
                Submit
                </button>


                <button className="bg-teal-700 tracking-wider text-lightcream rounded-md p-2 hover:bg-stone-500 transition duration-700">
                  <Link href='/'>Cancel</Link>

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

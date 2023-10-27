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
        <div className= 'text-lg z-20 flex flex-col justify-center h-auto bg-inherit w-[70%] tracking-wider p-10 border-none rounded-md shadow-2xl text-lightcream font-worksans'>
            <div className='flex justify-center '>
            <h1 className='text-5xl font-laila mb-2 '>Register For Dance Lessons</h1>
            </div>
            <hr className='mx-[-2.5rem] my-[4rem]' />
            <form className='flex flex-col justify-center align-center items-start'>
            <label className='mt-7 mb-7' >
                <div className='mt-5 mb-5 font-bold '>How Many Years of Dance Experience do you have?</div>
                <select className='text-lightcream mt-1 mb-1 border-2 rounded-md shadow-2xl p-2 bg-inherit focus:bg-black'>
                <option value="Beginner">Beginner: 0-3 years of experience</option>
                <option value="Intermediate">Intermediate: 3-6 years of experience</option>
                <option value="Advanced">Advanced: 6-10 years of experience</option>
                <option value="Senior">Senior: 10+ years of experience</option>
                </select>
    {/*
                <input
                type="submit"
                className=''

                /> */}

            </label>

            <label className='mt-5 mb-1'>
                <div className='font-bold mb-1'>What is your age? </div>
                <div className='mt-2 mb-2'>(Why we ask this: We want to place you in the most appropriate group for your age and skill level)</div>
            <input className='mt-3 mb-1 w-[10%] text-lightcream border-0 border-b-2 border-lightcream outline-none mt-1 mb-1 shadow-2xl p-2 bg-inherit'
                placeholder="Ex. 6"/>
            </label>

            <label className='mb-2 mt-4'>
                <div className='font-bold'>Where are you located? (We offer in-person and online classes)</div>
                <input className="mt-5 mb-2 w-[100%] text-lightcream outline-none border-0 border-b-2 border-lightcream shadow-2xl p-2 bg-inherit"
                placeholder='Fremont, CA'
                />
            </label>

            <label className='mt-5 mb-1'>
                <div className='mt-5 mb-5 font-bold'>Tell us more about your background, experience, dance aspirations or any specific requirements you have so we can get to know you better!</div>

                <div className='mt-2 mb-2'>1. Do you practice any other dance styles or art forms? </div>
                <div className='mt-2 mb-2'>2. How long have you been dancing?</div>
                <div className='mt-2 mb-2'>3. What are you hoping to learn from your time at Priyada Arts?</div>
                <div className='mt-2 mb-2'>4. When are you looking to start attending lessons?</div>
                <div className='mt-5 mb-5 font-semibold'>Whether you're looking to join regular classes or have a special request, we look forward to working with you!</div>
                <textarea
                className='flex justify-center outline-none text-lightcream focus-none resize-none m-5 mt-3 mb-1 text-lightcream mt-1 mb-1 rounded-md shadow-2xl p-2 bg-inherit'
                placeholder='Ex. Hi! I have 10 years of experience in Bharathanatyam and have practiced a few other styles as well briefly. I am hoping to expand my peformance skills and technique nuances under your mentorship.'
                rows="10"   // this sets the height of the textarea
                cols="70"  // this sets the width of the textarea
                >
                </textarea>


            </label>

            <div className='py-6 flex gap-4 justify-center items-center'>
                <button
                className="bg-teal-700 tracking-wider hover:bg-stone-500 text-lightcream rounded-md p-2 transition duration-700"
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

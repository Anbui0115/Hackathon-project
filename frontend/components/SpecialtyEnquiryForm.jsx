"use client"

import React, { useState } from 'react';
// import Datepicker from 'react-tailwindcss-datepicker';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { UserGlobalState } from '@/context/UserContext';

const CreateSpecialityEnquiry = () => {
  const { sessionUser, setSessionUser } = UserGlobalState()
  const router = useRouter()

  const [date, setDate] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
  }

  if (!sessionUser) {
    router.push('/login')
  }
  else {
    return (
      <div className="text-xl h-auto px-40 bg-black text-cream w-[full] tracking-wider p-10 border-2 rounded-md font-worksans">

        <div className="text-center">
          <h1 className="text-5xl font-laila ">Send an Enquiry for Speciality Services</h1>
        </div>
        <hr className='mx-[-2.5rem] my-[4rem]' />


        <form
          className="border-4 p-10 rounded-md border-cream flex flex-col"
          action=""
        >
          <label className="my-4">
            <div className="text-xl font-semibold" >Please select the type of appointment you are interested in.</div>
            <select className='text-black'>
              <option value="1">Makeup (Shows, Arangetrams, Photoshoots, Workshops)</option>
              <option value="2">Emcee/Hosting (Events, Shows, Television, etc)</option>
              <option value="3">Other(Modeling, Acting, etc: Please specify in the notes section below)</option>
            </select>

          </label>

          <label className='text-black '>
            <div className='text-cream'> When do you require our services?</div>
            <DatePicker className = 'bg-white' onChange={handleDateChange} value={date} />
            <div>

            </div>

          </label>

          <label>
            <div> Where do you require this service? </div>
            <input
              className='w-[100%]'
              placeholder="Cubberly Theatre, Palo Alto, CA">
            </input>

          </label>



          <label>
            <div>Please provide any particular details or preferences regarding your appointment or event. This may include your desired makeup style, allergies, specific requirements, workshop requests, and hosting/emceeing needs.</div>
            <div> Please include the specific time that you would require our services. If you require our presence and services at the event, please indicate the duration.</div>
            <div> For events like an Arangetram, kindly provide additional relevant details. </div>
            <div>For makeup enquiries, please mention if you prefer to have your makeup done at the Priyada Arts studio, or at the venue.</div>
            <textarea
              placeholder="Hello, I am looking for a makeup artist for my dance showcase next month. I am located in the Bay Area and would like to have my makeup done at the venue itself on December 18th from 3:00pm - 6:00pm. I would like to request your service at 1pm to allow for enough timeI would like to request that you stay back for the duration of the event since I have a costume change that I may need help with along with some touch-ups."
              className="border-none bg-inherit border-gray-300 rounded-md p-3 text-white "
              rows="15"   // this sets the height of the textarea
              cols="80"  // this sets the width of the textarea
            >
            </textarea>
          </label>

          <div className='py-6 flex gap-4 justify-center'>
            <button
              className="bg-teal-700 font-semibold hover:bg-stone-500 text-white rounded-md p-2 transition duration-700"
              type="submit"
            >
              Submit
            </button>

            <button className="bg-teal-700 font-semibold text-white rounded-md p-2 hover:bg-stone-500 transition duration-700">
              <Link href='/'>Cancel</Link>
            </button>
          </div>

        </form>
      </div>
    );
  }
};

export default CreateSpecialityEnquiry;

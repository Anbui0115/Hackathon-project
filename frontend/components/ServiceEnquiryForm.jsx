// ServiceEnquiryForm.jsx
"use client"

import React, { useState } from 'react';
// import Datepicker from 'react-tailwindcss-datepicker';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { UserGlobalState } from '@/context/UserContext';
import axios from 'axios';

const CreateServiceEnquiry = () => {
  const { sessionUser, setSessionUser } = UserGlobalState()
  const router = useRouter()

  const [date, setDate] = useState(null);


  const [formData, setFormData] = useState({
    serviceId: 1,
    date: '',
    location: '',
    notes: '',
  });

  const { serviceId, appointmentDate, location, notes } = formData;

  const handleDateChange = (newDate) => {
   let newFormattedDate= setDate(convertToYYYYMMDD(newDate));
    setFormData({
      ...formData,
      date: newFormattedDate
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function convertToYYYYMMDD(dateString) {
    const inputDate = new Date(dateString);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = convertToYYYYMMDD(date);
    setFormData({
      ...formData,
      date: formattedDate,
    });
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/serviceappointments/new/', {
        service_id: serviceId,
        date: formattedDate,
        location: location,
        notes: notes,
      },
      { withCredentials: true },
      );

      console.log("THIS IS RESPONSE", response)
      if (response) {
        alert("Services Appointment Created Successfully");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      alert("FAIL TO SUBMIT FORM");
    }
  };

  if (!sessionUser) {
    router.push('/login')
  }
  else {
    return (
      <div className=" flex flex-col justify-center text-m h-auto px-40 bg-black text-cream w-[full] tracking-wider p-[10%] rounded-md font-didactGothiic">

        <div className="text-center">
          <h1 className="text-3xl text-elsie ">Get In Touch</h1>
        </div>
        <hr className='mx-[-2.5rem] my-[4rem]' />


        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center p-10 rounded-md flex flex-col"
          action=""
        >
          <label className="my-15">
            <div className="text-l font-semibold" >Please select the type of appointment you are interested in.</div>
            <select className='border-none rounded-sm bg-lightcream text-black' value={serviceId} onChange={handleChange} name='serviceId'>
              <option value={1}>Makeup (Shows, Arangetrams, Photoshoots, Workshops)</option>
              <option value={2}>Emcee/Hosting (Events, Shows, Television, etc)</option>
              <option value={3}>Other/Nattuvangam</option>
            </select>
          </label>

          <label className='text-black my-15 '>
            <div className='text-cream'> When do you require our services?</div>
            <DatePicker className = 'border-none rounded-sm bg-lightcream text-black' onChange={handleDateChange} value={date} name="date" />
            <div>
            </div>
          </label>

          <label className='my-15'>
            <div> Where do you require this service? </div>
            <input
              name="location"
              className='w-[27.5%] text-black bg-lightcream border-none rounded-sm '
              placeholder="Cubberly Theatre, Palo Alto, CA"
              onChange={handleChange}
              value={location}>

            </input>
          </label>

          <label className='m-15' >
            <div>Please provide any particular details or preferences regarding your appointment or event. This may include your desired makeup style, allergies, specific requirements, workshop requests, and hosting/emceeing needs.</div>
            <div> Please include the specific time that you would require our services. If you require our presence and services at the event, please indicate the duration.</div>
            <div> For events like an Arangetram, kindly provide additional relevant details. </div>
            <div>For makeup enquiries, please mention if you prefer to have your makeup done at the Priyada Arts studio, or at the venue.</div>
            <textarea
              placeholder="Hello, I am looking for a makeup artist for my dance showcase next month. I am located in the Bay Area and would like to have my makeup done at the venue itself on December 18th from 3:00pm - 6:00pm. I would like to request your service at 1pm to allow for enough timeI would like to request that you stay back for the duration of the event since I have a costume change that I may need help with along with some touch-ups."
              className="border-none rounded-sm p-3 text-black resize-none overflow:scroll "
              rows="15"   // this sets the height of the textarea
              cols="80"  // this sets the width of the textarea
              onChange={handleChange}
              name='notes'
              value={notes}
            >
            </textarea>
          </label>

          <div className='py-6 flex gap-4 justify-center m-15'>
            <button
              className="bg-teal-700 font-semibold hover:bg-stone-500 text-white rounded-sm p-2 transition duration-700"
              type="submit"
            >
              Submit
            </button>

            <button className="bg-teal-700 font-semibold text-white rounded-sm p-2 hover:bg-stone-500 transition duration-700">
              <Link href='/'>Cancel</Link>
              {/* Cancel */}
            </button>
          </div>

        </form>
      </div>
    );
  }
};

export default CreateServiceEnquiry;

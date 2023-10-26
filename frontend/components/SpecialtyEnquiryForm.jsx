"use client"

import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const CreateSpecialityEnquiry = () => {


  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }


  return (
    <div onClick={(e) => e.stopPropagation()} className="z-10 absolute left-[30%] top-[15%] text-2xl h-[auto] bg-lightcream w-[50%] p-10 border-2 rounded-md shadow-2xl font-worksans">
      {/* Modal content */}
      {/* <button className="" onClick={handleCloseModal}>X</button> */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Send an Enquiry for Speciality Services</h1>

      </div>
      <form
        className=""
        action=""
      >

        <label >
          <div >Please select the type of appointment you are interested in.</div>
          <select className='text-black'>
            <option value="Makeup">Makeup (Shows, Arangetrams, Photoshoots, Workshops)</option>
            <option value="Emceeing/Hosting">Emcee/Hosting (Events, Shows, Television, etc)</option>
            <option value="Other">Other(Please specify in the notes section below)</option>
          </select>
          <input
            type="submit"
            className=''

          />

        </label>

        <label className=''>
          <div className=''>When do you require our services?</div>

          <Datepicker
            //  change text color to black so itll be visible
            value={value}
            onChange={handleValueChange}
          />
        </label>


        <label>
          <div>What time do you need the service to start at?</div>

          <div class="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl">
            <div class="flex">
              <select name="hours" class="bg-transparent text-xl text-black appearance-none outline-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">10</option>
                <option value="12">12</option>
              </select>
              <span class="text-xl mr-3">:</span>
              <select name="minutes" class="bg-transparent text-xl text-black appearance-none outline-none mr-4">
                <option value="0">00</option>
                <option value="30">30</option>
              </select>
              <select name="ampm" class="bg-transparent text-xl text-black appearance-none outline-none">
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            className=''

          />

        </label>




        <label>
          <div>What time do you need the service to end at?</div>

          <div class="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl">
            <div class="flex">
              <select name="hours" class="bg-transparent text-xl text-black appearance-none outline-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">10</option>
                <option value="12">12</option>
              </select>
              <span class="text-xl mr-3">:</span>
              <select name="minutes" class="bg-transparent text-xl text-black appearance-none outline-none mr-4">
                <option value="0">00</option>
                <option value="30">30</option>
              </select>
              <select name="ampm" class="bg-transparent text-xl text-black appearance-none outline-none">
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            className=''

          />

        </label>





        <label>
          <div> Where do you require this service? </div>
          <input
            className='w-[100%]'
            placeholder="Cubberly Theatre, Palo Alto, CA">
          </input>

        </label>


        <label>
          <div>Please provide any particular details or preferences regarding your appointment or event. This may include your desired makeup style, allergies, specific requirements, workshop requests, and hosting/emceeing needs. Please include the specific time that you would require our services. f you require our presence and services at the event, please indicate the duration. For events like an Arangetram, kindly provide additional relevant details. For makeup enquiries, please mention if you prefer to have your makeup done at the Priyada Arts studio, or at the venue.</div>
          <textarea
            placeholder="Hello, I am looking for a makeup artist for my dance showcase next month. I am located in the Bay Area and would like to have my makeup done at the venue itself on December 18th at 3:00pm. I would like to request that you stay back for the duration of the event since I have a costume change that I may need help with along with some touch-ups."
            className="border-none bg-inherit border-gray-300 rounded-md p-3 text-white "
            rows="40"   // this sets the height of the textarea
            cols="40"  // this sets the width of the textarea
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
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateSpecialityEnquiry;

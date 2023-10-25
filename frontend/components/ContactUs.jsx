"use client"


import { useState, useEffect } from "react"

const ContactUs = ({toggleModal, setToggleModal}) => {

  const handleCloseModal = () => {
    setToggleModal(false)
  }



  return (
    <div onClick={(e) => e.stopPropagation()} className="z-10 absolute left-[30%] mt-32 top-[15%] h-[auto]  bg-white w-[40%] p-10 border-2 rounded-md shadow-2xl text-black font-worksans">

      <div className="flex justify-between items-center"> 
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <button className="" onClick={() => handleCloseModal()} >X</button>
      </div>

      
      <hr className="mx-[-2.5rem] my-4" />
      <form 
        className=""
        action=""
      >
        <label className="flex flex-col gap-2 my-2"  htmlFor="">
          Name
          <input 
            type="text"
            placeholder=""
            className="border-2 border-gray-300 rounded-md p-2 font-laila" 
          />
        </label>

        <label className="flex flex-col gap-2 my-2"  htmlFor="">
          Email
          <input 
            type="email"
            placeholder=""
            className="border-2 border-gray-300 rounded-md p-2" 
          />
        </label>

        <label className="flex flex-col gap-2"  htmlFor="">
          Message to Owner
          <textarea 
            placeholder="Type your message to the owner here"
            className="border-2 border-gray-300 rounded-md p-3" 
            rows="5"   // this sets the height of the textarea
            cols="50"  // this sets the width of the textarea
          ></textarea>
        </label>

        <div className='py-6 flex gap-4 justify-center'>
          <button 
            className="bg-teal-700 hover:bg-orange-500 text-white rounded-md p-2 transition duration-700"
            type="submit"
          >
            Submit
          </button>

          <button className="bg-teal-700 text-white rounded-md p-2 hover:bg-orange-500 transition duration-700">
            Cancel
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default ContactUs
"use client"


import { useState, useEffect } from "react"

const ContactUs = ({toggleModal, setToggleModal}) => {

  const handleCloseModal = () => {
    setToggleModal(false)
  }



  return (
    <div onClick={(e) => e.stopPropagation()} className="z-200 fixed left-[35%] mb-40 top-[25%] h-[auto] bg-gray-700 text-white sm:text-md lg:text-lg w-[30%] p-7  rounded-md">

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold mb-2">Contact Us</h1>
        <button className="" onClick={() => handleCloseModal()} >X</button>
      </div>
      <span className="">We would love to hear from you!</span>


      <hr className="mx-[-1.75rem] my-4" />
      <form
        className=""
        action=""
      >

        <label className="flex flex-col gap-2 my-2"  htmlFor="">
          Name
          <input
            type="text"
            placeholder=""
            className="outline-none text-black border-2 border-none rounded-md p-2 "
          />
        </label>

        <label className="flex flex-col gap-2 my-2"  htmlFor="">
          Email
          <input
            type="email"
            placeholder=""
            className="outline-none text-black border-2 border-none rounded-md p-2"
          />
        </label>


        <label className="flex text-white flex-col gap-2 my-2"  htmlFor="">
          Subject Line
          <input
            type="text"
            placeholder=""
            className="outline-none border-2 text-black border-none rounded-md p-2"
          />
        </label>

        <label className="flex flex-col gap-2"  htmlFor="">
          Message to Priyada
          <textarea
            placeholder="Type your message to the Priyada here"
            className="outline-none border-2 text-black border-none resize-none  rounded-md p-3"
            rows="5"   // this sets the height of the textarea
            cols="50"  // this sets the width of the textarea
          ></textarea>
        </label>

        <div className='py-6 flex gap-4 justify-center'>
          <button
            className="bg-teal-700 font-semibold hover:bg-stone-500 text-white rounded-md p-2 transition duration-700"
            type="submit"
          >
            Submit
          </button>

          <button className="bg-teal-700 font-semibold text-white rounded-md p-2 hover:bg-stone-500 transition duration-500">
            Cancel
          </button>
        </div>

      </form>
    </div>
  )
}

export default ContactUs

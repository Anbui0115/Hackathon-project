"use client"
import Link from "next/link"
import axios from "axios"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"
import { UserGlobalState } from "@/context/UserContext";

const CreateTestimonial = ({ isOpen, onRequestClose }) => {
  const { sessionUser, setSessionUser, session, setSession } = UserGlobalState();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    testimonial: '',
    role: 'Student at Priyada Arts', // Added 'role' to the initial state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { firstName, lastName, testimonial, role } = formData; // Changed 'content' to 'testimonial'

  const handleCloseModal = () => {
    onRequestClose();
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/testimonials/', {
          first_name: firstName,
          last_name: lastName,
          content: testimonial,
          role: role,});
        console.log("THIS IS RESPONSE",response)
        if (response) {
          alert("Thank You For Leaving a Testimonial!");
          handleCloseModal();
          router.push("/");
        }
      } catch (error) {
        console.error(error);
        alert("FAIL TO CREATE A TESTIMONIAL");
      }
    };


  if (!isOpen) {
    return null; // Do not render the modal if isOpen is false
  }
  else if (!sessionUser) {
    alert("Please Login First.");
    router.push('/login')
  }
  else {
    return (
      <div onClick={(e) => e.stopPropagation()} className="z-10 fixed left-[30%] top-[15%] text-2xl h-[auto] bg-lightcream w-[40%] p-10 border-2 rounded-md shadow-2xl font-worksans">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Leave a Testimonial</h1>
          <button className="" onClick={() => handleCloseModal()}>X</button>
        </div>
        <form
          onSubmit={handleSubmit}
          className=""
          action=""
        >
          <label className="flex flex-col gap-2 my-2" htmlFor="firstName">
            First Name
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className="border-2 border-gray-300 rounded-md p-2"
            />
          </label>

          <label className="flex flex-col gap-2 my-2" htmlFor="lastName">
            Last Name
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="border-2 border-gray-300 rounded-md p-2"
            />
          </label>

          <label>
            <div>Who are you?</div>
            <select
              className="text-black mt-5 mb-5"
              name="role"
              value={role}
              onChange={handleChange}
            >
              <option value="Student at Priyada Arts">Student at Priyada Arts</option>
              <option value="Parent at Priyada Arts">Parent at Priyada Arts</option>
              <option value="Collaborator">Collaborator</option>
              <option value="Critic/Mentor/Other">Critic/Mentor/Other</option>
            </select>
          </label>

          <label className="flex flex-col gap-2" htmlFor="testimonial">
            Testimonial
            <textarea
              name="testimonial"
              value={testimonial}
              onChange={handleChange}
              placeholder="Leave your testimonial here"
              className="border-2 border-gray-300 rounded-md p-3"
              rows="5"
              cols="50"
            ></textarea>
          </label>

          <div className='py-6 flex gap-4 justify-center'>
            <button
              className="bg-teal-700 font-semibold hover:bg-stone-500 text-white rounded-md p-2 transition duration-700"
              type="submit"
            >
              Submit
            </button>

            <button className="bg-teal-700 font-semibold text-white rounded-md p-2 hover:bg-stone-500 transition duration-700" onClick={handleCloseModal}>
              Cancle
            </button>
          </div>
        </form>
      </div>
    );
  };
}

export default CreateTestimonial;

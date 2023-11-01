import { useState } from "react";

const ContactUs = ({ toggleModal, setToggleModal }) => {
  const handleCloseModal = () => {
    setToggleModal(false);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white">
      <div className="bg-white max-w-md w-full mx-6 sm:mx-auto p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 text-black">Contact Us</h1>
          <button className="text-black" onClick={handleCloseModal}>
            X
          </button>
        </div>
        <p className="text-gray-600 mb-4">We would love to hear from you!</p>
        <hr className="my-4" />
        <form action="">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="subject">
              Subject Line
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="message">
              Message to Priyada
            </label>
            <textarea
              id="message"
              placeholder="Type your message to Priyada here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black resize-none"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-black text-white font-semibold rounded-md px-4 py-2 mr-4 hover:bg-gray-900 transition duration-300" type="submit">
              Submit
            </button>
            <button className="bg-gray-300 text-black font-semibold rounded-md px-4 py-2 hover:bg-gray-400 transition duration-300" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

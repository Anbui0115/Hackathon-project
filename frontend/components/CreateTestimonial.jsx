"use client"

import React , {useState }from 'react';

const CreateTestimonial = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    testimonial: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { firstName, lastName, content, role } = formData;

  if (!isOpen) {
    return null; // Do not render the modal if isOpen is false
  }

  const handleCloseModal = () => {
    onRequestClose();
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    const handleSubmit = (e) => {
      e.preventDefault();
    
      fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          content,
          role
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Handle success
            console.log('Testimonial submitted successfully');
          } else {
            // Handle errors
            console.error('Failed to submit testimonial');
          }
        })
        .catch((error) => {
          // Handle network errors
          console.error('Network error:', error);
        });
    
      // Reset the form or close the modal
      setFormData({
        firstName: '',
        lastName: '',
        testimonial: '',
        role:'',
      });
      onRequestClose();
    };
    
  }

  return (
    <div onClick={(e) => e.stopPropagation()} className="z-10 fixed left-[30%] top-[15%] text-2xl h-[auto] bg-lightcream w-[40%] p-10 border-2 rounded-md shadow-2xl font-worksans">
      {/* Modal content */}
      {/* <button className="" onClick={handleCloseModal}>X</button> */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Leave a Testimonial</h1>
        <button className="" onClick={() => handleCloseModal()} >X</button>
      </div>
     <form onSubmit={handleSubmit}
        className=""
        action=""
      >
        <label className="flex flex-col gap-2 my-2"  htmlFor="">
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

        <label className="flex flex-col gap-2 my-2"  htmlFor="">
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


        {/* add another Select field for role: student, parent, collaborator, critic */}

        <select
          className=""
          id=""
          defaultValue=""
          name="Role"
        >
          <option  disabled>Role</option>
          <option  value="1">Collaborator</option>
          <option  value="2">Parent at Priyada Arts</option>
          <option  value="3">Student at Priyada Arts</option>
        </select>

        <label className="flex flex-col gap-2"  htmlFor="">
          Testimonial
          <textarea
            placeholder="Type your testimonial here"
            className="border-2 border-gray-300 rounded-md p-3"
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

          <button className="bg-teal-700 font-semibold text-white rounded-md p-2 hover:bg-stone-500 transition duration-700">
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateTestimonial;

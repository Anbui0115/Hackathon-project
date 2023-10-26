import React from 'react'


const DanceRegistration = () => {
  return (
    <div className='z-20 absolute left-[30%] mt-32 h-auto bg-lightcream w-[40%] p-10 border-2 rounded-md shadow-2xl text-black font-worksans'>
      <div className='flex justify-between '>
        <h1 className='text-3xl font-bold mb-2 '>Register For Dance Lessons</h1>
      </div>
      <hr className='mx-[-2.5rem] my-[4rem]' />
      <form>
        <label >
          <div>How Many Years of Dance Experience do you have?</div>
          <select>
            <option value="Beginner">Beginner: 0-3 years of experience</option>
            <option value="Intermediate">Intermediate: 3-6 years of experience</option>
            <option value="Advanced">Advanced: 6-10 years of experience</option>
            <option value="Senior">Senior: 10+ years of experience</option>
          </select>

          <input
            type="submit"
            className=''

          />

        </label>

        <label>
          <div>Tell us more about your background, dance aspirations or any specific requirements you have. Do you practice any other styles or artforms? How long have you been dancing? What are you hoping to learn from your time at Priyada Arts? When are you looking to join classes? Whether you're looking to join a regular class or have a special request, we're here to assist you.</div>
          <textarea
            placeholder='Ex. Hi! I have 10 years of experience in Bharathanatyam and have practiced a few other styles as well briefly. I am hoping to expand my peformance skills and technique nuances under your mentorship.'>

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
  )
}

export default DanceRegistration

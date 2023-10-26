import React from 'react'


const DanceRegistration = () => {
  return (
    <div className='z-20 absolute left-[30%] mt-32 h-auto bg-inherit w-[40%] p-10 border-none rounded-md shadow-2xl text-cream font-worksans'>
      <div className='flex justify-between '>
        <h1 className='text-3xl font-bold mb-2 '>Register For Dance Lessons</h1>
      </div>
      <hr className='mx-[-2.5rem] my-[4rem]' />
      <form>
        <label >
          <div>How Many Years of Dance Experience do you have?</div>
          <select className='text-black'>
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
          <div>What is your age? </div>
          <div>(Why we ask this: We want to place you in the most appropriate group for your age and skill level)</div>
        <input
          placeholder="Ex. 6"/>
        </label>

        <label>
          <div>Where are you located? (We offer in-person and online classes)</div>
          <input
          placeholder='Fremont, CA'
          />
        </label>

        <label>
          <div>Please tell us more about your background, experience, dance aspirations or any specific requirements you have to help us get to know you better!</div>

          <div>1. Do you practice any other dance styles or art forms? </div>
          <div>2. How long have you been dancing?</div>
          <div>3. What are you hoping to learn from your time at Priyada Arts?</div>
          <div>4. When are you looking to start attending lessons?</div>
          <div>Whether you're looking to join regular classes or have a special request, we look forward to working with you!</div>
          <textarea
          className='bg-black text-white  border-none '
            placeholder='Ex. Hi! I have 10 years of experience in Bharathanatyam and have practiced a few other styles as well briefly. I am hoping to expand my peformance skills and technique nuances under your mentorship.'
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
  )
}

export default DanceRegistration

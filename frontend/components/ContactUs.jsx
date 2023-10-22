"use client"

const ContactUs = ({toggleModal, setToggleModal}) => {

  const handleCloseModal = () => {
    setToggleModal(false)
  }

  return (
    <div onClick={(e) => e.stopPropagation()} className="z-10 absolute left-[30%] top-[15%] h-[auto] bg-white w-[40%] p-10 border-2 rounded-md shadow-2xl">

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
            className="border-2 border-gray-300 rounded-md p-2" 
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
        
      </form>
    </div>
  )
}

export default ContactUs
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-full h-screen bg-orange-50 flex items-center justify-center">

      <div className="z-20 border-2 bg-white p-6 rounded-md w-[400px] text-center mb-32 shadow-2xl ">
        <div>
          <span className="text-3xl font-bold">Welcome back</span>
          <hr className="mx-2 my-4" />

          <div>OAuth Google Login / Sign Up</div>
          <div>OAuth Facebook Login / Sign Up</div>


          <div className="flex items-center justify-center mt-4 mb-4">
            <hr className="flex-1 mx-2" />
            <span> OR </span>
            <hr className="flex-1 mx-2" />
          </div>


          <form className="flex flex-col gap-4" action="">
            <input 
              type="email" 
              placeholder="Email address"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <input 
              type="password" 
              placeholder="Password"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <button type="submit" className="w-full p-3 bg-cyan-700 text-white rounded-md font-semibold hover:bg-gray-600 transition duration-700">
              Continue
            </button>

            <div>
              <span>Already have an account?</span>
              <Link href="/login" className="ml-2 underline text-cyan-700 font-semibold">Sign In</Link>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default SignUp;

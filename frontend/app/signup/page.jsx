"use client"
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserGlobalState } from "@/context/UserContext";

//TODO authentication in global state
//TODO user set in global state
//TODO Redirect tested
//TODO Find what I need from authenticate

const SignUp = () => {
  const {isAuthenticated, setIsAuthenticated, user, setUser} = UserGlobalState()
  const router = useRouter()

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    authorization: "student",
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
  })

  const signUpSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/auth/signup", form)

      if (response) {
        alert("Sign Up Successful").then(router.push("/"))
      }
    } catch (error) {
      console.log(error)
      alert("Sign Up Failed")
    }
  }

  // useEffect(() => {
  //   const fetch = async () => {
  //     const authenticate = await axios.get("http://127.0.0.1:5000/api/auth")

  //   }
  // }, [])


  return (
    <div className="w-full h-screen bg-orange-50 flex items-center justify-center">

      <div className="z-20 border-2 bg-white p-6 rounded-md w-[400px] text-center mb-32 shadow-2xl ">
        <div>
          <span className="text-3xl font-bold">Sign Up</span>
          <hr className="mx-2 my-4" />

          <div>OAuth Google Login / Sign Up</div>
          <div>OAuth Facebook Login / Sign Up</div>


          <div className="flex items-center justify-center mt-4 mb-4">
            <hr className="flex-1 mx-2" />
            <span> OR </span>
            <hr className="flex-1 mx-2" />
          </div>


          <form onSubmit={signUpSubmit} className="flex flex-col gap-4" action="">

            <input 
              type="text" 
              value={form.username}
              onChange={(e) => setForm({...form, username: e.target.value})}
              placeholder="Username"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />
            
            <input 
              type="text" 
              value={form.first_name}
              onChange={(e) => setForm({...form, first_name: e.target.value})}
              placeholder="First Name"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <input 
              type="text" 
              value={form.last_name}
              onChange={(e) => setForm({...form, last_name: e.target.value})}
              placeholder="Last Name"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <input 
              type="text" 
              value={form.address}
              onChange={(e) => setForm({...form, address: e.target.value})}
              placeholder="Address"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <input 
              type="email" 
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              placeholder="Email address"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <input 
              type="number" 
              value={form.phone_number}
              onChange={(e) => setForm({...form, phone_number: e.target.value})}
              placeholder="Phone Number"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <input 
              type="password" 
              placeholder="Password"
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <button type="submit" className="w-full p-3 bg-cyan-700 text-white rounded-md font-semibold hover:bg-gray-600 transition duration-700">
              Submit
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

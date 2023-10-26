"use client"
import Link from "next/link"
import axios from "axios"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

  const Login = () => {
    const router = useRouter()
    const [form, setForm] = useState({
      email: "",
      password: ""
    })

    const handleDemo = async (e) => {
      e.preventDefault();
    
      const demoData = {
        email: "priyankaraghuramandance@gmail.com",
        password: "priyadaarts",

      };

    
      const response = await axios.post('http://127.0.0.1:5000/api/auth/login', demoData, { withCredentials: true });
    
      console.log(response, 'response');
      router.push('/')
    }
    
    const loginSubmit = async (e) => {
      e.preventDefault();
  

    }
    

    useEffect(() => {
      const authenticate = async () => {
        const data = await axios.get("http://127.0.0.1:5000/api/auth")
        console.log(data, "authenticate")
      }
      authenticate()
    }, [])

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


          <form className="flex flex-col gap-4" onSubmit={loginSubmit} action="">
            <input 
              type="email" 
              value={form.email}
              placeholder="Email address"
              className="border-2 p-2 w-full rounded-md border-gray-300"
              onChange={(e) => setForm({...form, email: e.target.value})}  
            />

            <input 
              type="password" 
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              className="border-2 p-2 w-full rounded-md border-gray-300"  
            />

            <button type="submit" className="w-full p-3 bg-cyan-700 text-white rounded-md font-semibold hover:bg-gray-600 transition duration-700">
              Login
            </button>

            <button onClick={handleDemo} className="w-full p-3 bg-cyan-700 text-white rounded-md font-semibold hover:bg-gray-600 transition duration-700">
              Demo Login
            </button>

            <div>
              <span>Don't have an account?</span>
              <Link href="/signup" className="ml-2 underline text-cyan-700 font-semibold">Sign Up</Link>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Login
"use client"
import React, {useState, useEffect} from 'react'
import DanceClassCard from "@/components/DanceClassCard"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { UserGlobalState } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import axios from 'axios'; // Import Axios or another HTTP library

// Account Info
// Billing
// Registered Classes Information
// timer Log out

const YourAccount = () => {
  const router = useRouter()
  const { sessionUser, setSessionUser} = UserGlobalState()

  console.log(sessionUser)

  const [danceClasses, setDanceClasses] = useState([])


  useEffect(() => {
    // Make an HTTP request to get registrations from the backend
    axios.get('http://127.0.0.1:5000/api/danceclassregistrations')
      .then((response) => {
        const fetchedClasses = response.data.dance_class_registrations;
        setDanceClasses(fetchedClasses);
        console.log('this is fetchedClasses',fetchedClasses)
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);



  useEffect(() => {
    if (!sessionUser) {
      router.push("/")
    }
  }, [sessionUser])

  return (
    <div>
      <NavBar/>
      <div className="text-lightcream mx-24 flex">

        <div className="flex-1 flex-col border-2 p-8 m-4 shadow-xl rounded-md">
          <h2 className="text-2xl font-semibold underline mb-4">Account Information</h2>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Username</div>
            <div>{sessionUser?.username}</div>
          </div>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Full Name</div>
            <div>{sessionUser?.first_name} {sessionUser?.last_name}</div>
          </div>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Email</div>
            <div>{sessionUser?.email}</div>
          </div>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Address</div>
            <div>{sessionUser?.address}</div>
          </div>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Phone Number</div>
            <div>{sessionUser?.phone_number}</div>
          </div>


        </div>

        <div className="flex-1 flex-col border-2 p-8 m-4 shadow-xl rounded-md">
          <h2 className="text-2xl font-semibold underline mb-4">Billing Information</h2>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Username</div>
            <div>{sessionUser?.username}</div>
          </div>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Full Name</div>
            <div>{sessionUser?.first_name} {sessionUser?.last_name}</div>
          </div>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Email</div>
            <div>{sessionUser?.email}</div>
          </div>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Address</div>
            <div>{sessionUser?.address}</div>
          </div>

          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">Phone Number</div>
            <div>{sessionUser?.phone_number}</div>
          </div>
        </div>
      </div>


      <div className="mx-24 flex">
        <div className="border-2 p-8 m-4 shadow-xl rounded-md w-full">
          <h2 className="text-2xl text-lightcream font-semibold underline mb-4">Registered Classes / Classes</h2>
        </div>
        <div>
           {danceClasses.map((danceclass, index) => (
            <div key={index} className="p-4 z-1">
              <DanceClassCard danceclass={danceclass} />
            </div>
          ))}

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default YourAccount

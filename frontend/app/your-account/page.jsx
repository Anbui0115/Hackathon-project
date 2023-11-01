"use client"
import React, { useState, useEffect } from 'react'
import DanceClassCard from "@/components/DanceClassCard"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { UserGlobalState } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import axios from 'axios'; // Import Axios or another HTTP library
import ChatBot from '@/components/ChatBot'

// Account Info
// Billing
// Registered Classes Information
// timer Log out

const YourAccount = () => {
  const router = useRouter()
  const { sessionUser, setSessionUser } = UserGlobalState()

  console.log(sessionUser)

  const [danceClasses, setDanceClasses] = useState([])

  const danceLevels = {
    "Beginner": {
      "id": 1,
      "class_one": "Monday at 5:00 pm",
      "class_two": "Thursday at 6:00 pm",
      "level": "Beginner",
      "description": "Fundamentals & Basics: Adavus, Jathis, Mudras, Padha Bhedas and Theory"
    },
    "Intermediate": {
      "id": 2,
      "class_one": "Monday at 6:00 pm",
      "class_two": "Friday at 6:00 pm",
      "level": "Intermediate",
      "description": "Fundamentals & Items: Pushpanjalis, Alarippus, Jathiswarams, Dance Theory, etc"
    },
    "Advanced": {
      "id": 3,
      "class_one": "Monday at 7:00 pm",
      "class_two": "Saturday 9:30 am",
      "level": "Advanced",
      "description": "Advanced Dance items: Padhams, Varnams, Javalis, etc"
    },
    "Senior": {
      "id": 4,
      "class_one": "Available on request",
      "class_two": "Available on request",
      "level": "Senior",
      "description": "One-on-One mentorship and training available for senior artists looking to sharpen their performance skills"
    }
  };



  useEffect(() => {
    axios.get('http://localhost:5000/api/danceclassregistrations/')
      .then((response) => {

        console.log("THIS IS RESPONSE IN FETCH FOR ALL DANCE REG:", response)
        const fetchedClasses = response.data.dance_class_registrations;
        setDanceClasses(fetchedClasses);
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  // Move the logic to get current level inside the component
  let currentLevel = [];
  if (danceClasses.length > 0) {
    const classId = danceClasses[0]?.dance_class_id; // Assuming danceClasses is an array
    currentLevel = Object.values(danceLevels).filter(classItem => classItem.id === classId);
  }

  useEffect(() => {
    if (!sessionUser) {
      router.push("/")
    }
  }, [sessionUser, router]);


  console.log("THIIS IS CURRENT LEVEL", currentLevel)
  console.log("THIS IS DANCECLASSES", danceClasses)
  return (
    <div>
      <NavBar />
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
        <h2 className="text-2xl text-lightcream font-semibold underline mb-4">Registered Classes & Class Schedules</h2>

        <div className='text-lightcream'>
          {/* You are Registered for the {sessionUser?.authorization} level classes */}
        </div>

        <div>
          {currentLevel.map((danceClass, index) => (
            <div key={index} className="text-lightcream p-4 z-1">
              <h3>Class: {danceClass.level}</h3>
              <p>ID: {danceClass.id}</p>
              <p>Class One Schedule: {danceClass.class_one}</p>
              <p>Class Two Schedule: {danceClass.class_two}</p>
              <p>Description: {danceClass.description}</p>
              {/* Add additional information you want to display */}
            </div>
          ))}
        </div>
      </div>
    </div>

      <Footer />
      <ChatBot />
    </div>
  )
}

export default YourAccount

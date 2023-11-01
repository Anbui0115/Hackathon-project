"use client";
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { UserGlobalState } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ChatBot from '@/components/ChatBot';

const YourAccount = () => {
  const router = useRouter();
  const { sessionUser } = UserGlobalState();

  const [danceClasses, setDanceClasses] = useState([]);

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
        console.log("THIS IS RESPONSE IN FETCH FOR ALL DANCE REG:", response);
        const fetchedClasses = response.data.dance_class_registrations;
        setDanceClasses(fetchedClasses);
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  let currentReg = [];
  if (danceClasses.length > 0) {
    currentReg = danceClasses.filter(classItem => classItem?.user_id === sessionUser?.id);
    console.log("CURRENT Reg IS", currentReg);
  }

  useEffect(() => {
    if (!sessionUser) {
      router.push("/");
    }
  }, [sessionUser, router]);

  console.log("THIS IS CURRENT reg", currentReg);
  console.log("THIS IS DANCE CLASSES", danceClasses);

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
            {currentReg?.length > 0 ? currentReg?.map((danceReg, index) => (
              <div key={index} className="text-lightcream p-4 z-1">
                <h3>Classes You Are Currently Registered For</h3>
                <div>{danceLevels[danceReg.dance_class_id].level}</div>
                <div>Class One: {danceLevels[danceReg.dance_class_id].class_one}</div>
                <div>Class Two: {danceLevels[danceReg.dance_class_id].class_two}</div>
                <div>Your registration is {danceReg.is_approved === true ? "Approved" : "Not Approved"}</div>
              </div>
            )) : null}
          </div>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default YourAccount;

"use client";
import React, { useState } from 'react';
import './classes.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import DanceRegistration
 from '@/components/DanceRegistration';

const Classes = () => {
    // Define state variables to manage user input
    const [selectedClass, setSelectedClass] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');


    return (
        <>
            <div className='classes-page'>
                <NavBar/>
                <div className='classes-page-title'>
                    <h1>CLASSES</h1>
                </div>
                <div className='classes-page-container'>
                    <div className="left-col"></div>
                    <div className='center-col'>
                        <h2>Upcoming Classes</h2>
                    </div>
                    <div className='right-col'></div>
                </div>
                <Footer/>
            </div>
            <ChatBot />
        </>
    );
};

export default Classes;

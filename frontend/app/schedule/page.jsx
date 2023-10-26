"use client";
import React, { useState } from 'react';
import './schedule.css';
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
                        {/* <h2>Upcoming Classes</h2> */}
                        <div className='class-schedule'>

                            <div className='day'>Monday</div>
                            
                            <div className='flex-colomn '>
                                <div className='class'>
                                    <div className='level'>Beginner</div>
                                    <div className='w-20'></div>
                                    <div className='time'>5:00 pm</div>
                                </div>

                                <div className='class' >
                                    <div className='level'>Intermedia</div>
                                    <div className='w-20'></div>
                                    <div className='time'>6:00 pm</div>
                                </div>

                                <div className='class' >
                                    <div className='level'>Adults(Seniors)</div>
                                    <div className='w-20'></div>
                                    <div className='time'>7:00 pm</div>
                                </div>

                            </div>

                        </div>

                        <div className='class-schedule'>
                            <div className='day'>Thursday</div>

                            <div className='class'>
                                <div className='level'>Beginner</div>
                                <div className='w-20'></div>
                                <div className='time'>5:00 pm</div>
                            </div>

                        </div>

                        <div className='class-schedule'>
                            <div className='day'>Friday</div>

                            <div className='class' >
                                <div className='level'>Intermedia</div>
                                <div className='w-20'></div>
                                <div className='time'>6:00 pm</div>
                            </div>

                        </div>

                        <div className='class-schedule'>
                            <div className='day'>Saturday</div>
                            
                            <div className='class' >
                                <div className='level'>Adults(Seniors)</div>
                                <div className='w-20'></div>
                                <div className='time'>9:30 am</div>
                            </div>

                        </div>
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
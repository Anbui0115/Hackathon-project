import React from 'react';
import './classes.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import DanceRegistration
 from '@/components/DanceRegistration';

const Classes = () => {
    return (
        <>
            <div className='classes-page'>
                <NavBar className='navbar'/>
                <div className='classes-page-content'>
                    <h1 className='classes-page-title'>classes</h1>
                    <div className='classes-page-text'>



                    </div>
                </div>

                 <DanceRegistration />
                <Footer/>
            </div>
            <ChatBot />
        </>
    )
}

export default Classes;

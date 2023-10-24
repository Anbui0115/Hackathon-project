import React from 'react';
import './services.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Services = () => {
    return (
        <>
            <NavBar />
            <div className='services-page'>
                <div>
                    services page
                </div>
                <Footer />
                <ChatBot />
            </div>
        </>
    )
}

export default Services;
import React from 'react';
import './services.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import CreateSpecialityEnquiry from '@/components/SpecialtyEnquiryForm';

const Services = () => {
    return (
        <>
            <NavBar />
            <div className='services-page'>
                <div>
                    services page
                      <CreateSpecialityEnquiry />
                </div>
                <Footer />
                <ChatBot />
            </div>
        </>
    )
}

export default Services;

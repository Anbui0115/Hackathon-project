import React from 'react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import CreateSpecialityEnquiry from '@/components/SpecialtyEnquiryForm';

const Services = () => {
    return (
        <>
            <NavBar />
                <div className="">
                      <CreateSpecialityEnquiry />
                </div>
                <Footer />
                <ChatBot />
        </>
    )
}

export default Services;

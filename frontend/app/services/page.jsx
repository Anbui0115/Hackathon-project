import React from 'react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import CreateServiceEnquiry from '@/components/ServiceEnquiryForm';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
    return (
        <>
            <NavBar />
            <div className='speciality-page-container'>
                <div className='speciality-section-container'>
                    <div className='speciality-card'>
                        <ServiceCard />
                    </div>
                </div>

                 <div className="speciality-enquiry-form-container">
                      <CreateServiceEnquiry />
                </div>

            </div>
                <Footer />
                <ChatBot />
        </>
    )
}

export default Services;

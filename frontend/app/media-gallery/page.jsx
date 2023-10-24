import React from 'react';
import './media-gallery.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const MediaGallery = () => {
    return (
        <>
            <NavBar />
            <div className='media-gallery-page'>
                <div>
                    media gallery page
                </div>
                <Footer />
                <ChatBot />
            </div>
        </>
    )
}

export default MediaGallery;
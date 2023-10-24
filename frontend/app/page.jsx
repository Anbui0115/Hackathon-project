"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import ChatBot from '@/components/ChatBot'
import CreateTestimonial from '@/components/CreateTestimonial'
import MyButton from '@/components/MyButton'
import './homepage.css'
export default function Home() {
  const [dark, setDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <div className='home-page'>
        <NavBar />
        <Testimonial />
         <ChatBot />
      <MyButton onButtonClick={openModal} />
      <CreateTestimonial isOpen={isModalOpen} onRequestClose={closeModal} />
        <Footer/>
      </div>
      
    </main>
  )
}



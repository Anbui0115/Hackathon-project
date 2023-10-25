"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import ChatBot from '@/components/ChatBot'
import CreateTestimonial from '@/components/CreateTestimonial'
import NewTestimonialButton from '@/components/NewTestimonialButton'
import './homepage.css'
import DanceAppointment from '@/components/DanceAppointment'
export default function Home() {
  const [dark, setDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  return (


    <main className="bg-black flex w-full h-full relative min-h-screen flex-col justify-between">
      <NavBar />
      <DanceAppointment />
      <Testimonial />
      <NewTestimonialButton onButtonClick={openModal} />
      <CreateTestimonial isOpen={isModalOpen} onRequestClose={closeModal} />
      <Footer />
      <ChatBot />
      </main>
  )
}

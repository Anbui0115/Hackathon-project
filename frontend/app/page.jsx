"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import ChatBot from '@/components/ChatBot'
import CreateTestimonial from '@/components/CreateTestimonial'
import NewTestimonialButton from '@/components/NewTestimonialButton'
import AboutArtist from '@/components/AboutArtist'
import AboutStudio from '@/components/AboutStudio'
import './homepage.css'
import DanceRegistration from '@/components/DanceRegistration'
import CreateSpecialityEnquiry from '@/components/SpecialtyEnquiryForm'
export default function Home() {
  const [dark, setDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  return (


    <main className="bg-black flex w-full h-full relative min-h-screen flex-col justify-between">
      <NavBar />
      <AboutArtist/>
      <AboutStudio/>

      <Testimonial />
      <NewTestimonialButton onButtonClick={openModal} />
      <CreateTestimonial isOpen={isModalOpen} onRequestClose={closeModal} />

      {/* <DanceRegistration /> */}
      {/* <CreateSpecialityEnquiry /> */}
      <Footer />
      <ChatBot />
    </main>
  )
}

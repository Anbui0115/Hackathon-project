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
import CreateSpecialityEnquiry from '@/components/SpecialtyEnquiryForm'
import { UserGlobalState } from '@/context/UserContext'



export default function Home() {
  const [dark, setDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { sessionUser, setSessionUser} = UserGlobalState()

  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);
  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = JSON.parse(localStorage.getItem("user"));
    if (isLoggedIn === "true" && user) {
      setSessionUser(user);
      
    }
    console.log(user, 'user')
  }, []);

  return (
    <main className="bg-black flex w-full h-full relative min-h-screen flex-col justify-between">
      <NavBar />
      <AboutArtist/>
      <AboutStudio/>
      <Testimonial />
      <NewTestimonialButton onButtonClick={openModal} />
      <CreateTestimonial isOpen={isModalOpen} onRequestClose={closeModal} />
      {/* <CreateSpecialityEnquiry /> */}
      <Footer />
      <ChatBot />
    </main>
  )
}

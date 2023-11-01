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
import CreateSpecialityEnquiry from '@/components/ServiceEnquiryForm'
import { UserGlobalState } from '@/context/UserContext'
import SplashPagePicture from '@/components/SplashPagePicture'
import BackgroundCarousel from '@/components/BackgroundCarousel'



export default function Home() {
  const [dark, setDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { sessionUser, setSessionUser} = UserGlobalState()

   const images = [ "/splash_pic.JPG","/splash_page/Splash page.jpg", "/artist_pictures/Artist_Picture (39).jpg", "/splash_page/Splash page.jpg", "/splash_page/Splash Page(3).jpg"];


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

      <SplashPagePicture />
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

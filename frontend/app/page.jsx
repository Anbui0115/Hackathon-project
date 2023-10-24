"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import ChatBot from '@/components/ChatBot'

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className="">
      <NavBar />
      <Testimonial />

      <Footer/>
      <ChatBot />
      
    </main>
  )
}



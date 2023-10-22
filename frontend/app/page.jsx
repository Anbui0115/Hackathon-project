import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Testimonial />
      <div>
      <Footer/>
      </div>
      
    </main>
  )
}



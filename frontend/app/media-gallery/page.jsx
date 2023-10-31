"use client"
import React, {useState, useEffect} from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import axios from "axios"
import Image from "next/image";




const MediaGallery =  () => {
    const [media, setMedia] = useState([])


    useEffect(() => {
        const fetchMedia = async () => {
            const response = await axios.get("http://127.0.0.1:5000/api/media")

            if (response) {
                setMedia(response.data)
            } else {
                console.log("Error fetching media")
            }
        }
        fetchMedia()
    }, [])

    console.log(media, "media")

    // const mediaImages = axios.get("http://127.0.0.1:5000/api/media")


    return (
        <>
            <NavBar />
            <div className=''>
                <div className="bg-black px-40">

                  {/* Dashboard for Media Gallery */}
                  <div className="flex justify-center text-cream gap-4 py-10">
                    <button className="p-4 bg-teal-950 rounded-md font-semibold text-xl flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-to-line"><path d="M5 3h14"/><path d="m18 13-6-6-6 6"/><path d="M12 7v14"/></svg>Upload Picture</button>
                    <button className="p-4 bg-teal-950 rounded-md font-semibold text-xl flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>Delete Picture</button>
                  </div>

                    {/* Artist Gallery */}
                    <div className="flex flex-wrap gap-6 space-x-2 justify-center">
                        <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px] rounded-sm" src="https://i.imgur.com/KaPwYnt.jpg" alt="Artist 1" />
                        <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px]" src="https://i.imgur.com/yijZPqS.jpg" alt="Artist 2" />
                        <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px]" src="https://i.imgur.com/foZaWLD.jpg" alt="Artist 3" />
                        <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px]" src="https://i.imgur.com/2f5cRvp.jpg" alt="Artist 4" />
                        <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px]" src="https://i.imgur.com/LhO4CVZ.jpg" alt="Artist 5" />
                        <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px]" src="https://i.imgur.com/KHaELcH.jpg" alt="Artist 6" />
                        <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px]" src="https://i.imgur.com/yijZPqS.jpg" alt="Artist 7" />
                    </div>


                </div>
                <Footer />
                <ChatBot />
            </div>
        </>
    )
}

export default MediaGallery;

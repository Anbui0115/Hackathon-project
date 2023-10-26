import React from 'react';
import './studio.css';
import ChatBot from '@/components/ChatBot';

const AboutStudio = () => {
    return (
        <>
            <div className=' bg-[#FFFFF0] font-semibold flex w-full h-auto relative flex-col py-32'>
                <div className='max-w-xl mx-auto text-center'>
                <h1 className='font-laila text-4xl font-bold mt-10 mb-10 text-black sm:text-3xl capitalize'>About Us</h1>
                <div className='text-xl leading-relaxed  text-[#fef3c7] sm:text-lg'>
                        <p className="mb-8 text-center text-xl text-black ">Priyada Arts, the community founded by Priyanka, is a welcoming and inclusive space for all who wish to learn and explore Bharatanatyam. The name 'Priyada' is derived from Sanskrit, and it means 'with love' (Priya=Love Da=with). True to its name, Priyada Arts is a place of warmth, creativity, and empathy.  It is the founder, Priyanka’s wish to seamlessly braid the rigorous and wholesome training imbibed by her teachers with thoughtful creativity and empathy she has come to practice as a multidisciplinary performing artist.</p>
                        <p className="mb-8 text-center text-xl text-black ">The community offers in-person and online classes to learners of all ages and backgrounds, with a curated syllabus and learning resources that cover not only practical dance lessons but also theory, dance fitness, costuming, makeup, and stagecraft. Priyada Arts is more than just a studio or a lab; it is a safe and inspiring space where artists can come together to create and grow. Priyanka has received numerous testimonials from her students and collaborators, praising her exceptional skills, passion, and dedication. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutStudio;
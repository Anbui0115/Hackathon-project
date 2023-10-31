"use client"

import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'; // Import Axios or another HTTP library

const Testimonial = () => {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    // Make an HTTP request to get testimonials from the backend
    axios.get('http://127.0.0.1:5000/api/testimonials/')
      .then((response) => {
        const fetchedTestimonies = response.data.testimonials;
        setTestimonies(fetchedTestimonies);
        console.log('this is fetchedTestimonies',fetchedTestimonies)
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  return (
    <div className=" bg-black flex flex-col items-center z-1 my-4">
      <div className=" bg-black text-cream font-poiretOne text-2xl my-8 z-1">Testimonials</div>
      <div className=" bg-black w-4/5 mx-auto">
        <Carousel
          centerMode
          showThumbs={false}
          showStatus={false}
          centerSlidePercentage={100}
          autoPlay={true}
          infiniteLoop={true}
          interval={6000}
          transitionTime={1000}
        >
          {testimonies.map((testimony, index) => (
            <div key={index} className="p-4 z-1">
              <TestimonialCard testimony={testimony} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;

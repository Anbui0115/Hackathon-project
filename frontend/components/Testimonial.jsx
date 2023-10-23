"use client"
import React from 'react'
import TestimonialCard from './TestimonialCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const testimonies = [
  {
    content: "Priyanka is a true gem in the world of Bharatanatyam. Her skills and creativity are matched only by her kindness and generosity",
    name: "Anjali S.",
    role: "Student at Priyada Arts"
  },
  {
    content: "Working with Priyanka has been a transformative experience. She has a rare combination of technical brialliance and emotional depth that makes her performances truly unforgettable.",
    name: "Rohan B.",
    role: "Collaborator"
  },
  {
    content: "Priyada Arts is more than just a dance school; it is a community that fosters growth, creativity, and belonging. Priyanka's leadership and vision are truly inspiring.",
    name: "Aparna K.",
    role: "Student at Priyada Arts"
  },
  {
    content: "Priyada Arts has been instrumental in my journey as an artist. Priyanka Akka's techniques and approach to Abhinaya and stage performance have been invaluable and inspiring and have helped me developed artistic abilities. She puts her heart and soul into each and every student, encouraging artistic freedom - something that is rare in the world of tradional arts! As a person, she is warm, loving, and genuine. I always leave class in high spirits! ",
    name: "Keerthana Y",
    role: "Student at Priyada Arts"
  },
  {
    content: "I met Priyanka on the sets of Mahabharata, and I was immmediately impressed by her techniques and enthusiasm towards Bharatanatyam. It was an immense pleasure to share the stage with her. During that period, she also helped me understand the Talams(rhythmic patterns) and certain steps that were just hard for me to grasp. But her way of guidance just made it easy. It's almost a year of learning from such a friendly and talented guru. Thank you, Priyanka!",
    name: "Pallab Kar",
    role: "Student at Priyada Arts"
  },
  {
    content: "I joined Akka's class roughly two years ago. Getting back into Bharatnatyam was intimidating but she made it easy. She was friendly and patience and helped me get the choreography even if it took multiple tries.",
    name: "Priyanka Subramanyam",
    role: "Student at Priyada Arts"
  },
  {
    content: "My daughter has been a student at Priyada Arts for the past year. I admire Priyanka's ability to create a connection with her students and a space where they can learn with ease. She is relentless in her pursuit of wanting the students to master the basics, but at the same time makes the whole experience of a class so enjoyable and fun. My daughter could not have asked for a more loving and encouraging guru to explore the world of dance and as a parent, I could not have asked more from a teacher! We are extremely glad to be a part of the Priyada Arts family.",
    name: "Vandana",
    role: "Parent from Priyada Arts"
  },
  {
    content: "I'm incredibly grateful to have Priyanka as my dance teacher. She not only imparts dance skills but also fosters a positive and welcoming learning environment. Her dedication to passing on her knowledge and expertise is truly commendable. The tradition of passing down knowledge from one generation to the next is vital in the world of dance and arts, and Priyanka embodies this beautifully. She goes the extra mile to explain the reasons behind Nritta and shares the rich stories and details behind Abinaya's pieces, which she has gathered during her own journey in the art.  Thanks to Priyanka, I've learned valuable lessons, not just in dance but in life as well. Her commitment to teaching this art form in the Bay area is truly appreciated. Learning dance with Priyanka has been an enlightening and joyous experience, and I'm thankful for the opportunity to be her student.",
    name: "Shubadra",
    role: "Student at Priyada Arts"
  },
  {
    content: "We were searching for a dance teacher 4 years before for our little daughter who would be caring and teach well. We found Priyanka with all these required attributes. Priyanka is an elegant, gifted, and skilled dancer who continues to learn from her mentors while she mentors all of her disciples simultaneously. Her showcases and performances were all amazing and she always brought novice choreography to the team and to herself. Her fraternity includes great theater artists and great personalities and she is still expanding the fraternity!",
    name: "Charles",
    role: "Parent at Priyada Arts"
  },
  {
    content:"My 4-year-old daughter started her Bharatnatyam lessons with Priyanka a few weeks back. Thanks to Priyanka's patient handling of students and continuous positive reinforcement, my daughter has taken up an immediate liking to Bharatnatyam. Not only does my daughter enjoy the classes, but she is eager to get back to the class every day. While Priyanka's knowledge of the art is unquestionable, the simplicity with which she imparts the forms to the students sets Priyanka apart.",
    name: "Karthik",
    role: "Parent at Priyada Arts"
  }

]


//TODO - Bonus - Transition the Cards in one at a time left and right


const Testimonial = () => {
  return (
    <div className="flex flex-col items-center my-4  "> {/* Notice the added mb-20 */}
      <div className="text-3xl font-semibold my-8 uppercase underline">Testimonials</div>

      {/* Container for Testimonials Data */}
      <Carousel
          centerMode 
          showThumbs={false} 
          showStatus={false} 
          centerSlidePercentage={30} // Adjust this as needed
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          transitionTime={1000}
      >
      
          {testimonies.map((testimony, index) => (
            <TestimonialCard key={index} testimony={testimony} />
          ))}
      </Carousel>

    </div>
  );
}


export default Testimonial

// Alternate Testimonial Card

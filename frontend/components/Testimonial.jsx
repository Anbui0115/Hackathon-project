import React from 'react'
import TestimonialCard from './TestimonialCard'

const testimonies = [
  {
    content: "Priyanka is a true gem in the world of Bharatanatyam. Her skills and creativity are matched only by her kindness and generosity",
    name: "Anjali S.",
    role: "Student at Priyada Arts"
  },
  {
    content: "Working with Priyanka has been a transformative experience. She has a rare combination of technical brialliance and emotional depth that makes her performances truly uhnforgettable.",
    name: "Rohan B.",
    role: "Collaborator"
  },
  {
    content: "Priyada Arts is more than just a dance school; it is a community that fosters growth, creativity, and belonging. Priyanka's leadership and vision are truly inspiring.",
    name: "Aparna K.",
    role: "Student at Priyada Arts"
  },
  {
    content: "Priyada Arts has been instrumental in my journey as an artist. Priyanka Akka's techniques and approach to Abhinaya and stage performance have been invaluable and inspiring and have helped me developed artistic abilities. She puts her heart and soul into each and every student, encouraging artistic freedom - something that is rare in the world of tradional arts!",
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
  }
]


//TODO - Bonus - Transition the Cards in one at a time left and right


const Testimonial = () => {
  return (
    <div className="flex flex-col items-center my-12  "> {/* Notice the added mb-20 */}
      <div className="text-3xl font-semibold my-10 uppercase underline">Testimonials</div>
      
      {/* Container for Testimonials Data */}
      <div className="flex flex-wrap justify-center gap-10 mx-12 w-full">
        {testimonies.map((testimony, index) => (
          <TestimonialCard key={index} testimony={testimony} />
        ))}
      </div>
    </div>
  );
}


export default Testimonial

// Alternate Testimonial Card
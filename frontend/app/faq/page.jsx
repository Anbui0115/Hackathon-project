import React from 'react';
import './faq.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


const FAQ = () => {
  return (
    <>
      <NavBar className='navbar' />
      <div className='faq-page'>
        <div className='faq-page-content'>
          <h1 className='faq-page-title'>Frequently Asked Questions</h1>
          <div className='faq-page-text'>
            <p>1. What is Priyada Dance School?</p>
            <p>Priyada Dance School is a renowned dance academy that offers a wide range of dance classes, focusing on various dance styles and skill levels.</p>
            <p>2. What dance styles do you offer classes in?</p>
            <p>We offer classes in a variety of dance styles, including classical Indian dances like Bharatanatyam and Kathak, as well as contemporary and fusion dance forms.</p>
            <p>3. Who can join Priyada Dance School?</p>
            <p>Our classes are open to all ages and skill levels. We have classes for children, teenagers, and adults, making it accessible to anyone interested in dance.</p>
            <p>4. How can I enroll in your dance classes?</p>
            <p>To enroll in our classes, you can visit our website and fill out the registration form, or you can contact us directly for assistance with the registration process.</p>
            <p>5. Are there any prerequisites for joining your dance classes?</p>
            <p>Most of our classes are open to beginners, but some advanced classes may require prior dance experience. Please check the class descriptions for specific requirements.</p>
            <p>6. What is the duration of each dance class?</p>
            <p>The duration of each class varies depending on the dance style and level. Generally, classes range from 45 minutes to 1 hour.</p>
            <p>7. Who are the instructors at Priyada Dance School?</p>
            <p>Our instructors are highly skilled and experienced dancers who are dedicated to teaching and promoting the art of dance. You can learn more about our instructors on our website.</p>
            <p>8. Do you offer performance opportunities for students?</p>
            <p>Yes, we organize annual recitals and performances where students can showcase their talent. Participation in these events is encouraged but not mandatory.</p>
            <p>9. What are the fees for your dance classes?</p>
            <p>The fees for our classes vary based on the type of class, duration, and level. You can find detailed pricing information on our website or by contacting us directly.</p>
            <p>10. What should I wear to dance classes?</p>
            <p>It is recommended to wear comfortable clothing that allows for ease of movement. For specific dance styles, such as Bharatanatyam, traditional dance attire may be required.</p>
            <p>11. Can I schedule a trial class before committing to regular classes?</p>
            <p>Yes, we offer trial classes for many of our courses to give you a feel for our teaching style and the dance form. Please contact us to inquire about trial class availability.</p>
            <p>12. What safety measures are in place at Priyada Dance School, especially considering the ongoing pandemic?</p>
            <p>We prioritize the safety of our students and instructors. We follow local health guidelines and have implemented safety measures, such as social distancing, mask requirements, and sanitization protocols.</p>
            <p>13. Can I hire dancers from Priyada Dance School for private events or performances?</p>
            <p>Yes, we provide the option to hire our talented dancers for private events and performances. Contact us for more information on booking our dancers.</p>
            <p>14. How can I stay updated on the latest news and events at Priyada Dance School?</p>
            <p>You can subscribe to our newsletter or follow us on social media to stay informed about upcoming events, workshops, and news related to the school.</p>
            <p>15. What is your cancellation and refund policy for classes?</p>
            <p>Our cancellation and refund policies may vary depending on the type of class. Please refer to our terms and conditions on our website or contact us for specific details.</p>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default FAQ;

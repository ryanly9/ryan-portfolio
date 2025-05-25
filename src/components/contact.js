import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div className='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">I'd love to hear your feedback Whether it's about my Projects or how I can Improve, <br/> feel free to reach out.</span>
        
        <form ref={form} className='contactForm' onSubmit={sendEmail}>
            <input type="text" name='your_name' className="name" placeholder='Your Name' />
            <input type="text" className="email" name='your_email' placeholder='Your email' required />
            <textarea className='msg' name="message" rows="5" id="" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
                <a href="mailto:example@gmail.com"><img src="/images/gmail.png" alt="sshdkah" className='link' /></a>
                <a href="tel:+1234567890"><img src="/images/phone-call.png" alt="+91 99xxxxxx" className='link' /></a>
                <a href="https://www.linkedin.com/in/ryan-ahmed127.com/" target="_blank" rel="noopener noreferrer" ><img src="/images/linkedin.png" alt="hulu@gmail.com" className='link' /></a>
            </div>
            </form></div>

    </section>
  )
}

export default Contact

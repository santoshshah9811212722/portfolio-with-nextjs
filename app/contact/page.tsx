'use client'

import '../contact/contact.css'
// import get from '../../public/assets/getimg.png'
// import messageicon from '../../public/assets/mailicon.png'
// import contacticon from '../../public/assets/contacticon.png'
// import locationicon from '../../public/assets/locationicon.png'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
function Contact() {
 
  
 
    const onSubmit = async (  event: React.FormEvent<HTMLFormElement> ) => {
      event.preventDefault();
    
      try {
        const result = await emailjs.sendForm(
          'service_cmd1fg5',    // Replace with your EmailJS service ID
          'template_alm92fp',   // Replace with your EmailJS template ID
        event.currentTarget,         // The form element
          'nTh6E3tfTrZ7m08Ch'        // Replace with your EmailJS public key (user ID)
        );
    
       alert(`Email sent successfully: ${result.text}`);
        event.currentTarget.reset();
      } catch (error) {
        console.error('Email sending error:', error);
      }
    };
  
  
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <Image src='/contact/getimg.png' alt="" width={80} height={80} />
        <h1>in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          
            <h1>Let`s talk</h1>
            <p>I`m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            
            <div className="contact-details">
                <div className="contact-detail">
                    <Image src='/contact/mailicon.png' alt=""   width={25} height={25}/>
                    <p>santosshah95@gmail.com</p>
                </div>
                <div className="contact-detail">
                <Image src='/contact/phoneicon.png' alt=""  width={25} height={25}/>
                <p>+977-9811212722</p>
                </div>
                <div className="contact-detail">
                <Image src='/contact/locationicon.png' alt="" width={25} height={25}  />
                <p>CHANDRAPUR-Rautahat,Nepal</p>
                </div>
            </div>
        </div>
        <form  onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required/>
            <label htmlFor="">Write your message here</label>
            <textarea  rows={8} placeholder='Enter your message' name='message' required/>
            <button type='submit' className='contact-submit '>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

'use client'

import './Footer.css'
// import user from '../../public/assets/user.png'
import Image from 'next/image'
// import portfoliologo from '../../assets/portfoliologo.png'
const Footer = () => {
  return (
    <div id='' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <h1 >Santosh</h1>
            <p>I am a frontend developer from Rautahat, Nepal with 1 year of experience in multiple areas like college project and Vovour Technology</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <Image src='/footer/user.png' alt="" width={20} height={20} />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Santosh Shah Sonar.All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

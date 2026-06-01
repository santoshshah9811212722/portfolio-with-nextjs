import React from 'react'
// import profile_img from '../../public/assets/profile.jpg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import Image from 'next/image';
export default function Hero() {
  return (
    <div id='home' className='hero'>
        <Image  src='/hero/profile.jpg' alt="" width={300} height={300} />
      <h1> <span>I`m Santosh Shah Sonar,</span> frontend developer based in Nepal.</h1>
      <p>I am a frontend developer from Rautahat, Nepal with 1 year of experience in multiple areas like college project and Vovour Technology</p>
      <div className="hero-action">
        <div className="hero-connect"><a className='anchor-link' href='#contact'>Connect with me</a></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}


import React from 'react'
import Footer from '../footer/page'
import Contact from '../contact/page'
import MyWork from '../mywork/page'
import Service from '../services/page'
import About from '../about/page'
import Hero from '../hero/page'
import Navbar from '../navbar/page'
// import SplashScreen from '../splashscreen/page'

const page = () => {
  return (
    <div>
      {/* <SplashScreen/> */}
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
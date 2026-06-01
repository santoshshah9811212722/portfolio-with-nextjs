'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import './MyWork.css'
import mywork_data from '../../public/assets/MyWorkData'
// import my from 'mywork/my.png'
// import arrowicon from '/mywork/arrow_right.png'

type Work = {
  w_no: string
  w_name: string
  w_img: StaticImageData
}

const MyWork = () => {
  return (
    <div id='work' className='mywork'>

      <div className="mywork-title">
        
        
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">

        {
          mywork_data.map((work: Work, index: number) => {
            return (
              <Image
                className='workimg'
                key={index}
                src={work.w_img}
                alt={work.w_name}
                width={300}
                height={300}
              />
            )
          })
        }

      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <Image src='/mywork/arrow_right.png' alt="Arrow" width={20} height={20} />
      </div>

    </div>
  )
}

export default MyWork
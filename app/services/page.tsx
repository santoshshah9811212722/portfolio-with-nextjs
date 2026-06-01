'use client'

import './services.css'
import Services_Data from '../../public/assets/ServicesData'
import Image from 'next/image'

type ServiceType = {
  s_no: string
  s_name: string
  s_desc: string
}

export default function Service() {
  return (
    <div id='services' className='services'>

      <div className="servises-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">

        {
          Services_Data.map((service: ServiceType, index: number) => {
            return (
              <div key={index} className="services-format">

                <h3>{service.s_no}</h3>

                <h2>{service.s_name}</h2>

                <p>{service.s_desc}</p>

                <div className="services-readmore">
                  <p>Read More</p>

                  <Image
                    src='/services/arrow_right.png'
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </div>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}
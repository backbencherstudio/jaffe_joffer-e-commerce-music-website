import React from 'react'
import Image from 'next/image'
import EventsImage from '@/public/events-img.jpg'
import SectionHeader from '../reusable/SectionHeader'
export default function Events() {
  return (
    <section className='bg-[image:var(--events-bg)] bg-cover h-[1146px] py-28'>
        <div className=' container '>

        

     <SectionHeader heading='Current Events' subheading='Experience electrifying live performances! Explore upcoming concerts and festivals, and grab your tickets now.' buttonText='View More Events'  />

        <div className='flex justify-center items-center mt-12 '>
           <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={EventsImage} alt='event-image'  />
        </div>

        </div>
    </section>
  )
}

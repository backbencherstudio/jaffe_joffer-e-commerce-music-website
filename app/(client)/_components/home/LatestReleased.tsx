import React from 'react'
import SectionHeader from '../reusable/SectionHeader'
import Image from 'next/image'
import LatestImg from '@/public/latest-released.jpg'


export default function LatestReleased() {
  return (
    <section className=' bg-[image:var(--latest-released)] bg-cover h-[1146px] py-24'>
      <div className='container'>
      <SectionHeader heading='Latest released songs' subheading="Discover the hottest music releases from top artists and emerging talents. Whether you're looking for chart-topping albums, exclusive singles, or limited-edition vinyl, we've got you covered." textColor='black' borderColor='black' buttonText='Discover New Music'/>

 <div className='flex justify-center items-center mt-12 '>
           <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={LatestImg} alt='latest-image'  />
        </div>

      </div>
    </section>
  )
}

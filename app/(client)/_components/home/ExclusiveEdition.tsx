import React from 'react'
import SectionHeader from '../reusable/SectionHeader'
import Image from 'next/image'
import ExclusiveImg from '@/public/exclusive-img.png'
import CustomSlider from '../reusable/CustomSlider'

export default function ExclusiveEdition() {

  const slides = [
    <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={ExclusiveImg} alt='exclusive-image' />,
    <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={ExclusiveImg} alt='exclusive-image' />,
    <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={ExclusiveImg} alt='exclusive-image' />,
  ]
  return (
    <section className='bg-[image:var(--exclusive-pattern)] bg-cover h-[1146px] py-28'>
  <div className=' container '>

        

     <SectionHeader heading='Exclusive Limited Edition Merch' subheading='Rep your favorite music bands with high-quality, stylish T-shirts! Perfect for concerts, casual wear, or as collectibles.' buttonText='View All Merchandise' textColor='black' borderColor='black'  />

        {/* <div className='flex justify-center items-center mt-12 '>
           <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={ExclusiveImg} alt='event-image'  />
        </div>
   */}

  <div>
    <CustomSlider slides={slides} sliderId='exclusive' bulletColor='#D2D2D5' activeBulletFill='#D2D2D5'/>
  </div>
        </div>
    </section>
  )
}

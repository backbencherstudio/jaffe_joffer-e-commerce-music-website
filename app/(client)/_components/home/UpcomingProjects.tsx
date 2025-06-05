import { Section } from 'lucide-react'
import React from 'react'
import SectionHeader from '../reusable/SectionHeader'
import Image from 'next/image'
import Upcoming from "@/public/upcoming.png"
import CustomSlider from '../reusable/CustomSlider'

export default function UpcomingProjects() {
  const slides=[
    <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={Upcoming} alt='upcoming-image' />,
    <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={Upcoming} alt='upcoming-image' />,
    <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={Upcoming} alt='upcoming-image' />,
  ]
  return (
    <section className='bg-black bg-cover   py-28'>
        <SectionHeader heading='Upcoming Future projects' subheading='Big things are coming! Get ready for exclusive music, limited-edition merch, and VIP concert experiences. Stay tuned! ' />

        {/* <div className='flex justify-center items-center mt-12 '>
           <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={Upcoming} alt='upcoming-image'  />
        </div> */}
        <div className='mx-6 lg:mx-0'>

        <CustomSlider slides={slides} sliderId='upcoming'  bulletColor="linear-gradient(156deg, #A57C2B 5.12%, #CFAC44 40.47%, #EACB55 65.29%, #FFEA99 86.81%)" activeBulletBorder='white'/>
        </div>
    </section>
  )
}

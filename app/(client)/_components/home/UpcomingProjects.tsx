import { Section } from 'lucide-react'
import React from 'react'
import SectionHeader from '../reusable/SectionHeader'
import Image from 'next/image'
import Upcoming from "@/public/upcoming.png"

export default function UpcomingProjects() {
  return (
    <section className='bg-black bg-cover h-[1146px] py-28'>
        <SectionHeader heading='Upcoming Future projects' subheading='Big things are coming! Get ready for exclusive music, limited-edition merch, and VIP concert experiences. Stay tuned! ' />

        <div className='flex justify-center items-center mt-12 '>
           <Image className=' w-[1200px] h-[580px] rounded-[48px]' src={Upcoming} alt='upcoming-image'  />
        </div>
    </section>
  )
}

import React from 'react'
import Hero from './_components/home/Hero'
import Events from './_components/home/Events'
import LatestReleased from './_components/home/LatestReleased'
import UpcomingProjects from './_components/home/UpcomingProjects'
import ExclusiveEdition from './_components/home/ExclusiveEdition'
 

export default function Home() {
  return (
    <div  >
      <Hero/>
      <Events/>
      <LatestReleased/>
      <ExclusiveEdition/>
      <UpcomingProjects/>
      
    </div>
  )
}

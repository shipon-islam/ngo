import AboutHero from '@/components/about/AboutHero'
import OurMission from '@/components/about/OurMission'
import WhatWeDo from '@/components/about/WhatWeDo'
import OurSponsor from '@/components/home/OurSponsor'
import OurVolunteers from '@/components/home/OurVolunteers'

export default function AboutUs() {
  return (
    <main>
        <AboutHero/>
        <OurMission/>
        <WhatWeDo/>
        <OurVolunteers/>
        <OurSponsor/>
    </main>
  )
}

export const metadata = {
  title: 'About - HMB-CO',
  description: 'Learn about HMB-CO, the team behind privacy-first AI applications.',
}

import Hero from '@/components/hero-about'
import FeaturesGallery from '@/components/features-gallery'
import Timeline from '@/components/timeline'
import FeaturesAnimation from '@/components/features-animation'
import Team from '@/components/team'
import CtaContact from '@/components/cta-contact'

export default function About() {
  return (
    <>
      <Hero />
      <FeaturesGallery />
      <Timeline />

      <FeaturesAnimation />
      <Team />
      <CtaContact />
    </>
  )
}

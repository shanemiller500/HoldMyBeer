export const metadata = {
  title: 'Home - HMB-CO | Solutions for Modern Humans & Businesses',
  description: 'Discover HMB-CO’s cutting-edge AI applications—like ApplyPro & Umail—that drive innovation, streamline workflows, and accelerate business growth. From productivity to communications, our intelligent solutions empower organizations to thrive in the digital age.',
  keywords: [
    'HMB-CO',
    'HMBCO',
    'Hold My Beer',
    'Hold My Beer Co',
    'ApplyPro',
    'Umail',
    'AI technology',
    'AI tools',
    'AI apps',
    'Artificial intelligence',
    'Generative AI',
    'Natural language processing',
    'AI-powered solutions',
    'Productivity apps',
    'Workflow automation',
    'Intelligent automation',
    'Business innovation',
    'Digital transformation',
    'Collaboration tools',
    'Software solutions',
    'Enterprise-grade AI',
    'Smart communication',
    'Data-driven insights',
    'Cloud-based AI',
    'Next-generation technology',
    'Scalable AI platforms',
    'Autonomous agents',
    'Business process automation',
    'Innovation in AI',
    'Awesomeness',
  ]
  .join(', '),

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    url: 'https://holdmybeer.info/',
    title: 'HMBCO |Solutions for Modern Humans & Businesses',
    description: 'Revolutionize your business with HMB-CO’s suite of AI applications like ApplyPro & Umail. Streamline workflows, empower collaboration, and unlock new growth opportunities using cutting-edge technology.',
    images: [
      {
        url: 'https://holdmybeer.info/images/hmbcoColor.png',
        width: 1200,
        height: 630,
        alt: 'HMB-CO banner',
      },
    ],
    siteName: 'holdmybeer.info',
  },

  // // Twitter Card
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@HMB_CO', // Replace with your Twitter handle
  //   creator: '@HMB_CO', // Replace with the author's Twitter handle
  //   title: 'HMB-CO | AI-Powered Solutions for Modern Businesses',
  //   description: 'Discover HMB-CO’s cutting-edge AI applications—like ApplyPro & Umail—that drive innovation, streamline workflows, and accelerate business growth. From productivity to communications, our intelligent solutions empower organizations to thrive in the digital age.',
  //   images: ['https://www.hmb-co.com/images/hmb-co-og.jpg'],
  // },
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import Tabs from '@/components/tabs'
import FeaturesBlocks from '@/components/features-blocks'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
      <Hero />
      <Tabs />
      <FeaturesBlocks />
      <Cta />
    </>
  )
}

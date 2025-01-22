// components/AISearch.jsx

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import HeroBg from '@/public/images/venue_3.jpg'
import HeroImage from '@/public/images/Venue_2.jpg'

// Import the trackEvent function from your Mixpanel utility
import { trackEvent } from '@/utils/mixpanel';

export default function SearchApp() {
  // Handler to track navigation arrow clicks
  const handleNavigationClick = (direction: string, target: string) => {
    trackEvent('Navigation Clicked', { direction, target });
  };

  return (
    <section className="relative">

      {/* Background Image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-10">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          src={HeroBg}
          width={1440}
          height={577}
          priority
          alt="AI Search Engine Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <div className="relative flex justify-center items-center">
              <div className="relative inline-flex items-start" data-aos="fade-up">
                <Image
                  className="opacity-50"
                  src={HeroImage}
                  width={768}
                  height={432}
                  priority
                  alt="AI Search Engine Hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
              </div>
              <div className="absolute" data-aos="fade-down">
                <h1 className="h1 lg:text-6xl font-red-hat-display">
                  AI Search Engine
                </h1>
                <h1 className="h1 lg:text-6xl font-red-hat-display">
                  <span className="text-teal-500">Launching Soon</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Enhanced Marketing Details */}
          <div className="mt-12 text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              Find the Right Answers Instantly with Our Powerful AI Search Engine
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Looking for the right answer instantly? Our extremely powerful AI Search Engine gets straight to the point, delivering accurate results without clickbait, tracking, or sponsored links. Experience a clean, efficient search that respects your privacy and provides exactly what you need.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our search engine leverages advanced algorithms to understand your queries deeply, ensuring you receive relevant and precise information every time. Say goodbye to irrelevant results and intrusive ads—just pure, unadulterated search excellence.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of searching with a tool designed to make your life easier. Whether you're researching, shopping, booking a flight, or seeking quick answers, our AI Search Engine is your go-to solution for efficient and trustworthy information retrieval, no click bate & no sponsered spam results.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="z-20 flex justify-between px-4 sm:px-6 lg:px-8 mt-10">
            {/* Back Arrow */}
            <Link 
              href="/allergy" 
              className="text-teal-500 hover:text-teal-700 flex items-center"
              onClick={() => handleNavigationClick('Back', '/allergy')} // Attach the onClick handler here
            >
              <FaArrowLeft className="mr-2" /> Allergy App
            </Link>

            {/* Next Arrow */}
            <Link 
              href="/" 
              className="text-teal-500 hover:text-teal-700 flex items-center"
              onClick={() => handleNavigationClick('Next', '/')} // Attach the onClick handler here
            >
              Home <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

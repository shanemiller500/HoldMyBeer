'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import HeroBg from '@/public/images/venue_3.jpg'
import HeroImage from '@/public/images/Venue_2.jpg'
import { trackEvent } from '@/utils/mixpanel';

export default function Allergy() {
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
              alt="Allergy Check Background"
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
                      alt="Allergy Check Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
                  </div>
                  <div className="absolute" data-aos="fade-down">
                    <h1 className="h1 lg:text-6xl font-red-hat-display">
                      Allergy Check App
                    </h1>
                    <h1 className="h1 lg:text-6xl font-red-hat-display">
                      <span className="text-teal-500">Launching Soon</span>
                    </h1>
                  </div>
                </div>
              </div>
    
              {/* Marketing Details */}
              <div className="mt-12 text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  Scan a label. Know in seconds.
                </h2>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Save your allergens once. Then just scan. The app checks every ingredient including unlisted trace amounts and gives you a clear yes or no before anything goes in your cart.
                </p>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Cross-referenced with FDA open source data, so the information is accurate, not just fast.
                </p>
              </div>
                         {/* Navigation Arrows */}
          <div className=" z-20 flex justify-between px-4 sm:px-6 lg:px-8 mt-10">
            {/* Back Arrow */}
            <Link 
              href="/Talent" 
              className="text-teal-500 hover:text-teal-700 flex items-center"
              onClick={() => handleNavigationClick('Back', '/Talent')}             >
              <FaArrowLeft className="mr-2" /> Talent Acquisition Platform
            </Link>
    
            {/* Next Arrow */}
            <Link 
              href="/Search" 
              className="text-teal-500 hover:text-teal-700 flex items-center"
              onClick={() => handleNavigationClick('Next', '/Search')}             >
              AI Search Engine <FaArrowRight className="ml-2" />
            </Link>
          </div>
            </div>
    
          </div>
        </section>
    )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import HeroBg from '@/public/images/venue_3.jpg'
import HeroImage from '@/public/images/Venue_2.jpg'
import { trackEvent } from '@/utils/mixpanel';

export default function HeroAbout() {
  const handleNavigationClick = (direction: string, target: string) => {
    trackEvent('Navigation Clicked', { direction, target });
  };

  return (
    <section className="relative">


      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-10">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          src={HeroBg}
          width={1440}
          height={577}
          priority
          alt="About"
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
                  alt="About hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
              </div>
              <div className="absolute" data-aos="fade-down">
                <h1 className="h1 lg:text-6xl font-red-hat-display">
                  Talent Acquisition Platform
                </h1>
                <h1 className="h1 lg:text-6xl font-red-hat-display">
                  <span className="text-teal-500">Coming Soon</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Marketing Details */}
          <div className="mt-12 text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              Hiring, without the noise.
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Upload a job description, get a ranked list of candidates. The platform scans resumes, scores applicants against your criteria, and gives your team clear summaries — so you spend time on decisions, not paperwork.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Automated responses keep candidates in the loop while you focus on the shortlist. Professional, on-brand, every time.
            </p>

            {/* Navigation Arrows */}
            <div className=" z-20 flex justify-between px-4 sm:px-6 lg:px-8 mt-10">
              {/* Back Arrow */}
              <Link 
                href="/umail" 
                className="text-teal-500 hover:text-teal-700 flex items-center"
                onClick={() => handleNavigationClick('Back', '/umail')}               >
                <FaArrowLeft className="mr-2" /> UMail
              </Link>

              {/* Next Arrow */}
              <Link 
                href="/allergy" 
                className="text-teal-500 hover:text-teal-700 flex items-center"
                onClick={() => handleNavigationClick('Next', '/allergy')}               >
                Allergy App <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

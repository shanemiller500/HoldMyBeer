'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import FeatureImage1 from '@/public/images/applyPro.png'
import FeatureImage2 from '@/public/images/ApplyPro_dude.jpg'
import { trackEvent } from '@/utils/mixpanel';

export default function ApplyProLandingPage() {
  const handleNavigationClick = (direction: string, target: string) => {
    trackEvent('Navigation Clicked', { direction, target });
  };

  return (
    <div>
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">

        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* Hero Image */}
            <div data-aos="fade-up">
              <Image
                className="mx-auto opacity-80"
                src={FeatureImage1}
                alt="ApplyPro Hero"
                priority
              />
            </div>

           
          </div>
        </section>

        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">

              <div className="mb-8 md:mb-0" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4 font-red-hat-display">
                  Get noticed. Get interviews.
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Tailored resumes and research-backed cover letters — built for the specific job, not a template.
                </p>
                <ul className="space-y-4">
                  {[
                    'ATS-optimized resume per job posting',
                    'Cover letters backed by real company research',
                    'Built-in research links as you write',
                    'Saved application dashboard',
                    'More interviews, less time applying',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="relative w-full " data-aos="fade-left">
                <video
                  src="/videos/ApplyPro1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="mx-auto w-full max-w-lg h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
             
            </div>
          </div>
        </section>

        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              
              {/* Left Column (Image) */}
              <div
                className="relative w-full "
                data-aos="fade-right"
              >
                <Image
                  src={FeatureImage2}
                  alt="ApplyPro Logo"
                  className="mx-auto w-full max-w-lg h-auto mr-10"
                />
              </div>

              {/* Right Column (Text) */}
              <div
                className="mb-8 md:mb-0 order-1 md:order-2 md:pl-8"
                data-aos="fade-left"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4 font-red-hat-display">
                  No ads. No tracking. No BS.
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Your resume is yours. We don't sell your data, share it, or use it to train anything. No ads, no popups, no distractions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  The AI helps you — it doesn't learn from you. Your application materials stay private, full stop.
                </p>
              </div>
            </div>

           
          </div>
        </section>
         {/* Navigation Arrows */}
         <div className=" z-20 flex justify-between px-4 sm:px-6 lg:px-8 mb-20">
          {/* Back Arrow */}
          <Link 
            href="/" 
            className="text-teal-500 hover:text-teal-700 flex items-center"
            onClick={() => handleNavigationClick('Back', '/Home')}           >
            <FaArrowLeft className="mr-2" /> Home
          </Link>

          {/* Next Arrow */}
          <Link 
            href="/umail" 
            className="text-teal-500 hover:text-teal-700 flex items-center"
            onClick={() => handleNavigationClick('Next', '/umail')}           >
            UMail <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <section className="relative py-16 md:py-20 bg-teal-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              Your next interview starts here.
            </h2>
            <p
              className="text-lg md:text-xl text-gray-900 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Stop sending generic applications.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link
                href="https://applypro.ai"
                target="_blank"
                className="btn text-teal-500 bg-gray-900 hover:bg-gray-700 px-8 py-4 rounded-lg shadow-md transition duration-300 text-lg font-semibold"
              >
                Try ApplyPro
              </Link>
            </div>
          </div>
        </section>

      </main>

       
    </div>
  )
}

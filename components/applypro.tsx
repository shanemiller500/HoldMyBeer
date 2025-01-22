'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa' // Optional: For a better-looking arrow icon

// Replace these images with your actual ApplyPro images
import FeatureImage1 from '@/public/images/applyPro.png'
import FeatureImage2 from '@/public/images/ApplyPro_dude.jpg'

// Import the trackEvent function from your Mixpanel utility
import { trackEvent } from '@/utils/mixpanel';

export default function ApplyProLandingPage() {
  // State to manage dark mode toggling
  const [darkMode, setDarkMode] = useState(false)

  // Handler to track navigation arrow clicks
  const handleNavigationClick = (direction: string, target: string) => {
    trackEvent('Navigation Clicked', { direction, target });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">

        {/* 
          HERO SECTION 
          (Uses the style of UMail's hero: large top/bottom padding, centered content, image, etc.)
        */}
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

        {/*
          WHAT IS APPLYPRO
          (Mirroring the "What is UMail?" styling: background color, heading, subtext, two-column layout)
        */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">

              <div className="mb-8 md:mb-0" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4 font-red-hat-display">
                  What is ApplyPro?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  ApplyPro is your ultimate application toolkit, designed to save you time and maximize your chances of success. 
                   ApplyPro creates tailored, ATS-friendly resumes and company-specific, research-backed cover letters. 
                  The intuitive toolbar even includes quick links for company research to help you stand out & help you customize your documents. Whether you're applying for a job, a college, or any major opportunity, ApplyPro optimizes every step, making it easier to get interviews and win opportunities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Job-Specific, Keyword-Optimized Resumes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      AI-Generated Cover Letters with Built-In Research Links
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Centralized Dashboard for All Your saved Applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      ATS-Friendly Formatting for Higher Pass Rates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Increase your chances of your resume landing in front of human decision-makers.
                    </span>
                  </li>
                </ul>
              </div>


              <div className="relative w-full " data-aos="fade-left">
                {/* Video Section */}
       
                <video
                  src="/videos/ApplyPro1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="mx-auto w-full max-w-lg h-auto"
                  // Optionally, add controls if needed
                  // controls
                >
                  Your browser does not support the video tag.
                </video>
              </div>
             
            </div>
          </div>
        </section>

        {/*
          OUR MISSION SECTION
          (Styling similar to a second content block from UMail—like "Custom Mood & Tone" or "Seamless Integrations")
        */}
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
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  At ApplyPro, our mission is to empower individuals to achieve their ambitions by providing a robust, user-friendly platform that simplifies the application process and drives success. We believe that preparing for interviews should take more time than securing them, which is why we strive to help you land interviews with less stress and without intrusive popups, ads, or banners that distract you.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  <strong className="text-teal-500">Commitment to Privacy and Integrity:</strong> We prioritize your privacy and data security above all else. <strong className="text-teal-500">Unlike any other companies,</strong> ApplyPro is completely ad-free, ensuring a seamless and uninterrupted user experience. We do not share, sell, or mine your personal data under any circumstances.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  <strong className="text-teal-500">Our AI systems are designed to assist you without learning from your personal habits, usage patterns, or application content.</strong> Your resume details and application materials remain confidential and are never used to improve or train our AI for other users. We hold ourselves to the highest standards of ethical data practices to safeguard your information every step of the way.
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
            onClick={() => handleNavigationClick('Back', '/Home')} // Attach the onClick handler here
          >
            <FaArrowLeft className="mr-2" /> Home
          </Link>

          {/* Next Arrow */}
          <Link 
            href="/umail" 
            className="text-teal-500 hover:text-teal-700 flex items-center"
            onClick={() => handleNavigationClick('Next', '/umail')} // Attach the onClick handler here
          >
            UMail <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/*
          OPTIONAL CTA SECTION
          (Similar style to the big CTA in UMail)
        */}
        <section className="relative py-16 md:py-20 bg-teal-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
            >
              Ready for Next-Level Cover Letters & Resumes?
            </h2>
            <p
              className="text-lg md:text-xl text-gray-900 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Simplify your process, save time, and boost your success with ApplyPro.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link
                href="https://applypro.ai"
                target="_blank"
                className="btn text-teal-500 bg-gray-900 hover:bg-gray-700 px-8 py-4 rounded-lg shadow-md transition duration-300 text-lg font-semibold"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

      </main>

       
    </div>
  )
}

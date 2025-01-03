'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import FeatureImage1 from '@/public/images/applyPro.png'
import FeatureImage2 from '@/public/images/applyProLogo.png'

export default function ApplyProLandingPage() {
  // State to manage dark mode toggling
  const [darkMode, setDarkMode] = useState(false)

  return (
    // Toggle the dark class on the <div> based on our state
    <div className={darkMode ? 'dark' : ''}>
      {/* Page wrapper */}
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">

        {/* HERO SECTION */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 flex flex-col items-center">
              
              {/* Image Container */}
              <div className="relative inline-flex items-start" data-aos="fade-up">
                <Image
                  className="opacity-50"
                  src={FeatureImage1}
                  priority
                  alt="ApplyPro Hero"
                />
              </div>
              
              {/* Decorative Div Below Image */}
              <div
                className="mt-20 w-0.5 h-16 bg-gray-300 dark:bg-gray-700"
                aria-hidden="true"
              ></div>
              
            </div>
          </div>
        </section>

        {/* WHAT IS APPLYPRO SECTION */}
        <section className="relative pt-16 pb-12 md:pt-20 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Feature Content */}
              <div className="mb-8 md:mb-0" data-aos="fade-right">
                <h2 className="h2 font-red-hat-display mb-4 text-teal-500">
                  What is ApplyPro?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Tired of navigating complex and time-consuming application processes? ApplyPro.ai is here to transform your journey! Harness the power of cutting-edge AI to effortlessly create standout application materials, seamlessly manage your submissions, whether you're aiming for your dream job, the perfect college, or any major opportunity, ApplyPro.ai boosts your chances of success in securing an interview with high ATS pass rates.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">AI-Powered Resume and Cover Letter Builder</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">Centralized Application Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">ATS-Friendly Formatting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">Multi-Language Support</span>
                  </li>
                </ul>
              </div>
              {/* Feature Image */}
              <div className="relative w-full" data-aos="fade-left">
                <Image
                 
                  src={FeatureImage1}
                  alt="ApplyPro Feature Illustration"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR MISSION SECTION */}
        <section className="relative pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Feature Image */}
              <div
                className="relative w-full order-2 md:order-1 mt-8 md:mt-0"
                data-aos="fade-right"
              >
                <Image
        
                  src={FeatureImage2}
                  alt="ApplyPro Logo"
                />
              </div>
              {/* Feature Content */}
              <div
                className="mb-8 md:mb-0 order-1 md:order-2 md:pl-8"
                data-aos="fade-left"
              >
                <h2 className="h2 font-red-hat-display mb-4 text-teal-500 ">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  At ApplyPro, our mission is to empower individuals to achieve their ambitions by providing a robust, user-friendly platform that simplifies the application process and drives success. We believe that preparing for interviews should take more time than securing them, which is why we strive to help you land interviews with less stress and without intrusive popups, ads, or banners that distract you.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  <strong className="text-teal-500">Commitment to Privacy and Integrity:</strong> We prioritize your privacy and data security above all else. ApplyPro is completely ad-free, ensuring a seamless and uninterrupted user experience. We do not share, sell, or mine your personal data under any circumstances.  <strong className="text-teal-500">Our AI systems are designed to assist you without learning from your personal habits, usage patterns, or application content.</strong> Your resume details and application materials remain confidential and are never used to improve or train our AI for other users. We adhere to the highest standards of ethical data practices to safeguard your information every step of the way.
                </p>
                {/* <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">Shared Dashboards and Reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">Live Commenting and Real-Time Collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">Role-Based Access Control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">Integrated Team Communication</span>
                  </li>
                </ul> */}
              </div>
            </div>
            {/* Call to Action Button */}
            <div className="mt-8 flex justify-center" data-aos="fade-down" data-aos-delay="300">
            <Link
                className="btn text-white bg-teal-500 hover:bg-teal-400 px-6 py-3 rounded-lg shadow-md transition duration-300"
                 href="https://applypro.ai"
              target="_blank"
            >
                Link to ApplyPro
            </Link>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}

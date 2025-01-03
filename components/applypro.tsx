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



          {/* Hero content */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1
                  className="h1 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100"
                  data-aos="fade-down"
                >
                  Transform Your Application Journey with <span className="text-teal-500">ApplyPro</span>
                </h1>
                <p
                  className="text-xl text-gray-600 dark:text-gray-400"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  The ultimate platform for professionals, students, and teams to organize,
                  streamline, and elevate every application process, from funding to job searching.
                </p>
               
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="relative pt-16 pb-12 md:pt-20 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Feature content */}
              <div className="mb-8 md:mb-0" data-aos="fade-right">
                <h2 className="h2 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
                Why Choose ApplyPro?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  ApplyPro helps you cut through the noise by providing an all-in-one platform
                  where you can manage your applications, track your progress, and stay ahead of 
                  every deadline.
                </p>
                <ul className="list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Streamlined application tracking</li>
                  <li>Customizable workflows for every need</li>
                  <li>Powerful analytics to spot trends and insights</li>
                  <li>Secure storage for sensitive documents</li>
                </ul>
              </div>
              {/* Feature image */}
              <div className="relative w-full" data-aos="fade-left">
                <Image
                  className="w-full h-full object-cover rounded"
                  src={FeatureImage1}
                  alt="ApplyPro Feature 1"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECOND FEATURE SECTION */}
        <section className="relative pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Feature image */}
              <div
                className="relative w-full order-2 md:order-1 mt-8 md:mt-0"
                data-aos="fade-right"
              >
                <Image
                  className="w-full h-full object-cover rounded"
                  src={FeatureImage2}
                  alt="ApplyPro Feature 2"
                />
              </div>
              {/* Feature content */}
              <div
                className="mb-8 md:mb-0 order-1 md:order-2 md:pl-8"
                data-aos="fade-left"
              >
                <h2 className="h2 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
                Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                At ApplyPro, our mission is to empower individuals to achieve their ambitions by providing a robust, user-friendly platform that simplifies the application process and drives success. Focusing on Interviews should take more time than getting them, we strive to help you land the interviews with less stress ano no popups adds and banners stressing you out with unnessary adds.
                </p>
                <ul className="list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Shared dashboards and reports</li>
                  <li>Live commenting and real-time collaboration</li>
                  <li>Role-based access control</li>
                  <li>Integrated team communication</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 center" data-aos="fade-down" data-aos-delay="300">
                  <Link
                    className="btn text-white bg-teal-500 hover:bg-teal-400 ml-3"
                    href="/contact"
                  >
                    Get Started
                  </Link>
                </div>
        </section>


      </main>
    </div>
  )
} 
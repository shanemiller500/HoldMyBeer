'use client'

import { useState } from 'react'

import Image from 'next/image'
import VideoThumb from '@/public/images/video-thumb.jpg'
import PlayBtn from '@/public/images/play-button.svg'

export default function Tabs() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none" aria-hidden="true"></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4"><span className="text-teal-500">We recognize our personal data drives others profits</span>,  but remain passive in changing the system.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Unlike other companies that harvest your personal data for profit, our tools prioritize your privacy and security. Enjoy powerful, ad-free solutions that protect your personal information. We are committed to safeguarding your digital life, ensuring you have full control over your online experience</p>
          </div>

          {/* Section content */}
          <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">

              {/* Category buttons */}
              <div className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '1' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('1')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '1' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z" />
                  </svg>
                  <span className={category === '1' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Why?</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '2' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('2')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '2' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M8 3l4 4H4zM8 13L4 9h8zM1 0h14v2H1zM1 14h14v2H1z" />
                  </svg>
                  <span className={category === '2' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Really?</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '3' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('3')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '3' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z" />
                  </svg>
                  <span className={category === '3' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>The answer!</span>
                </button>
                {/* <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '4' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('4')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '4' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M15.4.6c-.84-.8-2.16-.8-3 0L8.7 4.3c.73.252 1.388.68 1.916 1.244.469.515.83 1.119 1.065 1.775L15.4 3.6c.8-.84.8-2.16 0-3zM4.937 6.9c-1.2 1.2-1.4 5.7-1.4 5.7s4.4-.4 5.6-1.5a2.987 2.987 0 000-4.2 2.9 2.9 0 00-4.2 0z" />
                  </svg>
                  <span className={category === '4' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Styling Basics</span>
                </button> */}
                {/* <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '5' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('5')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '5' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M11 16v-5h5V0H5v5H0v11h11zM2 7h7v7H2V7z" />
                  </svg>
                  <span className={category === '5' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Image Field</span>
                </button> */}
              </div>

              {/* Videos */}
              <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={['1'].includes(category) ? undefined : 'hidden'}>
                  <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Data Theft</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Tech giants exploit your digital footprint, monitor your online activities & locations to create comprehensive profiles. These profiles drive precision-targeted ads, significantly boosting advertising effectiveness and generating immense profits while compromising your privacy and control.</p>
                    </div>
                  </div>
                  <div className={['1'].includes(category) ? undefined : 'hidden'}>
                  <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Tech Landscape</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Countless tech companies offer free services like social media, search engines, and apps to millions worldwide. Their main revenue comes from collecting and monetizing your personal data, turning your personal information into profit while providing no-cost access.</p>
                    </div>
                  </div>
                  <div className={['2'].includes(category) ? undefined : 'hidden'}>
                  <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Google</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Google processes over <span className="text-teal-500">3.5 billion</span> searches each day, using this data to fine-tune targeted ad placements across its entire ecosystem. This extensive data collection enables highly targeted advertising, turning your personal information into a valuable revenue stream.</p>
                    </div>
                  </div>
                  <div className={['2'].includes(category) ? undefined : 'hidden'}>
                  
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Meta</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Meta tracks interactions of over <span className="text-teal-500">2.9 billion</span> monthly active users across Facebook, Instagram, and Messenger to deliver precise ad targeting while you use the apps. This extensive data collection results in countless "Sponsored" posts tailored to your behavior and preferences.</p>
                    </div>
                    
                  </div>
                  <div className={['2'].includes(category) ? undefined : 'hidden'}>
                  <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Cost</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Digital ad spending is expected to reach <span className="text-teal-500">$645 billion</span> by 2024, largely driven by data-driven strategies. This surge underscores how companies rely on user data to enhance ad targeting and effectiveness, heightening concerns about privacy and data exploitation.</p>
                    </div>
                  </div>
                  <div className={['2'].includes(category) ? undefined : 'hidden'}>
                  <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Fallout</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Without transparency, unauthorized data sharing and security breaches become rampant. These incidents expose personal information, significantly increasing the chances of identity theft and the exploitation of your data.</p>
                    </div>
                  </div>
                  <div className={['3'].includes(category) ? undefined : 'hidden'}>
                  <header>
                    
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>  <span className="text-teal-500">Hold My Beer CO</span> prioritizes your privacy by never collecting or storing your personal data. We guarantee that your information is never sold to third parties or used for AI learning, ensuring complete confidentiality and peace of mind.</p>
                    </div>
                  </div>
                  <div className={['3'].includes(category) ? undefined : 'hidden'}>
                  <header>
                     
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Our ad-free apps deliver a seamless and pristine user experience, free from tracking and surveillance. By eliminating data mining, <span className="text-teal-500">Hold My Beer CO</span> ensures your interactions remain private and secure, allowing you to enjoy our services without compromise, ads or data mining.</p>
                    </div>   
                  </div>
                 
                  {/* <div className={['5'].includes(category) ? undefined : 'hidden'}>
                    <div className="relative flex justify-center items-center shadow">
                      <Image className="w-full" src={VideoThumb} width={352} height={264} alt="Video thumbnail 01" />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="grow flex justify-center items-center">
                          <a className="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                            <Image src={PlayBtn} width={72} height={72} alt="Play icon" />
                          </a>
                        </div>
                        <div className="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                          <a className="text-gray-900 dark:text-gray-400 font-medium" href="#0">Sorting images</a>
                          <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">4 Min</div>
                        </div>
                      </div>
                    </div>
                  </div> */}


                  {/* <div className={['5'].includes(category) ? undefined : 'hidden'}>
                    <div className="relative flex justify-center items-center shadow">
                      <Image className="w-full" src={VideoThumb} width={352} height={264} alt="Video thumbnail 01" />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="grow flex justify-center items-center">
                          <a className="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                            <Image src={PlayBtn} width={72} height={72} alt="Play icon" />
                          </a>
                        </div>
                        <div className="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                          <a className="text-gray-900 dark:text-gray-400 font-medium" href="#0">Filters</a>
                          <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">9 Min</div>
                        </div>
                      </div>
                    </div>
                  </div> */}


                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
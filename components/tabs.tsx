'use client'

import { useState } from 'react'

export default function Tabs() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section className="relative border-t border-transparent dark:border-gray-800 py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none" aria-hidden="true"></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* Updated Heading */}
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              <span className="text-teal-500">Hold My Beer Co</span>: Your Privacy, Our Priority
            </h3>
            {/* Updated Introduction Paragraph */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Despite the allure of "free" services, your data often bears the true cost. For over two decades, the tech industry has proven that if the product is free, you become the product. Many companies exploit your personal data for profit. Here's how we stand apart:
            </p>
          </div>

          {/* Section content */}
          <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">

              {/* Category buttons */}
              <div className="lg:col-span-1 lg:pr-8 flex flex-wrap justify-center lg:flex-col lg:justify-start space-y-2">
                {/* Tech Landscape */}
                <button
                  className={`w-full flex items-center px-4 py-3 rounded-lg shadow transition-colors duration-200 ${
                    category === '1'
                      ? 'bg-teal-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCategory('1')}
                  aria-pressed={category === '1'}
                >
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v7c0 5.25 3.75 10 10 10s10-4.75 10-10V7l-10-5z" />
                  </svg>
                  <span className="font-medium">Today’s Tech Landscape</span>
                </button>

                {/* Data Theft */}
                <button
                  className={`w-full flex items-center px-4 py-3 rounded-lg shadow transition-colors duration-200 ${
                    category === '2'
                      ? 'bg-teal-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCategory('2')}
                  aria-pressed={category === '2'}
                >
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.686 0 6 2.686 6 6c0 5.25 6 18 6 18s6-12.75 6-18c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  <span className="font-medium">Data Theft</span>
                </button>

                {/* How We Are Different */}
                <button
                  className={`w-full flex items-center px-4 py-3 rounded-lg shadow transition-colors duration-200 ${
                    category === '3'
                      ? 'bg-teal-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCategory('3')}
                  aria-pressed={category === '3'}
                >
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm1.07-7.75l-.9.92A1.75 1.75 0 0012 13h-1v-6h1c.37 0 .72.15.93.39l.9.92A.996.996 0 0013.07 9.25z" />
                  </svg>
                  <span className="font-medium">How We Are Different</span>
                </button>

                {/* Privacy-Focused Apps */}
                <button
                  className={`w-full flex items-center px-4 py-3 rounded-lg shadow transition-colors duration-200 ${
                    category === '4'
                      ? 'bg-teal-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCategory('4')}
                  aria-pressed={category === '4'}
                >
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-1-14h2v6h-2V7zm0 8h2v2h-2v-2z" />
                  </svg>
                  <span className="font-medium">Privacy-Focused Apps</span>
                </button>
              </div>

              {/* Content Sections */}
              <div className="lg:col-span-2 max-w-full mx-auto">
                <div className="space-y-8">

                  {/* Today’s Tech Landscape */}
                  <div className={`transition-opacity duration-500 ${category === '1' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <header>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Today’s Tech Landscape</h4>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400">
                      <p>
                        Countless tech companies offer free services like social media, search engines, and apps to millions worldwide. Their main revenue comes from collecting and monetizing your personal data, turning your personal information, location, private searches & messages into profit while providing no-cost access.
                      </p>
                    </div>
                  </div>

                  {/* Data Theft */}
                  <div className={`transition-opacity duration-500 ${category === '2' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <header>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Data Theft</h4>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400">
                      <p>
                        They exploit your digital footprint, monitor your online activities and locations to create comprehensive profiles. These profiles drive precision-targeted ads, significantly boosting advertising effectiveness and generating immense profits while compromising your privacy and control.
                      </p>
                    </div>
                  </div>

                  {/* How We Are Different */}
                  <div className={`transition-opacity duration-500 ${category === '3' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <header>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">How We Are Different</h4>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
  Hold My Beer Co. prioritizes your privacy and security above all else. We only collect and store the essential data necessary to ensure our apps operate seamlessly for you. We do not mine or sell your personal information. Your data is never shared with third parties or used for AI training, guaranteeing complete confidentiality and peace of mind.
</p>

                      <p>
                        Our custom solutions make AI accessible to everyone without the need to worry about personal data being shared with AI and machine learning systems. Our AI learns without compromising your privacy, helping you without selling your personal information.
                      </p>
                    </div>
                  </div>

                  {/* Privacy-Focused Apps */}
                  <div className={`transition-opacity duration-500 ${category === '4' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <header>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Privacy-Focused Apps</h4>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 space-y-4">
                      <p>
                        Our ad-free apps deliver a seamless and pristine user experience, free from unauthorized surveillance. By eliminating data mining, Hold My Beer Co ensures your interactions with our apps remain private and secure, allowing you to enjoy our services without compromise.
                      </p>
                      <p>
                        Enjoy our powerful, ad-free apps and solutions that protect your personal information. We are committed to safeguarding your digital life, ensuring you have full control over your footprint on our apps and services.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

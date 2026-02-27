'use client'

import { useState } from 'react'
import { trackEvent } from '@/utils/mixpanel'

export default function Tabs() {
  const [category, setCategory] = useState<string>('1')

  const handleTabClick = (categoryId: string, tabName: string) => {
    setCategory(categoryId)
    trackEvent('Tab Clicked', { tab: tabName })
  }

  return (
    <section className="relative border-t border-transparent dark:border-gray-800 py-12">
      <div
        className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10">

          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Free always has a price.
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
              Here's what's actually happening out there — and why we built something different.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">

            {/* Tab buttons */}
            <div className="lg:col-span-1 lg:pr-8 flex flex-col space-y-2">

              {[
                {
                  id: '1',
                  label: 'The Status Quo',
                  icon: <path d="M12 2L2 7v7c0 5.25 3.75 10 10 10s10-4.75 10-10V7l-10-5z" />,
                },
                {
                  id: '2',
                  label: 'How They Profit',
                  icon: <path d="M12 0C8.686 0 6 2.686 6 6c0 5.25 6 18 6 18s6-12.75 6-18c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />,
                },
                {
                  id: '3',
                  label: 'Our Approach',
                  icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm1.07-7.75l-.9.92A1.75 1.75 0 0012 13h-1v-6h1c.37 0 .72.15.93.39l.9.92A.996.996 0 0013.07 9.25z" />,
                },
                {
                  id: '4',
                  label: 'Built Different',
                  icon: <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-1-14h2v6h-2V7zm0 8h2v2h-2v-2z" />,
                },
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  className={`w-full flex items-center px-4 py-3 rounded-lg shadow transition-colors duration-200 text-left ${
                    category === id
                      ? 'bg-teal-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => handleTabClick(id, label)}
                  aria-pressed={category === id}
                >
                  <svg className="w-5 h-5 mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    {icon}
                  </svg>
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="lg:col-span-2">

              <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 sm:p-8 ${category === '1' ? 'block' : 'hidden'}`}>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">The Status Quo</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Most tech companies give you a free product and make their money by selling everything you do your searches, location, messages, and habits. You're not the user. You're the inventory.
                </p>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 sm:p-8 ${category === '2' ? 'block' : 'hidden'}`}>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">How They Profit</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  They build detailed profiles on you not to improve your experience, but to charge advertisers more. The more they know about you, the more valuable you are to them. That's the whole business model.
                </p>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 sm:p-8 ${category === '3' ? 'block' : 'hidden'}`}>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Our Approach</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We collect only what's needed to run the app nothing more. Your data is never sold, never shared, and never used to train AI models. Delete your account and your data goes with it.
                </p>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 sm:p-8 ${category === '4' ? 'block' : 'hidden'}`}>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Built Different</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  No ads means no incentive to track you. Our apps are subscription-based, so the only person we answer to is you. Clean, fast, and private by design.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

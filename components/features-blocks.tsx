'use client';

import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function FeaturesBlocks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative bg-white dark:bg-gray-900 py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat-display text-gray-900 dark:text-white">
            Apps Made for People Who Care About Privacy
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The apps below are either nearing production or well within the capabilities of our current team. As we grow, we’ll onboard more developers and accelerate the release of new applications. Stay tuned — 
            <span className="text-teal-500 font-semibold">
              {" "}this is just the beginning of a new era in how we use the internet ad-free.
            </span>
          </p>
        </div>

        {/* Scroll Container with Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 z-10"
            aria-label="Scroll Left"
          >
            <FaChevronLeft />
          </button>

          {/* Scrollable Feature Blocks */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 sm:space-x-6 lg:space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          >

                      {/* 2nd Item */}
                      <a
              href="/applyPro"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-80 flex flex-col p-6 group bg-gradient-to-tr from-purple-500 to-purple-400 dark:to-purple-500 rounded-lg shadow-2xl transition-transform transform hover:-translate-y-1 hover:shadow-3xl snap-start"
              aria-label="ApplyPro.ai - Research-backed Cover Letters & Tailored Resumes"
            >
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    className="fill-current"
                    d="M20.796 20l-1.677 7.264a6 6 0 01-7.302 4.471L0 28.781V11.54l.35-.3 9.457-8.107a3.751 3.751 0 015.29 5.29L11.175 13H28.5a3.5 3.5 0 012.6 1.156c.663.736.984 1.72.878 2.74-.252 1.808-1.817 3.143-3.622 3.104h-7.56zM2 27.22l10.303 2.575a4 4 0 004.868-2.98L19.204 18h9.173c.812.018 1.508-.575 1.615-1.345A1.5 1.5 0 0028.5 15H11.173a2 2 0 01-1.517-3.3l3.922-4.577a1.755 1.755 0 00-.597-2.733 1.751 1.751 0 00-1.872.262L2 12.46v14.76zM28 .585L29.414 2 23 8.414 21.586 7 28 .586zm-8.272 6.627l-1.94-.485 1.484-5.94 1.94.484-1.484 5.94zm3.544 5l-.485-1.94 5.94-1.486.486 1.94-5.94 1.486z"
                    fillRule="nonzero"
                  />
                </svg>
                <h3 className="text-xl font-bold font-red-hat-display text-white">ApplyPro.ai</h3>
              </div>
              <p className="mt-4 text-white opacity-90 flex-grow">
                 ApplyPro is live world wide! Create research-backed cover letters and tailored resumes in seconds. Sign up today and accelerate your career journey.
              </p>
              <div className="mt-4">
                <svg
                  className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current"
                    d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                  />
                </svg>
              </div>
            </a>

            {/* 1st Item */}
            <a
              href="/umail"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-80 flex flex-col p-6 group bg-gradient-to-tr from-teal-500 to-teal-400 dark:to-teal-500 rounded-lg shadow-2xl transition-transform transform hover:-translate-y-1 hover:shadow-3xl snap-start"
              aria-label="UMail.ai - A clutter-free, sponsored-free smart email client"
            >
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    className="fill-current"
                    d="M19 18.414l-4 4L9.586 17l.707-.707L12 14.586V8.414l-5-5L4.414 6l6.293 6.293-1.414 1.414L1.586 6 7 .586l7 7v5l8.463-8.463a3.828 3.828 0 115.414 5.414L21 16.414v6.172l5 5L28.586 25l-6.293-6.293 1.414-1.414L31.414 25 26 30.414l-7-7v-5zm-4 1.172L26.463 8.123a1.828 1.828 0 10-2.586-2.586L12.414 17 15 19.586zM11 30v2C4.925 32 0 27.075 0 21h2a9 9 0 009 9zm0-5v2a6 6 0 01-6-6h2a4 4 0 004 4z"
                    fillRule="nonzero"
                  />
                </svg>
                <h3 className="text-xl font-bold font-red-hat-display text-white">In Testing: UMail.ai</h3>
              </div>
              <p className="mt-4 text-white opacity-90 flex-grow">
                A clutter-free, sponsored-free smart email client, ready to integrate with your Gmail account. (Microsoft integration coming soon)
              </p>
              <div className="mt-4">
                <svg
                  className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current"
                    d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                  />
                </svg>
              </div>
            </a>



                        {/* 5th Item */}
                        <a
              href="/Talent"
              className="flex-shrink-0 w-80 flex flex-col p-6 group bg-gradient-to-tr from-yellow-500 to-yellow-400 dark:to-yellow-500 rounded-lg shadow-2xl transition-transform transform hover:-translate-y-1 hover:shadow-3xl snap-start"
              aria-label="Privacy Dashboard - Manage all your privacy settings in one place"
            >
              <div className="flex-shrink-0">
              <svg className="w-10 h-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path
    className="fill-current"
    d="M48 16h-8V8a8 8 0 10-16 0v8H16a4 4 0 00-4 4v36a4 4 0 004 4h32a4 4 0 004-4V20a4 4 0 00-4-4zm-20 0V8a4 4 0 118 0v8h-8zm24 44H16V20h32v40zM24 28a6 6 0 1112 0 6 6 0 01-12 0zm16 0a6 6 0 1112 0 6 6 0 01-12 0z"
  />
</svg>
                <h3 className="text-xl font-bold font-red-hat-display text-white">Coming Soon: Talent Acquisition Platform</h3>
              </div>
              <p className="mt-4 text-white opacity-90 flex-grow">
              An AI-powered recruitment tool that efficiently bulk scans resumes, ranks candidates by key criteria, and generates concise summaries for hiring managers and recruiters.              </p>
              <div className="mt-4">
                <svg
                  className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current"
                    d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                  />
                </svg>
              </div>
            </a>

            {/* 3rd Item */}
            <a
              href="/allergy"
              className="flex-shrink-0 w-80 flex flex-col p-6 group bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500 rounded-lg shadow-2xl transition-transform transform hover:-translate-y-1 hover:shadow-3xl snap-start"
              aria-label="AI Allergy Check App - Check labels with ease and love the results"
            >
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    className="fill-current"
                    d="M19 5.612V25a6 6 0 11-2-4.472V0h2v2.961A5.98 5.98 0 0023.497 5a8.476 8.476 0 018.444 9.474l-.253 2.13-1.469-1.563A6.472 6.472 0 0025.5 13c-1.842 0-3.634-.6-5.103-1.713l1.206-1.594A6.455 6.455 0 0025.5 11c1.557 0 3.068.428 4.376 1.217A6.475 6.475 0 0023.5 7 7.981 7.981 0 0119 5.612zM13 29a4 4 0 100-8 4 4 0 000 8zM0 5V3h14v2H0zm0 5V8h14v2H0zm0 5v-2h14v2H0z"
                    fillRule="nonzero"
                  />
                </svg>
                <h3 className="text-xl font-bold font-red-hat-display text-white">Coming Soon: AI Allergy Check App</h3>
              </div>
              <p className="mt-4 text-white opacity-90 flex-grow">
              Effortless scanning. Instant, personalized insights. Unlock safe choices with a simple scan. Check labels with ease and love the results. Stay tuned for the revolution in allergy management!
              </p>
              <div className="mt-4">
                <svg
                  className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current"
                    d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                  />
                </svg>
              </div>
            </a>



            {/* 4th Item */}
            <a
              href="/Search"
              className="flex-shrink-0 w-80 flex flex-col p-6 group bg-gradient-to-tr from-pink-500 to-pink-400 dark:to-pink-500 rounded-lg shadow-2xl transition-transform transform hover:-translate-y-1 hover:shadow-3xl snap-start"
              aria-label="AI Search Engine - Powerful search without clickbait and tracking"
            >
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    className="fill-current"
                    d="M20.243 6.757l.707.707-1.414 1.414-.707-.707a4 4 0 00-5.658 0l-.707.707-1.414-1.414.707-.707a6 6 0 018.486 0zm3.535-3.535l.707.707-1.414 1.414-.707-.707a9 9 0 00-12.728 0l-.707.707L7.515 3.93l.707-.707c4.296-4.296 11.26-4.296 15.556 0zM9 17.212V16a7 7 0 00-7-7H1V7h1a9 9 0 019 9v.788l2.302 5.18L11 23.117V24a4 4 0 01-4 4H5v3H3v-5h4a2 2 0 002-2v-2.118l1.698-.85L9 17.213zm12-.424V16a9 9 0 019-9h1v2h-1a7 7 0 00-7 7v1.212l-1.698 3.82 1.698.85V24a2 2 0 002 2h4v5h-2v-3h-2a4 4 0 01-4-4v-.882l-2.302-1.15L21 16.787zM16 12a1 1 0 110-2 1 1 0 010 2z"
                    fillRule="nonzero"
                  />
                </svg>
                <h3 className="text-xl font-bold font-red-hat-display text-white">Coming Soon: AI Search Engine</h3>
              </div>
              <p className="mt-4 text-white opacity-90 flex-grow">
                Looking for the right answer instantly? Our extremely powerful Search Engine gets straight to the point without clickbait, tracking, and sponsored links.
              </p>
              <div className="mt-4">
                <svg
                  className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current"
                    d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                  />
                </svg>
              </div>
            </a>

            
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 z-10"
            aria-label="Scroll Right"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Custom CSS for Hiding Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { trackEvent } from '@/utils/mixpanel'; // Import the trackEvent function

export default function Timeline() {
  const [year, setYear] = useState<string>('Jan2024'); // Default to January 2024

  // Handler to set the year and track the event
  const handleYearClick = (selectedYear: string, displayYear: string) => {
    setYear(selectedYear);
    trackEvent('Timeline Year Clicked', { year: displayYear });
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Our Remarkable Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Discover the incredible milestones we've reached in such a short time since May 2024.
            </p>
          </div>

          {/* Section content */}
          <div>
            <div className="flex items-start">

              {/* Timeline buttons */}
              {/*
                Using a custom-scrollbar class to hide the scrollbar:
                1) 'overflow-y-auto' + 'max-h-96' for vertical scrolling
                2) Inline styles to hide scrollbar on Firefox & IE
                3) CSS below to hide scrollbar on WebKit browsers
              */}
              <div
                className="relative mr-4 sm:mr-12 lg:mr-32 max-h-96 custom-scrollbar"
                style={{
                  msOverflowStyle: 'none',  // IE, Edge
                  scrollbarWidth: 'none',    // Firefox
                }}
              >
                <div
                  className="absolute inset-0 my-6 ml-16 pointer-events-none -z-1"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                </div>

                {/* January 2024 */}
                <button
                  className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                  onClick={() => handleYearClick('Jan2024', 'January 2024')}
                >
                  <span className="block w-12 truncate">January 2024</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === 'Jan2024' ? 'bg-teal-500 dark:bg-teal-500' : ''
                    }`}
                  ></span>
                </button>

                {/* May 2024 */}
                <button
                  className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                  onClick={() => handleYearClick('May2024', 'May 2024')}
                >
                  <span className="block w-12 truncate">May 2024</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === 'May2024' ? 'bg-teal-500 dark:bg-teal-500' : ''
                    }`}
                  ></span>
                </button>

                {/* September 2024 */}
                <button
                  className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                  onClick={() => handleYearClick('Sep2024', 'September 2024')}
                >
                  <span className="block w-12 truncate">September 2024</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === 'Sep2024' ? 'bg-teal-500 dark:bg-teal-500' : ''
                    }`}
                  ></span>
                </button>

                {/* October 2024 */}
                <button
                  className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                  onClick={() => handleYearClick('Oct2024', 'October 2024')}
                >
                  <span className="block w-12 truncate">October 2024</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === 'Oct2024' ? 'bg-teal-500 dark:bg-teal-500' : ''
                    }`}
                  ></span>
                </button>

                {/* December 2024 */}
                <button
                  className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                  onClick={() => handleYearClick('Dec2024', 'December 2024')}
                >
                  <span className="block w-12 truncate">December 2024</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === 'Dec2024' ? 'bg-teal-500 dark:bg-teal-500' : ''
                    }`}
                  ></span>
                </button>

                {/* Year Divider */}
                <span className="block w-12 truncate m-5">2025</span>

                {/* January 2025 */}
                <button
                  className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                  onClick={() => handleYearClick('Jan2025', 'January 2025')}
                >
                  <span className="block w-12 truncate">January 2025</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === 'Jan2025' ? 'bg-teal-500 dark:bg-teal-500' : ''
                    }`}
                  ></span>
                </button>

                                {/* february 2025 */}
                                <button
                  className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                  onClick={() => handleYearClick('Feb2025', 'february 2025')}
                >
                  <span className="block w-12 truncate">february 2025</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === 'Feb2025' ? 'bg-teal-500 dark:bg-teal-500' : ''
                    }`}
                  ></span>
                </button>
              </div>

              {/* ================== January 2024 (year === 'Jan2024') ================== */}
              <div className={`grow ${year !== 'Jan2024' ? 'hidden' : ''}`}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Industry Trends</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        In early 2024, the software development team was laid off after ten years
                        of dedicated service at a major company, reflecting a broader industry trend.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Portfolio Building</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        While delving into AI and expanding a portfolio, an innovative tool was
                        engineered to transform swear words into polite and kind expressions.
                        This creative project underscored the role of AI in enhancing communication.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* ================== May 2024 (year === 'May2024') ================== */}
              <div className={`grow ${year !== 'May2024' ? 'hidden' : ''}`}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Relentless Job Searching</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        Following relentless dedication, an interview was successfully obtained.
                        In the meeting, the option to either pursue employment with others or to
                        establish a personal venture was offered. The preferred path was unmistakable,
                        culminating in the bold creation of UMail a few hours later.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">The Genesis of UMail</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        UMail rapidly developed into a highly robust AI platform, set to transform
                        global communication and significantly enhance productivity. With its advanced
                        automation, personalized interactions, and seamless integrations, UMail is
                        revolutionizing the way individuals and organizations connect and collaborate.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* ================== September 2024 (year === 'Sep2024') ================== */}
              <div className={`grow ${year !== 'Sep2024' ? 'hidden' : ''}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Something Was Missing</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        While tirelessly working on UMail and adding feature after feature, we noticed
                        some gaps. How could research-backed cover letters and customized resumes enhance
                        communication like never before? This realization pushed us to innovate further.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">The Birth of ApplyPro.ai</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        After insightful meetings with mentors, things started to align. Within a few hours,
                        a new app was born: ApplyPro.ai, designed to revolutionize the job application process.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">MVP Milestone</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        Significant advancements in UMail's integrations led to the establishment of
                        our Minimum Viable Product (MVP). There's still much to accomplish, but reaching
                        this milestone is a huge step forward!
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Alpha Testing</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        UMail welcomed its first Alpha test users, achieving this milestone several
                        months ahead of schedule. Feedback from these users is invaluable as we refine
                        our platform.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* ================== October 2024 (year === 'Oct2024') ================== */}
              <div className={`grow ${year !== 'Oct2024' ? 'hidden' : ''}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">ApplyPro.ai MVP</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        With the fundamentals firmly in place, ApplyPro.ai's ascent was swift and
                        efficient. It stands as the ONLY resume tool that does not share data with
                        AI learning, featuring research-backed cover letters and supporting links
                        right in the toolbar.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Beta Testing</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        ApplyPro.ai underwent extensive building and testing, making it well-prepared
                        for Beta testing. While there's still more to add, the platform is now ready
                        to be used by our early adopters.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Early Search Engine Advances</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        Our mission is simple: get you the answer you need, right away—no fluff, no clutter.
                        Say goodbye to endless scrolling and irrelevant "Sponsored" results. With this powerful
                        AI-driven search engine, you’ll get straight to the point, finding exactly what you're
                        looking for without the unnecessary noise.
                      </p>
                    </div>
                  </article>

                  {/* NEW CARD about contracting a marketing team */}
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Contracting a Marketing Team</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        During October 2024, we officially contracted an experienced marketing team
                        to accelerate our global reach. The onboarding process was seamless, integrating
                        them into our mission and leveraging their expertise to amplify brand awareness
                        and user engagement.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* ================== December 2024 (year === 'Dec2024') ================== */}
              <div className={`grow ${year !== 'Dec2024' ? 'hidden' : ''}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">ApplyPro is Live</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        We’re thrilled to announce that ApplyPro is available worldwide. To celebrate
                        our December soft launch, all new users who sign up this month will receive
                        6 months of unlimited service absolutely free. Our recent tests showcase an
                        outstanding 96-98% pass rate through ATS systems—the highest scores globally
                        for ATS compatibility. Join ApplyPro today and maximize your application success!
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Introducing Our Talent Acquisition Platform</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        This AI-powered recruitment tool efficiently bulk scans resumes, ranks candidates
                        based on essential criteria, and generates concise summaries for hiring managers
                        and recruiters. Streamline your hiring process, identify top talent quickly, and
                        make informed decisions with our cutting-edge technology.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* ================== January 2025 (year === 'Jan2025') ================== */}
              <div className={`grow ${year !== 'Jan2025' ? 'hidden' : ''}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">ApplyPro Launches Worldwide</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        ApplyPro has officially launched, welcoming its first wave of users through a dynamic marketing campaign. We’re thrilled to see new sign-ups daily as we continue refining our platform and delivering unparalleled value to job seekers everywhere.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Early Advances with the Talent Acquisition Platform</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        Our data-driven Talent Acquisition platform streamlines recruiting by bulk-scanning resumes and power-ranking candidates based on job descriptions.
                      </p>
                    </div>
                  </article>

                  {/* <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">UMail Custom Products</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        UMail is proud to introduce our custom reporting tool designed specifically for law enforcement agencies, currently undergoing early testing by officers.
                      </p>
                      <br />
                      <p>This versatile tool is set to transform the reporting process, potentially reducing paperwork time by over 90%. With more efficient reporting, officers can dedicate more time to patrolling and serving their communities effectively.</p>
                    </div>
                  </article> */}

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">ApplyPro's Early Milestones</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        We’re excited to share that ApplyPro reached 100 users in just 15 days since our launch! We’re grateful for the support and are actively developing the V2 User Portal for a more interactive experience, stay tuned for the update.
                      </p>
                      <br />
                      <p>
                        Thanks to user feedback, ApplyPro is evolving to better serve job seekers. Our platform supports multiple languages and caters to diverse professionals.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

                     {/* ================== february 2025 (year === 'Feb2025') ================== */}
                     <div className={`grow ${year !== 'Feb2025' ? 'hidden' : ''}`}>
                <div className="grid md:grid-cols-2 gap-6">


                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">UMail Custom Products</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>
                        UMail is proud to introduce our custom reporting tool designed specifically for law enforcement agencies, currently undergoing early testing by officers.
                      </p>
                      <br />
                      <p>This versatile tool is set to transform the reporting process, potentially reducing paperwork time by over 90%. With more efficient reporting, officers can dedicate more time to patrolling and serving their communities effectively.</p>
                    </div>
                  </article>

                </div>
              </div>

            </div>
          </div>

          {/* 
            Hide scrollbar for WebKit-based browsers (Chrome, Safari, etc.)
            If you're using a CSS/SCSS file or Tailwind plugin, you can place this there.
            For inline, we add a small <style jsx> block here:
          */}
          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

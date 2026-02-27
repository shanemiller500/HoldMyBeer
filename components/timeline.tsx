'use client';

import { useState } from 'react';
import { trackEvent } from '@/utils/mixpanel';

export default function Timeline() {
  const [year, setYear] = useState<string>('Jan2024');
  const [is2024Open, setIs2024Open] = useState<boolean>(false);

  const handleYearClick = (selectedYear: string, displayYear: string) => {
    setYear(selectedYear);
    trackEvent('Timeline Year Clicked', { year: displayYear });
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">Our Remarkable Achievements</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Discover the incredible milestones we've reached in such a short time since May 2024.
            </p>
          </div>

          {/* Section content */}
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-10 lg:gap-16">

            {/* Left Sidebar with Timeline Navigation */}
            <div className="relative w-full sm:w-44 shrink-0 overflow-y-auto max-h-64 sm:max-h-none">
              <div
                className="absolute inset-0 my-3 ml-36 pointer-events-none hidden sm:block"
                aria-hidden="true"
              >
                <div className="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
              </div>

              {/* Mobile: horizontal pill buttons */}
              <div className="sm:hidden flex flex-wrap gap-2 mb-2">
                <button
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                    is2024Open ? 'bg-teal-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                  }`}
                  onClick={() => setIs2024Open((prev) => !prev)}
                >
                  2024 {is2024Open ? '▲' : '▼'}
                </button>
                {is2024Open && (
                  <>
                    {[['Jan2024', 'Jan 2024'], ['May2024', 'May 2024'], ['Sep2024', 'Sep 2024'], ['Oct2024', 'Oct 2024'], ['Dec2024', 'Dec 2024']].map(([key, label]) => (
                      <button
                        key={key}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                          year === key ? 'bg-teal-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                        }`}
                        onClick={() => handleYearClick(key, label)}
                      >
                        {label}
                      </button>
                    ))}
                  </>
                )}
                <span className="px-3 py-1.5 text-sm font-semibold text-gray-500 dark:text-gray-300">2025</span>
                {[['Jan2025', 'Jan 2025'], ['Feb2025', 'Feb 2025']].map(([key, label]) => (
                  <button
                    key={key}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                      year === key ? 'bg-teal-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                    }`}
                    onClick={() => handleYearClick(key, label)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Desktop: vertical sidebar */}
              <div className="hidden sm:block">
                {/* 2024 Dropdown Toggle */}
                <button
                  className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-300 w-full py-3 pr-2 text-left"
                  onClick={() => setIs2024Open((prev) => !prev)}
                >
                  <span className="whitespace-nowrap">2024</span>
                  <span className="w-3.5 h-3.5 flex items-center justify-center text-xl">
                    {is2024Open ? '−' : '+'}
                  </span>
                </button>

                {is2024Open && (
                  <div className="ml-4">
                    {[['Jan2024', 'January 2024'], ['May2024', 'May 2024'], ['Sep2024', 'September 2024'], ['Oct2024', 'October 2024'], ['Dec2024', 'December 2024']].map(([key, label]) => (
                      <button
                        key={key}
                        className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-300 w-full py-3 pr-2 text-left"
                        onClick={() => handleYearClick(key, label)}
                      >
                        <span className="whitespace-nowrap">{label}</span>
                        <span
                          className={`shrink-0 w-3.5 h-3.5 border-2 border-white dark:border-gray-900 rounded-full ml-2 ${
                            year === key ? 'bg-teal-500' : 'bg-gray-400 dark:bg-gray-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                )}

                <span className="block py-3 font-semibold text-gray-500 dark:text-gray-300 whitespace-nowrap">2025</span>

                {[['Jan2025', 'January 2025'], ['Feb2025', 'February 2025']].map(([key, label]) => (
                  <button
                    key={key}
                    className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-300 w-full py-3 pr-2 text-left"
                    onClick={() => handleYearClick(key, label)}
                  >
                    <span className="whitespace-nowrap">{label}</span>
                    <span
                      className={`shrink-0 w-3.5 h-3.5 border-2 border-white dark:border-gray-900 rounded-full ml-2 ${
                        year === key ? 'bg-teal-500' : 'bg-gray-400 dark:bg-gray-700'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="grow min-w-0">

              {/* January 2024 */}
              <div className={year !== 'Jan2024' ? 'hidden' : ''}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Industry Trends</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        In early 2024, the software development team was laid off after ten years
                        of dedicated service at a major company, reflecting a broader industry trend.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Portfolio Building</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        While delving into AI and expanding a portfolio, an innovative tool was
                        engineered to transform swear words into polite and kind expressions.
                        This creative project underscored the role of AI in enhancing communication.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* May 2024 */}
              <div className={year !== 'May2024' ? 'hidden' : ''}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Relentless Job Searching</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Following relentless dedication, an interview was successfully obtained.
                        In the meeting, the option to either pursue employment with others or to
                        establish a personal venture was offered. The preferred path was unmistakable,
                        culminating in the bold creation of UMail a few hours later.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">The Genesis of UMail</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
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

              {/* September 2024 */}
              <div className={year !== 'Sep2024' ? 'hidden' : ''}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Something Was Missing</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        While tirelessly working on UMail and adding feature after feature, we noticed
                        some gaps. How could research-backed cover letters and customized resumes enhance
                        communication like never before? This realization pushed us to innovate further.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">The Birth of ApplyPro.ai</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        After insightful meetings with mentors, things started to align. Within a few hours,
                        a new app was born: ApplyPro.ai, designed to revolutionize the job application process.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">MVP Milestone</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Significant advancements in UMail's integrations led to the establishment of
                        our Minimum Viable Product (MVP). There's still much to accomplish, but reaching
                        this milestone is a huge step forward!
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Alpha Testing</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        UMail welcomed its first Alpha test users, achieving this milestone several
                        months ahead of schedule. Feedback from these users is invaluable as we refine
                        our platform.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* October 2024 */}
              <div className={year !== 'Oct2024' ? 'hidden' : ''}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">ApplyPro.ai MVP</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        With the fundamentals firmly in place, ApplyPro.ai's ascent was swift and
                        efficient. It stands as the ONLY resume tool that does not share data with
                        AI learning, featuring research-backed cover letters and supporting links
                        right in the toolbar.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Beta Testing</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        ApplyPro.ai underwent extensive building and testing, making it well-prepared
                        for Beta testing. While there's still more to add, the platform is now ready
                        to be used by our early adopters.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Early Search Engine Advances</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Our mission is simple: get you the answer you need, right away—no fluff, no clutter.
                        Say goodbye to endless scrolling and irrelevant "Sponsored" results. With this powerful
                        AI-driven search engine, you'll get straight to the point, finding exactly what you're
                        looking for without the unnecessary noise.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Contracting a Marketing Team</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
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

              {/* December 2024 */}
              <div className={year !== 'Dec2024' ? 'hidden' : ''}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">ApplyPro is Live</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        We're thrilled to announce that ApplyPro is available worldwide. To celebrate
                        our December soft launch, all new users who sign up this month will receive
                        6 months of unlimited service absolutely free. Our recent tests showcase an
                        outstanding 96-98% pass rate through ATS systems—the highest scores globally
                        for ATS compatibility. Join ApplyPro today and maximize your application success!
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Introducing Our Talent Acquisition Platform</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
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

              {/* January 2025 */}
              <div className={year !== 'Jan2025' ? 'hidden' : ''}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">ApplyPro Launches Worldwide</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        ApplyPro has officially launched, welcoming its first wave of users through a dynamic marketing campaign. We're thrilled to see new sign-ups daily as we continue refining our platform and delivering unparalleled value to job seekers everywhere.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Early Advances with the Talent Acquisition Platform</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Our data-driven Talent Acquisition platform streamlines recruiting by bulk-scanning resumes and power-ranking candidates based on job descriptions.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">ApplyPro's Early Milestones</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        We're excited to share that ApplyPro reached 100 users in just 15 days since our launch! We're grateful for the support and are actively developing the V2 User Portal for a more interactive experience, stay tuned for the update.
                      </p>
                      <p className="mt-3">
                        Thanks to user feedback, ApplyPro is evolving to better serve job seekers. Our platform supports multiple languages and caters to diverse professionals.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* February 2025 */}
              <div className={year !== 'Feb2025' ? 'hidden' : ''}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">UMail Custom Products</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        UMail is proud to introduce our custom reporting tool designed specifically for law enforcement agencies, currently undergoing early testing by officers.
                      </p>
                      <p className="mt-3">
                        This versatile tool is set to transform the reporting process, potentially reducing paperwork time by over 90%. With more efficient reporting, officers can dedicate more time to patrolling and serving their communities effectively.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

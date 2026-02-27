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
            <h2 className="h2 font-red-hat-display mb-4">How we got here.</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              From layoffs to global launch in under a year.
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
                      <h3 className="h4 font-red-hat-display mb-1">The Layoffs</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Early 2024. After ten years at a major company, the team was let go —
                        part of a wave of tech layoffs hitting the industry hard.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">First Build</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        While job hunting, the first tool got built — a swear word to polite phrase
                        converter. Small project. Proved the concept. Kept building.
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
                      <h3 className="h4 font-red-hat-display mb-1">The Interview</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        After months of applications, an interview finally landed. In the room:
                        take the job, or build something of your own. The answer was obvious.
                        UMail was started a few hours later.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">UMail Begins</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        UMail started as a Gmail productivity layer — voice-to-text, tone adjustment,
                        real-time translations. One feature at a time, it became something much bigger.
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
                      <h3 className="h4 font-red-hat-display mb-1">A Gap in the Market</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Building UMail made the problem clearer: job seekers weren't just struggling
                        to communicate — they were struggling to get noticed. Cover letters and
                        tailored resumes were the missing piece.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">ApplyPro.ai is Born</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        A few mentor conversations later, ApplyPro.ai launched — research-backed
                        cover letters and job-tailored resumes, built for the specific posting, not a template.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">UMail MVP</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        UMail hit MVP. Not finished — never finished — but solid enough to put
                        in front of real users.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Alpha Testing</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        First alpha users onboarded, months ahead of schedule. Real feedback
                        from real people using it in the wild.
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
                        ApplyPro.ai reached MVP. The only resume tool that doesn't share data with
                        model training — research-backed cover letters with supporting links built
                        right into the toolbar.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Beta Testing</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        ApplyPro opened to early adopters for Beta. More to build — but it works,
                        and people are using it.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Search Engine: Early Work</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Started early development on a search engine built around one rule: no ads,
                        no sponsored results — ranked on relevance only.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Marketing Team Onboarded</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Brought on an experienced marketing team to grow the user base globally.
                        Onboarded and running by end of October.
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
                      <h3 className="h4 font-red-hat-display mb-1">ApplyPro Goes Live</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        ApplyPro launched globally. 96–98% ATS pass rate in testing — the highest
                        recorded for ATS compatibility. First-month users received 6 months free.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Talent Acquisition Platform</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Started building the Talent Acquisition Platform — bulk resume scanning,
                        candidate ranking by job criteria, and auto-generated summaries for hiring managers.
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
                      <h3 className="h4 font-red-hat-display mb-1">ApplyPro Worldwide</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        ApplyPro officially live. Marketing campaign running. New sign-ups daily
                        across the globe.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">Talent Acquisition: In Progress</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        Talent Acquisition Platform in active development — bulk resume scanning
                        and job-description-based candidate ranking taking shape.
                      </p>
                    </div>
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-lg">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">100 Users in 15 Days</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        100 users in 15 days from launch. V2 User Portal in development.
                        Multilingual support added based on early user feedback.
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
                      <h3 className="h4 font-red-hat-display mb-1">UMail for Law Enforcement</h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-300 grow">
                      <p>
                        UMail's custom reporting tool for law enforcement is in early testing with
                        active officers. Initial data suggests it could cut report paperwork by over 90%.
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

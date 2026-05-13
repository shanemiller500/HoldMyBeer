
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { trackEvent } from '@/utils/mixpanel'

import HeroImage from '@/public/images/umailHero.png'
import ShieldImage from '@/public/images/esof-shield.png'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.8-5.5 3.8-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3 14.6 2 12 2 6.9 2 2.8 6.3 2.8 11.7S6.9 21.4 12 21.4c6.9 0 9.2-5 9.2-7.6 0-.5-.1-.9-.1-1.3H12z" />
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" fill="#F25022" />
      <rect x="13" y="3" width="8" height="8" fill="#7FBA00" />
      <rect x="3" y="13" width="8" height="8" fill="#00A4EF" />
      <rect x="13" y="13" width="8" height="8" fill="#FFB900" />
    </svg>
  )
}

export default function UMailLandingPage() {
  const [darkMode] = useState(false)
  const [buttonText, setButtonText] = useState('Become a Beta User')

  const handleContactClick = () => {
    trackEvent('CTA Contact Clicked', { label: 'Contact Button' })
  }

  const handleBecomeTestUserClick = () => {
    trackEvent('CTA Become Test User Clicked', { label: 'Become a Beta User' })
  }

  const renderBullet = (item: string) => (
    <li key={item} className="flex items-start">
      <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
      </svg>
      <span>{item}</span>
    </li>
  )

  const intelligenceBullets = [
    'Self-learning calculated algorithm adapts to sender behavior, reply patterns, and trust signals',
    'Detects real-human urgency versus sponsored spam and AI-crafted bait',
    'Continuously improves prioritization so critical conversations stay visible',
  ].map(renderBullet)

  const professionalBullets = [
    'Unified inbox for Google + Microsoft accounts',
    'AI writing and tone controls',
    'Rules, filters, and cleanup actions',
    'Translation for incoming and outgoing email',
    'Dashboard with unread pressure and response signals',
    'Human-first workflow built to protect real opportunities and follow-ups',
  ].map(renderBullet)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div data-aos="fade-up">
              <Image className="mx-auto opacity-80 w-full h-auto max-w-lg" src={HeroImage} alt="U-Mail Hero" priority />
            </div>

            <h1 className="mt-10 text-3xl md:text-5xl font-bold text-teal-500 font-red-hat-display" data-aos="fade-down">
              Human-first intelligence for modern email.
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl" data-aos="fade-down" data-aos-delay="100">
              U-Mail is the intelligence layer that helps people beat sponsored spam, AI-crafted bait, buried real mail, and missed follow-ups across Google and Microsoft accounts.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2" data-aos="fade-down" data-aos-delay="150">
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs text-gray-700 dark:text-gray-200">
                <GoogleIcon /> Works with Google
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs text-gray-700 dark:text-gray-200">
                <MicrosoftIcon /> Works with Microsoft
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-teal-700 dark:bg-teal-950/40 dark:text-teal-200">
                CASA Tier 2 Passed 9.7/10
              </span>
            </div>
          </div>
        </section>

        {/* WHAT IS UMAIL */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">Email, upgraded.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                U-Mail combines multi-account email, adaptive intelligence, translation, automation, and calendar tools in one focused workspace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Unified Inbox</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Connect Google and Microsoft accounts, color-code them, and manage everything from one queue.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Self-Learning Intelligence</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A calculated algorithm learns from trust signals, response behavior, and inbox patterns to keep the right conversations on top.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Execution Tools</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  AI writing, translation, rules, cleanup actions, calendar, and meeting workflows stay connected in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST + CASA */}
        <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-br from-white via-teal-50 to-cyan-50 shadow-[0_20px_80px_-40px_rgba(13,148,136,0.45)] dark:border-teal-900 dark:from-gray-900 dark:via-gray-900 dark:to-teal-950">
              <div className="grid grid-cols-1 items-center gap-10 px-6 py-8 md:grid-cols-[220px_1fr] md:px-10 md:py-10">
                <div className="flex justify-center md:justify-start">
                  <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-lg dark:border-teal-900 dark:bg-gray-900/90">
                    <Image
                      src={ShieldImage}
                      alt="CASA Tier 2 assessment shield for U-Mail"
                      className="h-auto w-full max-w-[160px]"
                      priority
                    />
                  </div>
                </div>

                <div>
                  <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700 dark:border-teal-800 dark:bg-teal-950/30 dark:text-teal-200">
                    Trust Signal
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                    Passed CASA Tier 2 with a 9.7/10 result.
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
                    U-Mail now carries a stronger public trust marker to match the product direction: serious security review, human-first inbox intelligence, and a system designed to surface real mail instead of noise.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-teal-100 bg-white/75 p-4 dark:border-teal-900 dark:bg-gray-900/70">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Google and Microsoft foundation</p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Built on the security users already trust.</p>
                    </div>
                    <div className="rounded-xl border border-teal-100 bg-white/75 p-4 dark:border-teal-900 dark:bg-gray-900/70">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Adaptive inbox scoring</p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Learns which messages deserve immediate attention.</p>
                    </div>
                    <div className="rounded-xl border border-teal-100 bg-white/75 p-4 dark:border-teal-900 dark:bg-gray-900/70">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">No ad-driven incentives</p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Aligned around clarity, not inbox clutter.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD + CLEANUP */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-center md:justify-between mb-12">
              <div className="md:w-1/2 mt-8 md:mt-0 mr-0 md:mr-20 mb-8 md:mb-0" data-aos="fade-right">
                <Image src={HeroImage} alt="U-Mail dashboard and cleanup tools" className="mx-auto w-full max-w-lg h-auto" priority />
              </div>

              <div className="md:w-1/2" data-aos="fade-left">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">Inbox control without chaos.</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Use radars, bulk actions, rules, and sender cleanup workflows to reduce noise while keeping real conversations, follow-ups, and opportunities visible.
                </p>
                <ul className="mt-4 space-y-4">
                  {[
                    'Bulk archive, trash, mark read/unread, and move to labels',
                    'Rules and filters for automated organization',
                    'Sender cleanup workflows for spam, unsubscribe, and archive actions',
                    'Dashboard signals for unread pressure, backlog, and response risk',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE CLOUD */}
        <section className="relative pb-16 md:pb-20 bg-gray-100 dark:bg-gray-900 mt-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">Everything in one place.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Available now + clearly marked roadmap.</p>
            </div>

            <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <div className="relative flex justify-center items-center overflow-hidden">
                <svg className="dark:hidden max-w-full h-auto" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="48.919%" id="umail_light_grad">
                      <stop stopColor="#B2F5EA" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#B2F5EA" stopOpacity="0" offset="100%" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle fill="url(#umail_light_grad)" cx="216" cy="216" r="216" />
                    <g transform="translate(22 22)" stroke="#1D1D20">
                      <circle strokeOpacity=".04" cx="194" cy="194" r="193.5" />
                      <circle strokeOpacity=".08" strokeWidth="2" cx="194" cy="194" r="153" />
                      <circle strokeOpacity=".16" strokeWidth="2.5" cx="194" cy="194" r="112.75" />
                    </g>
                  </g>
                </svg>

                <svg className="hidden dark:block max-w-full h-auto" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="umail_dark_grad">
                      <stop stopColor="#1D1D21" stopOpacity="0" offset="0%" />
                      <stop stopColor="#2E2E33" stopOpacity=".32" offset="100%" />
                    </radialGradient>
                  </defs>
                  <circle cx="216" cy="216" r="216" fill="url(#umail_dark_grad)" fillRule="evenodd" />
                </svg>

                <div className="absolute inset-0">
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation mt-12">
                    Unified Google + Microsoft Inbox
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-1 mt-2">
                    Mood &amp; Tone Controls
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-2 mt-40">
                    Rules + Filters
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4 mt-72">
                    Translation Inbound + Reply
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-56 top-8">
                    Comms Radar Cleanup
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-6 mt-20 top-52">
                    Auto-Reply Queue
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7 mt-40">
                    Ghosting Timed Replies
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-gray-900 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-8 mt-80 top-4">
                    Dashboard Signal Center
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-yellow-500 bg-gradient-to-tr from-yellow-500 to-yellow-400 dark:bg-yellow-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-9 mt-36 top-24">
                    Calendar + Meet
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-red-500 bg-gradient-to-tr from-red-500 to-red-400 dark:bg-red-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-12 mt-80 top-8">
                    Google Drive Attachments
                  </div>
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-gray-900 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-13 mt-52">
                    Favorite Senders (Coming Soon)
                  </div>
                </div>

                <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900" aria-hidden="true" />
                <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* PRIVACY + QUALITY */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="h2 font-red-hat-display text-teal-500 mb-4 text-3xl md:text-4xl" data-aos="fade-up">
                What sets U-Mail apart.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
                Built to protect attention, trust, and response quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Privacy First</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  No ads, no sponsored inbox noise, no selling your data to advertisers.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {['No ad network model', 'No data resale', 'You control what gets sent'].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Self-Learning Engine</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">U-Mail uses a self-learning calculated algorithm instead of static inbox rules.</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">{intelligenceBullets}</ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Human-First Workflow</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Everything needed to act fast without losing the thread on real people.</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">{professionalBullets}</ul>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="relative pt-10 pb-10 md:pt-16 md:pb-16 mb-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-6" data-aos="fade-up">
              Works with what you already use.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
              Google + Microsoft inboxes and calendars are live. Google Drive is available.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-start gap-8 mb-8" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Calendar + Meet</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Create events, include Meet links, and manage guests from U-Mail.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Google Drive</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Attach Drive files in compose and include Drive links in events.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Translation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Read incoming messages in your language and translate replies before send.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-start gap-8" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1 border border-dashed border-teal-400 dark:border-teal-600">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-2 block">Coming Soon</span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Zoom + Teams</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm pb-5">Deeper meeting workflows and provider-specific enhancements.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1 border border-dashed border-teal-400 dark:border-teal-600">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-2 block">Coming Soon</span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Salesforce + Slack</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Connected workflows for pipeline and team communication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Arrows */}
        <div className="z-20 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 mb-20">
          <Link
            href="/features"
            className="text-teal-500 hover:text-teal-700 flex items-center mb-4 sm:mb-0"
            onClick={() => trackEvent('Navigation Clicked', { direction: 'Back', target: '/features' })}
          >
            <FaArrowLeft className="mr-2" />
            Features
          </Link>

          <Link
            href="/pricing"
            className="text-teal-500 hover:text-teal-700 flex items-center"
            onClick={() => trackEvent('Navigation Clicked', { direction: 'Next', target: '/pricing' })}
          >
            Pricing
            <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* CTA SECTION */}
        <section className="relative py-16 md:py-20 bg-teal-500 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
              Your inbox, your rules.
            </h2>
            <p className="text-lg md:text-xl text-gray-900 mb-8" data-aos="fade-up" data-aos-delay="100">
              Beta access now. Human-first email intelligence with no ads, no data resale, and no inbox clutter from us.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link
                href="https://u-mail.ai"
                target="_blank"
                className="btn text-teal-500 bg-gray-900 hover:bg-gray-700 px-8 py-4 rounded-lg shadow-md transition duration-300 text-lg font-semibold"
                onMouseEnter={() => setButtonText('Beta invites are limited')}
                onMouseLeave={() => setButtonText('Become a Beta User')}
                onClick={handleBecomeTestUserClick}
              >
                {buttonText}
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="text-gray-900 underline hover:text-gray-800 text-sm"
                onClick={handleContactClick}
              >
                Contact sales/support
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa' // Optional: For a better-looking arrow icon

import { trackEvent } from '@/utils/mixpanel'; // Import the trackEvent function

// Replace these with your actual images
import HeroImage from '@/public/images/umailHero.png'
import LogoImage from '@/public/images/umailLogo.png'

export default function UMailLandingPage() {
  // State to manage dark mode toggling
  const [darkMode, setDarkMode] = useState(false)
  const [buttonText, setButtonText] = useState("Become a Test User Now");

  // Handler to track "Contact" button clicks
  const handleContactClick = () => {
    trackEvent('CTA Contact Clicked', { label: 'Contact Button' });
  };

  // Handler to track "Become a Test User Now" button clicks
  const handleBecomeTestUserClick = () => {
    trackEvent('CTA Become Test User Clicked', { label: 'Become a Test User Now' });
  };

  const renderBullet = (item: string) => (
    <li key={item} className="flex items-start">
      <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
      </svg>
      <span>{item}</span>
    </li>
  )

  const voiceBullets = ['Voice dictation with tone control', 'Accurate across accents and dialects', 'Fast replies without typing'].map(renderBullet)
  const professionalBullets = ['Fast email creation from voice or text', 'Personalized tone and style controls', 'Adapts to your style, not the other way around', 'Voice-to-text with accent support', 'Real-time global translations', 'No ads. No tracking. Ever.'].map(renderBullet)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div data-aos="fade-up">
              <Image
                className="mx-auto opacity-80 w-full h-auto max-w-lg"
                src={HeroImage}
                alt="U-Mail Hero"
                priority
              />
            </div>
            <h1
              className="mt-10 text-3xl md:text-5xl font-bold text-teal-500 font-red-hat-display"
              data-aos="fade-down"
            >
              Smarter email. Zero noise.
            </h1>
            <p
              className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Smart tools layered on your Gmail. Write faster, sound sharper, and actually understand what you're reading — in any language.
            </p>
          </div>
        </section>

        {/* WHAT IS UMAIL */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">Email, upgraded.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Voice-to-text, real-time translations, tone adjustment — all layered on top of Gmail. Clean interface, powerful tools, no ads.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Built-in Tools</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Tone control, synonym assistant, grammar check — the tools you actually need, built right in.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Speak, Don't Type</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Dictate your email. UMail cleans it up, sets the tone, and sends it polished.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Global Translations</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Read and reply in any language. Real-time, inline, no copy-pasting into a translator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions for Any Industry */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-center md:justify-between mb-12">
              
              {/* Image Section */}
              <div className="md:w-1/2 mt-8 md:mt-0 mr-0 md:mr-20 mb-8 md:mb-0" data-aos="fade-right">
                <Image
                  src={HeroImage}
                  alt="Custom Solutions for Any Industry"
                  className="mx-auto w-full max-w-lg h-auto"
                  priority
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2" data-aos="fade-left">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">
                  Built for every industry.
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Healthcare, law enforcement, military, HR — UMail speaks your industry's language so your team doesn't have to translate.
                </p>
                <ul className="mt-4 space-y-4">
                  {[
                    'Healthcare: patient comms and admin, handled',
                    'Law enforcement & military: secure, field-ready messaging',
                    'HR: clear communications without the back-and-forth',
                    'Any team: less overhead, more focus',
                  ].map((item: string) => (
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

        {/* COMPREHENSIVE FEATURE LIST - ANIMATED */}
        <section className="relative pb-16 md:pb-20 bg-gray-100 dark:bg-gray-900 mt-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">
                Everything in one place.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                More features on the way.
              </p>
            </div>

            {/* Animated Feature Circle */}
            <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <div className="relative flex justify-center items-center overflow-hidden">
                {/* Big circle behind: light layout */}
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

                {/* Big circle behind: dark layout */}
                <svg className="hidden dark:block max-w-full h-auto" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="umail_dark_grad">
                      <stop stopColor="#1D1D21" stopOpacity="0" offset="0%" />
                      <stop stopColor="#2E2E33" stopOpacity=".32" offset="100%" />
                    </radialGradient>
                  </defs>
                  <circle cx="216" cy="216" r="216" fill="url(#umail_dark_grad)" fillRule="evenodd" />
                </svg>

                {/* Moving feature "tags" */}
                <div className="absolute inset-0">
                  {/* 1 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation mt-12">
                    Voice &amp; Accent Enhancement
                  </div>

                  {/* 2 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-1 mt-2">
                    Mood &amp; Tone Adjustments
                  </div>

                  {/* 3 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-2 mt-40">
                    Customizable Templates
                  </div>

                  {/* 4 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4 mt-72">
                    Multilingual messaging
                  </div>

                  {/* 5 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4 mt-14">
                    Industry-Specific Tools
                  </div>

                  {/* 6 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-56 top-8">
                    Real-Time Collaboration
                  </div>

                  {/* 7 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-6 mt-20 top-52">
                    Custom Literary Styles
                  </div>

                  {/* 8 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7 mt-40">
                    Synonym Assistant
                  </div>

                  {/* 9 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-gray-900 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-8 mt-80 top-4">
                    Inbox Categorization
                  </div>

                  {/* 10 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-yellow-500 bg-gradient-to-tr from-yellow-500 to-yellow-400 dark:bg-yellow-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-9 mt-36 top-24">
                    Email Star &amp; Marking System
                  </div>

                  {/* 11 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-red-500 bg-gradient-to-tr from-red-500 to-red-400 dark:bg-red-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-6 mt-30 top-12">
                    Custom Message Styles
                  </div>

                  {/* 12 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-1 mt-28">
                    Context-Aware Messaging
                  </div>

                  {/* 13 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-12 mt-80 top-8">
                    Smart Ghosting (Auto Timed Replies)
                  </div>

                  {/* 14 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-gray-900 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-13 mt-52">
                    Powerful Search &amp; Filters
                  </div>

                  {/* 15 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-gray-900 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7 mt-4 top-20">
                    Context based Automated Replies
                  </div>

                  {/* 16 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-gray-900 bg-gradient-to-tr from-red-500 to-red-400 dark:bg-red-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-15 mt-72 top-1">
                    Spelling &amp; Grammar Assistant
                  </div>
                </div>

                {/* Side gradients */}
                <div
                  className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900"
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM MOOD & TONE */}
        <section className="relative pt-10 pb-10 md:pt-16 md:pb-16 bg-gray-100 dark:bg-gray-800 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Text Content */}
              <div className="md:pr-8 order-2 md:order-1" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">Custom Mood &amp; Tone</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Formal, blunt, warm, professional — set the tone and UMail adjusts your message before it goes out.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Write how you think. Let UMail handle how it sounds.
                </p>
              </div>
              {/* Image */}
              <div className="order-1 md:order-2 mb-8 md:mb-0 flex justify-center" data-aos="fade-left">
                <Image
                  src={LogoImage}
                  alt="U-Mail Mood &amp; Tone"
                  width={250}
                  height={250}
                  className="mx-auto w-full max-w-[250px] h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT MAKES UMAIL AMAZING */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="h2 font-red-hat-display text-teal-500 mb-4 text-3xl md:text-4xl"
                data-aos="fade-up"
              >
                What sets UMail apart.
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-gray-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Built on privacy. Designed for speed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
              {/* Security & Privacy */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Security &amp; Privacy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Your emails don't train anything. Your data isn't sold. End of story.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {['End-to-end encrypted', 'AI never trains on your messages', 'Data never sold or shared'].map((item: string) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Voice-to-Text AI */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Advanced Voice-to-Text</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Speak it. UMail writes it. Handles any accent, any dialect — then cleans it up automatically.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {voiceBullets}
                </ul>
              </div>
              {/* Professional Enhancements */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Professional Enhancements</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Grammar, tone, industry terms — every message goes out exactly how it should.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {['Industry-specific language tools', 'Synonym assistant', 'Customizable templates & styles'].map((item: string) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ADVANCED CONTROLS */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-center md:justify-between mb-12">
              <div className="md:w-1/2 mt-8 md:mt-0 mr-0 md:mr-20 mb-8 md:mb-0" data-aos="fade-right">
                <Image
                  src={HeroImage}
                  alt="Built for Professionals"
                  className="mx-auto w-full max-w-lg h-auto"
                  priority
                />
              </div>

              <div className="md:w-1/2" data-aos="fade-left">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">Built for Professionals</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Say one word, send a polished email. Voice dictation, tone control, and global translations — built for people who communicate for a living.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {professionalBullets}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEAMLESS INTEGRATIONS */}
        <section className="relative pt-10 pb-10 md:pt-16 md:pb-16 mb-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-teal-500 mb-6"
              data-aos="fade-up"
            >
              Works with what you already use.
            </h2>
            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Gmail, Google Meet, Zoom — plug in and go.
            </p>
            <div
              className="flex flex-col md:flex-row justify-center items-start gap-8 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Calendar Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Google Meet and Zoom scheduling — right inside your inbox.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Draft, edit, and reply as a team — in real time.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Global Translations</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Read and reply in any language without leaving your inbox.
                </p>
              </div>
            </div>
            <div
              className="flex flex-col md:flex-row justify-center items-start gap-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1 border border-dashed border-teal-400 dark:border-teal-600">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-2 block">Coming Soon</span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Microsoft 365</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm pb-5">
                  Outlook, Teams, and the full Microsoft stack to be fully integrated.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1 border border-dashed border-teal-400 dark:border-teal-600">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-2 block">Coming Soon</span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Salesforce</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Log emails, sync contacts, & manage pipelines without leaving your inbox.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSLATE CODES & ACRONYMS */}
        <section className="relative pt-10 pb-10 md:pt-16 md:pb-16 bg-gray-100 dark:bg-gray-800 mb-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Image */}
              <div className="order-1 md:order-2 mb-8 md:mb-0 flex justify-center" data-aos="fade-left">
                <Image
                  src={HeroImage} // Replace with your image source
                  alt="UMail Code & Acronym Translation"
                  className="mx-auto w-full max-w-lg h-auto"
                />
              </div>
              {/* Text Content */}
              <div className="md:pl-8 order-2 md:order-1" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">Translate Codes &amp; Acronyms</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Healthcare, military, aviation, law enforcement — UMail converts your industry shorthand into clear, professional language automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Arrows */}
        <div className="z-20 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 mb-20">
          {/* Back Arrow */}
          <Link href="/applyPro" className="text-teal-500 hover:text-teal-700 flex items-center mb-4 sm:mb-0" onClick={() => trackEvent('Navigation Clicked', { direction: 'Back', target: '/applyPro' })}>
            <FaArrowLeft className="mr-2" /> ApplyPro
          </Link>
          {/* Next Arrow */}
          <Link href="/Talent" className="text-teal-500 hover:text-teal-700 flex items-center" onClick={() => trackEvent('Navigation Clicked', { direction: 'Next', target: '/Talent' })}>
            Talent Acquisition Platform<FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* CTA SECTION */}
        <section className="relative py-16 md:py-20 bg-teal-500 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              Your inbox, your rules.
            </h2>
            <p
              className="text-lg md:text-xl text-gray-900 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              No ads. No data selling. Just better email.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link
                href="https://u-mail.ai"
                target="_blank"
                className="btn text-teal-500 bg-gray-900 hover:bg-gray-700 px-8 py-4 rounded-lg shadow-md transition duration-300 text-lg font-semibold"
                onMouseEnter={() => setButtonText("New website coming soon")}
                onMouseLeave={() => setButtonText("Become a Test User Now")}
                onClick={handleBecomeTestUserClick} // Added Mixpanel tracking here
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa' // Optional: For a better-looking arrow icon


// Replace these with your actual images
import HeroImage from '@/public/images/umailHero.png'
import LogoImage from '@/public/images/umailLogo.png'

export default function UMailLandingPage() {
  // State to manage dark mode toggling
  const [darkMode, setDarkMode] = useState(false)
  const [buttonText, setButtonText] = useState("Become a Test User Now");

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
      The Future of Global Communication
    </h1>
    <p
      className="mt-4 text-gray-600 dark:text-gray-400 text-lg md:text-xl"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      AI-powered email for effortless communication. Transform how you connect
      globally, work, and express yourself. Built to seamlessly integrate with
      your Gmail & Google Workspace accounts. (Microsoft integration coming soon)
    </p>
  </div>
</section>


        {/* WHAT IS UMAIL */}
        <section className="relative pt-16 pb-10 md:pt-20 md:pb-16 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">What is UMail?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                AI-powered email for effortless communication. UMail’s simple and elegant interface lets you get started in minutes, offering powerful features like <strong>advanced voice-to-text</strong> and <strong>global language translations</strong> to boost your productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Built-in Tools</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  UMail's advanced AI tools streamline your emails with mood &amp; tone optimization, professional messaging, and a built-in synonym spell check &amp; dictionary.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Optimize Your Time</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Convert your spoken words into polished messages in real-time. Express any emotion, UMail automatically refines it into a clear, professional tone.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Global Translations</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Seamlessly translate emails across multiple languages, enabling effortless international communication.
                </p>
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
                UMail's Feature Highlights
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore the comprehensive range of features that makes UMail truly exceptional. There are more on the way, stay tuned!
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
                    Voice & Accent Enhancement
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
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-56">
                    Real-Time Collaboration
                  </div>

                  {/* 7 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-6 mt-20 top-52">
                    Custom Literary Styles
                  </div>

                  {/* 8 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7 mt-40">
                    AI-Powered Synonym Assistant
                  </div>

                  {/* 9 */}
                  <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-8 mt-80 top-4">
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
                    Spelling & Grammar Assistant
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
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  Tailor your communication to any situation with any mood you're in. Whether formal, professional, or empathetic. UMail ensures your message hits the right note every time.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  With UMail’s tone adjustment, you can fully be yourself without worrying about how your message will be perceived. Write (or speak) freely, let your emotions, expressions, and sass shine through and trust UMail to handle the fine-tuning.
                </p>
              </div>
              {/* Image */}
              <div className="order-1 md:order-2 mb-8 md:mb-0 flex justify-center" data-aos="fade-left">
                <Image
                  src={LogoImage}
                  alt="U-Mail Mood & Tone"
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
                What Makes UMail Amazing
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-gray-400"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                UMail is the next step in communication, designed to elevate the way you connect, work, and express yourself professionally.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
              {/* Security & Privacy */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Security &amp; Privacy</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Your data is yours. UMail employs cutting-edge encryption and follows strict privacy protocols to ensure that all your communications are secure, and your personal data is never shared with third parties.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Top-Tier Security and Data Privacy</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>No AI/ML Training on User Data or messages</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Your Data is Never Sold to Third Parties</span>
                  </li>
                </ul>
              </div>
              {/* Voice-to-Text AI */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Advanced Voice-to-Text</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  UMail’s advanced AI transforms your voice into text with precision, handling diverse accents and dialects. Simply speak, and let UMail craft polished, professional messages.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Voice Dictation with Mood &amp; Tone Adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Accurate Transcription for Quick Replies</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Enhanced Productivity</span>
                  </li>
                </ul>
              </div>
              {/* Professional Enhancements */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Professional Enhancements</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Elevate your emails with UMail's suite of AI-powered tools. From grammar and tone to industry-specific language, UMail ensures every message is crafted with clarity and precision.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Industry-Specific Email Tools</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>AI-Powered Synonym Assistant</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Customizable Templates &amp; Styles</span>
                  </li>
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
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  UMail’s AI doesn’t just read your text, it helps you craft effortless emails with a single word. Whether you’re a seasoned professional or simply looking to save time, UMail streamlines your writing so you can focus on what matters most.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Effortless Email Creation</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Personalized Tone and Style</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>AI That Learns &amp; Adapts to You</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Voice-to-Text Magic with Accent Support</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Seamless Global Translations</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                    </svg>
                    <span>Privacy You Can Trust</span>
                  </li>
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
              Seamless Integrations
            </h2>
            <p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              UMail integrates with your favorite tools Gmail, Google Meet, Zoom, and more so you can stay connected and manage everything from one place.
            </p>
            <div
              className="flex flex-col md:flex-row justify-center items-start gap-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Calendar Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Integrated Calendar Scheduling with Google Meet and Zoom for seamless meeting setups.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Real-Time Collaboration Features let teams work together on drafting, editing, and responding to emails.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold text-teal-500 mb-2">Global Translations</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Effortlessly translate your emails into multiple languages, bridging communication gaps.
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
                <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">Translate Codes & Acronyms</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  Speak in your industry’s specific terminology, healthcare, law enforcement, military, aviation, and more. UMail effortlessly converts your codes and acronyms into clear, understandable language.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  Save countless hours and eliminate mountains of paperwork with UMail. Let us translate your code and acronyms into professional language, so you can focus on what matters most with confidence and clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Arrows */}
        <div className="z-20 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 mb-20">
          {/* Back Arrow */}
          <Link href="/applyPro" className="text-teal-500 hover:text-teal-700 flex items-center mb-4 sm:mb-0">
            <FaArrowLeft className="mr-2" /> ApplyPro
          </Link>
          {/* Next Arrow */}
          <Link href="/Talent" className="text-teal-500 hover:text-teal-700 flex items-center">
            Talent Acquisition Platform<FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* CTA SECTION */}
        <section className="relative py-16 md:py-20 bg-teal-500 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
            >
              Ready to Experience the Future of Email?
            </h2>
            <p
              className="text-lg md:text-xl text-gray-900 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Transform your communication with UMail’s AI-driven tools, end-to-end privacy, and seamless integrations.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link
                href="https://u-mail.ai"
                target="_blank"
                className="btn text-teal-500 bg-gray-900 hover:bg-gray-700 px-8 py-4 rounded-lg shadow-md transition duration-300 text-lg font-semibold"
                onMouseEnter={() => setButtonText("New website coming soon")}
                onMouseLeave={() => setButtonText("Become a Test User Now")}
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

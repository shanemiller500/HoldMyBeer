'use client'

import { useState } from 'react'

export default function Timeline() { 
  
  const [year, setYear] = useState<string>('2020')

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">What we've achieved</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">It's quite amazing what we have achieved in such a short amount of time since the start of May 2024.</p>
          </div>

          {/* Section content */}
          <div>
            <div className="flex items-start">

              {/* Timeline buttons */}
              <div className="relative mr-4 sm:mr-12 lg:mr-32">
                <div className="absolute inset-0 my-6 ml-16 pointer-events-none -z-1" aria-hidden="true">
                  <div className="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2020')}>
                  <span className="block w-12 truncate">Jan2024</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${year === '2020' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2019')}>
                  <span className="block w-12 truncate">May</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${year === '2019' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2018')}>
                  <span className="block w-12 truncate">Sep</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${year === '2018' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2017')}>
                  <span className="block w-12 truncate">Oct</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${year === '2017' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                {/* <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2016')}>
                  <span className="block w-12 truncate">Nov</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${year === '2016' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button> */}
              </div>

              {/* 2020's articles */}
              <div className={`grow ${year !== '2020' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">1. Layed off</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Just like a lot of software developers, I was made reundant at the start of 2024 after a decaide of loyal service at a large company.</p>
                    </div>
                   
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">2. Portfolio Building</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                    <p>While playing with AI and building a portfolio I created a really cool tool to swaer into, I love to use cuss words so a tool that would convert them into nice, kind words was fun to play with.</p>
                    </div>

                  </article>

                  {/* <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Mobile builder enabled</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article> */}
                </div>
              </div>

              {/* 2019's articles */}
              <div className={`grow ${year !== '2019' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">

                <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Tireless job searching</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>I finally scored an interview! While showing my portfolio I was told to stop looking for work or create a company, It was risky, but 2 hours after that job interview UMail was born.</p>
                    </div>
                   
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">The start of UMail</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>UMail quickly mophed into an extreamly robust AI system that will change the world. </p>
                    </div>
                    
                  </article>

                  
                  {/* <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Mobile builder enabled</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article> */}
                </div>
              </div>

              {/* 2018's articles */}
              <div className={`grow ${year !== '2018' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Something was off</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Working tireless on UMail adding feafture after feature things we just off with some of them. What did an awesome research backed Cover Letter and Customized Resumes have to do with Communication like you ave ever seen?</p>
                    </div>
                    
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">The Birth of ApplyPro.ai</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>After another meeting with a mentor, things started to make more sense and once again a few hours later a new small app was born, applypro.ai</p>
                    </div>
                   
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">MVP MVP MVP</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Some HUGE advances with UMails intergration's happened & an MVP was established. A lot more work to do, but a very huge milestole reached!</p>
                    </div>
                   
                  </article>

                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Alpha Testing</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Umail has its first Alpha test users, what a milestone was reached several months ahead of sechdle.</p>
                    </div>
                   
                  </article>
                </div>
              </div>

              {/* 2017's articles */}
              <div className={`grow ${year !== '2017' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">ApplyPro.ai MVP</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>A lot of the fundmentals were already in place, so Apply Pros's assend was as fast and effecant as the product it self. The ONLY Resume tool that does not share data with AI learning, the ONLY tool that has researched backed cover letters and the links to back up the research in the tool bar. </p>
                    </div>
                   
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Beta Testing</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Apply Pro had a lot built and a lot tested, so it was in good shape for Alpha testing fast! We still have more to add but this is ready to go.</p>
                    </div>
                 
                  </article>
                </div>
              </div>

              {/* 2016's articles */}
              {/* <div className={`grow ${year !== '2016' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="md:col-span-2 p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Mobile builder enabled</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Series B fundraising</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">1M Customers</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
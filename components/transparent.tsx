import React from 'react';

export default function TransparencyPolicyPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 py-12">
      <div className="max-w-5xl mx-auto text-gray-800 dark:text-gray-200 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 mt-10">
        {/* Transparency Policy Content */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-teal-500" data-aos="fade-down">
            Transparency Policy
          </h1>
          <p className="text-lg mb-6" data-aos="fade-down" data-aos-delay="150">
            Your privacy is important to us. This Transparency Policy outlines the types of information we collect, how we use it, and the choices you have regarding your information. We are committed to being 100% transparent with our users about how we handle your personal data.
          </p>
        </div>

        {/* Policy Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="300">
          {/* Section 1: Information We Collect */}
          <div>
            <h2 className="text-2xl text-teal-500 font-semibold mb-2">1. Information We Collect</h2>
            <p className="mb-4">
              We collect the following types of information to provide and improve our services to you:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>Username and Email (Required)</span>
              </li>

            </ul>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-500">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>To Provide and Maintain Services</span>
              </li>
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>To Improve Our Services</span>
              </li>
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>To Communicate with You</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Google Analytics */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-500">3. Google Analytics</h2>
            <p className="mb-4">
              We use Google Analytics to collect and analyze data about how users interact with our website. This helps us understand user behavior and improve our services.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>Collects statistical data on website usage</span>
              </li>
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>Helps in improving website performance</span>
              </li>

              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>
                  For more information, visit the{' '}
                  <a href="https://support.google.com/analytics/answer/12159447?hl=en#:~:text=Google%20Analytics%20is%20a%20platform,provide%20insights%20into%20your%20business." target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">
                  How Google Analytics works
                  </a>.
                </span>
              </li>
             
            </ul>
          </div>

          {/* Section 4: Session Data */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-500">4. Session Data</h2>
            <p className="mb-4">
              We collect data on session starts to monitor how many sessions each user has. This helps us understand user engagement and improve user experience.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>Tracks the number of sessions per user</span>
              </li>
            </ul>
          </div>

          {/* Section 5: Usage Clicks */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-500">5. Usage Clicks</h2>
            <p className="mb-4">
              We monitor when users click on our products to understand user interest and improve product offerings.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>Tracks clicks on our products</span>
              </li>
            </ul>
          </div>

          {/* Section 6: Optional Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-500">6. Optional Information</h2>
            <p className="mb-4">
              Providing additional information such as your website, linkedin profile, Job status and phone number is optional. We use this information to create personalized user signatures and express our gratitude.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center ">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>Optional: Website / Linkedin Profile, Phone Number, job status, age range & Industry</span>
              </li>
            </ul>
          </div>

          {/* Section 7: Opt-Out of Sharing with AI Learning */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-500">7. Opt-Out of Sharing with AI Learning</h2>
            <p className="mb-4"> All our applications are configured to <span className="text-teal-500"> opt out </span> of sharing data for AI learning by default. When data is sent for enhancement, it is transmitted  <span className="text-teal-500">anonymously</span> from the organization, without being linked to any individual user. </p>
      
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className=" w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>
                  For more information, visit the{' '}
                  <a href="https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance" target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">
                    OpenAI API Documentation
                  </a>.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-500">8. Voice Collection</h2>
            <p className="mb-4"> Voice collection is optional. If you opt in, we capture brief, 2-second snippets (one to two words). These help us improve voice synthesis and accent recognition for more natural-sounding experiences. All data is anonymized and stored securely without any user association. </p>
            <ul className="space-y-2">
                <li className="flex items-center">
                <svg className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>Voice data is collected in 2-second segments</span>
                </li>
                <li className="flex items-center">
                <svg className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V7a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z" />
                </svg>
                <span>Used solely for improving accent synthesis and recognition</span>
                </li>
            </ul>
            </div>
        </div>

        


        {/* Acknowledgment Button */}
        {/* <div className="mt-12 text-center">
          <button
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 dark:bg-white dark:text-black hover:dark:bg-gray-300 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Accept and Continue
          </button>
        </div> */}
      </div>
    </section>
  );
}

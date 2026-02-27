'use client';

import { trackEvent } from '@/utils/mixpanel';

export default function Cta() {
  return (
    <section className="pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="dark relative bg-gray-800 rounded-lg py-10 px-8 md:py-16 md:px-12 overflow-hidden">

          {/* Background illustration */}
          <div className="absolute inset-0 left-auto pointer-events-none" aria-hidden="true">
            <svg className="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                  <stop stopColor="#667EEA" offset="0%" />
                  <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
                </radialGradient>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
                <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
              </g>
            </svg>
          </div>

          <div className="relative flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <h3 className="h3 font-red-hat-display text-gray-100">Got a question?</h3>
            </div>
            <a
              className="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0"
              href="/contact"
              onClick={() => trackEvent('CTA Contact Clicked', { label: 'Contact Button' })}
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

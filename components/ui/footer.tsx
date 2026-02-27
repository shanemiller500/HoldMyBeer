'use client';

import Link from 'next/link';
import { trackEvent } from '@/utils/mixpanel';

export default function Footer() {
  const handleFooterLinkClick = (linkName: string, href: string) => {
    trackEvent('Footer Link Clicked', { linkName, href });
  };

  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
          {/* Footer illustration */}
          <div className="pointer-events-none -z-1" aria-hidden="true">
            <svg
              className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
              width="800"
              height="264"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
              <defs>
                <radialGradient
                  id="footerglow_paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(90 0 400) scale(315.089)"
                >
                  <stop stopColor="#3ABAB4" />
                  <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-2 lg:col-span-3">
              {/* Logo */}
              <Link
                href="/"
                aria-label="Hold My Beer Co Home"
                onClick={() => handleFooterLinkClick('Home', '/')}
                className="block"
              >
                <img
                  className="mx-auto"
                  src="/images/hmbco.png"
                  width={250}
                  height={250}
                  alt="Hold My Beer Co Logo"
                />
              </Link>
            </div>

            {/* 2nd, 3rd, 4th and 5th blocks */}
            <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* 4th block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Company</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      href="/about"
                      onClick={() => handleFooterLinkClick('About Us', '/about')}
                      className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="/transparent"
                      onClick={() => handleFooterLinkClick('Transparency Policy', '/transparent')}
                      className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                    >
                      Transparency Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* 5th block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Products</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      href="/applyPro"
                      onClick={() => handleFooterLinkClick('ApplyPro.ai', '/applyPro')}
                      className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                    >
                      ApplyPro.ai
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="/umail"
                      onClick={() => handleFooterLinkClick('UMail.ai', '/umail')}
                      className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                    >
                      UMail.ai
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="/Talent"
                      onClick={() => handleFooterLinkClick('Talent Acquisition Platform', '/Talent')}
                      className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                    >
                      Talent Acquisition Platform
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="/allergy"
                      onClick={() => handleFooterLinkClick('AI Allergy Check App', '/allergy')}
                      className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                    >
                      AI Allergy Check App
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="/Search"
                      onClick={() => handleFooterLinkClick('Advanced Search Engine', '/Search')}
                      className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                    >
                      Advanced Search Engine
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Copyrights note */}
            <div className="text-gray-600 dark:text-gray-300 text-sm mr-4">
              &copy; {new Date().getFullYear()} Hold My Beer CO. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

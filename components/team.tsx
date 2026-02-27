"use client";

import Image from 'next/image';
import TeamImage01 from '@/public/images/wedding.jpg';
import { trackEvent } from '@/utils/mixpanel';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiAwwwards  } from "react-icons/si";


const handleLinkedInClick = (memberName: string) => {
  trackEvent('LinkedIn Clicked', { member: memberName });
};

export default function Team() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">The team</h2>
          </div>

          {/* Team members */}
          <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center -m-5 lg:-my-7" data-aos-id-team>

              {/* 1st member */}
              <div 
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" 
                data-aos="fade-down" 
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <Image 
                    className="rounded-full mb-2" 
                    src={TeamImage01} 
                    width={80} 
                    height={80} 
                    alt="Team member 01" 
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Shane Miller
                  </h4>
                  <div className="flex space-x-2">

                  <Link 
                      href="https://shanemiller.ninja"
                      className="p-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Web site"
                      onClick={() => handleLinkedInClick('Shane Miller')}
                    >
                      <SiAwwwards  
                        size={33} 
                        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                      />
                    </Link>
                    <Link 
                      href="https://www.linkedin.com/in/shane-miller-ninja/"
                      className="p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      onClick={() => handleLinkedInClick('Shane Miller')}
                    >
                      <FaLinkedinIn 
                        size={24} 
                        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                      />
                    </Link>
                    
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

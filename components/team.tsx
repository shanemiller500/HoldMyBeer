import Image from 'next/image'
import TeamImage01 from '@/public/images/wedding.jpg'

export default function Team() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">The team</h2>
            {/* <p className="text-xl text-gray-600 dark:text-gray-400">A one man army ready to take on the world</p> */}
          </div>

          {/* Team members */}
          <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center -m-5 lg:-my-7" data-aos-id-team>

              {/* 1st member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <Image className="rounded-full mb-2" src={TeamImage01} width={80} height={80} alt="Team member 01" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Shane Miller</h4>
                  <a className="p-2" href="https://www.linkedin.com/in/shane-miller-ninja/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path 
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.96v5.7h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.59v5.55z" 
                        fill="#0A66C2" 
                        fillRule="nonzero" 
                      />
                    </svg>
                  </a>
                </div>
              </div>

          
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
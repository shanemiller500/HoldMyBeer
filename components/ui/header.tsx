import Link from 'next/link'
import ThemeToggle from './theme-toggle'
import MobileMenu from './mobile-menu'
import { trackEvent } from '@/utils/mixpanel';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

 <Link className="block" href="/" aria-label="HMB-CO"  onClick={() => trackEvent('Image Logo Clicked')}>
       
       <img className="mx-auto" src="/images/hmbco.png" width={250} height={250} alt="Hero" /> 
 
              
             </Link>

       
          {/* Desktop navigation */}
          <nav className="hidden md:flex">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                <Link
                  href="/about"
                  onClick={() => trackEvent('About Clicked')}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>          
            </ul>

            {/* Desktop lights switch */}
            <ThemeToggle className="ml-3" />

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}

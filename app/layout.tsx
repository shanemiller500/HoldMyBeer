'use client'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

import './css/style.css'

import { Inter, Red_Hat_Display } from 'next/font/google'
import Theme from './theme-provider'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

// Initialize fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const redhat = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Retrieve the GA Tracking ID from environment variables
  const GA_TRACKING_ID = process.env.NEXT_GA_TRACKING_ID

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })

    // Send pageview to Google Analytics on route change
    if (window.gtag && GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, GA_TRACKING_ID])

  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${redhat.variable} font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight`}
      >
        <Theme>
          <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Google Analytics Scripts */}
            {GA_TRACKING_ID && (
              <>
                {/* Load the GA script */}
                <Script
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                  strategy="afterInteractive"
                />
                {/* Initialize GA */}
                <Script id="google-analytics" strategy="afterInteractive">
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `}
                </Script>
              </>
            )}
            <Header />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  )
}

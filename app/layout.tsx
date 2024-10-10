'use client'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

import { useEffect } from 'react'
//import { usePathname } from 'next/navigation'

import './css/style.css'

import { Inter, Red_Hat_Display } from 'next/font/google'
import Theme from './theme-provider'

import AOS from 'aos'
import 'aos/dist/aos.css'
//const pathname = usePathname()

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

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




  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })

   // Send pageview to Google Analytics on route change
  //  if (window.gtag) {
  //   window.gtag('config', 'G-WY703123C1', {
  //     page_path: pathname,
  //   })
  // }
}) // [pathname])

  return (
    <html lang="en" suppressHydrationWarning>{/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body className={`${inter.variable} ${redhat.variable} font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight`}>
        <Theme>
          <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Google Analytics Scripts */}
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-WY703123C1`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WY703123C1', {
            page_path: window.location.pathname,
          });
        `}
      </Script> */}
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

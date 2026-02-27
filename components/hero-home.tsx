export default function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-12 sm:pt-32 md:pt-40 md:pb-20">

          <div className="text-center md:text-left max-w-3xl md:max-w-none">

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-red-hat-display text-gray-900 dark:text-white leading-tight mb-5"
              data-aos="fade-down"
            >
              Your data isn't{' '}
              <span className="text-teal-500">the product.</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl md:max-w-2xl"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              We build AI-powered apps that actually work for you, no ads, no tracking,
              no selling your information to the highest bidder.
            </p>

            <ul
              className="inline-flex flex-col text-left text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 space-y-3"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {[
                'No ads. No tracking. No exceptions.',
                'Your data never trains AI models, ours or anyone else\'s',
                'We earn from subscriptions, not your information',
                'Clean apps. No pop-ups, no banners, no noise.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 mt-1 shrink-0 fill-current text-teal-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <a
                href="/applyPro"
                className="btn px-6 py-3 text-white bg-teal-500 hover:bg-teal-400 rounded-lg font-semibold transition-colors duration-200 text-center"
              >
                Try ApplyPro Free
              </a>
              <a
                href="/about"
                className="btn px-6 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-teal-500 rounded-lg font-semibold transition-colors duration-200 text-center"
              >
                See what we build
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

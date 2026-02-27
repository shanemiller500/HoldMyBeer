const tags = [
  { label: 'Industry Specific Lingo',          color: 'from-indigo-500 to-indigo-400 dark:text-indigo-500 dark:bg-indigo-500', anim: '',        pos: 'mt-28' },
     { label: 'Interview Prep Questions',  color: 'from-yellow-500 to-yellow-400 dark:text-yellow-500 dark:bg-yellow-500',         anim: 'tags-6',  pos: 'mt-60' },
  { label: 'Synonym Assistant',                color: 'from-teal-500 to-teal-400 dark:text-teal-500 dark:bg-teal-500',         anim: 'tags-1',  pos: 'mt-72' },
  { label: 'Global Language Translations',     color: 'from-pink-500 to-pink-400 dark:text-pink-500 dark:bg-pink-500',         anim: 'tags-2',  pos: 'mt-40' },
  { label: 'Context-Aware Messaging',          color: 'from-indigo-500 to-indigo-400 dark:text-indigo-500 dark:bg-indigo-500', anim: 'tags-3',  pos: 'mt-80 top-16' },
  { label: 'Custom Resumes',                   color: 'from-indigo-500 to-indigo-400 dark:text-indigo-500 dark:bg-indigo-500', anim: 'tags-4',  pos: 'mt-56' },
  { label: 'All in one Communication',         color: 'from-pink-500 to-pink-400 dark:text-pink-500 dark:bg-pink-500',         anim: 'tags-7',  pos: 'mt-52' },
  { label: 'Researched Backed Cover Letters',  color: 'from-pink-500 to-pink-400 dark:text-pink-500 dark:bg-pink-500',         anim: 'tags-4',  pos: '' },
  { label: 'Advanced Voice to Text Dictation', color: 'from-teal-500 to-teal-400 dark:text-teal-500 dark:bg-teal-500',         anim: 'tags-5',  pos: 'mt-14' },
  { label: 'Spelling & Grammar Assistant',     color: 'from-purple-500 to-purple-400 dark:text-purple-500 dark:bg-purple-500', anim: 'tags-5',  pos: 'mt-80 top-4' },
  { label: 'Custom Literary Styles',           color: 'from-indigo-500 to-indigo-400 dark:text-indigo-500 dark:bg-indigo-500', anim: 'tags-6',  pos: 'mt-40' },
  { label: 'Customizable Automated Responses', color: 'from-indigo-500 to-indigo-400 dark:text-indigo-500 dark:bg-indigo-500', anim: 'tags-7',  pos: '' },
  { label: 'Ghosting Feature',                 color: 'from-pink-500 to-pink-400 dark:text-pink-500 dark:bg-pink-500',         anim: 'tags-7',  pos: 'mt-72' },
  { label: 'Custom Messaging Moods & Tones',   color: 'from-purple-500 to-purple-400 dark:text-purple-500 dark:bg-purple-500', anim: 'tags-8',  pos: 'mt-28' },
  { label: 'Professional Messages',            color: 'from-teal-500 to-teal-400 dark:text-teal-500 dark:bg-teal-500',         anim: 'tags-9',  pos: 'mt-80 top-4' },
  { label: 'Multilingual apps',               color: 'from-teal-500 to-teal-400 dark:text-teal-500 dark:bg-teal-500',         anim: 'tags-14', pos: 'mt-80 top-12' },
  { label: 'Voice & Accent Enhancement',       color: 'from-teal-500 to-teal-400 dark:text-teal-500 dark:bg-teal-500',         anim: 'tags-10', pos: 'mt-56' },
  { label: 'Real-Time Collaboration',          color: 'from-yellow-500 to-yellow-400 dark:text-yellow-500 dark:bg-yellow-500', anim: 'tags-11', pos: 'mt-36 top-24' },
  { label: 'Context based Automated Replies',  color: 'from-red-500 to-red-400 dark:text-red-500 dark:bg-red-500',             anim: 'tags-13', pos: 'mt-20 top-60' },
  { label: 'Multi-Language Messaging',         color: 'from-blue-500 to-blue-400 dark:text-blue-500 dark:bg-blue-500',         anim: 'tags-14', pos: 'mt-68 top-12' },
  { label: 'Smart Search Engine',              color: 'from-red-500 to-red-400 dark:text-red-500 dark:bg-red-500',             anim: 'tags-4', pos: 'mt-80' },

]

export default function FeaturesAnimation() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">Our Feature Rich Ecosystem</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Every feature, across every app, all in one place.</p>
          </div>

          {/* Custom animation */}
          <div className="max-w-3xl mx-auto">
            <div className="relative flex justify-center items-center overflow-hidden">

              {/* Big circle behind: light layout */}
              <svg className="dark:hidden" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="48.919%" id="prefix__a">
                    <stop stopColor="#B2F5EA" stopOpacity=".64" offset="0%" />
                    <stop stopColor="#B2F5EA" stopOpacity="0" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <circle fill="url(#prefix__a)" cx="216" cy="216" r="216" />
                  <g transform="translate(22 22)" stroke="#1D1D20">
                    <circle strokeOpacity=".04" cx="194" cy="194" r="193.5" />
                    <circle strokeOpacity=".08" strokeWidth="2" cx="194" cy="194" r="153" />
                    <circle strokeOpacity=".16" strokeWidth="2.5" cx="194" cy="194" r="112.75" />
                  </g>
                </g>
              </svg>

              {/* Big circle behind: dark layout */}
              <svg className="hidden dark:block" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="circleill_a">
                    <stop stopColor="#1D1D21" stopOpacity="0" offset="0%" />
                    <stop stopColor="#2E2E33" stopOpacity=".32" offset="100%" />
                  </radialGradient>
                </defs>
                <circle cx="216" cy="216" r="216" fill="url(#circleill_a)" fillRule="evenodd" />
              </svg>

              {/* Moving tags */}
              <div className="absolute inset-0">
                {tags.map((tag, i) => (
                  <div
                    key={i}
                    className={`absolute font-medium px-4 py-2 text-white bg-gradient-to-tr ${tag.color} dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation ${tag.anim} ${tag.pos}`.trim()}
                  >
                    {tag.label}
                  </div>
                ))}
              </div>

              {/* Side gradients */}
              <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900" aria-hidden="true"></div>
              <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900" aria-hidden="true"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

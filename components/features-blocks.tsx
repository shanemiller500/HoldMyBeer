'use client';

import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { trackEvent } from '@/utils/mixpanel';

const cards: { href: string; name: string; status: string; gradient: string; description: string; stat?: string; viewBox: string; path: string }[] = [
  {
    href: '/applyPro',
    name: 'ApplyPro.ai',
    status: 'Live',
    gradient: 'from-purple-600 to-purple-400',
    description: 'Cover letters and tailored resumes that get you interviews. No data mining, no fluff.',
    stat: '400+ Active Users',
    viewBox: '0 0 32 32',
    path: 'M20.796 20l-1.677 7.264a6 6 0 01-7.302 4.471L0 28.781V11.54l.35-.3 9.457-8.107a3.751 3.751 0 015.29 5.29L11.175 13H28.5a3.5 3.5 0 012.6 1.156c.663.736.984 1.72.878 2.74-.252 1.808-1.817 3.143-3.622 3.104h-7.56zM2 27.22l10.303 2.575a4 4 0 004.868-2.98L19.204 18h9.173c.812.018 1.508-.575 1.615-1.345A1.5 1.5 0 0028.5 15H11.173a2 2 0 01-1.517-3.3l3.922-4.577a1.755 1.755 0 00-.597-2.733 1.751 1.751 0 00-1.872.262L2 12.46v14.76zM28 .585L29.414 2 23 8.414 21.586 7 28 .586zm-8.272 6.627l-1.94-.485 1.484-5.94 1.94.484-1.484 5.94zm3.544 5l-.485-1.94 5.94-1.486.486 1.94-5.94 1.486z',
  },
  {
    href: '/umail',
    name: 'UMail.ai',
    status: 'In Testing',
    gradient: 'from-teal-600 to-teal-400',
    description: 'Your inbox without the noise. Gmail integration live — Microsoft & Salesforce coming soon.',
    viewBox: '0 0 32 32',
    path: 'M19 18.414l-4 4L9.586 17l.707-.707L12 14.586V8.414l-5-5L4.414 6l6.293 6.293-1.414 1.414L1.586 6 7 .586l7 7v5l8.463-8.463a3.828 3.828 0 115.414 5.414L21 16.414v6.172l5 5L28.586 25l-6.293-6.293 1.414-1.414L31.414 25 26 30.414l-7-7v-5zm-4 1.172L26.463 8.123a1.828 1.828 0 10-2.586-2.586L12.414 17 15 19.586zM11 30v2C4.925 32 0 27.075 0 21h2a9 9 0 009 9zm0-5v2a6 6 0 01-6-6h2a4 4 0 004 4z',
  },
  {
    href: '/Talent',
    name: 'Talent Acquisition',
    status: 'Coming Soon',
    gradient: 'from-yellow-500 to-amber-400',
    description: 'Upload hundreds of resumes, rank candidates instantly, and get AI-written hiring summaries — in minutes.',
    viewBox: '0 0 64 64',
    path: 'M48 16h-8V8a8 8 0 10-16 0v8H16a4 4 0 00-4 4v36a4 4 0 004 4h32a4 4 0 004-4V20a4 4 0 00-4-4zm-20 0V8a4 4 0 118 0v8h-8zm24 44H16V20h32v40zM24 28a6 6 0 1112 0 6 6 0 01-12 0zm16 0a6 6 0 1112 0 6 6 0 01-12 0z',
  },
  {
    href: '/allergy',
    name: 'Allergy Check',
    status: 'Coming Soon',
    gradient: 'from-indigo-600 to-indigo-400',
    description: 'Scan any food label and know in seconds if it\'s safe for you. No guessing.',
    viewBox: '0 0 32 32',
    path: 'M19 5.612V25a6 6 0 11-2-4.472V0h2v2.961A5.98 5.98 0 0023.497 5a8.476 8.476 0 018.444 9.474l-.253 2.13-1.469-1.563A6.472 6.472 0 0025.5 13c-1.842 0-3.634-.6-5.103-1.713l1.206-1.594A6.455 6.455 0 0025.5 11c1.557 0 3.068.428 4.376 1.217A6.475 6.475 0 0023.5 7 7.981 7.981 0 0119 5.612zM13 29a4 4 0 100-8 4 4 0 000 8zM0 5V3h14v2H0zm0 5V8h14v2H0zm0 5v-2h14v2H0z',
  },
  {
    href: '/Search',
    name: 'AI Search',
    status: 'In Testing',
    gradient: 'from-pink-600 to-pink-400',
    description: 'Search results without sponsored links, clickbait, or anything tracking you.',
    viewBox: '0 0 32 32',
    path: 'M20.243 6.757l.707.707-1.414 1.414-.707-.707a4 4 0 00-5.658 0l-.707.707-1.414-1.414.707-.707a6 6 0 018.486 0zm3.535-3.535l.707.707-1.414 1.414-.707-.707a9 9 0 00-12.728 0l-.707.707L7.515 3.93l.707-.707c4.296-4.296 11.26-4.296 15.556 0zM9 17.212V16a7 7 0 00-7-7H1V7h1a9 9 0 019 9v.788l2.302 5.18L11 23.117V24a4 4 0 01-4 4H5v3H3v-5h4a2 2 0 002-2v-2.118l1.698-.85L9 17.213zm12-.424V16a9 9 0 019-9h1v2h-1a7 7 0 00-7 7v1.212l-1.698 3.82 1.698.85V24a2 2 0 002 2h4v5h-2v-3h-2a4 4 0 01-4-4v-.882l-2.302-1.15L21 16.787zM16 12a1 1 0 110-2 1 1 0 010 2z',
  },
];

const statusStyle: Record<string, string> = {
  'Live': 'bg-white/25 text-white',
  'In Testing': 'bg-white/15 text-white/90',
  'Coming Soon': 'bg-white/10 text-white/75',
};

export default function FeaturesBlocks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setActiveIndex(Math.round(progress * (cards.length - 1)));
  };

  return (
    <section className="relative bg-white dark:bg-gray-900 py-10 md:py-14 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center pb-10 md:pb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-red-hat-display text-gray-900 dark:text-white">
            Apps that don't sell you out.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Live, in testing, and coming soon.{' '}
            <span className="text-teal-500 font-semibold">No ads in any of them.</span>
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => { scroll('left'); trackEvent('Scroll Clicked', { direction: 'left' }); }}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 bg-gray-900 dark:bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 z-10 items-center justify-center transition-colors duration-150"
            aria-label="Scroll Left"
          >
            <FaChevronLeft size={12} />
          </button>

<div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 sm:px-8 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {cards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                onClick={() => trackEvent('Feature Clicked', { feature: card.name, url: card.href })}
                className={`flex-shrink-0 w-64 sm:w-72 flex flex-col p-5 rounded-2xl shadow-xl bg-gradient-to-tr ${card.gradient} snap-start group transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl`}
                aria-label={card.name}
              >
                {/* Status badge */}
                <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${statusStyle[card.status]}`}>
                  {card.status === 'Live' && <span className="mr-1">●</span>}{card.status}
                </span>

                {/* Icon + Title */}
                <div className="mb-3">
                  <svg className="w-8 h-8 text-white mb-3 opacity-90" viewBox={card.viewBox} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d={card.path} fillRule="nonzero" />
                  </svg>
                  <h3 className="text-lg font-bold font-red-hat-display text-white leading-snug">{card.name}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white/85 leading-relaxed flex-grow">
                  {card.description}
                </p>

                {/* Live stat badge */}
                {card.stat && (
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                      {card.stat}
                    </span>
                  </div>
                )}

                {/* Footer arrow */}
                <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs text-white/60 font-medium">Learn more</span>
                  <svg
                    className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform duration-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => { scroll('right'); trackEvent('Scroll Clicked', { direction: 'right' }); }}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 bg-gray-900 dark:bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 z-10 items-center justify-center transition-colors duration-150"
            aria-label="Scroll Right"
          >
            <FaChevronRight size={12} />
          </button>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollContainerRef.current;
                if (!el) return;
                const cardWidth = (el.scrollWidth / cards.length);
                el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
                setActiveIndex(i);
              }}
              className={`rounded-full transition-all duration-200 ${
                activeIndex === i
                  ? 'w-5 h-2 bg-teal-500'
                  : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to ${cards[i].name}`}
            />
          ))}
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

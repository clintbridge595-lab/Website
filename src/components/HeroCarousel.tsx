import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, HeroSlide } from '../data/menuData';

interface HeroCarouselProps {
  onSelectSlide: (slide: HeroSlide) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectSlide }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <section
      id="top"
      className="relative w-full h-[380px] sm:h-[470px] lg:h-[540px] bg-black overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Studio Photo */}
      <div
        onClick={() => onSelectSlide(currentSlide)}
        className="relative w-full h-full cursor-pointer group"
      >
        <img
          key={currentSlide.id}
          src={currentSlide.image}
          alt={`${currentSlide.topWord} ${currentSlide.bottomWord}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center sm:object-right transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* High-contrast studio vignette scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

        {/* Left Display Typography Overlay */}
        <div className="absolute inset-0 max-w-[1380px] mx-auto px-14 sm:px-20 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="font-display uppercase leading-[0.88] tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)]">
              <span className="block text-5xl sm:text-7xl lg:text-[86px] text-[#facc15]">
                {currentSlide.topWord}
              </span>
              <span className="block text-5xl sm:text-7xl lg:text-[86px] text-white">
                {currentSlide.bottomWord}
              </span>
            </h1>

            <p
              className="mt-3 sm:mt-4 font-display uppercase tracking-[0.14em] text-2xl sm:text-4xl lg:text-[42px] text-transparent"
              style={{
                WebkitTextStroke: '1.5px #facc15',
              }}
            >
              {currentSlide.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/55 hover:bg-black/85 border border-white/15 hover:border-[#facc15] text-white flex items-center justify-center transition-colors cursor-pointer z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/55 hover:bg-black/85 border border-white/15 hover:border-[#facc15] text-white flex items-center justify-center transition-colors cursor-pointer z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'w-7 bg-[#facc15]'
                  : 'w-2 bg-white/45 hover:bg-white/75'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

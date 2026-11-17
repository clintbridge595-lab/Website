import React, { useState } from 'react';
import { Clock, Menu, ShoppingCart, X } from 'lucide-react';
import { BRAND_LOGO_URL } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenModal: (modal: 'reviews' | 'about' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Islamic Blessing Strip */}
      <div className="bg-[#06381a] border-b border-[#0d5228] px-4 py-1.5 text-[#facc15]">
        <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center text-xs sm:text-sm font-arabic tracking-wide">
          <p className="leading-snug">
            مُحَمَّدٌ رَسُولُ ٱللَّٰهِ صَادِقُ ٱلْوَعْدِ ٱلْأَمِينُ{' '}
            <span className="text-[11px] opacity-90">
              (محمد ﷺ اللہ کے سچے وعدے والے امانت دار رسول ہیں)
            </span>
          </p>
          <p className="leading-snug">
            لَا إِلَٰهَ إِلَّا ٱللَّٰهُ ٱلْمَلِكُ ٱلْحَقُّ ٱلْمُبِينُ{' '}
            <span className="text-[11px] opacity-90">
              (اللہ کے سوا کوئی معبود نہیں جو سچا واضح بادشاہ ہے)
            </span>
          </p>
        </div>
      </div>

      {/* Main Sticky Black Navigation Bar */}
      <header className="sticky top-0 z-40 h-16 bg-black/95 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-[1380px] h-full mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Left Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button
              type="button"
              onClick={() => scrollToSection('menu-start')}
              className="text-[#facc15] hover:text-yellow-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Menu
            </button>
            <button
              type="button"
              onClick={() => onOpenModal('reviews')}
              className="text-neutral-200 hover:text-[#facc15] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Reviews
            </button>
            <button
              type="button"
              onClick={() => onOpenModal('about')}
              className="text-neutral-200 hover:text-[#facc15] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('location-section')}
              className="text-neutral-200 hover:text-[#facc15] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Location
            </button>
            <button
              type="button"
              onClick={() => onOpenModal('contact')}
              className="text-neutral-200 hover:text-[#facc15] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-neutral-200 hover:text-[#facc15] hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center Brand Logo & Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#facc15] bg-[#e11d1d] shrink-0 shadow-sm">
              <img
                src={BRAND_LOGO_URL}
                alt="Roll N Roll Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#facc15] whitespace-nowrap">
                ROLL N ROLL
              </span>
              <span className="text-[9px] tracking-[0.2em] text-neutral-400 uppercase whitespace-nowrap">
                Pakistani Restaurant
              </span>
            </div>
          </a>

          {/* Right Status, Phone & Cart */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div className="hidden md:flex items-center gap-3 text-xs font-medium text-neutral-200 whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Open now</span>
              </span>
              <span className="text-neutral-600">·</span>
              <a
                href="tel:+923148334879"
                className="hover:text-[#facc15] transition-colors font-mono-num"
              >
                0314 8334879
              </a>
            </div>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Open shopping cart"
              className="relative p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#facc15] text-white hover:text-[#facc15] transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#facc15] text-black text-[11px] font-bold flex items-center justify-center font-mono-num">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-b border-neutral-800 px-4 py-3 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => scrollToSection('menu-start')}
              className="text-left py-2 px-3 rounded-lg text-sm font-semibold text-[#facc15] hover:bg-neutral-900"
            >
              Menu
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('reviews');
              }}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-900"
            >
              Reviews
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('about');
              }}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-900"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('location-section')}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-900"
            >
              Location
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('contact');
              }}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-900"
            >
              Contact
            </button>
          </div>
        )}
      </header>
    </>
  );
};

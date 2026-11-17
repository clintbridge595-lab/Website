import React from 'react';
import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Youtube,
} from 'lucide-react';
import {
  BRAND_ADDRESS,
  BRAND_LOGO_URL,
  BRAND_PHONE_DISPLAY,
  BRAND_PHONE_INTL,
  BRAND_PHONE_TEL,
  BRAND_WHATSAPP_URL,
} from '../data/menuData';

interface FooterProps {
  onOpenModal: (modal: 'reviews' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-300">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand Logo, Tagline, Socials */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#facc15] bg-[#e11d1d] shrink-0">
                <img
                  src={BRAND_LOGO_URL}
                  alt="Roll N Roll Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-wider uppercase text-[#facc15]">
                  ROLL N ROLL
                </h2>
                <p className="text-[11px] uppercase tracking-widest text-neutral-400">
                  Pakistani Restaurant
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-neutral-400 max-w-xs leading-relaxed">
              Crispy zinger rolls, juicy smash burgers, pizza, pasta, broast &amp; BBQ.{' '}
              <span className="text-[#facc15] font-medium">#KarachiSpecial</span>
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#instagram"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenModal('contact');
                }}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-[#facc15] hover:text-[#facc15] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenModal('contact');
                }}
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-[#facc15] hover:text-[#facc15] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#share"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenModal('contact');
                }}
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-[#facc15] hover:text-[#facc15] flex items-center justify-center transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={BRAND_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-[#facc15] hover:text-[#facc15] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenModal('contact');
                }}
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-[#facc15] hover:text-[#facc15] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: GET IN TOUCH */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-100 mb-4">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={BRAND_PHONE_TEL}
                  className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-[#facc15] transition-colors font-mono-num"
                >
                  <Phone className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>
                    {BRAND_PHONE_DISPLAY} · {BRAND_PHONE_INTL}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-400 hover:text-[#facc15] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Order on WhatsApp ({BRAND_PHONE_DISPLAY})</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('location-section')}
                  className="inline-flex items-start gap-2.5 text-left text-neutral-400 hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{BRAND_ADDRESS}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: QUICK LINKS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-100 mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('menu-start')}
                  className="text-neutral-400 hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('reviews')}
                  className="text-neutral-400 hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('about')}
                  className="text-neutral-400 hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('location-section')}
                  className="text-neutral-400 hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  Location
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('contact')}
                  className="text-neutral-400 hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-10 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>© 2026 ROLL N ROLL. ALL RIGHTS RESERVED.</p>
          <p className="text-emerald-400 font-medium">
            Open now · Jamshed Road No. 3, Karachi
          </p>
        </div>
      </div>
    </footer>
  );
};

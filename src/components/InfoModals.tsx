import React from 'react';
import { Clock, MapPin, MessageCircle, Phone, Star, X } from 'lucide-react';
import {
  BRAND_ADDRESS,
  BRAND_LOGO_URL,
  BRAND_NAME,
  BRAND_PHONE_DISPLAY,
  BRAND_PHONE_INTL,
  BRAND_PHONE_TEL,
  BRAND_WHATSAPP_URL,
  CUSTOMER_REVIEWS,
} from '../data/menuData';

interface InfoModalsProps {
  activeModal: 'reviews' | 'about' | 'contact' | null;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({
  activeModal,
  onClose,
}) => {
  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#0d0d0d] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-neutral-800 bg-black flex items-center justify-between">
          <h2 className="font-display text-2xl uppercase tracking-wider text-[#facc15]">
            {activeModal === 'reviews' && 'Customer Reviews'}
            {activeModal === 'about' && `About ${BRAND_NAME}`}
            {activeModal === 'contact' && 'Get in Touch'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto">
          {activeModal === 'reviews' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400">
                    Overall Rating
                  </p>
                  <p className="text-2xl font-bold text-white font-mono-num">
                    4.9 / 5.0
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#facc15]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>

              {CUSTOMER_REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-xl bg-[#121212] border border-neutral-800 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{rev.author}</span>
                    <span className="text-xs text-neutral-500">{rev.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#facc15] font-medium">
                      Ordered: {rev.orderHighlight}
                    </span>
                    <span className="text-amber-400 font-mono-num">
                      {'★'.repeat(rev.rating)}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeModal === 'about' && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-[#facc15] bg-[#e11d1d] overflow-hidden shrink-0">
                  <img
                    src={BRAND_LOGO_URL}
                    alt="Roll N Roll Emblem"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {BRAND_NAME} — Pakistani Restaurant
                  </h3>
                  <p className="text-xs text-[#facc15]">
                    Fast Food · Bar.B.Q · Handi · Pizza &amp; Pasta
                  </p>
                </div>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Located at{' '}
                <span className="text-white font-medium">{BRAND_ADDRESS}</span>,{' '}
                {BRAND_NAME} serves Karachi&apos;s freshest crispy Zinger Rolls,
                Injected Zinger Burgers, smashed beef burgers, creamy Alfredo Pasta,
                BBQ Tikka, Masala Khausa, Broast, and Special Kunafa.
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Call or WhatsApp us anytime on{' '}
                <span className="text-[#facc15] font-semibold font-mono-num">
                  {BRAND_PHONE_DISPLAY}
                </span>{' '}
                for hot, fast delivery and takeaway.
              </p>
            </div>
          )}

          {activeModal === 'contact' && (
            <div className="space-y-3.5">
              <a
                href={BRAND_PHONE_TEL}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#facc15] transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-[#facc15]/15 text-[#facc15] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Call Order Hotline</p>
                  <p className="text-xs text-neutral-400 font-mono-num">
                    {BRAND_PHONE_DISPLAY} · {BRAND_PHONE_INTL}
                  </p>
                </div>
              </a>

              <a
                href={BRAND_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">WhatsApp Express Order</p>
                  <p className="text-xs text-neutral-400 font-mono-num">
                    {BRAND_PHONE_INTL} · Instant chat &amp; live rider updates
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="w-10 h-10 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Branch Address</p>
                  <p className="text-xs text-neutral-400">{BRAND_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Store Status</p>
                  <p className="text-xs text-emerald-400 font-semibold">
                    Open now — Dine-in, Takeaway &amp; Delivery
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

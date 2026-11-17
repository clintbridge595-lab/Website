import React from 'react';
import { Clock, ExternalLink, MapPin, Phone, Star } from 'lucide-react';
import {
  BRAND_ADDRESS,
  BRAND_NAME,
  BRAND_PHONE_DISPLAY,
  BRAND_PHONE_TEL,
} from '../data/menuData';

export const LocationSection: React.FC = () => {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Jamshed+Road+No+3+M.L+Plaza+Opposite+Ghazi+Bakery+Karachi+Pakistan';

  return (
    <section
      id="location-section"
      className="scroll-mt-24 pt-10 pb-14 px-4 sm:px-6 max-w-[1380px] mx-auto"
    >
      <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-[#e5e3df]">
        {/* Embedded Interactive Map centered on Jamshed Road No. 3, Karachi */}
        <iframe
          title="Roll N Roll Location Map"
          src="https://maps.google.com/maps?q=Jamshed%20Road%20No%203%20Shikarpur%20Colony%20Karachi%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Place Info Card matching reference video top-left overlay */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 max-w-[290px] sm:max-w-[330px] bg-white text-neutral-900 rounded-xl shadow-lg border border-neutral-200 p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-bold text-base text-neutral-900 leading-tight">
                {BRAND_NAME}
              </h3>
              <p className="text-[11px] font-medium text-neutral-500 mt-0.5">
                Pakistani Restaurant
              </p>
              <p className="mt-1.5 text-xs text-neutral-700 leading-snug">
                {BRAND_ADDRESS}
              </p>
            </div>
            <span className="p-1.5 rounded-full bg-red-50 text-red-600 shrink-0">
              <MapPin className="w-4 h-4" />
            </span>
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-neutral-900 font-mono-num">4.9</span>
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <Clock className="w-3 h-3" />
              Open now
            </span>
          </div>

          <a
            href={BRAND_PHONE_TEL}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 hover:text-[#1a73e8] font-mono-num"
          >
            <Phone className="w-3.5 h-3.5 text-neutral-500" />
            <span>{BRAND_PHONE_DISPLAY} (+92 314 8334879)</span>
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};

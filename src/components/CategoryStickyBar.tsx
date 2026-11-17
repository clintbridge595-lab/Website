import React, { useRef } from 'react';
import { CATEGORIES } from '../data/menuData';

interface CategoryStickyBarProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryStickyBar: React.FC<CategoryStickyBarProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="menu-start"
      className="sticky top-16 z-30 bg-[#141414]/95 backdrop-blur-md border-y border-neutral-800 shadow-lg"
    >
      <div className="max-w-[1380px] mx-auto px-3 sm:px-6 py-2.5">
        <div
          ref={scrollContainerRef}
          className="flex items-center justify-start gap-2.5 overflow-x-auto no-scrollbar"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg border text-xs sm:text-[13px] font-semibold whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-black border-[#facc15] text-[#facc15] shadow-[0_0_12px_rgba(250,204,21,0.18)]'
                    : 'bg-[#222222] border-neutral-700 text-neutral-100 hover:border-neutral-500 hover:bg-[#2a2a2a]'
                }`}
              >
                <span className="w-7 h-7 rounded bg-black overflow-hidden shrink-0 border border-neutral-700">
                  <img
                    src={cat.thumb}
                    alt={cat.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

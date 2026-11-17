import React from 'react';
import { CategoryMeta, MenuItem } from '../data/menuData';
import { MenuCard } from './MenuCard';

interface MenuSectionProps {
  category: CategoryMeta;
  items: MenuItem[];
  getItemCartQuantity: (itemId: string) => number;
  onOpenDetail: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  category,
  items,
  getItemCartQuantity,
  onOpenDetail,
  onQuickAdd,
}) => {
  if (items.length === 0) return null;

  const singleItems = items.filter((item) => item.subGroup === 'SINGLE');
  const doubleItems = items.filter((item) => item.subGroup === 'DOUBLE');
  const standardItems = items.filter((item) => !item.subGroup);

  return (
    <section
      id={`section-${category.id}`}
      data-category-section={category.id}
      className="scroll-mt-36 pt-8 pb-6"
    >
      {/* Category Header Banner with Flanking Food Graphics */}
      <div className="relative flex items-center justify-center gap-4 sm:gap-10 mb-6 px-4">
        <div className="hidden sm:flex w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-black/40 shadow-xl bg-black shrink-0 -rotate-3">
          <img
            src={category.bannerLeftImg}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-white text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)]">
          {category.bannerTitle}
        </h2>

        <div className="hidden sm:flex w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-black/40 shadow-xl bg-black shrink-0 rotate-3">
          <img
            src={category.bannerRightImg}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sub-grouped Items (SINGLE / DOUBLE) */}
      {singleItems.length > 0 && (
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-black text-white text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-md border border-neutral-800 shadow">
              SINGLE
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {singleItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                cartQuantity={getItemCartQuantity(item.id)}
                onOpenDetail={onOpenDetail}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        </div>
      )}

      {doubleItems.length > 0 && (
        <div className="mb-4">
          <div className="mb-4">
            <span className="inline-block bg-black text-white text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-md border border-neutral-800 shadow">
              DOUBLE
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {doubleItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                cartQuantity={getItemCartQuantity(item.id)}
                onOpenDetail={onOpenDetail}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        </div>
      )}

      {/* Standard Items without Sub-group */}
      {standardItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {standardItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              cartQuantity={getItemCartQuantity(item.id)}
              onOpenDetail={onOpenDetail}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </div>
      )}
    </section>
  );
};

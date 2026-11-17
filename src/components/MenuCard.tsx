import React from 'react';
import { Plus } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface MenuCardProps {
  item: MenuItem;
  cartQuantity: number;
  onOpenDetail: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  cartQuantity,
  onOpenDetail,
  onQuickAdd,
}) => {
  return (
    <article
      onClick={() => onOpenDetail(item)}
      className="group bg-[#080808] border border-[#2c2c2c] hover:border-[#facc15]/75 rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 shadow-md cursor-pointer"
    >
      {/* Media Area — Full Food Photography */}
      <div className="relative aspect-[4/5] w-full bg-black flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {cartQuantity > 0 && (
          <span className="absolute top-3 right-3 min-w-[26px] h-[26px] px-1.5 rounded-full bg-[#facc15] text-black text-xs font-bold flex items-center justify-center font-mono-num shadow-md">
            {cartQuantity}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="px-4 pt-2 pb-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-[16px] font-bold text-white leading-snug group-hover:text-[#facc15] transition-colors">
            {item.name}
          </h3>
          <p className="mt-1 text-xs text-neutral-400 leading-relaxed line-clamp-2 min-h-[2.4rem]">
            {item.description}
          </p>
        </div>

        {/* Bottom Price & Add Button Row */}
        <div className="mt-4 pt-2 flex items-center justify-between gap-2">
          <span className="text-[15px] font-bold text-white font-mono-num">
            Rs. {item.price}
          </span>

          <div className="flex items-center gap-2">
            {item.allowAddOns && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDetail(item);
                }}
                className="text-[11px] font-medium text-neutral-400 hover:text-[#facc15] transition-colors whitespace-nowrap cursor-pointer"
              >
                Add on
              </button>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd(item);
              }}
              aria-label={`Add ${item.name} to cart`}
              className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700 group-hover:border-[#facc15] hover:bg-[#facc15] hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

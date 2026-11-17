import React, { useState } from 'react';
import { Check, Minus, Plus, X } from 'lucide-react';
import {
  AddOnOption,
  BRAND_LOGO_URL,
  ITEM_ADDON_OPTIONS,
  MenuItem,
} from '../data/menuData';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    selectedAddOns: AddOnOption[],
    notes: string
  ) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  if (!item) return null;

  const toggleAddOn = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const selectedAddOns = ITEM_ADDON_OPTIONS.filter((opt) =>
    selectedIds.includes(opt.id)
  );
  const addOnsUnitTotal = selectedAddOns.reduce((sum, opt) => sum + opt.price, 0);
  const lineTotal = (item.price + addOnsUnitTotal) * quantity;

  const handleConfirm = () => {
    onAddToCart(item, quantity, selectedAddOns, notes.trim());
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#0d0d0d] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Media Header */}
        <div className="relative h-52 bg-black flex items-center justify-center border-b border-neutral-800 shrink-0">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-36 h-36 rounded-full border-[3px] border-[#facc15] bg-[#e11d1d] overflow-hidden">
              <img
                src={BRAND_LOGO_URL}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-105"
              />
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/75 border border-neutral-700 hover:border-[#facc15] text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Details & Add-ons */}
        <div className="p-5 overflow-y-auto space-y-5">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              <span className="text-lg font-bold text-[#facc15] font-mono-num whitespace-nowrap">
                Rs. {item.price}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>

          {item.allowAddOns && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2.5">
                Customize with Add-Ons (Optional)
              </h3>
              <div className="space-y-2">
                {ITEM_ADDON_OPTIONS.map((opt) => {
                  const checked = selectedIds.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleAddOn(opt.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                        checked
                          ? 'bg-[#1a1808] border-[#facc15] text-white'
                          : 'bg-neutral-900/70 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 text-sm font-medium">
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            checked
                              ? 'bg-[#facc15] border-[#facc15] text-black'
                              : 'border-neutral-600'
                          }`}
                        >
                          {checked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        {opt.name}
                      </span>
                      <span className="text-xs font-semibold text-[#facc15] font-mono-num">
                        +Rs. {opt.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="item-notes"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5"
            >
              Special Instructions
            </label>
            <input
              id="item-notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., No pickles, extra spicy, cut in half..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#facc15] focus:outline-none text-sm text-white placeholder-neutral-500"
            />
          </div>
        </div>

        {/* Bottom Sticky Action Bar */}
        <div className="p-4 border-t border-neutral-800 bg-black flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="w-8 h-8 rounded-lg hover:bg-neutral-800 text-white flex items-center justify-center cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-7 text-center text-sm font-bold font-mono-num">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 rounded-lg hover:bg-neutral-800 text-white flex items-center justify-center cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 py-3 px-5 rounded-xl bg-[#facc15] hover:bg-yellow-300 text-black font-bold text-sm transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>Add to Order</span>
            <span className="font-mono-num">Rs. {lineTotal}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

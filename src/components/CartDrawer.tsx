import React, { useState } from 'react';
import {
  CheckCircle2,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react';
import { AddOnOption, MenuItem } from '../data/menuData';

export interface CartEntry {
  cartKey: string;
  item: MenuItem;
  quantity: number;
  addOns: AddOnOption[];
  notes?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  entries: CartEntry[];
  onClose: () => void;
  onUpdateQty: (cartKey: string, delta: number) => void;
  onRemoveEntry: (cartKey: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  entries,
  onClose,
  onUpdateQty,
  onRemoveEntry,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = entries.reduce((sum, entry) => {
    const addOnSum = entry.addOns.reduce((a, b) => a + b.price, 0);
    return sum + (entry.item.price + addOnSum) * entry.quantity;
  }, 0);

  const deliveryFee =
    entries.length === 0 || orderType === 'pickup' || subtotal >= 2500
      ? 0
      : 150;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim()) {
      setFormError('Please enter your name and phone number.');
      return;
    }
    if (orderType === 'delivery' && !address.trim()) {
      setFormError('Please enter your delivery address.');
      return;
    }

    setFormError(null);
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setConfirmedOrderId(`RNR-${randomNum}`);
    onClearCart();
  };

  const resetAndClose = () => {
    setConfirmedOrderId(null);
    setFormError(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end"
      onClick={resetAndClose}
    >
      <aside
        className="w-full max-w-md bg-[#0a0a0a] border-l border-neutral-800 h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between bg-black">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#facc15]" />
            <h2 className="font-display text-xl uppercase tracking-wider text-white">
              Your Roll N Roll Bag
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close cart"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {confirmedOrderId ? (
            <div className="py-10 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Order #{confirmedOrderId} Confirmed
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Thank you, <span className="text-white font-semibold">{customerName}</span>. Your
                Roll N Roll kitchen ticket is firing up now!
              </p>
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-left text-xs space-y-1.5 text-neutral-300">
                <p>
                  <span className="text-neutral-500">Order Mode:</span>{' '}
                  {orderType === 'delivery' ? 'Cash on Delivery' : 'Self Pickup'}
                </p>
                <p>
                  <span className="text-neutral-500">Contact:</span> {phone}
                </p>
                {orderType === 'delivery' && (
                  <p>
                    <span className="text-neutral-500">Address:</span> {address}
                  </p>
                )}
                <p>
                  <span className="text-neutral-500">Estimated Time:</span> 25–35 mins
                </p>
              </div>
              <button
                type="button"
                onClick={resetAndClose}
                className="w-full py-3 rounded-xl bg-[#facc15] hover:bg-yellow-300 text-black font-bold text-sm transition-colors cursor-pointer"
              >
                Back to Menu
              </button>
            </div>
          ) : entries.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="text-base font-semibold text-white">Your cart is empty</p>
              <p className="text-xs text-neutral-400 max-w-[230px]">
                Tap any smash burger, zingster, signature roll, or loaded fries to start your order.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Itemized List */}
              <div className="space-y-3">
                {entries.map((entry) => {
                  const addOnSum = entry.addOns.reduce((a, b) => a + b.price, 0);
                  const unitPrice = entry.item.price + addOnSum;

                  return (
                    <div
                      key={entry.cartKey}
                      className="p-3.5 rounded-xl bg-[#111111] border border-neutral-800 flex flex-col gap-2.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            {entry.item.name}
                          </h4>
                          {entry.addOns.length > 0 && (
                            <p className="text-[11px] text-[#facc15] mt-0.5">
                              + {entry.addOns.map((a) => a.name).join(', ')}
                            </p>
                          )}
                          {entry.notes && (
                            <p className="text-[11px] text-neutral-400 italic mt-0.5">
                              Note: {entry.notes}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveEntry(entry.cartKey)}
                          aria-label="Remove item"
                          className="text-neutral-500 hover:text-red-400 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white font-mono-num">
                          Rs. {unitPrice * entry.quantity}
                        </span>

                        <div className="flex items-center gap-2 bg-black border border-neutral-800 rounded-lg p-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(entry.cartKey, -1)}
                            aria-label="Decrease quantity"
                            className="w-7 h-7 rounded hover:bg-neutral-900 text-neutral-200 flex items-center justify-center cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold font-mono-num">
                            {entry.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(entry.cartKey, 1)}
                            aria-label="Increase quantity"
                            className="w-7 h-7 rounded hover:bg-neutral-900 text-neutral-200 flex items-center justify-center cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery / Pickup Toggle & Checkout Form */}
              <form id="checkout-form" onSubmit={handleCheckout} className="space-y-3 pt-2 border-t border-neutral-800">
                <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-neutral-900 border border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      orderType === 'delivery'
                        ? 'bg-[#facc15] text-black'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      orderType === 'pickup'
                        ? 'bg-[#facc15] text-black'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Self Pickup
                  </button>
                </div>

                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Full Name *"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#facc15] focus:outline-none text-sm text-white placeholder-neutral-500"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (e.g., 0300-1234567) *"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#facc15] focus:outline-none text-sm text-white placeholder-neutral-500"
                />
                {orderType === 'delivery' && (
                  <textarea
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Delivery Address (House / Street / Sector) *"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#facc15] focus:outline-none text-sm text-white placeholder-neutral-500 resize-none"
                  />
                )}

                {formError && (
                  <p className="text-xs text-red-400 font-medium">{formError}</p>
                )}
              </form>
            </div>
          )}
        </div>

        {/* Footer Summary & Place Order CTA */}
        {entries.length > 0 && !confirmedOrderId && (
          <div className="p-5 border-t border-neutral-800 bg-black space-y-3">
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono-num text-white">Rs. {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>
                  Delivery Fee {subtotal >= 2500 && orderType === 'delivery' ? '(Free above Rs. 2500)' : ''}
                </span>
                <span className="font-mono-num text-white">
                  {deliveryFee === 0 ? 'Free' : `Rs. ${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-1.5 border-t border-neutral-800">
                <span>Total</span>
                <span className="font-mono-num text-[#facc15]">Rs. {grandTotal}</span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              className="w-full py-3.5 px-5 rounded-xl bg-[#facc15] hover:bg-yellow-300 text-black font-bold text-sm transition-colors cursor-pointer"
            >
              Place Order — Rs. {grandTotal}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

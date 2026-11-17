import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import {
  AddOnOption,
  CATEGORIES,
  HeroSlide,
  MENU_ITEMS,
  MenuItem,
} from './data/menuData';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { CategoryStickyBar } from './components/CategoryStickyBar';
import { MenuSection } from './components/MenuSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ItemModal } from './components/ItemModal';
import { CartDrawer, CartEntry } from './components/CartDrawer';
import { InfoModals } from './components/InfoModals';

const CART_STORAGE_KEY = 'roll_n_roll_cart_v1';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeInfoModal, setActiveInfoModal] = useState<
    'reviews' | 'about' | 'contact' | null
  >(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [cart, setCart] = useState<CartEntry[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as CartEntry[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage quota errors
    }
  }, [cart]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      '[data-category-section]'
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const catId = visible[0].target.getAttribute('data-category-section');
          if (catId) setActiveCategory(catId);
        }
      },
      {
        rootMargin: '-140px 0px -60% 0px',
        threshold: 0.01,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const el = document.getElementById(`section-${categoryId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectHeroSlide = (slide: HeroSlide) => {
    if (slide.targetItemId) {
      const found = MENU_ITEMS.find((item) => item.id === slide.targetItemId);
      if (found) {
        setSelectedItem(found);
        return;
      }
    }
    handleSelectCategory(slide.targetCategory);
  };

  const addToCart = (
    item: MenuItem,
    quantity: number,
    addOns: AddOnOption[],
    notes: string
  ) => {
    const addOnKey = addOns
      .map((a) => a.id)
      .sort()
      .join(',');
    const cartKey = `${item.id}::${addOnKey}::${notes}`;

    setCart((prev) => {
      const existing = prev.find((entry) => entry.cartKey === cartKey);
      if (existing) {
        return prev.map((entry) =>
          entry.cartKey === cartKey
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry
        );
      }
      return [...prev, { cartKey, item, quantity, addOns, notes }];
    });

    showToast(`Added ${item.name} to bag`);
  };

  const handleQuickAdd = (item: MenuItem) => {
    addToCart(item, 1, [], '');
  };

  const handleUpdateQty = (cartKey: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((entry) =>
          entry.cartKey === cartKey
            ? { ...entry, quantity: entry.quantity + delta }
            : entry
        )
        .filter((entry) => entry.quantity > 0)
    );
  };

  const handleRemoveEntry = (cartKey: string) => {
    setCart((prev) => prev.filter((entry) => entry.cartKey !== cartKey));
  };

  const getItemCartQuantity = (itemId: string) => {
    return cart
      .filter((entry) => entry.item.id === itemId)
      .reduce((sum, entry) => sum + entry.quantity, 0);
  };

  const totalCartCount = cart.reduce((sum, entry) => sum + entry.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenModal={(modal) => setActiveInfoModal(modal)}
      />

      <HeroCarousel onSelectSlide={handleSelectHeroSlide} />

      <CategoryStickyBar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Repeating Charcoal Doodle Canvas */}
      <main className="bg-doodle-pattern flex-1">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 pb-4">
          {CATEGORIES.map((category) => {
            const categoryItems = MENU_ITEMS.filter(
              (item) => item.category === category.id
            );
            return (
              <MenuSection
                key={category.id}
                category={category}
                items={categoryItems}
                getItemCartQuantity={getItemCartQuantity}
                onOpenDetail={(item) => setSelectedItem(item)}
                onQuickAdd={handleQuickAdd}
              />
            );
          })}
        </div>

        <LocationSection />
      </main>

      <Footer onOpenModal={(modal) => setActiveInfoModal(modal)} />

      {/* Modals & Cart Drawer */}
      <ItemModal
        key={selectedItem?.id ?? 'closed'}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={addToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        entries={cart}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemoveEntry={handleRemoveEntry}
        onClearCart={() => setCart([])}
      />

      <InfoModals
        activeModal={activeInfoModal}
        onClose={() => setActiveInfoModal(null)}
      />

      {/* Quick-Add Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 bg-black border border-[#facc15] text-white px-4 py-3 rounded-xl shadow-2xl">
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <button
            type="button"
            onClick={() => {
              setToastMessage(null);
              setCartOpen(true);
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-[#facc15] hover:bg-yellow-300 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>View Bag</span>
          </button>
        </div>
      )}
    </div>
  );
}

export const BRAND_NAME = 'Roll N Roll';
export const BRAND_PHONE_DISPLAY = '0314 8334879';
export const BRAND_PHONE_INTL = '+92 314 8334879';
export const BRAND_PHONE_TEL = 'tel:+923148334879';
export const BRAND_WHATSAPP_URL = 'https://wa.me/923148334879';
export const BRAND_ADDRESS =
  'Jamshed Road No. 3, M.L Plaza, Shop No. 4, Opposite Ghazi Bakery, Karachi, Pakistan';

const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const withBase = (assetPath: string): string =>
  `${BASE_URL}${assetPath.replace(/^\/+/, '')}`;

export const BRAND_LOGO_URL = withBase(
  'assets/aistudio/765958597_1746570996661789_6032994874917564159_n_f034303b.jpg'
);

export const IMAGES = {
  // Generated studio photography
  heroSmokyBeast: withBase('src/assets/images/hero_smoky_beast_1794916679831.jpg'),
  heroRollSpecial: withBase('src/assets/images/hero_roll_special_1794916680318.jpg'),
  classicBurger: withBase('src/assets/images/burger_classic_smash_1794916681274.jpg'),
  doubleTower: withBase('src/assets/images/burger_double_tower_1794916681396.jpg'),
  zingster: withBase('src/assets/images/burger_crispy_zingster_1794916681916.jpg'),
  snacksFries: withBase('src/assets/images/cat_snacks_fries_1794916681818.jpg'),
  drinks: withBase('src/assets/images/cat_cold_drinks_1794916684288.jpg'),

  // User uploaded Roll N Roll real food photography (all 24 assets)
  pastaCreamy: withBase(
    'assets/aistudio/825336570_1791955195456702_5548187968330834806_n_33d4c5af.jpg'
  ),
  clubHalf: withBase(
    'assets/aistudio/825267373_1795858571733031_4342849689479552230_n_56ad0e33.jpg'
  ),
  wrapHalf: withBase(
    'assets/aistudio/825267249_1795858575066364_5683106478526877136_n_13c4ed3b.jpg'
  ),
  zingerHalf: withBase(
    'assets/aistudio/825267255_1795858598399695_4186183598588551915_n_87cc9f5a.jpg'
  ),
  pizzaHalf: withBase(
    'assets/aistudio/825267379_1795858618399693_5516934968943871607_n_f50aa7ef.jpg'
  ),
  chickenSoup: withBase(
    'assets/aistudio/825351275_1796753594976862_1887006753856092559_n_1cfe5444.jpg'
  ),
  tikkaMagic: withBase(
    'assets/aistudio/840101984_1801229761195912_1064634127093061918_n_74a8fd63.jpg'
  ),
  ultimateBeef: withBase(
    'assets/aistudio/850671633_1807149207270634_8335035060577884093_n_7b9e840a.jpg'
  ),
  crispyBitesBox: withBase(
    'assets/aistudio/842678245_1803126621006226_7423135185929444418_n_ebea5812.jpg'
  ),
  cheesyPizza: withBase(
    'assets/aistudio/844395902_1805097007475854_8009037226804917609_n_4e890b46.jpg'
  ),
  injectedNuggets: withBase(
    'assets/aistudio/843118523_1802272391091649_8716307046697906808_n_78d75d82.jpg'
  ),
  injectedZinger: withBase(
    'assets/aistudio/858265341_1814651609853727_7814418711396587768_n_af09cfd8.jpg'
  ),
  chickenSandwichPlate: withBase(
    'assets/aistudio/854489339_1809997356985819_2029365092953779774_n_e18167fd.jpg'
  ),
  crispyZingerRoll: withBase(
    'assets/aistudio/886726222_1826543528664535_5734229982511790629_n_2dc5a073.jpg'
  ),
  khausaBowl: withBase(
    'assets/aistudio/870935333_1823517198967168_2066085148029613111_n_adaf6d85.jpg'
  ),
  beefPepperoniPizza: withBase(
    'assets/aistudio/904471974_1835292311122990_5625665940591998178_n_888a7eb3.jpg'
  ),
  specialKunafa: withBase(
    'assets/aistudio/853582485_1808867057098849_5815714297592788968_n_d332bbca.jpg'
  ),
  pizzaAndPizzaRoll: withBase(
    'assets/aistudio/884643432_1825521785433376_542588740273818856_n_aa296fb0.jpg'
  ),
  juicyBroast: withBase(
    'assets/aistudio/863197923_1816669489651939_3399387488961148191_n_3615a4c9.jpg'
  ),
  alfredoPasta: withBase(
    'assets/aistudio/895709048_1830677451584476_6638625793113272997_n_f21619f2.jpg'
  ),
  weekendComboDeal: withBase(
    'assets/aistudio/863144816_1819679139350974_7857880448265991820_n_7d119896.jpg'
  ),
  comboDeal5: withBase(
    'assets/aistudio/854406860_1829652518353636_8770540103001448646_n_9ca25ce4.jpg'
  ),
  tandooriClubSandwich: withBase(
    'assets/aistudio/904808368_1837514314234123_1348221062923419522_n_ebe3e6ef.jpg'
  ),
  deal19Combo: withBase(
    'assets/aistudio/904771881_1840579930594228_40021230117382904_n_1046e7a5.jpg'
  ),
} as const;

export interface HeroSlide {
  id: string;
  topWord: string;
  bottomWord: string;
  subtitle: string;
  image: string;
  targetCategory: string;
  targetItemId?: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subGroup?: 'SINGLE' | 'DOUBLE';
  allowAddOns?: boolean;
}

export interface CategoryMeta {
  id: string;
  label: string;
  bannerTitle: string;
  thumb: string;
  bannerLeftImg: string;
  bannerRightImg: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  orderHighlight: string;
  comment: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-smoky-beast',
    topWord: 'SMOKY',
    bottomWord: 'BEAST',
    subtitle: 'TOP RATED',
    image: IMAGES.heroSmokyBeast,
    targetCategory: 'premium-beef',
    targetItemId: 'smoky-beast',
  },
  {
    id: 'slide-zinger-roll',
    topWord: 'ROLL N',
    bottomWord: 'ROLL',
    subtitle: 'CRISPY ZINGER ROLLS',
    image: IMAGES.heroRollSpecial,
    targetCategory: 'rolls-wraps',
    targetItemId: 'crispy-zinger-roll',
  },
  {
    id: 'slide-injected-zinger',
    topWord: 'INJECTED',
    bottomWord: 'ZINGER',
    subtitle: 'CHEESE FILLED CRUNCH',
    image: IMAGES.injectedZinger,
    targetCategory: 'zingsters',
    targetItemId: 'injected-zinger-burger',
  },
  {
    id: 'slide-pizza-roll',
    topWord: 'PIZZA &',
    bottomWord: 'PIZZA ROLL',
    subtitle: 'CHEESY GOODNESS',
    image: IMAGES.pizzaAndPizzaRoll,
    targetCategory: 'pizza-pasta',
    targetItemId: 'pizza-and-pizza-roll',
  },
  {
    id: 'slide-weekend-combo',
    topWord: 'WEEKEND',
    bottomWord: 'COMBO',
    subtitle: 'ONLY RS. 800',
    image: IMAGES.weekendComboDeal,
    targetCategory: 'deals',
    targetItemId: 'weekend-combo-deal',
  },
];

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'deals',
    label: 'Combo Deals',
    bannerTitle: 'COMBO DEALS',
    thumb: IMAGES.weekendComboDeal,
    bannerLeftImg: IMAGES.weekendComboDeal,
    bannerRightImg: IMAGES.comboDeal5,
  },
  {
    id: 'rolls-wraps',
    label: 'Rolls & Wraps',
    bannerTitle: 'ROLLS & WRAPS',
    thumb: IMAGES.crispyZingerRoll,
    bannerLeftImg: IMAGES.crispyZingerRoll,
    bannerRightImg: IMAGES.wrapHalf,
  },
  {
    id: 'classic-beef',
    label: 'Classic Beef',
    bannerTitle: 'CLASSIC BEEF',
    thumb: IMAGES.ultimateBeef,
    bannerLeftImg: IMAGES.ultimateBeef,
    bannerRightImg: IMAGES.classicBurger,
  },
  {
    id: 'premium-beef',
    label: 'Premium Beef',
    bannerTitle: 'PREMIUM BEEF',
    thumb: IMAGES.doubleTower,
    bannerLeftImg: IMAGES.doubleTower,
    bannerRightImg: IMAGES.heroSmokyBeast,
  },
  {
    id: 'zingsters',
    label: 'Zingsters',
    bannerTitle: 'ZINGSTERS',
    thumb: IMAGES.injectedZinger,
    bannerLeftImg: IMAGES.injectedZinger,
    bannerRightImg: IMAGES.zingerHalf,
  },
  {
    id: 'pizza-pasta',
    label: 'Pizza & Pasta',
    bannerTitle: 'PIZZA & PASTA',
    thumb: IMAGES.cheesyPizza,
    bannerLeftImg: IMAGES.beefPepperoniPizza,
    bannerRightImg: IMAGES.alfredoPasta,
  },
  {
    id: 'sandwiches-broast',
    label: 'Sandwiches & Broast',
    bannerTitle: 'SANDWICHES & BROAST',
    thumb: IMAGES.tandooriClubSandwich,
    bannerLeftImg: IMAGES.tandooriClubSandwich,
    bannerRightImg: IMAGES.juicyBroast,
  },
  {
    id: 'pakistani-specials',
    label: 'Desi & Specials',
    bannerTitle: 'DESI & SPECIALS',
    thumb: IMAGES.tikkaMagic,
    bannerLeftImg: IMAGES.tikkaMagic,
    bannerRightImg: IMAGES.specialKunafa,
  },
  {
    id: 'fries',
    label: 'Snacks & Fries',
    bannerTitle: 'SNACKS & FRIES',
    thumb: IMAGES.injectedNuggets,
    bannerLeftImg: IMAGES.injectedNuggets,
    bannerRightImg: IMAGES.snacksFries,
  },
  {
    id: 'drink',
    label: 'Drink',
    bannerTitle: 'DRINK',
    thumb: IMAGES.drinks,
    bannerLeftImg: IMAGES.drinks,
    bannerRightImg: IMAGES.drinks,
  },
  {
    id: 'add-on',
    label: 'Add On',
    bannerTitle: 'ADD ON',
    thumb: IMAGES.classicBurger,
    bannerLeftImg: IMAGES.classicBurger,
    bannerRightImg: IMAGES.snacksFries,
  },
];

export const ITEM_ADDON_OPTIONS: AddOnOption[] = [
  { id: 'addon-beef-patty', name: 'Beef Patty (120g)', price: 400 },
  { id: 'addon-cheese-slice', name: 'Cheese Slice', price: 80 },
  { id: 'addon-beef-bacon', name: 'Beef Bacon', price: 300 },
  { id: 'addon-pepperoni', name: 'Chicken Pepperoni', price: 100 },
  { id: 'addon-mushrooms', name: 'Sautéed Mushrooms', price: 120 },
  { id: 'addon-jalapenos', name: 'Jalapenos', price: 60 },
  { id: 'addon-onions', name: 'Caramelized Onions', price: 50 },
  { id: 'addon-dip-sauce', name: 'Dip Sauce (Chipotle / Garlic / BBQ)', price: 90 },
];

export const MENU_ITEMS: MenuItem[] = [
  // COMBO DEALS
  {
    id: 'weekend-combo-deal',
    name: 'Weekend Combo Deal',
    description:
      '1 Crispy Zinger Burger + 1 Juicy Leg Broast + Golden Fries + Fresh Coleslaw.',
    price: 800,
    image: IMAGES.weekendComboDeal,
    category: 'deals',
    allowAddOns: true,
  },
  {
    id: 'combo-deal-5',
    name: 'Combo Deal 5 (5 Chicken Rolls)',
    description:
      '5 Signature Chicken Rolls served hot with crispy French Fries & creamy Coleslaw.',
    price: 1080,
    image: IMAGES.comboDeal5,
    category: 'deals',
    allowAddOns: true,
  },
  {
    id: 'deal-19',
    name: 'Deal 19 Platter',
    description:
      'Chicken Burger + Club Sandwich + Fresh Coleslaw + Crispy French Fries.',
    price: 750,
    image: IMAGES.deal19Combo,
    category: 'deals',
    allowAddOns: true,
  },
  {
    id: 'crispy-bites-box',
    name: 'Crispy Bites Loaded Box',
    description:
      'Golden crispy chicken strips, zinger burger, seasoned fries & chilled soft drink.',
    price: 950,
    image: IMAGES.crispyBitesBox,
    category: 'deals',
    allowAddOns: true,
  },

  // ROLLS & WRAPS
  {
    id: 'crispy-zinger-roll',
    name: 'Crispy Zinger Roll',
    description:
      'Crispy fried chicken chunks, fresh iceberg & signature Roll N Roll dynamite sauce in warm wrap.',
    price: 450,
    image: IMAGES.crispyZingerRoll,
    category: 'rolls-wraps',
    allowAddOns: true,
  },
  {
    id: 'adha-tera-wrap',
    name: 'Adha Tera Adha Mera Wrap',
    description:
      'Char-grilled jumbo tortilla wrap loaded with crispy zinger strips, tomatoes & garlic mayo.',
    price: 520,
    image: IMAGES.wrapHalf,
    category: 'rolls-wraps',
    allowAddOns: true,
  },
  {
    id: 'rnr-signature-roll',
    name: 'Roll N Roll Signature Roll',
    description:
      'Smoky grilled chicken wrapped in toasted flatbread with melted cheddar, crisp lettuce & garlic sauce.',
    price: 480,
    image: IMAGES.heroRollSpecial,
    category: 'rolls-wraps',
    allowAddOns: true,
  },
  {
    id: 'pizza-roll-platter',
    name: 'Stuffed Pizza Roll (4 Pcs)',
    description:
      'Baked golden rolls stuffed with seasoned chicken, mozzarella cheese & Italian herbs.',
    price: 680,
    image: IMAGES.pizzaAndPizzaRoll,
    category: 'rolls-wraps',
    allowAddOns: true,
  },

  // CLASSIC BEEF
  {
    id: 'ultimate-beef-burger',
    name: 'The Ultimate Beef Burger',
    description:
      'Char-seared beef patty, melted cheddar, crisp lettuce, pickles, fresh tomato & house sauce.',
    price: 750,
    image: IMAGES.ultimateBeef,
    category: 'classic-beef',
    subGroup: 'SINGLE',
    allowAddOns: true,
  },
  {
    id: 'vintage-beef',
    name: 'Vintage Beef',
    description:
      'Brioche bun, smashed beef patty, single cheese slice, iceberg, raw onion, tomato, honey mustard.',
    price: 700,
    image: IMAGES.classicBurger,
    category: 'classic-beef',
    subGroup: 'SINGLE',
    allowAddOns: true,
  },
  {
    id: 'barbecue-smash',
    name: 'Barbecue Smash',
    description:
      'Brioche bun, smashed beef patty, single cheese slice, iceberg, grilled onions, BBQ sauce.',
    price: 700,
    image: IMAGES.heroSmokyBeast,
    category: 'classic-beef',
    subGroup: 'SINGLE',
    allowAddOns: true,
  },
  {
    id: 'pepperoni-smash',
    name: 'Pepperoni Smash',
    description:
      'Brioche bun, smashed beef patty, 2x cheese slices, beef pepperoni, iceberg, honey mustard sauce.',
    price: 870,
    image: IMAGES.classicBurger,
    category: 'classic-beef',
    subGroup: 'SINGLE',
    allowAddOns: true,
  },
  {
    id: 'american-classic',
    name: 'American Classic',
    description:
      "Brioche bun, smashed beef patty, cheese slice, iceberg, grilled onion, pickles & chef's sauce.",
    price: 740,
    image: IMAGES.ultimateBeef,
    category: 'classic-beef',
    subGroup: 'SINGLE',
    allowAddOns: true,
  },
  {
    id: 'mushroom-smash',
    name: 'Mushroom Smash',
    description:
      'Brioche bun, smashed beef patty, 2x cheese slices, caramelized onions & sautéed mushrooms.',
    price: 780,
    image: IMAGES.doubleTower,
    category: 'classic-beef',
    subGroup: 'SINGLE',
    allowAddOns: true,
  },
  {
    id: 'bacon-smash',
    name: 'Bacon Smash',
    description:
      'Brioche bun, smashed beef patty, 2x cheese slices, crispy beef bacon & smoky glaze.',
    price: 890,
    image: IMAGES.heroSmokyBeast,
    category: 'classic-beef',
    subGroup: 'SINGLE',
    allowAddOns: true,
  },
  {
    id: 'hot-jalapeno-smash',
    name: 'Hot Jalapeno Smash',
    description:
      'Brioche bun, smashed beef patty, cheese slice, iceberg, jalapeno and hot jalapeno sauce.',
    price: 730,
    image: IMAGES.classicBurger,
    category: 'classic-beef',
    subGroup: 'SINGLE',
    allowAddOns: true,
  },

  // PREMIUM BEEF - DOUBLE
  {
    id: 'majestic-double',
    name: 'Majestic Double',
    description:
      'Brioche bun, 2x beef patties, 2x cheese slices, iceberg, grilled onion, chipotle sauce.',
    price: 1000,
    image: IMAGES.doubleTower,
    category: 'premium-beef',
    subGroup: 'DOUBLE',
    allowAddOns: true,
  },
  {
    id: 'cheesy-quadra',
    name: 'Cheesy Quadra',
    description:
      'Brioche bun, 2x beef patties, 4x cheese slices, iceberg, honey mustard sauce.',
    price: 1150,
    image: IMAGES.heroSmokyBeast,
    category: 'premium-beef',
    subGroup: 'DOUBLE',
    allowAddOns: true,
  },
  {
    id: 'smoky-beast',
    name: 'Smoky Beast',
    description:
      'Brioche bun, 2x beef patties, 2x cheese slices, beef pepperoni, chicken pepperoni, grilled onions.',
    price: 1350,
    image: IMAGES.heroSmokyBeast,
    category: 'premium-beef',
    subGroup: 'DOUBLE',
    allowAddOns: true,
  },
  {
    id: 'triple-smash-tower',
    name: 'Triple Smash Tower',
    description:
      "Brioche bun, 3x beef patties, 3x cheese slices, caramelized onions, chef's signature sauce.",
    price: 1490,
    image: IMAGES.doubleTower,
    category: 'premium-beef',
    subGroup: 'DOUBLE',
    allowAddOns: true,
  },

  // ZINGSTERS
  {
    id: 'injected-zinger-burger',
    name: 'Injected Zinger Burger',
    description:
      'Golden crunchy zinger fillet injected with molten cheddar cheese sauce & spicy mayo.',
    price: 680,
    image: IMAGES.injectedZinger,
    category: 'zingsters',
    allowAddOns: true,
  },
  {
    id: 'adha-tera-zinger',
    name: 'Adha Tera Adha Mera Zinger',
    description:
      'Thick crispy chicken fillet with fresh tomatoes, red onion, crisp lettuce & signature sauce.',
    price: 620,
    image: IMAGES.zingerHalf,
    category: 'zingsters',
    allowAddOns: true,
  },
  {
    id: 'zingster-classic',
    name: 'Classic Zingster',
    description:
      "Potato bun, crispy chicken thigh fillet, iceberg lettuce, cheese & chef's zinger sauce.",
    price: 590,
    image: IMAGES.zingster,
    category: 'zingsters',
    allowAddOns: true,
  },
  {
    id: 'double-cruncher',
    name: 'Double Cruncher',
    description:
      "Brioche bun, 2x crispy chicken patties, 2x cheese slices, iceberg, chef's signature sauce.",
    price: 890,
    image: IMAGES.zingster,
    category: 'zingsters',
    allowAddOns: true,
  },

  // PIZZA & PASTA
  {
    id: 'cheesy-chicken-pizza',
    name: 'Cheesy Chicken Pizza',
    description:
      'Hand-tossed crust topped with spiced grilled chicken, mushrooms, cherry tomatoes & mozzarella.',
    price: 1150,
    image: IMAGES.cheesyPizza,
    category: 'pizza-pasta',
    allowAddOns: true,
  },
  {
    id: 'beef-pepperoni-pizza',
    name: 'Beef Pepperoni Pizza',
    description:
      'Classic red sauce pizza loaded with smoky beef pepperoni, green bell peppers & mozzarella.',
    price: 1290,
    image: IMAGES.beefPepperoniPizza,
    category: 'pizza-pasta',
    allowAddOns: true,
  },
  {
    id: 'pizza-and-pizza-roll',
    name: 'Pizza & Pizza Roll Combo',
    description:
      'Cheesy chicken pizza paired with 4 stuffed pizza rolls & creamy garlic dip.',
    price: 1450,
    image: IMAGES.pizzaAndPizzaRoll,
    category: 'pizza-pasta',
    allowAddOns: true,
  },
  {
    id: 'adha-tera-pizza',
    name: 'Adha Tera Adha Mera Pizza',
    description:
      'Loaded pan-crust pizza with pepperoni, black olives, mushrooms, capsicum & extra cheese pull.',
    price: 1190,
    image: IMAGES.pizzaHalf,
    category: 'pizza-pasta',
    allowAddOns: true,
  },
  {
    id: 'creamy-penne-pasta',
    name: 'Creamy Chicken Penne Pasta',
    description:
      'Al dente penne tossed in rich creamy tomato herb sauce with tender chicken & parmesan.',
    price: 780,
    image: IMAGES.pastaCreamy,
    category: 'pizza-pasta',
    allowAddOns: true,
  },
  {
    id: 'alfredo-pasta',
    name: 'Alfredo Pasta',
    description:
      'Creamy, cheesy, irresistible penne pasta with grilled chicken strips, mushrooms & capsicum.',
    price: 850,
    image: IMAGES.alfredoPasta,
    category: 'pizza-pasta',
    allowAddOns: true,
  },

  // SANDWICHES & BROAST
  {
    id: 'tandoori-club-sandwich',
    name: 'Tandoori Club Sandwich',
    description:
      'Triple-decker toasted sandwich stacked with smoky tandoori chicken cubes, fried egg & mayo.',
    price: 620,
    image: IMAGES.tandooriClubSandwich,
    category: 'sandwiches-broast',
    allowAddOns: true,
  },
  {
    id: 'chicken-club-plate',
    name: 'Chicken Club Sandwich & Fries',
    description:
      'Classic layered chicken club sandwich served with golden fries, pickles & ketchup.',
    price: 590,
    image: IMAGES.chickenSandwichPlate,
    category: 'sandwiches-broast',
    allowAddOns: true,
  },
  {
    id: 'adha-tera-club',
    name: 'Adha Tera Adha Mera Club',
    description:
      'Double crispy chicken fillet club sandwich layered with cheddar cheese, egg & olives.',
    price: 680,
    image: IMAGES.clubHalf,
    category: 'sandwiches-broast',
    allowAddOns: true,
  },
  {
    id: 'juicy-broast',
    name: 'Juicy Broast Epic Crunch',
    description:
      'Golden crispy cheese-injected chicken broast served hot with seasoned French fries.',
    price: 690,
    image: IMAGES.juicyBroast,
    category: 'sandwiches-broast',
    allowAddOns: true,
  },

  // DESI & SPECIALS
  {
    id: 'tikka-magic',
    name: 'Taste the Tikka Magic',
    description:
      'Charcoal-grilled chicken tikka skewers served with fresh green mint chutney, onions & lime.',
    price: 650,
    image: IMAGES.tikkaMagic,
    category: 'pakistani-specials',
    allowAddOns: true,
  },
  {
    id: 'khausa-special',
    name: 'Signature Masala Khausa',
    description:
      'Rich, creamy coconut curry over noodles topped with spiced chicken, crispy papdi & herbs.',
    price: 620,
    image: IMAGES.khausaBowl,
    category: 'pakistani-specials',
    allowAddOns: false,
  },
  {
    id: 'hot-chicken-soup',
    name: 'Chicken Corn Soup',
    description:
      'Steaming hot Pakistani-style shredded chicken, sweet corn & carrot soup.',
    price: 390,
    image: IMAGES.chickenSoup,
    category: 'pakistani-specials',
    allowAddOns: false,
  },
  {
    id: 'special-kunafa',
    name: 'Special Pistachio Kunafa',
    description:
      'Authentic crispy golden kunafa filled with rich cream & topped with crushed green pistachios.',
    price: 750,
    image: IMAGES.specialKunafa,
    category: 'pakistani-specials',
    allowAddOns: false,
  },

  // SNACKS & FRIES
  {
    id: 'arabian-injected-nuggets',
    name: 'Arabian Injected Nuggets',
    description:
      'Crispy golden chicken nuggets injected with molten cheddar & garlic sauce + creamy dip.',
    price: 550,
    image: IMAGES.injectedNuggets,
    category: 'fries',
    allowAddOns: false,
  },
  {
    id: 'smash-fries-l',
    name: 'Loaded Smash Fries (Large)',
    description:
      'Crispy fries loaded with melted cheddar cheese, chopped beef, crispy chicken & jalapenos.',
    price: 750,
    image: IMAGES.snacksFries,
    category: 'fries',
    allowAddOns: true,
  },
  {
    id: 'cheese-fries',
    name: 'Cheese Loaded Fries',
    description:
      'Golden crispy fries drenched in warm melted cheddar cheese & herbs.',
    price: 450,
    image: IMAGES.snacksFries,
    category: 'fries',
    allowAddOns: true,
  },
  {
    id: 'salted-fries-r',
    name: 'Classic Crispy Fries',
    description:
      'Golden crispy salted French fries served fresh with dipping sauce.',
    price: 250,
    image: IMAGES.juicyBroast,
    category: 'fries',
    allowAddOns: false,
  },

  // DRINK
  {
    id: 'mint-margarita',
    name: 'Mint Margarita',
    description:
      'Refreshing fresh mint & lemon slush cooler with sea salt rim.',
    price: 290,
    image: IMAGES.drinks,
    category: 'drink',
    allowAddOns: false,
  },
  {
    id: 'soft-drink-345',
    name: 'Chilled Soft Drink',
    description: 'Ice-cold carbonated soft drink served with fresh lime.',
    price: 130,
    image: IMAGES.drinks,
    category: 'drink',
    allowAddOns: false,
  },
  {
    id: 'combo-drink-cup',
    name: 'Jumbo Fountain Cola',
    description: 'Roll N Roll jumbo chilled fountain cola with ice.',
    price: 180,
    image: IMAGES.crispyBitesBox,
    category: 'drink',
    allowAddOns: false,
  },
  {
    id: 'peach-iced-tea',
    name: 'Peach Iced Tea',
    description: 'Chilled brewed iced tea infused with sweet peach.',
    price: 280,
    image: IMAGES.drinks,
    category: 'drink',
    allowAddOns: false,
  },

  // ADD ON
  {
    id: 'addon-card-patty',
    name: 'Extra Beef Patty (120g)',
    description: 'Extra 100% pure smashed beef patty seared on the flat-top.',
    price: 400,
    image: IMAGES.ultimateBeef,
    category: 'add-on',
    allowAddOns: false,
  },
  {
    id: 'addon-card-cheese-slice',
    name: 'Extra Cheese Slice',
    description: 'Rich melted American cheddar cheese slice.',
    price: 80,
    image: IMAGES.injectedZinger,
    category: 'add-on',
    allowAddOns: false,
  },
  {
    id: 'addon-card-dip',
    name: 'Signature Dip Sauce',
    description:
      'Garlic Mayo, Chipotle, Honey Mustard, Hot Jalapeno or BBQ Dip.',
    price: 90,
    image: IMAGES.injectedNuggets,
    category: 'add-on',
    allowAddOns: false,
  },
  {
    id: 'addon-card-pepperoni',
    name: 'Beef / Chicken Pepperoni',
    description: 'Savory crispy pepperoni slices topping.',
    price: 100,
    image: IMAGES.beefPepperoniPizza,
    category: 'add-on',
    allowAddOns: false,
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Hamza Tariq',
    rating: 5,
    date: '2 days ago',
    orderHighlight: 'Injected Zinger & Crispy Zinger Roll',
    comment:
      'Best zinger roll and injected burger near Jamshed Road No. 3! Always hot, crispy, and full of sauce.',
  },
  {
    id: 'rev-2',
    author: 'Ayesha Siddiqui',
    rating: 5,
    date: '1 week ago',
    orderHighlight: 'Alfredo Pasta & Tandoori Club Sandwich',
    comment:
      'Creamy Alfredo pasta and triple-decker tandoori club sandwich are super filling. Very quick delivery to Shikarpur Colony.',
  },
  {
    id: 'rev-3',
    author: 'Zain Ul Abideen',
    rating: 5,
    date: '2 weeks ago',
    orderHighlight: 'Weekend Combo Deal (Rs. 800)',
    comment:
      'Unbeatable value! Crispy broast, zinger burger, fries and coleslaw all fresh and crunchy.',
  },
  {
    id: 'rev-4',
    author: 'Bilal Ahmed',
    rating: 5,
    date: '3 weeks ago',
    orderHighlight: 'Special Kunafa & Masala Khausa',
    comment:
      'From Desi Khausa and Tikka skewers to pistachio Kunafa dessert, Roll N Roll nails every single dish.',
  },
];

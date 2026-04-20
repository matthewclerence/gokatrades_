// ================= GokaTrades — Catalog =================
const IMG = 'assets/images/';

const CATEGORIES = [
  { slug: 'first-illustration-partner', label: 'First Illustration Partner', group: 'sealed' },
  { slug: 'booster-boxes',         label: 'Booster Boxes',        group: 'sealed' },
  { slug: 'booster-packs',         label: 'Booster Packs',        group: 'sealed' },
  { slug: 'elite-trainer-boxes',   label: 'Elite Trainer Boxes',  group: 'sealed' },
  { slug: 'collection-boxes',      label: 'Collection Boxes',     group: 'sealed' },
  { slug: 'gift-tins',             label: 'Gift Tins',            group: 'sealed' },
  { slug: 'japanese-products',     label: 'Japanese Products',    group: 'sealed' },
  { slug: 'theme-decks',           label: 'Theme Decks',          group: 'sealed' },
  { slug: 'repacks',               label: 'Repacks',              group: 'sealed' },
  { slug: 'other-sealed-products', label: 'Other Sealed',         group: 'sealed' },
  { slug: 'accessories',           label: 'Accessories',          group: 'merch' },
  { slug: 'toys-merch',            label: 'Toys & Merch',         group: 'merch' },
  { slug: 'singles',               label: 'Singles',              group: 'cards' },
];

// ---------- Hub routes ----------
const ROUTES = {
  sealed: {
    title: 'Produk Sealed',
    tagline: 'First Partner Illustration Collection tersedia sekarang — kategori sealed lainnya segera hadir.',
    hero: IMG + 'first_partner_illustration_collection.jpg',
    cats: ['first-illustration-partner','booster-boxes','elite-trainer-boxes','booster-packs','collection-boxes','gift-tins','japanese-products','theme-decks','other-sealed-products','repacks'],
  },
  singles: {
    title: 'Singles',
    tagline: 'Kartu single dari WOTC sampai era modern. Kondisi Near Mint dijamin.',
    hero: IMG + 'pikachu_illustrator.jpg',
  },
  slabs: {
    title: 'Graded Slabs',
    tagline: 'Kartu graded PSA, BGS, CGC, dan Ace. Pop reports disertakan.',
    hero: IMG + 'charizard_1st_ed_shadowless.jpg',
  },
};

// ---------- Sealed/Misc products by category ----------
const PRODUCTS = {
  'first-illustration-partner': {
    title: 'First Partner Illustration Collection', group: 'sealed',
    tagline: 'Pokémon TCG First Partner Illustration Collection Series 1 — sealed, tersedia, dikirim sekarang.',
    hero: IMG + 'first_partner_illustration_collection.jpg',
    items: [
      { id:'fip-box-01', name: 'First Partner Illustration Collection Series 1', price: 'Rp 1,850,000', change: '+6.2%', img: IMG+'first_partner_illustration_collection.jpg', tag: 'Tersedia', stock:'Tersedia' },
    ],
  },
  'booster-boxes': {
    title: 'Booster Boxes', group: 'sealed', comingSoon: true,
    tagline: 'Factory sealed. 36 packs per box. Verified imports.',
    hero: IMG + 'celebrations_25th_booster.jpg',
    items: [
      { id:'bb-celeb',   name: 'Celebrations 25th Anniversary', price: 'Rp 2,850,000', change: '+4.2%', img: IMG+'celebrations_25th_booster.jpg', tag: 'Hot',      stock:'In Stock', comingSoon: true },
      { id:'bb-30yr',    name: '30th Anniversary Collection',   price: 'Rp 3,200,000', change: '+11.2%',img: IMG+'30 year.jpg',                  tag: 'Preorder', stock:'Preorder', comingSoon: true },
      { id:'bb-ascended',name: 'Ascended Heroes Booster Box',   price: 'Rp 2,400,000', change: '+2.8%', img: IMG+'starry crystals.webp',         tag: 'New',      stock:'In Stock', comingSoon: true },
      { id:'bb-obsidian',name: 'Obsidian Flames Booster Box',   price: 'Rp 2,150,000', change: '+1.4%', img: IMG+'30 year 2.jpg',                tag: '',         stock:'In Stock', comingSoon: true },
      { id:'bb-paradox', name: 'Paradox Rift Booster Box',      price: 'Rp 2,290,000', change: '-0.6%', img: IMG+'30 year 3.png',                tag: '',         stock:'Low Stock', comingSoon: true },
      { id:'bb-twilight',name: 'Twilight Masquerade Box',       price: 'Rp 2,650,000', change: '+6.1%', img: IMG+'Tera-Arcanine-ex-China-143x200.webp', tag: 'Hot', stock:'In Stock', comingSoon: true },
    ],
  },
  'booster-packs': {
    title: 'Booster Packs', group: 'sealed', comingSoon: true,
    tagline: 'Single packs. Cracked for fun or collection.',
    hero: IMG + 'starry crystals.webp',
    items: [
      { id:'bp-celeb',    name: 'Celebrations Pack',       price: 'Rp 85,000',  change: '+2.1%', img: IMG+'celebrations_25th_booster.jpg', tag: '',    stock:'In Stock' },
      { id:'bp-30yr',     name: '30th Anniversary Pack',   price: 'Rp 95,000',  change: '+5.4%', img: IMG+'30 year.jpg', tag: 'New', stock:'In Stock' },
      { id:'bp-paldean',  name: 'Paldean Fates Pack',      price: 'Rp 78,000',  change: '+0.8%', img: IMG+'starry crystals.webp', tag: '', stock:'In Stock' },
      { id:'bp-temporal', name: 'Temporal Forces Pack',    price: 'Rp 72,000',  change: '-0.3%', img: IMG+'30 year 2.jpg', tag: '', stock:'Low Stock' },
      { id:'bp-twilight', name: 'Twilight Masquerade Pack',price: 'Rp 80,000',  change: '+3.2%', img: IMG+'30 year 3.png', tag: '', stock:'In Stock' },
      { id:'bp-sv',       name: 'Scarlet & Violet Pack',   price: 'Rp 68,000',  change: '+1.1%', img: IMG+'Rika-China-143x200.webp', tag: '', stock:'In Stock' },
    ],
  },
  'elite-trainer-boxes': {
    title: 'Elite Trainer Boxes', group: 'sealed', comingSoon: true,
    tagline: '9 packs + dice + sleeves. The collector starter pack.',
    hero: IMG + 'Ascended-Heroes-Elite-Trainer-Box-1-200x191.webp',
    items: [
      { id:'etb-ascended', name: 'Ascended Heroes ETB',     price: 'Rp 980,000', change: '+2.1%', img: IMG+'Ascended-Heroes-Elite-Trainer-Box-1-200x191.webp', tag: 'New', stock:'In Stock' },
      { id:'etb-celeb',    name: 'Celebrations ETB',        price: 'Rp 850,000', change: '+3.7%', img: IMG+'celebrations_25th_booster.jpg', tag: 'Hot', stock:'Low Stock' },
      { id:'etb-obsidian', name: 'Obsidian Flames ETB',     price: 'Rp 720,000', change: '+1.2%', img: IMG+'30 year 2.jpg', tag: '', stock:'In Stock' },
      { id:'etb-paldea',   name: 'Paldea Evolved ETB',      price: 'Rp 760,000', change: '-0.4%', img: IMG+'30 year.jpg', tag: '', stock:'In Stock' },
      { id:'etb-twilight', name: 'Twilight Masquerade ETB', price: 'Rp 890,000', change: '+4.8%', img: IMG+'starry crystals.webp', tag: '', stock:'In Stock' },
      { id:'etb-temporal', name: 'Temporal Forces ETB',     price: 'Rp 810,000', change: '+2.2%', img: IMG+'Tera-Arcanine-ex-China-143x200.webp', tag: '', stock:'Low Stock' },
    ],
  },
  'collection-boxes': {
    title: 'Collection Boxes', group: 'sealed', comingSoon: true,
    tagline: 'Premium promo cards + packs. Collector exclusive sets.',
    hero: IMG + 'Umbreon-200x200.webp',
    items: [
      { id:'cb-umb',   name: 'Umbreon VMAX Premium Box',   price: 'Rp 1,450,000', change: '+8.2%',  img: IMG+'Umbreon-200x200.webp', tag: 'Hot', stock:'Low Stock' },
      { id:'cb-esp',   name: 'Espeon VMAX Premium Box',    price: 'Rp 1,380,000', change: '+6.1%',  img: IMG+'Espeon-200x200.webp',  tag: '', stock:'In Stock' },
      { id:'cb-char',  name: 'Charizard UPC 2022',         price: 'Rp 2,890,000', change: '+12.4%', img: IMG+'mega_charizard_x_ex_sir.jpg', tag: 'Grail', stock:'Low Stock' },
      { id:'cb-go',    name: 'Pokémon GO Premium Box',     price: 'Rp 920,000',   change: '+3.5%',  img: IMG+'starry crystals.webp', tag: '', stock:'In Stock' },
      { id:'cb-mew',   name: 'Mew UPC Collection',         price: 'Rp 1,760,000', change: '+4.9%',  img: IMG+'30 year.jpg', tag: '', stock:'In Stock' },
      { id:'cb-pika',  name: 'Pikachu 25th Premium Box',   price: 'Rp 1,220,000', change: '+2.8%',  img: IMG+'celebrations_25th_booster.jpg', tag: '', stock:'In Stock' },
    ],
  },
  'gift-tins': {
    title: 'Gift Tins', group: 'sealed', comingSoon: true,
    tagline: 'Collectible metal tins with sealed packs and promos.',
    hero: IMG + 'starry crystals.webp',
    items: [
      { id:'gt-paldean', name:'Paldean Fates Tin',       price:'Rp 420,000', change:'+1.1%', img:IMG+'starry crystals.webp',  tag:'',    stock:'In Stock' },
      { id:'gt-twil',    name:'Twilight Masquerade Tin', price:'Rp 390,000', change:'+2.3%', img:IMG+'30 year 3.png',         tag:'New', stock:'In Stock' },
      { id:'gt-mew',     name:'Mewtwo VSTAR Tin',        price:'Rp 480,000', change:'+4.6%', img:IMG+'Umbreon-200x200.webp',  tag:'',    stock:'In Stock' },
      { id:'gt-char',    name:'Charizard ex Tin',        price:'Rp 520,000', change:'+5.8%', img:IMG+'mega_charizard_x_ex_sir.jpg', tag:'Hot', stock:'In Stock' },
      { id:'gt-lucario', name:'Lucario VSTAR Tin',       price:'Rp 360,000', change:'-0.9%', img:IMG+'Espeon-200x200.webp',   tag:'',    stock:'In Stock' },
      { id:'gt-iron',    name:'Iron Valiant ex Tin',     price:'Rp 380,000', change:'+1.7%', img:IMG+'30 year 2.jpg',         tag:'',    stock:'In Stock' },
    ],
  },
  'japanese-products': {
    title: 'Japanese Products', group: 'sealed', comingSoon: true,
    tagline: 'Direct from Japan. Rare pulls. SAR & AR chase hits.',
    hero: IMG + 'Rika-China-143x200.webp',
    items: [
      { id:'jp-st',    name:'Shiny Treasure ex Booster Box', price:'Rp 1,480,000', change:'+6.3%', img:IMG+'starry crystals.webp', tag:'Hot',  stock:'In Stock' },
      { id:'jp-ch',    name:'Crimson Haze BB',               price:'Rp 1,290,000', change:'+3.8%', img:IMG+'30 year 2.jpg',        tag:'New',  stock:'In Stock' },
      { id:'jp-wf',    name:'Wild Force BB',                 price:'Rp 1,340,000', change:'+4.1%', img:IMG+'Gholdengo-China-143x200.jpg', tag:'', stock:'In Stock' },
      { id:'jp-rika',  name:'Rika SAR',                      price:'Rp 1,890,000', change:'+9.2%', img:IMG+'Rika-China-143x200.webp', tag:'Grail', stock:'Low Stock' },
      { id:'jp-arc',   name:'Tera Arcanine ex SAR',          price:'Rp 1,450,000', change:'+8.3%', img:IMG+'Tera-Arcanine-ex-China-143x200.webp', tag:'', stock:'In Stock' },
      { id:'jp-lisia', name:'Lisia\'s Appeal SAR',           price:'Rp 2,100,000', change:'+5.7%', img:IMG+'Lisias-Appeal-Chinese.jpg', tag:'Hot', stock:'Low Stock' },
    ],
  },
  'theme-decks': {
    title: 'Theme Decks', group: 'sealed', comingSoon: true,
    tagline: 'Ready-to-play 60-card sealed decks.',
    hero: IMG + 'mega_charizard_x_ex_sir.jpg',
    items: [
      { id:'td-fire',  name:'Fire Frenzy Theme Deck',   price:'Rp 180,000', change:'+0.8%', img:IMG+'mega_charizard_x_ex_sir.jpg', tag:'', stock:'In Stock' },
      { id:'td-water', name:'Water Blast Theme Deck',   price:'Rp 175,000', change:'+1.2%', img:IMG+'lugia_1st_ed.png',            tag:'', stock:'In Stock' },
      { id:'td-grass', name:'Grass Assault Theme Deck', price:'Rp 170,000', change:'-0.4%', img:IMG+'Espeon-200x200.webp',         tag:'', stock:'Low Stock' },
      { id:'td-psy',   name:'Psychic Shroud Deck',      price:'Rp 195,000', change:'+2.6%', img:IMG+'Umbreon-200x200.webp',        tag:'New', stock:'In Stock' },
      { id:'td-elec',  name:'Electric Surge Deck',      price:'Rp 185,000', change:'+1.9%', img:IMG+'pikachu_illustrator.jpg',     tag:'', stock:'In Stock' },
      { id:'td-steel', name:'Steel Fortress Deck',      price:'Rp 175,000', change:'+0.5%', img:IMG+'Gholdengo-China-143x200.jpg', tag:'', stock:'In Stock' },
    ],
  },
  'repacks': {
    title: 'Repacks', group: 'sealed', comingSoon: true,
    tagline: 'Curated mystery repacks — transparent odds.',
    hero: IMG + 'starry crystals.webp',
    items: [
      { id:'rp-bronze',  name:'Bronze Mystery Repack',  price:'Rp 120,000',   change:'+1.0%',  img:IMG+'starry crystals.webp', tag:'',      stock:'In Stock' },
      { id:'rp-silver',  name:'Silver Mystery Repack',  price:'Rp 250,000',   change:'+2.4%',  img:IMG+'30 year.jpg',          tag:'Hot',   stock:'In Stock' },
      { id:'rp-gold',    name:'Gold Mystery Repack',    price:'Rp 480,000',   change:'+4.8%',  img:IMG+'30 year 2.jpg',        tag:'',      stock:'In Stock' },
      { id:'rp-plat',    name:'Platinum Grail Repack',  price:'Rp 1,200,000', change:'+8.2%',  img:IMG+'30 year 3.png',        tag:'Grail', stock:'Low Stock' },
      { id:'rp-vintage', name:'Vintage WOTC Repack',    price:'Rp 2,800,000', change:'+12.1%', img:IMG+'charizard_1st_ed_shadowless.jpg', tag:'Rare', stock:'Low Stock' },
      { id:'rp-jpn',     name:'Japanese-Only Repack',   price:'Rp 340,000',   change:'+3.5%',  img:IMG+'Rika-China-143x200.webp', tag:'New', stock:'In Stock' },
    ],
  },
  'other-sealed-products': {
    title: 'Other Sealed Products', group: 'sealed', comingSoon: true,
    tagline: 'Blisters, build & battle, prerelease kits.',
    hero: IMG + '30 year 3.png',
    items: [
      { id:'os-bnb',  name:'Build & Battle Box',  price:'Rp 320,000', change:'+1.8%', img:IMG+'Ascended-Heroes-Elite-Trainer-Box-1-200x191.webp', tag:'', stock:'In Stock' },
      { id:'os-b3',   name:'3-Pack Blister',      price:'Rp 240,000', change:'+0.7%', img:IMG+'30 year.jpg', tag:'', stock:'In Stock' },
      { id:'os-slv',  name:'Sleeved Booster',     price:'Rp 110,000', change:'+2.3%', img:IMG+'starry crystals.webp', tag:'New', stock:'In Stock' },
      { id:'os-cl',   name:'Checklane Blister',   price:'Rp 130,000', change:'+1.1%', img:IMG+'30 year 2.jpg', tag:'', stock:'In Stock' },
      { id:'os-pre',  name:'Prerelease Kit',      price:'Rp 380,000', change:'+3.6%', img:IMG+'celebrations_25th_booster.jpg', tag:'', stock:'Low Stock' },
      { id:'os-tp',   name:'Tournament Pack',     price:'Rp 190,000', change:'+1.4%', img:IMG+'Espeon-200x200.webp', tag:'', stock:'In Stock' },
    ],
  },
  'accessories': {
    title: 'Accessories', group: 'merch', comingSoon: true,
    tagline: 'Sleeves, binders, deck boxes, playmats.',
    hero: IMG + 'Espeon-200x200.webp',
    items: [
      { id:'ac-slv',  name:'Premium Card Sleeves (65pk)', price:'Rp 120,000', change:'+0.9%', img:IMG+'Espeon-200x200.webp',   tag:'',    stock:'In Stock' },
      { id:'ac-bin',  name:'Zippered 9-Pocket Binder',    price:'Rp 280,000', change:'+2.1%', img:IMG+'Umbreon-200x200.webp',  tag:'Hot', stock:'In Stock' },
      { id:'ac-db',   name:'Deck Box (100ct)',            price:'Rp 145,000', change:'+0.5%', img:IMG+'starry crystals.webp',  tag:'',    stock:'In Stock' },
      { id:'ac-pm',   name:'Rubber Playmat',              price:'Rp 220,000', change:'+1.3%', img:IMG+'30 year.jpg',           tag:'',    stock:'In Stock' },
      { id:'ac-tl',   name:'Top Loaders (25pk)',          price:'Rp 90,000',  change:'+0.3%', img:IMG+'30 year 2.jpg',         tag:'',    stock:'In Stock' },
      { id:'ac-stnd', name:'Premium Card Stands',         price:'Rp 75,000',  change:'+1.0%', img:IMG+'pikachu_illustrator.jpg', tag:'New', stock:'In Stock' },
    ],
  },
  'toys-merch': {
    title: 'Toys & Merch', group: 'merch', comingSoon: true,
    tagline: 'Plushes, figures, apparel.',
    hero: IMG + 'Umbreon-200x200.webp',
    items: [
      { id:'tm-pplush', name:'Pikachu Plush 12"',        price:'Rp 350,000',   change:'+1.6%', img:IMG+'pikachu_illustrator.jpg',     tag:'',      stock:'In Stock' },
      { id:'tm-ufig',   name:'Umbreon Figure Collector', price:'Rp 680,000',   change:'+3.2%', img:IMG+'Umbreon-200x200.webp',        tag:'Hot',   stock:'Low Stock' },
      { id:'tm-eplush', name:'Espeon Plush 8"',          price:'Rp 280,000',   change:'+1.0%', img:IMG+'Espeon-200x200.webp',         tag:'',      stock:'In Stock' },
      { id:'tm-pins',   name:'25th Anniversary Pin Set', price:'Rp 420,000',   change:'+2.4%', img:IMG+'celebrations_25th_booster.jpg', tag:'',    stock:'In Stock' },
      { id:'tm-stat',   name:'Charizard Statue',         price:'Rp 1,890,000', change:'+5.1%', img:IMG+'mega_charizard_x_ex_sir.jpg', tag:'Grail', stock:'Low Stock' },
      { id:'tm-hood',   name:'Trainer Hoodie',           price:'Rp 590,000',   change:'+0.8%', img:IMG+'30 year 3.png',               tag:'New',   stock:'In Stock' },
    ],
  },
};

// ---------- Raw Singles ----------
const SINGLES = [
  { id:'s-char-holo',  name:'Charizard Base Set Holo', set:'Base Set',   rarity:'Holo Rare',     condition:'NM',    price:'Rp 4,200,000', change:'+3.2%', img:IMG+'charizard_1st_ed_shadowless.jpg', stock:'In Stock' },
  { id:'s-lugia-neo',  name:'Lugia Neo Genesis Holo',  set:'Neo Genesis',rarity:'Holo Rare',     condition:'NM',    price:'Rp 3,400,000', change:'+2.1%', img:IMG+'lugia_1st_ed.png',                stock:'In Stock' },
  { id:'s-mega-char',  name:'Mega Charizard X ex SIR', set:'Obsidian Flames', rarity:'SIR',      condition:'NM/M',  price:'Rp 2,950,000', change:'+5.4%', img:IMG+'mega_charizard_x_ex_sir.jpg',     stock:'In Stock' },
  { id:'s-tera-arc',   name:'Tera Arcanine ex SAR',    set:'Wild Force', rarity:'SAR',           condition:'NM',    price:'Rp 1,450,000', change:'+8.3%', img:IMG+'Tera-Arcanine-ex-China-143x200.webp', stock:'In Stock' },
  { id:'s-rika',       name:'Rika SAR',                set:'Paradox Rift', rarity:'SAR',         condition:'NM/M',  price:'Rp 1,890,000', change:'+9.2%', img:IMG+'Rika-China-143x200.webp',         stock:'Low Stock' },
  { id:'s-gholdengo',  name:'Gholdengo ex SIR',        set:'Paradox Rift', rarity:'SIR',         condition:'NM',    price:'Rp 680,000',   change:'-2.2%', img:IMG+'Gholdengo-China-143x200.jpg',     stock:'In Stock' },
  { id:'s-lisia',      name:'Lisia\'s Appeal SAR',     set:'Paradox Rift', rarity:'SAR',         condition:'NM',    price:'Rp 2,100,000', change:'+5.7%', img:IMG+'Lisias-Appeal-Chinese.jpg',       stock:'In Stock' },
  { id:'s-umb-vmax',   name:'Umbreon VMAX Alt Art',    set:'Evolving Skies', rarity:'Alt Art',   condition:'NM',    price:'Rp 18,500,000',change:'+2.4%', img:IMG+'Umbreon-200x200.webp',            stock:'Low Stock' },
  { id:'s-esp-vmax',   name:'Espeon VMAX Alt Art',     set:'Evolving Skies', rarity:'Alt Art',   condition:'NM',    price:'Rp 14,200,000',change:'+1.8%', img:IMG+'Espeon-200x200.webp',             stock:'In Stock' },
  { id:'s-pika-illus', name:'Pikachu Illustrator',     set:'Promo',      rarity:'Trophy',        condition:'NM',    price:'Rp 12,450,000,000', change:'+1.2%', img:IMG+'pikachu_illustrator.jpg',    stock:'Inquire' },
  { id:'s-kangas',     name:'Kangaskhan Trophy',       set:'Promo',      rarity:'Trophy',        condition:'EX',    price:'Rp 156,000,000', change:'+2.9%', img:IMG+'kangaskhan_trophy.jpg',        stock:'Inquire' },
  { id:'s-goldstar',   name:'Gold Star Charizard',     set:'EX Dragon Frontiers', rarity:'Gold Star', condition:'NM', price:'Rp 94,500,000', change:'+3.8%', img:IMG+'goldstar_charizard.jpg',      stock:'Low Stock' },
];

// ---------- Graded Slabs ----------
const SLABS = [
  { id:'sl-pika-psa7',  name:'Pikachu Illustrator', company:'PSA',  grade:7,  pop:'41',  set:'Promo',          price:'Rp 12,450,000,000', change:'+1.2%', img:IMG+'pikachu_illustrator.jpg',            stock:'Inquire' },
  { id:'sl-char-psa9',  name:'1st Ed Shadowless Charizard', company:'PSA', grade:9, pop:'254', set:'Base Set', price:'Rp 385,000,000',    change:'-1.5%', img:IMG+'charizard_1st_ed_shadowless.jpg',    stock:'Low Stock' },
  { id:'sl-gs-bgs9',    name:'Gold Star Charizard', company:'BGS',  grade:9,  pop:'88',  set:'Dragon Frontiers', price:'Rp 94,500,000',    change:'+3.8%', img:IMG+'goldstar_charizard.jpg',            stock:'In Stock' },
  { id:'sl-lugia-psa9', name:'1st Ed Lugia',        company:'PSA',  grade:9,  pop:'412', set:'Neo Genesis',     price:'Rp 62,000,000',    change:'+4.1%', img:IMG+'lugia_1st_ed.png',                  stock:'In Stock' },
  { id:'sl-kanga-psa8', name:'Kangaskhan Trophy',   company:'PSA',  grade:8,  pop:'17',  set:'Promo',           price:'Rp 156,000,000',   change:'+2.9%', img:IMG+'kangaskhan_trophy.jpg',             stock:'Low Stock' },
  { id:'sl-mega-cgc95', name:'Mega Charizard X ex SIR', company:'CGC', grade:'9.5', pop:'124', set:'Obsidian Flames', price:'Rp 2,950,000', change:'+5.4%', img:IMG+'mega_charizard_x_ex_sir.jpg',    stock:'In Stock' },
  { id:'sl-tera-psa10', name:'Tera Arcanine ex SAR', company:'PSA', grade:10, pop:'318',  set:'Wild Force',      price:'Rp 2,450,000',    change:'+8.3%', img:IMG+'Tera-Arcanine-ex-China-143x200.webp', stock:'In Stock' },
  { id:'sl-rika-cgc10', name:'Rika SAR',            company:'CGC',  grade:10, pop:'92',  set:'Paradox Rift',    price:'Rp 3,290,000',    change:'+9.2%', img:IMG+'Rika-China-143x200.webp',           stock:'Low Stock' },
  { id:'sl-ghol-ace10', name:'Gholdengo ex SIR',    company:'Ace',  grade:10, pop:'201', set:'Paradox Rift',    price:'Rp 980,000',      change:'-2.2%', img:IMG+'Gholdengo-China-143x200.jpg',       stock:'In Stock' },
  { id:'sl-lisia-psa10',name:'Lisia\'s Appeal SAR', company:'PSA',  grade:10, pop:'176', set:'Paradox Rift',    price:'Rp 3,400,000',    change:'+5.7%', img:IMG+'Lisias-Appeal-Chinese.jpg',         stock:'In Stock' },
  { id:'sl-umb-bgs95',  name:'Umbreon VMAX Alt Art',company:'BGS',  grade:'9.5', pop:'310', set:'Evolving Skies', price:'Rp 24,500,000', change:'+2.4%', img:IMG+'Umbreon-200x200.webp',             stock:'Low Stock' },
  { id:'sl-esp-psa10',  name:'Espeon VMAX Alt Art', company:'PSA',  grade:10, pop:'442', set:'Evolving Skies',  price:'Rp 19,800,000',   change:'+1.8%', img:IMG+'Espeon-200x200.webp',              stock:'In Stock' },
];

// ---------- Helpers ----------
function findById(id) {
  for (const slug in PRODUCTS) {
    const hit = PRODUCTS[slug].items.find(i => i.id === id);
    if (hit) return { ...hit, category: slug, type: 'sealed', comingSoon: hit.comingSoon || !!PRODUCTS[slug].comingSoon };
  }
  const single = SINGLES.find(i => i.id === id);
  if (single) return { ...single, type: 'single' };
  const slab = SLABS.find(i => i.id === id);
  if (slab) return { ...slab, type: 'slab' };
  return null;
}

const ALL_ITEMS = [
  ...Object.values(PRODUCTS).flatMap(c => c.items.map(i => ({...i, type:'sealed', category: c.title, comingSoon: i.comingSoon || !!c.comingSoon}))),
  ...SINGLES.map(i => ({...i, type:'single', category: 'Raw Singles'})),
  ...SLABS.map(i => ({...i, type:'slab', category: 'Graded Slab'})),
];

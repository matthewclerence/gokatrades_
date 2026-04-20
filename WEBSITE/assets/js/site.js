// ================= GokaTrades — Site JS =================

if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        colors: { ink: '#111111', cream: '#F7F7F7', ash: '#E8E8E8', mute: '#A0A0A0', flame: '#FF4444' },
        fontFamily: { sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'] },
      }
    }
  };
}

// ============= Shared Chrome (Announce + Nav + Mega + Footer) =============
const ANNOUNCE_HTML = `
<div class="announce">
  Sekarang tersedia: <strong>First Partner Illustration Collection</strong> · Kategori sealed lainnya segera hadir
  <a href="category.html?cat=first-illustration-partner">Belanja sekarang →</a>
</div>`;

const NAV_HTML = (active='') => `
<header class="fixed left-0 right-0 z-50 glass" style="top:33px;">
  <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="index.html" class="flex items-center gap-3 group">
      <span class="font-bold tracking-wider text-lg uppercase">Goka<span class="text-flame">Trades</span></span>
    </a>
    <nav class="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider text-white/80">
      <a href="index.html" class="nav-link hover:text-flame transition ${active==='home'?'active':''}">Beranda</a>
      <a href="sealed.html" class="nav-link hover:text-flame transition has-mega ${active==='sealed'?'active':''}" data-mega="sealed">Sealed</a>
      <a href="singles.html" class="nav-link hover:text-flame transition ${active==='singles'?'active':''}">Singles</a>
      <a href="slabs.html" class="nav-link hover:text-flame transition ${active==='slabs'?'active':''}">Slabs</a>
      <a href="index.html#categories" class="nav-link hover:text-flame transition">Jelajahi Semua</a>
      <a href="index.html#about" class="nav-link hover:text-flame transition">Tentang</a>
    </nav>
    <div class="flex items-center gap-2">
      <button id="open-search" class="icon-btn" aria-label="Cari">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
      <button id="open-cart" class="icon-btn" aria-label="Keranjang">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span class="cart-count" id="cart-count">0</span>
      </button>
    </div>
  </div>
</header>

<!-- Mega menu: Sealed -->
<div class="mega" id="mega-sealed" data-mega-panel="sealed">
  <div class="mega-grid">
    <div>
      <h4>Tersedia Sekarang</h4>
      <ul>
        <li><a href="category.html?cat=first-illustration-partner">First Partner Illustration Collection</a></li>
      </ul>
      <h4 style="margin-top:22px;">Segera Hadir</h4>
      <ul>
        <li><a class="soon-link">Booster Boxes</a></li>
        <li><a class="soon-link">Elite Trainer Boxes</a></li>
        <li><a class="soon-link">Collection Boxes</a></li>
      </ul>
    </div>
    <div>
      <h4>Segera Hadir</h4>
      <ul>
        <li><a class="soon-link">Booster Packs</a></li>
        <li><a class="soon-link">Gift Tins</a></li>
        <li><a class="soon-link">Theme Decks</a></li>
        <li><a class="soon-link">Repacks</a></li>
      </ul>
    </div>
    <div>
      <h4>Segera Hadir</h4>
      <ul>
        <li><a class="soon-link">Japanese Products</a></li>
        <li><a class="soon-link">Accessories</a></li>
        <li><a class="soon-link">Toys & Merch</a></li>
        <li><a href="sealed.html">Lihat semua sealed →</a></li>
      </ul>
    </div>
    <div class="mega-feat">
      <img src="assets/images/first_partner_illustration_collection.jpg" alt="" />
      <div class="text-xs uppercase tracking-[0.2em] text-flame mb-1">Tersedia Sekarang</div>
      <div class="font-bold uppercase">First Partner Illustration Collection</div>
      <div class="text-mute text-xs mt-1">Sealed, terverifikasi, dikirim sekarang</div>
      <a href="category.html?cat=first-illustration-partner" class="inline-block mt-3 text-xs uppercase tracking-widest text-flame">Belanja →</a>
    </div>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer class="border-t border-white/10 py-14 px-6 mt-20">
  <div class="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
    <div class="md:col-span-2">
      <div class="flex items-center gap-3 mb-4">
        <img src="assets/brand/goka_clean_profile.png" class="w-10 h-10 rounded-full" />
        <span class="font-bold uppercase tracking-wider text-lg">Goka<span class="text-flame">Trades</span></span>
      </div>
      <p class="text-mute text-sm leading-relaxed max-w-xs">Sumber Pokémon TCG terpercaya di Indonesia. Impor AS terverifikasi, graded slabs, dan harga wajar — dikirim ke tangan Anda.</p>
      <div class="flex gap-3 mt-5">
        <a href="#" class="icon-btn border border-white/10">IG</a>
        <a href="#" class="icon-btn border border-white/10">TK</a>
        <a href="#" class="icon-btn border border-white/10">YT</a>
      </div>
    </div>
    <div>
      <div class="text-xs uppercase tracking-widest text-white mb-4">Belanja</div>
      <ul class="space-y-2 text-mute text-xs">
        <li><a href="category.html?cat=first-illustration-partner" class="hover:text-flame">First Partner Illustration Collection</a></li>
        <li><a href="singles.html" class="hover:text-flame">Singles</a></li>
        <li><a href="slabs.html" class="hover:text-flame">Graded Slabs</a></li>
        <li><a href="sealed.html" class="hover:text-flame">Semua Sealed</a></li>
      </ul>
    </div>
    <div>
      <div class="text-xs uppercase tracking-widest text-white mb-4">Bantuan</div>
      <ul class="space-y-2 text-mute text-xs">
        <li><a href="#" class="hover:text-flame">Keaslian</a></li>
        <li><a href="#" class="hover:text-flame">Pengiriman</a></li>
        <li><a href="#" class="hover:text-flame">Pengembalian</a></li>
        <li><a href="#" class="hover:text-flame">Kontak</a></li>
      </ul>
    </div>
    <div>
      <div class="text-xs uppercase tracking-widest text-white mb-4">Newsletter</div>
      <p class="text-mute text-xs mb-3">Notifikasi drop + restock</p>
      <form onsubmit="event.preventDefault(); showToast('Berlangganan ✓'); this.reset();" class="flex gap-2">
        <input type="email" placeholder="email" class="field text-xs" style="padding:10px 14px" />
        <button class="px-4 py-2 rounded-full bg-flame text-white text-xs uppercase tracking-widest font-bold">Gabung</button>
      </form>
    </div>
  </div>
  <div class="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-mute">
    <div>© 2026 GokaTrades · Jakarta, Indonesia</div>
    <div class="flex gap-5"><span>Visa</span><span>Midtrans</span><span>GoPay</span><span>BCA</span></div>
  </div>
</footer>`;

function injectChrome(active) {
  const announceSlot = document.getElementById('announce-slot');
  if (announceSlot) announceSlot.outerHTML = ANNOUNCE_HTML;
  const navSlot = document.getElementById('nav-slot');
  if (navSlot) navSlot.outerHTML = NAV_HTML(active);
  const footSlot = document.getElementById('footer-slot');
  if (footSlot) footSlot.outerHTML = FOOTER_HTML;
}

// ============= Cart =============
const CART_KEY = 'goka_cart';
function getCart() { try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch(e) { return []; } }
function saveCart(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCartCount(); }
function addToCart(id, qty=1) {
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart(cart);
  showToast('Ditambahkan ke keranjang');
  renderCartDrawer();
}
function removeFromCart(id) { saveCart(getCart().filter(i => i.id !== id)); renderCartDrawer(); }
function renderCartCount() {
  const count = getCart().reduce((s,i)=>s+i.qty, 0);
  const el = document.getElementById('cart-count');
  if (el) { el.textContent = count; el.style.display = count ? 'grid' : 'none'; }
}
function renderCartDrawer() {
  const body = document.getElementById('cart-body');
  const foot = document.getElementById('cart-foot');
  if (!body || typeof findById !== 'function') return;
  const cart = getCart();
  if (!cart.length) {
    body.innerHTML = `<div class="text-center py-16"><div class="text-5xl mb-4">🛒</div><div class="text-mute text-sm uppercase tracking-widest">Keranjang Anda kosong</div><a href="sealed.html" class="inline-block mt-6 text-xs uppercase tracking-widest text-flame">Mulai belanja →</a></div>`;
    foot.innerHTML = '';
    return;
  }
  let totalStr = '';
  body.innerHTML = cart.map(ci => {
    const p = findById(ci.id);
    if (!p) return '';
    return `<div class="cart-item">
      <img src="${p.img}" alt="">
      <div>
        <div class="font-bold text-sm leading-tight">${p.name}</div>
        <div class="text-flame text-sm mt-1">${p.price}</div>
        <div class="text-xs text-mute mt-1">Qty ${ci.qty}</div>
      </div>
      <button onclick="removeFromCart('${ci.id}')" class="text-mute hover:text-flame text-lg">×</button>
    </div>`;
  }).join('');
  foot.innerHTML = `
    <div class="flex justify-between mb-4">
      <span class="text-xs uppercase tracking-widest text-mute">Subtotal</span>
      <span class="font-bold">${cart.length} produk</span>
    </div>
    <button class="w-full py-4 rounded-full bg-flame text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-ink transition">Checkout →</button>
    <div class="text-center text-[10px] text-mute mt-3 uppercase tracking-widest">Pembayaran aman · Midtrans · BCA</div>
  `;
}

// ============= Toast =============
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._tm); t._tm = setTimeout(() => t.classList.remove('show'), 2200);
}

// ============= Cart drawer + Search overlay =============
function createCartDrawer() {
  if (document.getElementById('cart-overlay')) return;
  const html = `
    <div class="cart-overlay" id="cart-overlay"></div>
    <aside class="cart-drawer" id="cart-drawer" aria-label="Keranjang belanja">
      <div class="cart-head">
        <div class="font-bold uppercase tracking-widest text-sm">Keranjang Anda</div>
        <button id="close-cart" class="icon-btn text-2xl">×</button>
      </div>
      <div class="cart-items" id="cart-body"></div>
      <div id="cart-foot" class="cart-foot"></div>
    </aside>`;
  document.body.insertAdjacentHTML('beforeend', html);
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
  document.getElementById('close-cart').addEventListener('click', closeCart);
}
function openCart() { renderCartDrawer(); document.getElementById('cart-overlay').classList.add('open'); document.getElementById('cart-drawer').classList.add('open'); document.body.classList.add('no-scroll'); }
function closeCart() { document.getElementById('cart-overlay').classList.remove('open'); document.getElementById('cart-drawer').classList.remove('open'); document.body.classList.remove('no-scroll'); }

function createSearchOverlay() {
  if (document.getElementById('search-overlay')) return;
  const html = `
    <div class="search-overlay" id="search-overlay">
      <div class="w-full max-w-2xl px-6">
        <div class="flex items-center gap-4 border-b-2 border-white/10 pb-2 focus-within:border-flame">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mute"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input class="search-input" id="search-input" placeholder="Cari kartu Pokémon, set, slabs…" autofocus />
          <button id="close-search" class="icon-btn text-2xl">×</button>
        </div>
        <div class="search-results" id="search-results"></div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q || typeof ALL_ITEMS === 'undefined') { results.innerHTML = ''; return; }
    const hits = ALL_ITEMS.filter(i => i.name.toLowerCase().includes(q) || (i.set||'').toLowerCase().includes(q)).slice(0, 8);
    results.innerHTML = hits.map(i => `
      <a href="product.html?id=${i.id}" class="sr-item">
        <img src="${i.img}" alt="" />
        <div>
          <div class="font-bold text-sm">${i.name}</div>
          <div class="text-xs text-mute uppercase tracking-wider mt-1">${i.category}${i.set?' · '+i.set:''}</div>
        </div>
        <div class="text-flame font-bold">${i.price}</div>
      </a>`).join('') || `<div class="text-center text-mute text-sm py-8 uppercase tracking-widest">Tidak ada hasil untuk "${q}"</div>`;
  });
  document.getElementById('close-search').addEventListener('click', closeSearch);
  document.getElementById('search-overlay').addEventListener('click', (e) => { if (e.target.id === 'search-overlay') closeSearch(); });
}
function openSearch() { document.getElementById('search-overlay').classList.add('open'); document.body.classList.add('no-scroll'); setTimeout(() => document.getElementById('search-input').focus(), 300); }
function closeSearch() { document.getElementById('search-overlay').classList.remove('open'); document.body.classList.remove('no-scroll'); }

// ============= Mega menu =============
function wireMegaMenu() {
  let activePanel = null; let hideTm;
  document.querySelectorAll('[data-mega]').forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
      clearTimeout(hideTm);
      if (activePanel) activePanel.classList.remove('open');
      activePanel = document.querySelector(`[data-mega-panel="${trigger.dataset.mega}"]`);
      if (activePanel) activePanel.classList.add('open');
    });
    trigger.addEventListener('mouseleave', () => { hideTm = setTimeout(() => { if (activePanel) activePanel.classList.remove('open'); }, 200); });
  });
  document.querySelectorAll('.mega').forEach(panel => {
    panel.addEventListener('mouseenter', () => clearTimeout(hideTm));
    panel.addEventListener('mouseleave', () => { panel.classList.remove('open'); });
  });
}

// ============= Product card builder =============
function renderProductCard(p, type='sealed') {
  const soon = !!p.comingSoon;
  const grade = (type==='slab') ? `<span class="grade-badge ${(p.company||'').toLowerCase()}">${p.company} ${p.grade}</span>` : '';
  const ribbon = soon ? `<span class="ribbon soon-badge">Segera Hadir</span>` : (p.tag ? `<span class="ribbon">${p.tag}</span>` : '');
  const stockClass = (p.stock === 'In Stock' || p.stock === 'Tersedia') ? 'stock-in' : (p.stock === 'Low Stock' || p.stock === 'Stok Terbatas') ? 'stock-low' : 'stock-out';
  const meta = type==='single' ? `${p.set} · ${p.rarity} · ${p.condition}` : type==='slab' ? `${p.company} ${p.grade} · Pop ${p.pop}` : (p.category || 'Sealed');
  const imgHref = soon ? 'javascript:void(0)' : `product.html?id=${p.id}`;
  const ctaBtn = soon
    ? `<button onclick="showToast('Kami akan memberitahu saat rilis')" class="text-[10px] uppercase tracking-widest font-bold text-mute hover:text-flame transition">Beritahu saya</button>`
    : `<button onclick="addToCart('${p.id}')" class="text-[10px] uppercase tracking-widest font-bold text-white hover:text-flame transition">+ Tambah</button>`;
  const stockRow = soon
    ? `<span class="stock stock-soon"><span class="stock-dot"></span>Segera Hadir</span>`
    : `<span class="stock ${stockClass}"><span class="stock-dot"></span>${p.stock==='In Stock'?'Tersedia':(p.stock==='Low Stock'?'Stok Terbatas':(p.stock||'Tersedia'))}</span>`;
  return `
    <div class="prod-card relative bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-flame/40 ${soon?'soon':''}" data-reveal>
      <a href="${imgHref}" class="block">
        <div class="shimmer relative aspect-[3/4] overflow-hidden bg-black">
          <img src="${p.img}" class="w-full h-full object-cover ${soon?'soon-img':''}" alt="${p.name}" loading="lazy" />
          ${soon?'<div class="soon-veil"></div>':''}
          ${ribbon}${grade}
          ${soon?'':`<div class="quick-actions">
            <button class="qa-btn" title="Wishlist" onclick="event.preventDefault(); showToast('Ditambahkan ke wishlist');">♥</button>
            <button class="qa-btn" title="Lihat cepat" onclick="event.preventDefault(); location.href='product.html?id=${p.id}';">👁</button>
          </div>`}
        </div>
      </a>
      <div class="p-4">
        <div class="text-[10px] uppercase tracking-widest text-mute">${meta}</div>
        ${soon
          ? `<div class="font-bold text-base mt-1 leading-tight line-clamp-2 text-white/70">${p.name}</div>`
          : `<a href="product.html?id=${p.id}" class="font-bold text-base mt-1 leading-tight block hover:text-flame transition line-clamp-2">${p.name}</a>`}
        <div class="flex items-end justify-between mt-3">
          <span class="text-flame font-bold text-lg">${soon?'—':p.price}</span>
          <span class="text-[10px] ${p.change.startsWith('+') ? 'up' : 'down'}">${soon?'':(p.change.startsWith('+') ? '▲' : '▼')+' '+p.change.replace(/^[+-]/,'')}</span>
        </div>
        <div class="flex items-center justify-between mt-3">
          ${stockRow}
          ${ctaBtn}
        </div>
      </div>
    </div>`;
}

// ============= Category page renderer =============
function renderCategoryPage() {
  const slot = document.getElementById('category-content');
  if (!slot || typeof PRODUCTS === 'undefined') return;
  const slug = new URLSearchParams(location.search).get('cat') || 'booster-boxes';
  const cat = PRODUCTS[slug];
  if (!cat) { slot.innerHTML = `<div class="pt-40 px-6 text-center"><h1 class="text-4xl font-bold uppercase">Kategori tidak ditemukan</h1><a href="index.html" class="mt-6 inline-block text-flame uppercase tracking-widest text-sm">← Beranda</a></div>`; return; }
  document.title = `${cat.title} — GokaTrades`;
  const catSoon = !!cat.comingSoon;
  const items = cat.items.map(p => renderProductCard({...p, comingSoon: p.comingSoon || catSoon}, 'sealed')).join('');
  const sidebar = CATEGORIES.filter(c => c.group==='sealed' || cat.group===c.group).map(c => {
    const soon = PRODUCTS[c.slug]?.comingSoon;
    const badge = soon ? ` <span class="text-[9px] tracking-widest text-mute ml-1">SOON</span>` : '';
    return `
    <a href="category.html?cat=${c.slug}" class="block px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition ${c.slug===slug?'bg-flame text-white font-bold':(soon?'text-mute/70 hover:text-white hover:bg-white/5':'text-mute hover:text-white hover:bg-white/5')}">${c.label}${badge}</a>
  `;
  }).join('');
  slot.innerHTML = `
    <section class="subhero grain">
      <div class="subhero-bg anim" style="background-image:url('${cat.hero}')"></div>
      <div class="relative z-10 max-w-7xl mx-auto w-full">
        <div class="text-xs uppercase tracking-[0.3em] text-mute mb-3" data-reveal>
          <a href="index.html" class="hover:text-flame">Beranda</a> <span class="mx-2">/</span>
          <a href="sealed.html" class="hover:text-flame">Sealed</a> <span class="mx-2">/</span>
          <span class="text-flame">${cat.title}</span>
        </div>
        <h1 class="font-bold text-5xl md:text-7xl uppercase leading-[0.95]" data-reveal>${cat.title}</h1>
        <p class="text-mute mt-4 max-w-xl" data-reveal>${cat.tagline}</p>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[240px_1fr] gap-10">
      <aside class="md:sticky md:top-28 md:self-start">
        <div class="text-xs uppercase tracking-[0.3em] text-flame mb-4" data-reveal>Kategori Sealed</div>
        <nav class="space-y-1">${sidebar}</nav>
        <a href="sealed.html" class="inline-block mt-6 text-xs uppercase tracking-widest text-mute hover:text-flame">← Semua Sealed</a>
      </aside>
      <div>
        <div class="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div class="text-sm text-mute"><span class="text-white font-bold">${cat.items.length}</span> produk</div>
          <div class="flex gap-2 flex-wrap">
            <span class="chip active" data-filter="all">Semua</span>
            <span class="chip" data-filter="Hot">Hot</span>
            <span class="chip" data-filter="New">Baru</span>
            <span class="chip" data-filter="Grail">Grail</span>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="category-grid">${items}</div>
      </div>
    </section>`;
}

// ============= Singles page =============
function renderSinglesPage() {
  const slot = document.getElementById('singles-content');
  if (!slot || typeof SINGLES === 'undefined') return;
  document.title = 'Singles — GokaTrades';
  const sets = [...new Set(SINGLES.map(s => s.set))];
  const items = SINGLES.map(p => renderProductCard(p, 'single')).join('');
  slot.innerHTML = `
    <section class="subhero grain">
      <div class="subhero-bg anim" style="background-image:url('${ROUTES.singles.hero}')"></div>
      <div class="relative z-10 max-w-7xl mx-auto w-full">
        <div class="text-xs uppercase tracking-[0.3em] text-mute mb-3" data-reveal>
          <a href="index.html" class="hover:text-flame">Beranda</a> <span class="mx-2">/</span> <span class="text-flame">Singles</span>
        </div>
        <h1 class="font-bold text-5xl md:text-7xl uppercase leading-[0.95]" data-reveal>${ROUTES.singles.title}</h1>
        <p class="text-mute mt-4 max-w-xl" data-reveal>${ROUTES.singles.tagline}</p>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="flex items-end justify-between mb-8 flex-wrap gap-4" data-reveal>
        <div class="text-sm text-mute"><span class="text-white font-bold">${SINGLES.length}</span> singles tersedia</div>
        <div class="flex gap-2 flex-wrap">
          <span class="chip active" data-filter="all">Semua Set</span>
          ${sets.map(s => `<span class="chip" data-filter="${s}">${s}</span>`).join('')}
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">${items}</div>
    </section>`;
}

// ============= Slabs page =============
function renderSlabsPage() {
  const slot = document.getElementById('slabs-content');
  if (!slot || typeof SLABS === 'undefined') return;
  document.title = 'Graded Slabs — GokaTrades';
  const companies = ['all', ...new Set(SLABS.map(s => s.company))];
  const items = SLABS.map(p => renderProductCard(p, 'slab')).join('');
  slot.innerHTML = `
    <section class="subhero grain">
      <div class="subhero-bg anim" style="background-image:url('${ROUTES.slabs.hero}')"></div>
      <div class="relative z-10 max-w-7xl mx-auto w-full">
        <div class="text-xs uppercase tracking-[0.3em] text-mute mb-3" data-reveal>
          <a href="index.html" class="hover:text-flame">Beranda</a> <span class="mx-2">/</span> <span class="text-flame">Graded Slabs</span>
        </div>
        <h1 class="font-bold text-5xl md:text-7xl uppercase leading-[0.95]" data-reveal>${ROUTES.slabs.title}</h1>
        <p class="text-mute mt-4 max-w-xl" data-reveal>${ROUTES.slabs.tagline}</p>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="flex items-center justify-center gap-3 mb-10 flex-wrap" data-reveal>
        ${companies.map((c,i) => `<span class="grade-tab ${i===0?'active':''}" data-gc="${c}">${c==='all'?'Semua Grader':c}</span>`).join('')}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="slabs-grid">${items}</div>
      <div class="mt-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div class="text-center p-6 rounded-2xl border border-white/10" data-reveal><div class="text-4xl font-bold text-flame">${SLABS.filter(s=>s.company==='PSA').length}</div><div class="text-xs uppercase tracking-widest text-mute mt-2">PSA Graded</div></div>
        <div class="text-center p-6 rounded-2xl border border-white/10" data-reveal><div class="text-4xl font-bold text-flame">${SLABS.filter(s=>s.company==='BGS').length}</div><div class="text-xs uppercase tracking-widest text-mute mt-2">BGS Graded</div></div>
        <div class="text-center p-6 rounded-2xl border border-white/10" data-reveal><div class="text-4xl font-bold text-flame">${SLABS.filter(s=>s.company==='CGC').length}</div><div class="text-xs uppercase tracking-widest text-mute mt-2">CGC Graded</div></div>
        <div class="text-center p-6 rounded-2xl border border-white/10" data-reveal><div class="text-4xl font-bold text-flame">${SLABS.filter(s=>s.company==='Ace').length}</div><div class="text-xs uppercase tracking-widest text-mute mt-2">Ace Graded</div></div>
      </div>
    </section>`;

  setTimeout(() => {
    document.querySelectorAll('[data-gc]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-gc]').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        const gc = btn.dataset.gc;
        const cards = document.querySelectorAll('#slabs-grid .prod-card');
        cards.forEach(card => {
          const badge = card.querySelector('.grade-badge');
          const company = badge ? badge.classList[1] : '';
          const match = gc === 'all' || company === gc.toLowerCase();
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }, 50);
}

// ============= Sealed hub page =============
function renderSealedPage() {
  const slot = document.getElementById('sealed-content');
  if (!slot || typeof PRODUCTS === 'undefined') return;
  document.title = 'Produk Sealed — GokaTrades';
  const cats = ROUTES.sealed.cats.map(slug => {
    const c = PRODUCTS[slug];
    const soon = !!c.comingSoon;
    const tagLine = soon ? 'Segera hadir' : `${c.items.length} produk`;
    return `
      <a href="category.html?cat=${slug}" class="cat-tile relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group ${soon?'soon':''}" data-reveal>
        <img src="${c.hero}" class="cat-img absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-75 transition ${soon?'soon-img':''}" />
        <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"></div>
        ${soon?'<div class="soon-veil"></div><span class="ribbon soon-badge" style="left:12px;top:12px;">Segera Hadir</span>':''}
        <div class="absolute bottom-0 left-0 p-5 z-10">
          <div class="text-[10px] uppercase tracking-widest ${soon?'text-mute':'text-flame'} mb-1">${tagLine}</div>
          <div class="font-bold text-xl uppercase ${soon?'text-white/80':''}">${c.title}</div>
          <div class="text-[10px] text-mute mt-1">${c.tagline}</div>
        </div>
      </a>`;
  }).join('');
  slot.innerHTML = `
    <section class="subhero grain">
      <div class="subhero-bg anim" style="background-image:url('${ROUTES.sealed.hero}')"></div>
      <div class="relative z-10 max-w-7xl mx-auto w-full">
        <div class="text-xs uppercase tracking-[0.3em] text-mute mb-3" data-reveal>
          <a href="index.html" class="hover:text-flame">Beranda</a> <span class="mx-2">/</span> <span class="text-flame">Produk Sealed</span>
        </div>
        <h1 class="font-bold text-5xl md:text-7xl uppercase leading-[0.95]" data-reveal>${ROUTES.sealed.title}</h1>
        <p class="text-mute mt-4 max-w-xl" data-reveal>${ROUTES.sealed.tagline}</p>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">${cats}</div>
    </section>`;
}

// ============= Product Detail page =============
function renderProductDetailPage() {
  const slot = document.getElementById('product-content');
  if (!slot || typeof findById !== 'function') return;
  const id = new URLSearchParams(location.search).get('id');
  const p = findById(id);
  if (!p) { slot.innerHTML = `<div class="pt-40 text-center"><h1 class="text-4xl font-bold uppercase">Produk tidak ditemukan</h1><a href="index.html" class="mt-6 inline-block text-flame">← Beranda</a></div>`; return; }
  document.title = `${p.name} — GokaTrades`;
  const gallery = [p.img, p.img, p.img, p.img]; // placeholder repetition
  const related = (p.type === 'sealed' ? (PRODUCTS[p.category] ? PRODUCTS[p.category].items : []) : p.type === 'single' ? SINGLES : SLABS).filter(i => i.id !== p.id).slice(0, 4);
  const stockClass = p.stock === 'In Stock' ? 'stock-in' : p.stock === 'Low Stock' ? 'stock-low' : 'stock-out';

  const specRows = p.type === 'slab' ? [
    ['Grading Company', p.company], ['Grade', p.grade], ['Populasi', p.pop], ['Set', p.set]
  ] : p.type === 'single' ? [
    ['Set', p.set], ['Rarity', p.rarity], ['Kondisi', p.condition], ['Stok', p.stock]
  ] : [
    ['Kategori', p.category || 'Sealed'], ['Kondisi', 'Factory Sealed'], ['Stok', p.stock], ['Asal', 'Impor AS']
  ];

  slot.innerHTML = `
    <section class="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div class="text-xs uppercase tracking-[0.3em] text-mute mb-6" data-reveal>
        <a href="index.html" class="hover:text-flame">Beranda</a> <span class="mx-2">/</span>
        <a href="${p.type==='slab'?'slabs.html':p.type==='single'?'singles.html':'sealed.html'}" class="hover:text-flame">${p.type==='slab'?'Slabs':p.type==='single'?'Singles':'Sealed'}</a>
        <span class="mx-2">/</span> <span class="text-flame">${p.name}</span>
      </div>

      <div class="grid md:grid-cols-2 gap-10">
        <div class="pd-gallery" data-reveal>
          <div class="pd-main"><img id="pd-main-img" src="${gallery[0]}" alt="${p.name}" /></div>
          <div class="pd-thumbs">
            ${gallery.map((g,i) => `<div class="pd-thumb ${i===0?'active':''}" data-src="${g}"><img src="${g}" alt="" /></div>`).join('')}
          </div>
        </div>
        <div data-reveal>
          <div class="text-xs uppercase tracking-widest text-flame mb-3">${p.type.toUpperCase()}${p.type==='slab'?` · ${p.company} ${p.grade}`:''}</div>
          <h1 class="font-bold text-3xl md:text-5xl uppercase leading-[0.95]">${p.name}</h1>
          <div class="flex items-center gap-4 mt-4">
            <span class="text-flame font-bold text-4xl">${p.price}</span>
            <span class="text-sm ${p.change.startsWith('+')?'up':'down'}">${p.change.startsWith('+')?'▲':'▼'} ${p.change.replace(/^[+-]/,'')} 30d</span>
          </div>
          <div class="mt-4"><span class="stock ${stockClass}"><span class="stock-dot"></span>${p.stock||'In Stock'}</span></div>

          <div class="pd-spec">
            ${specRows.map(([l,v]) => `<div class="pd-spec-item"><div class="lbl">${l}</div><div class="val">${v}</div></div>`).join('')}
          </div>

          <div class="mt-8 flex gap-3 items-center">
            <div class="qty-stepper">
              <button data-qty="-1">−</button>
              <input id="qty" value="1" />
              <button data-qty="+1">+</button>
            </div>
            <button id="pd-add" class="flex-1 pulse-red px-6 py-4 rounded-full bg-flame text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-ink transition">Tambah ke Keranjang</button>
          </div>
          <button class="mt-3 w-full py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-flame hover:text-flame transition">♥ Wishlist</button>

          <div class="mt-8 grid grid-cols-3 gap-3 text-center text-[10px] uppercase tracking-widest text-mute">
            <div class="p-3 rounded-xl border border-white/10">✦<div class="mt-1 text-white">Terverifikasi</div></div>
            <div class="p-3 rounded-xl border border-white/10">★<div class="mt-1 text-white">Pengiriman Cepat</div></div>
            <div class="p-3 rounded-xl border border-white/10">♦<div class="mt-1 text-white">Diasuransikan</div></div>
          </div>

          <div class="mt-10 border-t border-white/10 pt-6">
            <div class="flex gap-6 border-b border-white/10">
              <button class="tab-btn active" data-tab="desc">Deskripsi</button>
              <button class="tab-btn" data-tab="ship">Pengiriman</button>
              <button class="tab-btn" data-tab="auth">Keaslian</button>
            </div>
            <div class="py-5">
              <div class="tab-panel active" data-panel="desc">
                <p class="text-mute text-sm leading-relaxed">${p.type==='sealed' ? 'Produk factory-sealed impor langsung dari distributor AS terverifikasi. Kemasan utuh sejak keluar pabrik.' : p.type==='single' ? `Kartu raw single kondisi Near Mint dari ${p.set}. Diperiksa langsung untuk centering dan edge wear sebelum dikirim.` : `Slab ${p.company} grade ${p.grade} dengan populasi ${p.pop}. Nomor sertifikat tersedia saat diminta.`}</p>
              </div>
              <div class="tab-panel" data-panel="ship"><p class="text-mute text-sm leading-relaxed">Gratis ongkir seluruh Indonesia untuk order di atas Rp 1,500,000. Estimasi 2-4 hari kerja. Diasuransikan dan dilacak.</p></div>
              <div class="tab-panel" data-panel="auth"><p class="text-mute text-sm leading-relaxed">Setiap produk melewati 12-point authenticity check. Chain of custody terdokumentasi dari pembelian di AS sampai pengiriman.</p></div>
            </div>
          </div>
        </div>
      </div>

      ${related.length ? `
      <div class="mt-24">
        <h2 class="font-bold text-3xl md:text-4xl uppercase mb-8" data-reveal>Mungkin Anda juga suka</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">${related.map(r => renderProductCard(r, p.type)).join('')}</div>
      </div>` : ''}
    </section>
  `;

  // wire tabs, qty, add to cart, gallery
  setTimeout(() => {
    document.querySelectorAll('.pd-thumb').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.pd-thumb').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        const img = document.getElementById('pd-main-img');
        img.style.opacity = '0';
        setTimeout(() => { img.src = t.dataset.src; img.style.opacity = '1'; }, 200);
      });
    });
    document.querySelectorAll('[data-qty]').forEach(b => b.addEventListener('click', () => {
      const inp = document.getElementById('qty');
      inp.value = Math.max(1, parseInt(inp.value,10) + parseInt(b.dataset.qty,10));
    }));
    document.getElementById('pd-add').addEventListener('click', () => {
      const qty = parseInt(document.getElementById('qty').value,10) || 1;
      addToCart(p.id, qty);
    });
    document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    }));
  }, 50);
}

// ============= Filter chips (generic for category/singles) =============
function wireChips() {
  document.querySelectorAll('.chip[data-filter]').forEach(c => {
    c.addEventListener('click', () => {
      const parent = c.parentElement;
      parent.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      const f = c.dataset.filter;
      const grid = parent.closest('section').querySelector('[id$="-grid"], .grid');
      if (!grid) return;
      grid.querySelectorAll('.prod-card').forEach(card => {
        const tag = card.querySelector('.ribbon')?.textContent?.trim() || '';
        const meta = card.querySelector('.text-mute')?.textContent || '';
        const show = f === 'all' || tag === f || meta.includes(f);
        card.style.transition = 'opacity .4s ease, transform .4s ease';
        if (show) { card.style.display = ''; requestAnimationFrame(() => { card.style.opacity='1'; card.style.transform='translateY(0)'; }); }
        else { card.style.opacity='0'; card.style.transform='translateY(10px)'; setTimeout(() => { card.style.display='none'; }, 400); }
      });
    });
  });
}

// ============= Init =============
document.addEventListener('DOMContentLoaded', () => {
  injectChrome(document.body.dataset.page || '');
  createCartDrawer();
  createSearchOverlay();
  setTimeout(() => {
    wireMegaMenu();
    renderCartCount();
    document.getElementById('open-cart')?.addEventListener('click', openCart);
    document.getElementById('open-search')?.addEventListener('click', openSearch);
  }, 50);

  // Page-specific renderers
  renderCategoryPage();
  renderSinglesPage();
  renderSlabsPage();
  renderSealedPage();
  renderProductDetailPage();

  // Hero slideshow
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let i = 0;
    setInterval(() => { slides[i].classList.remove('active'); i = (i+1) % slides.length; slides[i].classList.add('active'); }, 4500);
  }

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  setTimeout(() => {
    document.querySelectorAll('[data-reveal], .title-ul').forEach((el, idx) => {
      el.style.transitionDelay = (idx % 8 * 60) + 'ms';
      io.observe(el);
    });
  }, 100);

  // Scroll progress
  const bar = document.getElementById('progressBar');
  if (bar) {
    document.addEventListener('scroll', () => {
      const h = document.documentElement;
      bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    });
  }

  // 3D tilt
  setTimeout(() => {
    document.querySelectorAll('.prod-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-10px) rotateX(${-y*8}deg) rotateY(${x*8}deg) scale(1.03)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
    wireChips();
  }, 150);

  // Esc to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCart(); closeSearch(); }
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });
});

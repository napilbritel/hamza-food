/* ═══════════════════════════════════════════════
   HAMZA FOOD — App v2 (Bilingual + Food Images)
   ═══════════════════════════════════════════════ */

// ─── Language System ───
let currentLang = 'ar';

function toggleLang(lang) {
    // If called without arg, toggle between ar/fr
    if (!lang) {
        lang = currentLang === 'ar' ? 'fr' : 'ar';
    }
    currentLang = lang;
    document.body.classList.toggle('lang-fr', lang === 'fr');
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'fr';

    // Update all bilingual elements
    document.querySelectorAll('[data-ar]').forEach(el => {
        if (el.hasAttribute('data-ar-html')) {
            el.innerHTML = lang === 'ar' ? el.getAttribute('data-ar-html') : el.getAttribute('data-fr-html');
        } else {
            el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-fr');
        }
    });

    // Update lang toggle buttons
    document.querySelectorAll('.lang-opt').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-l') === lang);
    });

    // Re-render menu
    renderMenu();
}

// ─── Menu Data ───
const MENU = {
    tacos: {
        ar: 'تاكوس',
        fr: 'Tacos',
        icon: 'fas fa-pepper-hot',
        items: [
            { ar: 'تاكوس بوليه', fr: 'Tacos Poulet', price: [27, 32], img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop' },
            { ar: 'تاكوس بوليه گريي', fr: 'Tacos Poulet Grillé', price: [28, 35], img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=200&h=200&fit=crop' },
            { ar: 'تاكوس شاورما', fr: 'Tacos Chawarma', price: [28, 35], img: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=200&h=200&fit=crop' },
            { ar: 'تاكوس ناگيتس', fr: 'Tacos Nuggets', price: [28, 35], img: 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=200&h=200&fit=crop' },
            { ar: 'تاكوس لحم مفروم', fr: 'Tacos Viande Hachée', price: [30, 36], img: 'https://images.unsplash.com/photo-1624462422803-a3e3791f3dbc?w=200&h=200&fit=crop' },
            { ar: 'تاكوس كوردون بلو', fr: 'Tacos Cordon Bleu', price: [32, 38], img: 'https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=200&h=200&fit=crop' },
            { ar: 'تاكوس ميكست', fr: 'Tacos Mixte', price: [33, 40], img: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=200&h=200&fit=crop' },
            { ar: 'تاكوس بيتزا', fr: 'Tacos Pizza', price: [38, 43], img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=200&h=200&fit=crop', featured: true },
            { ar: 'تاكوس حمزة', fr: 'Tacos Hamza', price: [38, 45], img: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=200&h=200&fit=crop', featured: true }
        ]
    },
    burger: {
        ar: 'برگر',
        fr: 'Burger',
        icon: 'fas fa-hamburger',
        items: [
            { ar: 'برگر سيمبل', fr: 'Burger Simple', price: 23, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop' },
            { ar: 'تشيز برگر', fr: 'Cheeseburger', price: 27, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop' },
            { ar: 'بيگ برگر', fr: 'Big Burger', price: 32, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&h=200&fit=crop', featured: true },
            { ar: 'برگر كينگ', fr: 'Burgerking', price: 38, img: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=200&h=200&fit=crop', featured: true }
        ]
    },
    chawarma: {
        ar: 'شاورما',
        fr: 'Chawarma',
        icon: 'fas fa-drumstick-bite',
        items: [
            { ar: 'شاورما سيمبل', fr: 'Chawarma Simple', price: 25, img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&h=200&fit=crop' },
            { ar: 'شاورما فروماج', fr: 'Chawarma Fromage', price: 27, img: 'https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=200&h=200&fit=crop' },
            { ar: 'شاورما بلاط سوكوب', fr: 'Chawarma Plat Soucoupe', price: 32, img: 'https://images.unsplash.com/photo-1633321702518-7fecdafb94d5?w=200&h=200&fit=crop' },
            { ar: 'شاورما ميكست', fr: 'Chawarma Mixte sur pain', price: 35, img: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=200&h=200&fit=crop' },
            { ar: 'شاورما بلاط ميكست', fr: 'Chawarma Plat Mixte', price: 43, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop', featured: true },
            { ar: 'شاورما دوبل', fr: 'Chawarma Double', price: 45, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop', featured: true }
        ]
    },
    panini: {
        ar: 'بانيني',
        fr: 'Panini',
        icon: 'fas fa-bread-slice',
        items: [
            { ar: 'بانيني هوت دوغ', fr: 'Panini Hot Dog', price: 22, img: 'https://images.unsplash.com/photo-1619740455993-9e612b49640a?w=200&h=200&fit=crop' },
            { ar: 'بانيني طون', fr: 'Panini Thon', price: 23, img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=200&h=200&fit=crop' },
            { ar: 'بانيني داند', fr: 'Panini Dinde', price: 25, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=200&fit=crop' },
            { ar: 'بانيني بوليه گريي', fr: 'Panini Poulet Grillé', price: 25, img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=200&h=200&fit=crop' },
            { ar: 'بانيني لحم مفروم', fr: 'Panini Viande Hachée', price: 26, img: 'https://images.unsplash.com/photo-1554433607-66b5a31b2e97?w=200&h=200&fit=crop' },
            { ar: 'بانيني سوسيس', fr: 'Panini Saucisse', price: 26, img: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=200&h=200&fit=crop' },
            { ar: 'بانيني ميكست', fr: 'Panini Mixte', price: 30, img: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=200&h=200&fit=crop' }
        ]
    },
    sandwich: {
        ar: 'سندويتش',
        fr: 'Sandwich',
        icon: 'fas fa-hotdog',
        items: [
            { ar: 'سندويتش هوت دوغ', fr: 'Sandwich Hot Dog', price: 22, img: 'https://images.unsplash.com/photo-1612392062126-47986823ac3d?w=200&h=200&fit=crop' },
            { ar: 'سندويتش ستراسبورگ', fr: 'Sandwich Strasbourg', price: 22, img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=200&h=200&fit=crop' },
            { ar: 'سندويتش داند', fr: 'Sandwich Dinde', price: 26, img: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=200&h=200&fit=crop' },
            { ar: 'سندويتش بوليه گريي', fr: 'Sandwich Poulet Grillé', price: 28, img: 'https://images.unsplash.com/photo-1554433607-66b5a31b2e97?w=200&h=200&fit=crop' },
            { ar: 'سندويتش سوسيس', fr: 'Sandwich Saucisse', price: 28, img: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=200&h=200&fit=crop' },
            { ar: 'سندويتش لحم مفروم', fr: 'Sandwich Viande Hachée', price: 30, img: 'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=200&h=200&fit=crop' },
            { ar: 'سندويتش كفتة', fr: 'Sandwich Kefta', price: 30, img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&h=200&fit=crop' },
            { ar: 'سندويتش فوا', fr: 'Sandwich Foie', price: 35, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&h=200&fit=crop' },
            { ar: 'سندويتش ميكست', fr: 'Sandwich Mixte', price: 35, img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=200&h=200&fit=crop', featured: true }
        ]
    },
    plats: {
        ar: 'أطباق',
        fr: 'Plats',
        icon: 'fas fa-utensils',
        items: [
            { ar: 'لحم مفروم', fr: 'Viande Hachée', price: 28, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop' },
            { ar: 'داند', fr: 'Dinde', price: 30, img: 'https://images.unsplash.com/photo-1432139509613-5c4255a187fb?w=200&h=200&fit=crop' },
            { ar: 'إمينسي', fr: 'Émincés', price: 32, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop' },
            { ar: 'ناگيتس', fr: 'Nuggets', price: 32, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=200&h=200&fit=crop' },
            { ar: 'كويس', fr: 'Cuisse', price: 35, img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=200&h=200&fit=crop' },
            { ar: 'كوردون بلو', fr: 'Cordon Bleu', price: 38, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=200&h=200&fit=crop', featured: true }
        ]
    },
    tajin: {
        ar: 'طاجين',
        fr: 'Tajin',
        icon: 'fas fa-fire',
        items: [
            { ar: 'طاجين داند', fr: 'Tajin Dinde', price: 28, img: 'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=200&h=200&fit=crop' },
            { ar: 'طاجين سوسيس', fr: 'Tajin Saucisse', price: 30, img: 'https://images.unsplash.com/photo-1547424850-28ac9ac2fa43?w=200&h=200&fit=crop' },
            { ar: 'طاجين لحم مفروم', fr: 'Tajin Viande Hachée', price: 32, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop' },
            { ar: 'طاجين بيل بيل', fr: 'Tajin Pil-Pil', price: 60, img: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=200&h=200&fit=crop', featured: true }
        ]
    },
    omelette: {
        ar: 'أومليت',
        fr: 'Omelette',
        icon: 'fas fa-egg',
        items: [
            { ar: 'أومليت سيمبل', fr: 'Omelette Simple', price: 15, img: 'https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?w=200&h=200&fit=crop' },
            { ar: 'أومليت فروماج', fr: 'Omelette Fromage', price: 17, img: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=200&h=200&fit=crop' },
            { ar: 'أومليت كريفيت', fr: 'Omelette Crevettes', price: 32, img: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=200&h=200&fit=crop', featured: true },
            { ar: 'أومليت شيف', fr: 'Omelette Chef', price: 35, img: 'https://images.unsplash.com/photo-1643640076993-0341e52a8fd7?w=200&h=200&fit=crop', featured: true }
        ]
    },
    kids: {
        ar: 'أطفال',
        fr: 'Kids',
        icon: 'fas fa-child',
        items: [
            { ar: 'هامبرگر + فريت + عصير', fr: 'Hamburger + Frite + Jus', price: 30, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=200&h=200&fit=crop' },
            { ar: 'بيتزا + فريت + عصير', fr: 'Pizza + Frite + Jus', price: 35, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop' }
        ]
    }
};

// ─── Menu Rendering ───
let activeTab = 'all';

function renderMenu() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    const lang = currentLang;
    let html = '';
    let delay = 0;

    Object.entries(MENU).forEach(([key, cat]) => {
        if (activeTab !== 'all' && activeTab !== key) return;

        // Category header when showing all
        if (activeTab === 'all') {
            html += `<div class="menu-cat-header">
                <span class="cat-icon"><i class="${cat.icon}"></i></span>
                <h3>${cat[lang]}</h3>
            </div>`;
        }

        cat.items.forEach(item => {
            const name = item[lang];
            const priceText = Array.isArray(item.price)
                ? `<small>DH</small> ${item.price[0]}/${item.price[1]}`
                : `<small>DH</small> ${item.price}`;
            const featured = item.featured ? ' featured' : '';

            html += `<div class="menu-card${featured}" style="animation-delay:${delay}ms">
                <div class="mc-img"><img src="${item.img}" alt="${name}" loading="lazy"></div>
                <div class="mc-info">
                    <div class="mc-name">${name}</div>
                </div>
                <div class="mc-price">${priceText}</div>
            </div>`;
            delay += 40;
        });
    });

    grid.innerHTML = html;
}

function setTab(tab, btn) {
    activeTab = tab;
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderMenu();
}

// ─── Loader ───
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) loader.classList.add('hidden');
    }, 1800);
});

// ─── Navbar ───
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav
function toggleMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    }
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (navToggle) navToggle.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    });
});

// ─── Smooth Scroll ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ─── Reveal on Scroll ───
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ─── Counter Animation ───
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-count]').forEach(animateCounter);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

// ─── Swiper (Reviews) ───
if (typeof Swiper !== 'undefined') {
    new Swiper('.reviews-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
        }
    });
}

// ─── Open/Close Status ───
function updateStatus() {
    const badge = document.getElementById('status-badge');
    if (!badge) return;
    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= 12 && hour < 23;

    badge.className = 'status-badge ' + (isOpen ? 'open' : 'closed');

    const dotHtml = '<span class="dot"></span>';
    if (isOpen) {
        badge.innerHTML = currentLang === 'ar'
            ? `${dotHtml} مفتوح الآن`
            : `${dotHtml} Ouvert maintenant`;
    } else {
        badge.innerHTML = currentLang === 'ar'
            ? `${dotHtml} مغلق الآن`
            : `${dotHtml} Fermé maintenant`;
    }
}
updateStatus();
setInterval(updateStatus, 60000);

// ─── Gallery Lightbox (simple) ───
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (!img) return;
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(10px)';
        const bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.style.cssText = 'max-width:90%;max-height:90%;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.5)';
        overlay.appendChild(bigImg);
        overlay.addEventListener('click', () => overlay.remove());
        document.body.appendChild(overlay);
    });
});

// ─── Init Menu ───
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});

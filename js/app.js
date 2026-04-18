/* Hamza Food — App v4 (TailwindCSS) */

let currentLang = 'ar';

function toggleLang(lang) {
    if (!lang) lang = currentLang === 'ar' ? 'fr' : 'ar';
    currentLang = lang;
    document.body.classList.toggle('lang-fr', lang === 'fr');
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ar]').forEach(el => {
        el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-fr');
    });
    document.querySelectorAll('.lang-opt').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-l') === lang);
    });
    renderTabs();
    renderMenu();
    updateStatus();
}

const MENU = {
    sandwich: {
        ar: 'سندويتش / بانيني', fr: 'Sandwich / Panini', icon: 'fas fa-hotdog',
        items: [
            { ar: 'بوكاديوس', fr: 'Bocadios', price: 10 },
            { ar: 'سندويتش طون', fr: 'Sandwich Thon', price: 12 },
            { ar: 'سندويتش هوت دوغ', fr: 'Sandwich Hot Dog', price: 15 },
            { ar: 'سندويتش لحم مفروم', fr: 'Sandwich Viande Hachée', price: 17 },
            { ar: 'سندويتش سوسيس', fr: 'Sandwich Saucisse', price: 17 },
            { ar: 'سندويتش بوليه', fr: 'Sandwich Poulet', price: 18 },
            { ar: 'سندويتش جامبون', fr: 'Sandwich Jambon', price: 18 },
            { ar: 'سندويتش شاورما', fr: 'Sandwich Chawarma', price: 20 },
            { ar: 'سندويتش ميكست', fr: 'Sandwich Mixte', price: 20 },
            { ar: 'سندويتش تشيكن كريسبي', fr: 'Sandwich Chicken Crispy', price: 22 },
            { ar: 'سندويتش سبيسيال', fr: 'Sandwich Spécial', price: 23 },
            { ar: 'سندويتش ميزون', fr: 'Sandwich Maison', price: 25, featured: true }
        ]
    },
    burger: {
        ar: 'برگر', fr: 'Burger', icon: 'fas fa-hamburger',
        items: [
            { ar: 'تشيز برگر', fr: 'Cheese Burger', price: 17 },
            { ar: 'تشيكن برگر', fr: 'Chicken Burger', price: 20 },
            { ar: 'دوبل تشيز برگر', fr: 'Double Cheese Burger', price: 22 },
            { ar: 'باكون برگر', fr: 'Bacon Burger', price: 25, desc_fr: 'Viande Hachée, Jambon' },
            { ar: 'رويال برگر', fr: 'Royal Burger', price: 28, featured: true, desc_fr: 'Chicken Crispy, Jambon' }
        ]
    },
    tacos: {
        ar: 'تاكوس', fr: 'Tacos', icon: 'fas fa-pepper-hot',
        sizes: ['L', 'XL'],
        items: [
            { ar: 'تاكوس فلافل', fr: 'Tacos Falafel', price: [12, 17] },
            { ar: 'تاكوس معكودة', fr: 'Tacos Maakouda', price: [12, 17] },
            { ar: 'تاكوس طورتيا', fr: 'Tacos Tortilla', price: [12, 17] },
            { ar: 'تاكوس هوت دوغ', fr: 'Tacos Hot Dog', price: [15, 23] },
            { ar: 'تاكوس بوليه', fr: 'Tacos Poulet', price: [23, 35] },
            { ar: 'تاكوس لحم مفروم', fr: 'Tacos Viande Hachée', price: [20, 30] },
            { ar: 'تاكوس سوسيس', fr: 'Tacos Saucisse', price: [20, 30] },
            { ar: 'تاكوس شاورما', fr: 'Tacos Chawarma', price: [25, 38] },
            { ar: 'تاكوس ميكست', fr: 'Tacos Mixte', price: [25, 38] },
            { ar: 'تاكوس سبيسيال', fr: 'Tacos Spécial', price: [25, 38] },
            { ar: 'تاكوس تشيكن كريسبي', fr: 'Tacos Chicken Crispy', price: [30, 42] },
            { ar: 'تاكوس ناگيتس', fr: 'Tacos Nugette', price: [30, 42] },
            { ar: 'تاكوس كوردون بلو', fr: 'Tacos Corden Bleu', price: [30, 48] },
            { ar: 'تاكوس رويال', fr: 'Tacos Royal', price: [35, 48], featured: true },
            { ar: 'تاكوس ميزون', fr: 'Tacos Maison', price: [40, 50], featured: true }
        ]
    },
    tacosGratine: {
        ar: 'تاكوس گراتيني', fr: 'Tacos Gratiné', icon: 'fas fa-fire-flame-curved',
        items: [
            { ar: 'تاكوس گراتيني هوت دوغ', fr: 'Tacos Gratiné Hot Dog', price: null },
            { ar: 'تاكوس گراتيني لحم مفروم', fr: 'Tacos Gratiné V.Hachée', price: null },
            { ar: 'تاكوس گراتيني بوليه', fr: 'Tacos Gratiné Poulet', price: null },
            { ar: 'تاكوس گراتيني شاورما', fr: 'Tacos Gratiné Chawarma', price: null },
            { ar: 'تاكوس گراتيني ميكست', fr: 'Tacos Gratiné Mixte', price: null },
            { ar: 'تاكوس گراتيني سبيسيال', fr: 'Tacos Gratiné Spécial', price: null }
        ]
    },
    triangle: {
        ar: 'تريانگل (بوتشي)', fr: 'Triangle (Poutchi)', icon: 'fas fa-play fa-rotate-270',
        items: [
            { ar: 'تريانگل فلافل', fr: 'Triangle Falafel', price: 8 },
            { ar: 'تريانگل معكودة', fr: 'Triangle Maakouda', price: 8 },
            { ar: 'تريانگل طورتيا', fr: 'Triangle Tortilla', price: 10 },
            { ar: 'تريانگل هوت دوغ', fr: 'Triangle Hot Dog', price: 12 },
            { ar: 'تريانگل طون', fr: 'Triangle Thon', price: 12 },
            { ar: 'تريانگل ستراسبورغ', fr: 'Triangle Strasbourg', price: 12 },
            { ar: 'تريانگل سوسيس', fr: 'Triangle Saucisse', price: 15 },
            { ar: 'تريانگل لحم مفروم', fr: 'Triangle Viande Hachée', price: 15 },
            { ar: 'تريانگل بوليه', fr: 'Triangle Poulet', price: 17 },
            { ar: 'تريانگل شاورما', fr: 'Triangle Chawarma', price: 20 },
            { ar: 'تريانگل تشيكن كريسبي', fr: 'Triangle Chicken Crispy', price: 20 },
            { ar: 'تريانگل ميكست', fr: 'Triangle Mixte', price: 20 },
            { ar: 'تريانگل سبيسيال', fr: 'Triangle Spécial', price: 22 },
            { ar: 'تريانگل كوردون بلو', fr: 'Triangle Cordon Bleu', price: 25 },
            { ar: 'تريانگل رويال', fr: 'Triangle Royal', price: 25, featured: true }
        ]
    },
    chawarma: {
        ar: 'شاورما', fr: 'Chawarma', icon: 'fas fa-drumstick-bite',
        items: [
            { ar: 'شاورما', fr: 'Chawarma', price: 20 },
            { ar: 'شاورما دوبل', fr: 'Chawarma Double', price: 30 },
            { ar: 'تاكوس شاورما', fr: 'Tacos Chawarma', price: 25 },
            { ar: 'شاورما رويال', fr: 'Chawarma Royal', price: 28, desc_fr: 'Sandwich Chawarma Cornicho Mozzarella', featured: true },
            { ar: 'بلاط شاورما', fr: 'Plat Chawarma', price: 35 },
            { ar: 'شاورما عربي', fr: 'Chawarma Arabi', price: 35 }
        ]
    },
    falafel: {
        ar: 'فلافل', fr: 'Falafel', icon: 'fas fa-seedling',
        items: [
            { ar: 'سندويتش فلافل', fr: 'Sandwich Falafel', price: 8 },
            { ar: 'سندويتش دوبل فلافل', fr: 'Sandwich Double Falafel', price: 12 },
            { ar: 'تاكوس فلافل', fr: 'Tacos Falafel', price: 12 },
            { ar: 'بلاط فلافل', fr: 'Plats Falafel', price: 15 }
        ]
    },
    plats: {
        ar: 'أطباق', fr: 'Plats', icon: 'fas fa-utensils',
        items: [
            { ar: 'بلاط شاورما', fr: 'Plat Chawarma', price: 35 },
            { ar: 'بلاط بروشيت بوليه', fr: 'Plat Brochette Poulet', price: 35 },
            { ar: 'بلاط لحم مفروم', fr: 'Plat Viande Hachée', price: 35 },
            { ar: 'بلاط ميكست', fr: 'Plat Mixte', price: 40, desc_fr: 'Chawarma, Saucisse, Viande Hachée' },
            { ar: 'بلاط تشيكن كريسبي', fr: 'Plat Chicken Crispy', price: 40 },
            { ar: 'بلاط رويال', fr: 'Plat Royal', price: 45, featured: true, desc_fr: 'Chawarma, Saucisse, V.Hachée, Chicken Crispy' }
        ]
    },
    pizza: {
        ar: 'بيتزا', fr: 'Pizza', icon: 'fas fa-pizza-slice',
        sizes: ['P', 'G'],
        items: [
            { ar: 'بيتزا مارغاريتا', fr: 'Pizza Margarita', price: [18, 35] },
            { ar: 'بيتزا خضار', fr: 'Pizza Végétarien', price: [18, 35] },
            { ar: 'بيتزا هوت دوغ', fr: 'Pizza Hot Dog', price: [18, 35] },
            { ar: 'بيتزا مكسيكان', fr: 'Pizza Mexicain', price: [20, 35] },
            { ar: 'بيتزا بوليه', fr: 'Pizza Poulet', price: [20, 35] },
            { ar: 'بيتزا لحم مفروم', fr: 'Pizza Viande Hachée', price: [20, 35] },
            { ar: 'بيتزا ميلانو', fr: 'Pizza Milano', price: [20, 35] },
            { ar: 'بيتزا طون', fr: 'Pizza Thon', price: [20, 35] },
            { ar: 'بيتزا جامبون فوميه', fr: 'Pizza Jambon Fumée', price: [22, 28] },
            { ar: 'بيتزا فريشور', fr: 'Pizza Fraicheur', price: [22, 28] },
            { ar: 'بيتزا شاورما', fr: 'Pizza Chawarma', price: [25, 40] },
            { ar: 'بيتزا ميكست', fr: 'Pizza Mixte', price: [25, 40] },
            { ar: 'بيتزا سبيسيال', fr: 'Pizza Spécial', price: [25, 40] },
            { ar: 'بيتزا رويال', fr: 'Pizza Royale', price: [30, 45] },
            { ar: 'بيتزا 4 سيزون', fr: 'Pizza 4 Saison', price: [30, 45] },
            { ar: 'بيتزا 4 فروماج', fr: 'Pizza 4 Fromages', price: [30, 45] },
            { ar: 'بيتزا فواكه البحر', fr: 'Pizza Fruit de mer', price: [30, 45] },
            { ar: 'بيتزا كالزون', fr: 'Pizza Galzone', price: [30, 45] },
            { ar: 'بيتزا كوردون بلو', fr: 'Pizza Cordon Blue', price: [35, 50], featured: true },
            { ar: 'بيتزا ميزون', fr: 'Pizza Maison', price: [40, 55], featured: true }
        ]
    },
    pasticcio: {
        ar: 'باستيتشو', fr: 'Pasticcio', icon: 'fas fa-bowl-food',
        desc_ar: 'على أساس الفريت', desc_fr: 'A base des frites',
        items: [
            { ar: 'باستيتشو هوت دوغ', fr: 'Pasticcio Hot Dog', price: 20 },
            { ar: 'باستيتشو لحم مفروم', fr: 'Pasticcio V.Hachée', price: 25 },
            { ar: 'باستيتشو بوليه', fr: 'Pasticcio Poulet', price: 27 },
            { ar: 'باستيتشو جامبون', fr: 'Pasticcio Jambon', price: 27 },
            { ar: 'باستيتشو شاورما', fr: 'Pasticcio Chawarma', price: 30 },
            { ar: 'باستيتشو ميكست', fr: 'Pasticcio Mixte', price: 30 },
            { ar: 'باستيتشو رويال', fr: 'Pasticcio Royal', price: 35, featured: true }
        ]
    },
    gratin: {
        ar: 'گراتان', fr: 'Gratin', icon: 'fas fa-cheese',
        desc_ar: 'على أساس المعكرونة', desc_fr: 'A base des Pattes',
        items: [
            { ar: 'گراتان هوت دوغ', fr: 'Gratin Hot Dog', price: 20 },
            { ar: 'گراتان جامبون', fr: 'Gratin Jambon', price: 25 },
            { ar: 'گراتان شاورما', fr: 'Gratin Chawarma', price: 27 },
            { ar: 'گراتان ميكست', fr: 'Gratin Mixte', price: 30 },
            { ar: 'گراتان رويال', fr: 'Gratin Royal', price: 30, featured: true }
        ]
    },
    kumpir: {
        ar: 'كومپير', fr: 'Kumpir', icon: 'fas fa-bowl-rice',
        items: [
            { ar: 'كومپير سيمبل', fr: 'Kumpir Simple', price: 25 },
            { ar: 'كومپير طون', fr: 'Kumpir Thon', price: 30 },
            { ar: 'كومپير بوليه', fr: 'Kumpir Poulet', price: 32 },
            { ar: 'كومپير لحم مفروم', fr: 'Kumpir V.Hachée', price: 30 },
            { ar: 'كومپير شاورما', fr: 'Kumpir Chawarma', price: 35 },
            { ar: 'كومپير سبيسيال', fr: 'Kumpir Spécial', price: 35, featured: true }
        ]
    },
    mkilat: {
        ar: 'مقيلات', fr: 'Mkilat (Fritures)', icon: 'fas fa-shrimp',
        items: [
            { ar: 'شربة السمك', fr: 'Soupe de Poisson', price: 10 },
            { ar: 'مقيلة كفتة السردين', fr: 'Kefta Sardine Frite', price: 20 },
            { ar: 'مقيلة بيض السمك', fr: 'Oeufs de Poisson Frits', price: 25 },
            { ar: 'مقيلة بوزروك', fr: 'Bouzrouk Frit', price: 30 },
            { ar: 'مقيلة روكان', fr: 'Roucan Frit', price: 35 },
            { ar: 'مقيلة كروفيت', fr: 'Crevettes Frites', price: 35 },
            { ar: 'مقيلة كلمار', fr: 'Calamar Frit', price: 35 },
            { ar: 'مقيلة ميكس', fr: 'Mixte Frit', price: 40, featured: true },
            { ar: 'مقيلة رويال', fr: 'Royale Frite', price: 45, featured: true },
            { ar: 'پنس دو كراب (4 قطع)', fr: 'Pince de Crabe (4 pièces)', price: 15 }
        ]
    },
    salade: {
        ar: 'سلطة بار', fr: 'Salade Bar', icon: 'fas fa-leaf',
        items: [
            { ar: 'بوفيه سلطات متنوعة', fr: 'Buffet Salades Variées', price: 15, desc_ar: 'عمر السلطة ديالك بيديك', desc_fr: 'Composez votre salade vous-même', featured: true }
        ]
    },
    jus: {
        ar: 'عصائر', fr: 'Jus', icon: 'fas fa-blender',
        items: [
            { ar: 'عصير ليمون', fr: 'Jus Citron', price: 5 },
            { ar: 'عصير برتقال', fr: 'Jus Orange', price: 10 },
            { ar: 'عصير تفاح', fr: 'Jus Pomme', price: 12 },
            { ar: 'عصير بنان', fr: 'Jus Banane', price: 12 },
            { ar: 'عصير خوخ', fr: 'Jus Pêche', price: 15 },
            { ar: 'عصير باباي', fr: 'Jus Papaye', price: 15 },
            { ar: 'عصير مانگو', fr: 'Jus Mangue', price: 15 },
            { ar: 'عصير أناناس', fr: 'Jus Ananas', price: 15 },
            { ar: 'پاناشي', fr: 'Panaché', price: 15 },
            { ar: 'عصير أفوكا', fr: 'Jus Avocat', price: 20, featured: true }
        ]
    },
    dessert: {
        ar: 'حلويات', fr: 'Desserts', icon: 'fas fa-ice-cream',
        items: [
            { ar: 'محلبية', fr: 'Mehalabiya', price: 5 },
            { ar: 'زبادي', fr: 'Zabadi', price: 5 },
            { ar: 'حلى خش خش', fr: 'Hala KhachKhach', price: 10 },
            { ar: 'حلى أوريو', fr: 'Hala Oreo', price: 10 },
            { ar: 'حلى لوتس', fr: 'Hala Lotus', price: 10, featured: true }
        ]
    },
    boisson: {
        ar: 'مشروبات', fr: 'Boissons', icon: 'fas fa-glass-water',
        items: [
            { ar: 'ماء 33 سل', fr: 'Eau 33cl', price: 5 },
            { ar: 'ماء 1.5 لتر', fr: 'Eau 1.5L', price: 8 },
            { ar: 'كانيط', fr: 'Canette', price: 6 },
            { ar: 'أولمس', fr: 'Oulmès', price: 5 },
            { ar: 'راني', fr: 'Rani', price: 8 }
        ]
    }
};

let activeTab = 'all';

function renderTabs() {
    const container = document.getElementById('menu-tabs');
    if (!container) return;
    const lang = currentLang;
    let html = '<button class="menu-tab' + (activeTab === 'all' ? ' active' : '') + '" onclick="setTab(\'all\', this)"><i class="fas fa-th"></i>' + (lang === 'ar' ? 'الكل' : 'Tout') + '</button>';
    Object.entries(MENU).forEach(([key, cat]) => {
        html += '<button class="menu-tab' + (activeTab === key ? ' active' : '') + '" onclick="setTab(\'' + key + '\', this)"><i class="' + cat.icon + '"></i>' + cat[lang] + '</button>';
    });
    container.innerHTML = html;
}

function renderMenu() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    const lang = currentLang;
    let html = '';
    let delay = 0;

    Object.entries(MENU).forEach(([key, cat]) => {
        if (activeTab !== 'all' && activeTab !== key) return;
        if (activeTab === 'all') {
            html += '<div class="menu-cat-header"><span class="cat-icon"><i class="' + cat.icon + '"></i></span><h3>' + cat[lang] + '</h3></div>';
        }
        const hasSizes = cat.sizes;
        cat.items.forEach(item => {
            const name = item[lang];
            let priceText;
            if (item.price === null) {
                priceText = '<span class="text-white/40 text-xs">' + (lang === 'ar' ? 'إسأل على الثمن' : 'Demandez le prix') + '</span>';
            } else if (Array.isArray(item.price)) {
                if (hasSizes) {
                    priceText = '<small>' + cat.sizes[0] + '</small> ' + item.price[0] + ' · <small>' + cat.sizes[1] + '</small> ' + item.price[1] + ' <small>DH</small>';
                } else {
                    priceText = item.price[0] + '/' + item.price[1] + ' <small>DH</small>';
                }
            } else {
                priceText = item.price + ' <small>DH</small>';
            }
            const featured = item.featured ? ' featured' : '';
            const desc = lang === 'ar' ? (item.desc_ar || '') : (item.desc_fr || '');
            html += '<div class="menu-card' + featured + '" style="animation-delay:' + delay + 'ms">';
            html += '<div class="mc-body">';
            if (item.featured) html += '<div class="mc-badge">⭐ ' + (lang === 'ar' ? 'مميز' : 'Populaire') + '</div>';
            html += '<div class="mc-name">' + name + '</div>';
            if (desc) html += '<div class="mc-desc">' + desc + '</div>';
            html += '<div class="mc-footer"><div class="mc-price">' + priceText + '</div>';
            html += '<a href="https://wa.me/212676220003?text=' + encodeURIComponent(name) + '" target="_blank" class="mc-order"><i class="fab fa-whatsapp"></i></a>';
            html += '</div></div></div>';
            delay += 25;
        });
    });
    grid.innerHTML = html;
}

function setTab(tab, btn) {
    activeTab = tab;
    renderTabs();
    renderMenu();
    if (tab !== 'all') {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 2200);
});

// Navbar scroll
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 50);
    if (scrollProgress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', y > 500);
    updateActiveNav();
}, { passive: true });

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const pos = window.scrollY + 200;
    sections.forEach(s => {
        const link = document.querySelector('.nav-link[href="#' + s.id + '"]');
        if (link) {
            const active = pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight;
            link.classList.toggle('active', active);
        }
    });
}

// Mobile nav
function toggleMenu() {
    document.querySelector('.mobile-nav')?.classList.toggle('show');
    document.querySelector('.nav-toggle')?.classList.toggle('active');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const t = document.querySelector(id);
        if (t) {
            e.preventDefault();
            window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// Reveal
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const d = parseInt(e.target.getAttribute('data-delay')) || 0;
            setTimeout(() => e.target.classList.add('revealed'), d);
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

// Counters
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const start = performance.now();
    function tick(now) {
        const p = Math.min((now - start) / 2200, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 4)) * target);
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}
const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('[data-count]').forEach(animateCounter);
            counterObs.unobserve(e.target);
        }
    });
}, { threshold: 0.3 });
document.querySelectorAll('[data-count]').forEach(el => {
    const parent = el.closest('[data-reveal]') || el.parentElement;
    if (parent) counterObs.observe(parent);
});

// Swiper
if (typeof Swiper !== 'undefined') {
    new Swiper('.reviews-swiper', {
        slidesPerView: 1, spaceBetween: 20, loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }
    });
}

// Status
function updateStatus() {
    const badge = document.getElementById('status-badge');
    if (!badge) return;
    const h = new Date().getHours();
    const open = h >= 11 && h < 23;
    if (open) {
        badge.textContent = currentLang === 'ar' ? 'مفتوح الآن' : 'Ouvert maintenant';
    } else {
        badge.textContent = currentLang === 'ar' ? 'مغلق الآن' : 'Fermé maintenant';
    }
}
updateStatus();
setInterval(updateStatus, 60000);

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderTabs();
    renderMenu();
});

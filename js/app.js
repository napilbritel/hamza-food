/* Hamza Food — App v7 - Premium Street Food Experience */

const STORAGE_KEY = 'hamza-food-lang';
const FAVORITES_KEY = 'hamza-food-favorites';
const WHATSAPP_NUMBER = '212676220003';

let currentLang = readSavedLanguage();
let activeTab = 'all';
let menuQuery = '';
let showFeaturedOnly = false;
let lightboxEl = null;
let favorites = readSavedFavorites();

const MENU = {
    sandwich: {
        ar: 'سندويتش / بانيني', fr: 'Sandwich / Panini', icon: 'fas fa-hotdog', image: 'https://images.unsplash.com/photo-1528735602780-cf6f53cf6c0f?w=400&h=300&fit=crop',
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
        ar: 'برگر', fr: 'Burger', icon: 'fas fa-hamburger', image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=300&fit=crop',
        items: [
            { ar: 'تشيز برگر', fr: 'Cheese Burger', price: 17 },
            { ar: 'تشيكن برگر', fr: 'Chicken Burger', price: 20 },
            { ar: 'دوبل تشيز برگر', fr: 'Double Cheese Burger', price: 22 },
            { ar: 'باكون برگر', fr: 'Bacon Burger', price: 25, desc_fr: 'Viande Hachée, Jambon' },
            { ar: 'رويال برگر', fr: 'Royal Burger', price: 28, featured: true, desc_fr: 'Chicken Crispy, Jambon', tags: ['spicy', 'popular'] }
        ]
    },
    tacos: {
        ar: 'تاكوس', fr: 'Tacos', icon: 'fas fa-pepper-hot', image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=300&fit=crop',
        sizes: ['L', 'XL'],
        items: [
            { ar: 'تاكوس فلافل', fr: 'Tacos Falafel', price: [12, 17], tags: ['vegetarian'] },
            { ar: 'تاكوس معكودة', fr: 'Tacos Maakouda', price: [12, 17], tags: ['vegetarian'] },
            { ar: 'تاكوس طورتيا', fr: 'Tacos Tortilla', price: [12, 17], tags: ['light'] },
            { ar: 'تاكوس هوت دوغ', fr: 'Tacos Hot Dog', price: [15, 23] },
            { ar: 'تاكوس بوليه', fr: 'Tacos Poulet', price: [23, 35] },
            { ar: 'تاكوس لحم مفروم', fr: 'Tacos Viande Hachée', price: [20, 30] },
            { ar: 'تاكوس سوسيس', fr: 'Tacos Saucisse', price: [20, 30] },
            { ar: 'تاكوس شاورما', fr: 'Tacos Chawarma', price: [25, 38] },
            { ar: 'تاكوس ميكست', fr: 'Tacos Mixte', price: [25, 38], tags: ['popular'] },
            { ar: 'تاكوس سبيسيال', fr: 'Tacos Spécial', price: [25, 38], tags: ['spicy'] },
            { ar: 'تاكوس تشيكن كريسبي', fr: 'Tacos Chicken Crispy', price: [30, 42] },
            { ar: 'تاكوس ناگيتس', fr: 'Tacos Nugette', price: [30, 42] },
            { ar: 'تاكوس كوردون بلو', fr: 'Tacos Corden Bleu', price: [30, 48] },
            { ar: 'تاكوس رويال', fr: 'Tacos Royal', price: [35, 48], featured: true, tags: ['popular', 'premium'] },
            { ar: 'تاكوس ميزون', fr: 'Tacos Maison', price: [40, 50], featured: true, tags: ['bestseller'] }
        ]
    },
    tacosGratine: {
        ar: 'تاكوس گراتيني', fr: 'Tacos Gratiné', icon: 'fas fa-fire-flame-curved', image: 'https://images.unsplash.com/photo-1595521624224-e8a451a0c44b?w=400&h=300&fit=crop',
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
        ar: 'تريانگل (بوتشي)', fr: 'Triangle (Poutchi)', icon: 'fas fa-play fa-rotate-270', image: 'https://images.unsplash.com/photo-1566280174857-38c87c1f308c?w=400&h=300&fit=crop',
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
        ar: 'شاورما', fr: 'Chawarma', icon: 'fas fa-drumstick-bite', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
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
        ar: 'فلافل', fr: 'Falafel', icon: 'fas fa-seedling', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd97a47?w=400&h=300&fit=crop',
        items: [
            { ar: 'سندويتش فلافل', fr: 'Sandwich Falafel', price: 8, tags: ['vegetarian', 'light'] },
            { ar: 'سندويتش دوبل فلافل', fr: 'Sandwich Double Falafel', price: 12, tags: ['vegetarian'] },
            { ar: 'تاكوس فلافل', fr: 'Tacos Falafel', price: 12, tags: ['vegetarian'] },
            { ar: 'بلاط فلافل', fr: 'Plats Falafel', price: 15, tags: ['vegetarian'] }
        ]
    },
    plats: {
        ar: 'أطباق', fr: 'Plats', icon: 'fas fa-utensils', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
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
        ar: 'بيتزا', fr: 'Pizza', icon: 'fas fa-pizza-slice', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
        sizes: ['P', 'G'],
        items: [
            { ar: 'بيتزا مارغاريتا', fr: 'Pizza Margarita', price: [18, 35], tags: ['vegetarian'] },
            { ar: 'بيتزا خضار', fr: 'Pizza Végétarien', price: [18, 35], tags: ['vegetarian'] },
            { ar: 'بيتزا هوت دوغ', fr: 'Pizza Hot Dog', price: [18, 35] },
            { ar: 'بيتزا مكسيكان', fr: 'Pizza Mexicain', price: [20, 35], tags: ['spicy'] },
            { ar: 'بيتزا بوليه', fr: 'Pizza Poulet', price: [20, 35] },
            { ar: 'بيتزا لحم مفروم', fr: 'Pizza Viande Hachée', price: [20, 35] },
            { ar: 'بيتزا ميلانو', fr: 'Pizza Milano', price: [20, 35] },
            { ar: 'بيتزا طون', fr: 'Pizza Thon', price: [20, 35] },
            { ar: 'بيتزا جامبون فوميه', fr: 'Pizza Jambon Fumée', price: [22, 28] },
            { ar: 'بيتزا فريشور', fr: 'Pizza Fraicheur', price: [22, 28], tags: ['light'] },
            { ar: 'بيتزا شاورما', fr: 'Pizza Chawarma', price: [25, 40] },
            { ar: 'بيتزا ميكست', fr: 'Pizza Mixte', price: [25, 40], tags: ['popular'] },
            { ar: 'بيتزا سبيسيال', fr: 'Pizza Spécial', price: [25, 40], tags: ['spicy'] },
            { ar: 'بيتزا رويال', fr: 'Pizza Royale', price: [30, 45] },
            { ar: 'بيتزا 4 سيزون', fr: 'Pizza 4 Saison', price: [30, 45], tags: ['premium'] },
            { ar: 'بيتزا 4 فروماج', fr: 'Pizza 4 Fromages', price: [30, 45] },
            { ar: 'بيتزا فواكه البحر', fr: 'Pizza Fruit de mer', price: [30, 45] },
            { ar: 'بيتزا كالزون', fr: 'Pizza Galzone', price: [30, 45] },
            { ar: 'بيتزا كوردون بلو', fr: 'Pizza Cordon Blue', price: [35, 50], featured: true, tags: ['premium'] },
            { ar: 'بيتزا ميزون', fr: 'Pizza Maison', price: [40, 55], featured: true, tags: ['bestseller'] }
        ]
    },
    pasticcio: {
        ar: 'باستيتشو', fr: 'Pasticcio', icon: 'fas fa-bowl-food', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
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
        ar: 'گراتان', fr: 'Gratin', icon: 'fas fa-cheese', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
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
        ar: 'كومپير', fr: 'Kumpir', icon: 'fas fa-bowl-rice', image: 'https://images.unsplash.com/photo-1585238341710-57b0e4b932e2?w=400&h=300&fit=crop',
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
        ar: 'مقيلات', fr: 'Mkilat (Fritures)', icon: 'fas fa-shrimp', image: 'https://images.unsplash.com/photo-1579631541616-c3fb466e58d9?w=400&h=300&fit=crop',
        items: [
            { ar: 'شربة السمك', fr: 'Soupe de Poisson', price: 10, tags: ['light'] },
            { ar: 'مقيلة كفتة السردين', fr: 'Kefta Sardine Frite', price: 20, tags: ['premium'] },
            { ar: 'مقيلة بيض السمك', fr: 'Oeufs de Poisson Frits', price: 25, tags: ['spicy'] },
            { ar: 'مقيلة بوزروك', fr: 'Bouzrouk Frit', price: 30, tags: ['premium'] },
            { ar: 'مقيلة روكان', fr: 'Roucan Frit', price: 35, tags: ['premium'] },
            { ar: 'مقيلة كروفيت', fr: 'Crevettes Frites', price: 35, tags: ['premium', 'popular'] },
            { ar: 'مقيلة كلمار', fr: 'Calamar Frit', price: 35, tags: ['premium'] },
            { ar: 'مقيلة ميكس', fr: 'Mixte Frit', price: 40, featured: true, tags: ['bestseller'] },
            { ar: 'مقيلة رويال', fr: 'Royale Frite', price: 45, featured: true, tags: ['bestseller', 'premium'] },
            { ar: 'پنس دو كراب (4 قطع)', fr: 'Pince de Crabe (4 pièces)', price: 15 }
        ]
    },
    salade: {
        ar: 'سلطة بار', fr: 'Salade Bar', icon: 'fas fa-leaf', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        items: [
            { ar: 'بوفيه سلطات متنوعة', fr: 'Buffet Salades Variées', price: 15, desc_ar: 'عمر السلطة ديالك بيديك', desc_fr: 'Composez votre salade vous-même', featured: true, tags: ['vegetarian', 'healthy'] }
        ]
    },
    jus: {
        ar: 'عصائر', fr: 'Jus', icon: 'fas fa-blender', image: 'https://images.unsplash.com/photo-1590311092014-486f36cf6d47?w=400&h=300&fit=crop',
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
        ar: 'حلويات', fr: 'Desserts', icon: 'fas fa-ice-cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
        items: [
            { ar: 'محلبية', fr: 'Mehalabiya', price: 5 },
            { ar: 'زبادي', fr: 'Zabadi', price: 5 },
            { ar: 'حلى خش خش', fr: 'Hala KhachKhach', price: 10 },
            { ar: 'حلى أوريو', fr: 'Hala Oreo', price: 10 },
            { ar: 'حلى لوتس', fr: 'Hala Lotus', price: 10, featured: true }
        ]
    },
    boisson: {
        ar: 'مشروبات', fr: 'Boissons', icon: 'fas fa-glass-water', image: 'https://images.unsplash.com/photo-1513161455079-7ef1a826e90e?w=400&h=300&fit=crop',
        items: [
            { ar: 'ماء 33 سل', fr: 'Eau 33cl', price: 5 },
            { ar: 'ماء 1.5 لتر', fr: 'Eau 1.5L', price: 8 },
            { ar: 'كانيط', fr: 'Canette', price: 6 },
            { ar: 'أولمس', fr: 'Oulmès', price: 5 },
            { ar: 'راني', fr: 'Rani', price: 8 }
        ]
    }
};

/* ══════════════ UTILITIES ══════════════ */

function readSavedLanguage() {
    try { return localStorage.getItem(STORAGE_KEY) === 'fr' ? 'fr' : 'ar'; } catch { return 'ar'; }
}

function readSavedFavorites() {
    try { const s = localStorage.getItem(FAVORITES_KEY); return s ? JSON.parse(s) : {}; } catch { return {}; }
}

function saveFavorites() {
    try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites)); } catch {}
}

function saveLanguage(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
}

function normalizeText(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function getNumericPrices() {
    return Object.values(MENU).flatMap(cat =>
        cat.items.flatMap(item => {
            if (item.price === null) return [];
            return Array.isArray(item.price) ? item.price : [item.price];
        })
    );
}

/* ══════════════ LANGUAGE ══════════════ */

function translateElement(el, lang) {
    const htmlValue = el.getAttribute(`data-${lang}-html`);
    if (htmlValue !== null) { el.innerHTML = htmlValue; return; }
    const value = el.getAttribute(`data-${lang}`);
    if (value === null) return;
    const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (textNodes.length && el.children.length) { textNodes[textNodes.length - 1].textContent = value; return; }
    el.textContent = value;
}

function applyTranslations() {
    document.querySelectorAll('[data-ar]').forEach(el => translateElement(el, currentLang));
    document.querySelectorAll('[data-placeholder-ar]').forEach(el => {
        const p = el.getAttribute(`data-placeholder-${currentLang}`);
        if (p !== null) el.setAttribute('placeholder', p);
    });
    document.querySelectorAll('[data-aria-ar]').forEach(el => {
        const a = el.getAttribute(`data-aria-${currentLang}`);
        if (a !== null) el.setAttribute('aria-label', a);
    });
}

function applyLanguage(lang) {
    currentLang = lang === 'fr' ? 'fr' : 'ar';
    document.body.classList.toggle('lang-fr', currentLang === 'fr');
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    saveLanguage(currentLang);
    applyTranslations();
    document.querySelectorAll('.lang-opt').forEach(btn => {
        const isActive = btn.getAttribute('data-l') === currentLang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
    renderTabs();
    renderMenu();
    updateStatus();
}

function toggleLang(lang) {
    if (!lang) lang = currentLang === 'ar' ? 'fr' : 'ar';
    applyLanguage(lang);
}

/* ══════════════ MENU SYSTEM ══════════════ */

function renderTabs() {
    const container = document.getElementById('menu-tabs');
    if (!container) return;
    const totalCount = Object.entries(MENU).reduce((sum, [key, cat]) => sum + getCategoryItems(key, cat, true).length, 0);
    let html = '<button class="menu-tab' + (activeTab === 'all' ? ' active' : '') + '" onclick="setTab(\'all\')"><i class="fas fa-th"></i><span>' + (currentLang === 'ar' ? 'الكل' : 'Tout') + '</span><span class="menu-tab-count">' + totalCount + '</span></button>';
    Object.entries(MENU).forEach(([key, cat]) => {
        const count = getCategoryItems(key, cat, true).length;
        html += '<button class="menu-tab' + (activeTab === key ? ' active' : '') + (count ? '' : ' is-empty') + '" onclick="setTab(\'' + key + '\')"><i class="' + cat.icon + '"></i><span>' + cat[currentLang] + '</span><span class="menu-tab-count">' + count + '</span></button>';
    });
    container.innerHTML = html;
}

function matchesMenuFilters(item, cat) {
    if (showFeaturedOnly && !item.featured) return false;
    if (!menuQuery) return true;
    const haystack = normalizeText([cat.ar, cat.fr, item.ar, item.fr, item.desc_ar, item.desc_fr].join(' '));
    return haystack.includes(normalizeText(menuQuery));
}

function getCategoryItems(key, cat, ignoreActiveTab = false) {
    if (!ignoreActiveTab && activeTab !== 'all' && activeTab !== key) return [];
    return cat.items.filter(item => matchesMenuFilters(item, cat));
}

function buildOrderLink(name) {
    const text = currentLang === 'ar' ? `سلام، بغيت نطلب: ${name}` : `Bonjour, je souhaite commander : ${name}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function toggleFavorite(categoryKey, itemIndex) {
    const key = `${categoryKey}-${itemIndex}`;
    favorites[key] = !favorites[key];
    saveFavorites();
    renderMenu();
}

function updateMenuSummary(totalVisible) {
    const countEl = document.getElementById('menuResultCount');
    const contextEl = document.getElementById('menuResultContext');
    const resetButton = document.getElementById('menuReset');
    const featuredToggle = document.getElementById('menuFeaturedToggle');
    if (countEl) countEl.textContent = totalVisible;
    if (contextEl) {
        if (menuQuery) contextEl.textContent = currentLang === 'ar' ? `نتائج: ${menuQuery}` : `Resultats : ${menuQuery}`;
        else if (showFeaturedOnly) contextEl.textContent = currentLang === 'ar' ? 'الأطباق المميزة فقط' : 'Plats signatures';
        else if (activeTab === 'all') contextEl.textContent = currentLang === 'ar' ? 'كل الأصناف' : 'Toutes les categories';
        else if (MENU[activeTab]) contextEl.textContent = MENU[activeTab][currentLang];
    }
    if (featuredToggle) { featuredToggle.classList.toggle('is-active', showFeaturedOnly); featuredToggle.setAttribute('aria-pressed', String(showFeaturedOnly)); }
    if (resetButton) resetButton.classList.toggle('is-hidden', !(menuQuery || showFeaturedOnly || activeTab !== 'all'));
}

function updateMenuOverview(totalVisible) {
    const categoryEl = document.getElementById('menuCategoryTotal');
    const visibleEl = document.getElementById('menuVisibleTotal');
    const startingPriceEl = document.getElementById('menuStartingPrice');
    const minPrice = Math.min(...getNumericPrices());
    if (categoryEl) categoryEl.textContent = Object.keys(MENU).length;
    if (visibleEl) visibleEl.textContent = totalVisible;
    if (startingPriceEl) startingPriceEl.textContent = `${minPrice} DH`;
}

function renderMenu() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    let html = '';
    let delay = 0;
    let totalVisible = 0;

    Object.entries(MENU).forEach(([key, cat]) => {
        const visibleItems = getCategoryItems(key, cat);
        if (!visibleItems.length) return;
        totalVisible += visibleItems.length;

        if (activeTab === 'all') {
            html += '<div class="menu-cat-header"><span class="cat-icon"><i class="' + cat.icon + '"></i></span><h3>' + cat[currentLang] + '</h3><span class="menu-cat-count">' + visibleItems.length + '</span></div>';
        }

        const hasSizes = cat.sizes;
        visibleItems.forEach((item, index) => {
            const name = item[currentLang];
            const isFavorite = favorites[`${key}-${index}`];
            let priceText;
            let sizeNote = '';
            if (item.price === null) {
                priceText = '<span class="text-white/40 text-xs">' + (currentLang === 'ar' ? 'اسأل على الثمن' : 'Demandez le prix') + '</span>';
            } else if (Array.isArray(item.price)) {
                if (hasSizes) {
                    priceText = '<small>' + cat.sizes[0] + '</small> ' + item.price[0] + ' · <small>' + cat.sizes[1] + '</small> ' + item.price[1] + ' <small>DH</small>';
                    sizeNote = '<div class="mc-size-note"><i class="fas fa-ruler-combined"></i><span>' + (currentLang === 'ar' ? 'متوفر بجوج أحجام' : 'Disponible en deux tailles') + '</span></div>';
                } else {
                    priceText = item.price[0] + '/' + item.price[1] + ' <small>DH</small>';
                }
            } else {
                priceText = item.price + ' <small>DH</small>';
            }
            const featured = item.featured ? ' featured' : '';
            const desc = currentLang === 'ar' ? (item.desc_ar || '') : (item.desc_fr || '');
            const orderLink = buildOrderLink(name);
            const catImage = cat.image || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop';

            let tagsHtml = '';
            if (item.tags && item.tags.length > 0) {
                tagsHtml = '<div class="mc-tags">';
                item.tags.forEach(tag => {
                    const tagIcon = { vegetarian: '🌱', spicy: '🔥', popular: '⭐', premium: '👑', bestseller: '🏆', light: '💚', healthy: '❤️' }[tag] || '✓';
                    const tagLabel = {
                        vegetarian: currentLang === 'ar' ? 'نباتي' : 'Végétarien',
                        spicy: currentLang === 'ar' ? 'حريف' : 'Épicé',
                        popular: currentLang === 'ar' ? 'مشهور' : 'Populaire',
                        premium: currentLang === 'ar' ? 'فاخر' : 'Premium',
                        bestseller: currentLang === 'ar' ? 'الأفضل' : 'Meilleur',
                        light: currentLang === 'ar' ? 'خفيف' : 'Léger',
                        healthy: currentLang === 'ar' ? 'صحي' : 'Sain'
                    }[tag] || tag;
                    tagsHtml += '<span class="mc-tag mc-tag-' + tag + '" title="' + tagLabel + '">' + tagIcon + '</span>';
                });
                tagsHtml += '</div>';
            }

            html += '<div class="menu-card' + featured + '" style="animation-delay:' + delay + 'ms">';
            html += '<div class="relative h-40 overflow-hidden rounded-t-lg bg-navy-800"><img src="' + catImage + '" alt="' + cat[currentLang] + '" class="mc-image" loading="lazy" decoding="async" onerror="this.src=\'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop\'"></div>';
            html += '<div class="mc-body">';
            if (item.featured) html += '<div class="mc-badge">⭐ ' + (currentLang === 'ar' ? 'مميز' : 'Populaire') + '</div>';
            html += '<div class="mc-head"><div><div class="mc-kicker">' + cat[currentLang] + '</div><div class="mc-name">' + name + '</div></div><span class="mc-index">' + String(index + 1).padStart(2, '0') + '</span></div>';
            if (tagsHtml) html += tagsHtml;
            if (sizeNote) html += sizeNote;
            html += '<div class="mc-desc">' + (desc || (currentLang === 'ar' ? 'محضر بعناية و جاهز للطلب السريع.' : 'Prepare avec soin et disponible pour une commande rapide.')) + '</div>';
            html += '<div class="mc-footer"><div class="mc-price">' + priceText + '</div>';
            html += '<div class="flex items-center gap-2"><a href="' + orderLink + '" target="_blank" rel="noopener noreferrer" class="mc-order flex-1" aria-label="' + (currentLang === 'ar' ? 'اطلب عبر واتساب' : 'Commander via WhatsApp') + '"><i class="fab fa-whatsapp"></i><span>' + (currentLang === 'ar' ? 'اطلب الآن' : 'Commander') + '</span></a>';
            html += '<button onclick="toggleFavorite(\'' + key + '\', ' + index + ')" class="w-10 h-10 rounded-lg transition-all duration-300 ' + (isFavorite ? 'bg-fire-500/20 text-fire-400' : 'bg-white/[0.04] text-white/40') + '" title="' + (currentLang === 'ar' ? 'أضف للمفضلة' : 'Ajouter aux favoris') + '"><i class="fas fa-heart"></i></button>';
            html += '</div></div></div>';
            delay += 25;
        });
    });

    if (!totalVisible) {
        html = '<div class="menu-empty"><strong>' + (currentLang === 'ar' ? 'ما لقيناش هاد الطبق' : 'Aucun plat trouve') + '</strong><p>' + (currentLang === 'ar' ? 'جرّب اسم آخر أو مسح البحث باش تشوف المنيو كاملة.' : 'Essayez un autre mot-cle ou effacez la recherche pour voir tout le menu.') + '</p></div>';
    }

    grid.innerHTML = html;
    updateMenuSummary(totalVisible);
    updateMenuOverview(totalVisible);
}

function setTab(tab) {
    activeTab = tab;
    renderTabs();
    renderMenu();
    if (tab !== 'all') document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetMenuFilters() {
    activeTab = 'all';
    menuQuery = '';
    showFeaturedOnly = false;
    const searchInput = document.getElementById('menuSearch');
    if (searchInput) searchInput.value = '';
    renderTabs();
    renderMenu();
}

/* ══════════════ CUSTOM CURSOR ══════════════ */

function initCursor() {
    if (window.innerWidth < 768) return;
    const dot = document.getElementById('cursorDot');
    const glow = document.getElementById('cursorGlow');
    if (!dot || !glow) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        dotX += (mouseX - dotX) * 0.25;
        dotY += (mouseY - dotY) * 0.25;
        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;

        dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
        glow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px)`;
        requestAnimationFrame(animate);
    }
    animate();

    document.querySelectorAll('a, button, .popular-card, .menu-card, .gallery-item, .contact-card, .bento-item').forEach(el => {
        el.addEventListener('mouseenter', () => glow.classList.add('hovering'));
        el.addEventListener('mouseleave', () => glow.classList.remove('hovering'));
    });
}

/* ══════════════ HERO PARTICLES ══════════════ */

function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    const emojis = ['🍔', '🌮', '🍕', '🌯', '🥙', '🍟', '🥗', '🧀', '🌶️', '🍗'];

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('span');
        particle.className = 'hero-particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 12 + 's';
        particle.style.animationDuration = (10 + Math.random() * 8) + 's';
        particle.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        container.appendChild(particle);
    }
}

/* ══════════════ TILT EFFECT ══════════════ */

function initTilt() {
    if (window.innerWidth < 768) return;
    document.querySelectorAll('[data-tilt]').forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-8px) scale(1.02)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

/* ══════════════ MAGNETIC BUTTONS ══════════════ */

function initMagnetic() {
    if (window.innerWidth < 768) return;
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

/* ══════════════ SCROLL & NAV ══════════════ */

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 800);
});

const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const scrollTopBtn = document.getElementById('scrollTop');
const mobileNav = document.getElementById('mobileNav');
const navToggle = document.querySelector('.nav-toggle');

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

function syncBodyLock() {
    const menuOpen = mobileNav?.classList.contains('show');
    document.body.classList.toggle('menu-open', menuOpen || Boolean(lightboxEl));
}

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

function toggleMenu(forceState) {
    if (!mobileNav || !navToggle) return;
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !mobileNav.classList.contains('show');
    mobileNav.classList.toggle('hidden', !shouldOpen);
    mobileNav.classList.toggle('show', shouldOpen);
    navToggle.classList.toggle('active', shouldOpen);
    navToggle.setAttribute('aria-expanded', String(shouldOpen));
    syncBodyLock();
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const t = document.querySelector(id);
        if (t) {
            e.preventDefault();
            toggleMenu(false);
            window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

/* ══════════════ REVEAL ANIMATIONS ══════════════ */

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

/* ══════════════ COUNTERS ══════════════ */

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

/* ══════════════ SWIPER ══════════════ */

if (typeof Swiper !== 'undefined') {
    new Swiper('.reviews-swiper', {
        slidesPerView: 1, spaceBetween: 20, loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        keyboard: { enabled: true },
        grabCursor: true,
        breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }
    });
}

/* ══════════════ STATUS ══════════════ */

function updateStatus() {
    const heroBadge = document.getElementById('status-badge');
    const footerBadge = document.getElementById('status-badge-footer');
    const footerLabel = document.getElementById('status-badge-footer-label');
    const footerDot = document.getElementById('status-badge-footer-dot');
    const footerPing = document.getElementById('status-badge-footer-ping');
    const h = new Date().getHours();
    const open = h >= 11 && h < 23;

    if (heroBadge) {
        heroBadge.textContent = currentLang === 'ar'
            ? (open ? 'مفتوح الآن · 11h—23h' : 'مغلق الآن · 11h—23h')
            : (open ? 'Ouvert maintenant · 11h—23h' : 'Ferme pour le moment · 11h—23h');
    }
    if (footerBadge && footerLabel) {
        footerBadge.className = 'inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full ' + (open ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400');
        footerLabel.textContent = currentLang === 'ar' ? (open ? 'مفتوح الآن' : 'مغلق الآن') : (open ? 'Ouvert maintenant' : 'Ferme pour le moment');
    }
    if (footerDot && footerPing) {
        footerDot.className = 'relative rounded-full h-2 w-2 ' + (open ? 'bg-green-400' : 'bg-red-400');
        footerPing.className = 'animate-ping absolute inset-0 rounded-full opacity-75 ' + (open ? 'bg-green-400' : 'bg-red-400');
    }
}

updateStatus();
setInterval(updateStatus, 60000);

/* ══════════════ LIGHTBOX ══════════════ */

function openLightbox(src, alt) {
    closeLightbox();
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = '<figure class="lightbox-figure"><button type="button" class="lightbox-close" aria-label="' + (currentLang === 'ar' ? 'اغلاق الصورة' : 'Fermer l image') + '"><i class="fas fa-times"></i></button><img class="lightbox-image" src="' + src + '" alt="' + (alt || 'Hamza Food') + '"><figcaption class="lightbox-caption">' + (alt || 'Hamza Food') + '</figcaption></figure>';
    overlay.addEventListener('click', event => {
        if (event.target === overlay || event.target.closest('.lightbox-close')) closeLightbox();
    });
    document.body.appendChild(overlay);
    lightboxEl = overlay;
    syncBodyLock();
    requestAnimationFrame(() => overlay.classList.add('is-visible'));
}

function closeLightbox() {
    if (!lightboxEl) return;
    const current = lightboxEl;
    lightboxEl = null;
    current.classList.remove('is-visible');
    setTimeout(() => current.remove(), 200);
    syncBodyLock();
}

function initGalleryLightbox() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (!img) return;
            openLightbox(img.src, img.alt);
        });
    });
}

/* ══════════════ MENU SEARCH ══════════════ */

function initMenuSearch() {
    const searchInput = document.getElementById('menuSearch');
    const resetButton = document.getElementById('menuReset');
    const featuredToggle = document.getElementById('menuFeaturedToggle');

    if (searchInput) {
        searchInput.value = menuQuery;
        searchInput.addEventListener('input', event => {
            menuQuery = event.target.value.trim();
            renderMenu();
        });
    }
    if (resetButton) {
        resetButton.addEventListener('click', () => { resetMenuFilters(); searchInput?.focus(); });
    }
    if (featuredToggle) {
        featuredToggle.addEventListener('click', () => { showFeaturedOnly = !showFeaturedOnly; renderTabs(); renderMenu(); });
    }
}

/* ══════════════ EVENT LISTENERS ══════════════ */

document.addEventListener('click', event => {
    if (!mobileNav || !navToggle || mobileNav.classList.contains('hidden')) return;
    if (mobileNav.contains(event.target) || navToggle.contains(event.target)) return;
    toggleMenu(false);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { toggleMenu(false); closeLightbox(); }
    if ((event.ctrlKey || event.metaKey) && (event.key === 'k' || event.key === 'K')) {
        event.preventDefault();
        const searchInput = document.getElementById('menuSearch');
        if (searchInput) { searchInput.focus(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }
    }
});

/* ══════════════ INIT ══════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Render menu first — most important
    applyLanguage(currentLang);
    initMenuSearch();
    updateActiveNav();

    // Non-critical visual enhancements — wrapped so errors don't break the menu
    try { initGalleryLightbox(); } catch(e) { console.warn('Gallery init:', e); }
    try { initCursor(); } catch(e) { console.warn('Cursor init:', e); }
    try { initParticles(); } catch(e) { console.warn('Particles init:', e); }
    try { initTilt(); } catch(e) { console.warn('Tilt init:', e); }
    try { initMagnetic(); } catch(e) { console.warn('Magnetic init:', e); }
});

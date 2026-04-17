/* ═══════════════════════════════════════════════
   HAMZA FOOD — Menu Data & Interactions
   ═══════════════════════════════════════════════ */

// ─── Full Menu Data ───
const MENU = {
    tacos: {
        name: 'طاكوس',
        nameEn: 'Tacos',
        emoji: '🌮',
        icon: 'fas fa-pepper-hot',
        items: [
            { name: 'طاكوس دجاج', nameEn: 'Poulet', price: 27, price2: 32, desc: 'دجاج متبل' },
            { name: 'طاكوس دجاج مشوي', nameEn: 'Poulet Grillé', price: 28, price2: 35, desc: 'دجاج مشوي طري' },
            { name: 'طاكوس شوارما', nameEn: 'Chawarma', price: 28, price2: 35, desc: 'شوارما لذيذة' },
            { name: 'طاكوس ناجتس', nameEn: 'Nuggets', price: 28, price2: 35, desc: 'ناجتس مقرمش' },
            { name: 'طاكوس كفتة', nameEn: 'Viande hachée', price: 30, price2: 36, desc: 'لحم مفروم' },
            { name: 'طاكوس كوردون بلو', nameEn: 'Cordon Bleu', price: 32, price2: 38, desc: 'كوردون بلو محشي' },
            { name: 'طاكوس ميكس', nameEn: 'Mixte', price: 33, price2: 40, desc: 'خليط لذيذ' },
            { name: 'طاكوس بيتزا', nameEn: 'Pizza', price: 38, price2: 43, desc: 'طاكوس + بيتزا' },
            { name: 'طاكوس حمزة ⭐', nameEn: 'Hamza', price: 38, price2: 45, desc: 'الطبق الخاص', featured: true }
        ]
    },
    burger: {
        name: 'برغر',
        nameEn: 'Hamburger',
        emoji: '🍔',
        icon: 'fas fa-hamburger',
        items: [
            { name: 'همبرغر سيمبل', nameEn: 'Simple', price: 23, desc: 'كلاسيكي' },
            { name: 'تشيزبرغر', nameEn: 'Cheeseburger', price: 27, desc: 'مع الفروماج' },
            { name: 'بيغ برغر', nameEn: 'Big Burger', price: 32, desc: 'حجم كبير' },
            { name: 'برغر كينغ ⭐', nameEn: 'Burgerking', price: 38, desc: 'الملك!', featured: true }
        ]
    },
    chawarma: {
        name: 'شوارما',
        nameEn: 'Chawarma',
        emoji: '🥙',
        icon: 'fas fa-drumstick-bite',
        items: [
            { name: 'شوارما سيمبل', nameEn: 'Simple', price: 25, desc: 'كلاسيكية' },
            { name: 'شوارما فروماج', nameEn: 'Fromage', price: 27, desc: 'مع الجبن' },
            { name: 'طبق صحن', nameEn: 'Plat soucoupe', price: 32, desc: 'طبق كامل' },
            { name: 'شوارما ميكس على الخبز', nameEn: 'Mixte sur pain', price: 35, desc: 'ميكس لذيذ' },
            { name: 'طبق ميكس', nameEn: 'Plat mixte', price: 43, desc: 'طبق ميكس كبير' },
            { name: 'شوارما دوبل ⭐', nameEn: 'Chawarma double', price: 45, desc: 'ضعف اللذة!', featured: true }
        ]
    },
    panini: {
        name: 'بانيني',
        nameEn: 'Panini',
        emoji: '🥖',
        icon: 'fas fa-bread-slice',
        items: [
            { name: 'بانيني هوت دوغ', nameEn: 'Hot dog', price: 22, desc: 'ساخن ولذيذ' },
            { name: 'بانيني تونة', nameEn: 'Thon', price: 23, desc: 'تونة طازجة' },
            { name: 'بانيني ديند', nameEn: 'Dinde', price: 25, desc: 'ديك رومي' },
            { name: 'بانيني دجاج مشوي', nameEn: 'Poulet grillé', price: 25, desc: 'مشوي طري' },
            { name: 'بانيني كفتة', nameEn: 'Viande hachée', price: 26, desc: 'لحم مفروم' },
            { name: 'بانيني سوسيس', nameEn: 'Saucisse', price: 26, desc: 'نقانق' },
            { name: 'بانيني ميكس', nameEn: 'Mixte', price: 30, desc: 'خليط' }
        ]
    },
    sandwich: {
        name: 'سندويتش',
        nameEn: 'Sandwich',
        emoji: '🥪',
        icon: 'fas fa-hotdog',
        items: [
            { name: 'سندويتش هوت دوغ', nameEn: 'Hot dog', price: 22, desc: 'كلاسيكي' },
            { name: 'سندويتش ستراسبورغ', nameEn: 'Strasbourg', price: 22, desc: 'ستراسبورغ' },
            { name: 'سندويتش ديند', nameEn: 'Dinde', price: 26, desc: 'ديك رومي' },
            { name: 'سندويتش دجاج مشوي', nameEn: 'Poulet grillé', price: 28, desc: 'دجاج مشوي' },
            { name: 'سندويتش سوسيس', nameEn: 'Saucisse', price: 28, desc: 'نقانق' },
            { name: 'سندويتش كفتة', nameEn: 'Viande hachée', price: 30, desc: 'لحم مفروم' },
            { name: 'سندويتش كفتة حمراء', nameEn: 'Kefta', price: 30, desc: 'كفتة مشوية' },
            { name: 'سندويتش فوا', nameEn: 'Foie', price: 35, desc: 'كبد' },
            { name: 'سندويتش ميكس', nameEn: 'Mixte', price: 35, desc: 'خليط مميز' }
        ]
    },
    plats: {
        name: 'أطباق',
        nameEn: 'Plats',
        emoji: '🍽️',
        icon: 'fas fa-bowl-food',
        items: [
            { name: 'طبق كفتة', nameEn: 'Viande hachée', price: 28, desc: 'لحم مفروم + فريت' },
            { name: 'طبق ديند', nameEn: 'Dinde', price: 30, desc: 'ديك رومي + فريت' },
            { name: 'طبق إيمنسي ديند', nameEn: 'Émincés de dinde', price: 32, desc: 'شرائح ديند' },
            { name: 'طبق ناجتس', nameEn: 'Nuggets', price: 32, desc: 'ناجتس + فريت' },
            { name: 'طبق فخدة دجاج', nameEn: 'Cuisse de poulet', price: 35, desc: 'فخدة + فريت' },
            { name: 'طبق كوردون بلو', nameEn: 'Cordon Bleu', price: 38, desc: 'كوردون بلو + فريت' }
        ]
    },
    tajin: {
        name: 'طاجين',
        nameEn: 'Tajin',
        emoji: '🥘',
        icon: 'fas fa-fire-burner',
        items: [
            { name: 'طاجين ديند', nameEn: 'Dinde', price: 28, desc: 'ديك رومي تقليدي' },
            { name: 'طاجين سوسيس', nameEn: 'Saucisse', price: 30, desc: 'نقانق بالطاجين' },
            { name: 'طاجين كفتة', nameEn: 'Viande hachée', price: 32, desc: 'كفتة بالبيض' },
            { name: 'طاجين بيل بيل ⭐', nameEn: 'Pil-Pil', price: 60, desc: 'الطبق المميز!', featured: true }
        ]
    },
    omelette: {
        name: 'أومليط',
        nameEn: 'Omelette',
        emoji: '🥚',
        icon: 'fas fa-egg',
        items: [
            { name: 'أومليط سيمبل', nameEn: 'Simple', price: 15, desc: 'بسيطة وطيبة' },
            { name: 'أومليط فروماج', nameEn: 'Fromage', price: 17, desc: 'مع الجبن' },
            { name: 'أومليط كريفيت', nameEn: 'Crevettes', price: 32, desc: 'مع الجمبري' },
            { name: 'أومليط شاف ⭐', nameEn: 'Chef', price: 35, desc: 'خاصة الشاف!', featured: true }
        ]
    },
    kids: {
        name: 'هدية الأطفال',
        nameEn: 'Offre Enfants',
        emoji: '🎁',
        icon: 'fas fa-child',
        items: [
            { name: 'بيتزا مارغاريتا + فريت + عصير', nameEn: 'Pizza Margarita + Frite + Jus', price: 35, desc: 'عرض الأطفال' },
            { name: 'همبرغر + فريت + عصير', nameEn: 'Hamburger + Frite + Jus', price: 30, desc: 'عرض الأطفال' }
        ]
    }
};

// ─── Render Menu ───
const menuGrid = document.getElementById('menu-grid');
let currentCat = 'all';

function renderMenu(cat) {
    currentCat = cat;
    menuGrid.innerHTML = '';

    const cats = cat === 'all' ? Object.keys(MENU) : [cat];
    let delay = 0;

    cats.forEach(catKey => {
        const catData = MENU[catKey];
        if (!catData) return;

        // Category header (only in 'all' view)
        if (cat === 'all') {
            const header = document.createElement('div');
            header.className = 'menu-cat-header';
            header.innerHTML = `<span class="cat-emoji">${catData.emoji}</span><h3>${catData.name} — ${catData.nameEn}</h3>`;
            menuGrid.appendChild(header);
        }

        catData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = `menu-card${item.featured ? ' featured' : ''}`;
            card.style.animationDelay = `${delay * 0.05}s`;

            const priceHtml = item.price2
                ? `<span class="mc-price">${item.price}<small>dh</small> / ${item.price2}<small>dh</small></span>`
                : `<span class="mc-price">${item.price}<small>dh</small></span>`;

            card.innerHTML = `
                <div class="mc-icon"><i class="${catData.icon}"></i></div>
                <div class="mc-info">
                    <div class="mc-name">${item.name}</div>
                    <div class="mc-desc">${item.nameEn} — ${item.desc}</div>
                </div>
                ${priceHtml}
            `;
            menuGrid.appendChild(card);
            delay++;
        });
    });
}

// ─── Menu Tab Clicks ───
document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderMenu(tab.dataset.cat);
    });
});

// Initial render
renderMenu('all');

// ─── Navbar Scroll ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── Mobile Menu Toggle ───
function toggleMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.getElementById('navLinks');
    toggle.classList.toggle('active');
    links.classList.toggle('active');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-toggle').classList.remove('active');
        document.getElementById('navLinks').classList.remove('active');
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
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ─── Swiper Reviews ───
new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// ─── Loader ───
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1800);
});

// ─── Update open/closed status ───
function updateOpenStatus() {
    const now = new Date();
    const hour = now.getHours();
    const badge = document.querySelector('.status-badge');
    if (badge) {
        if (hour >= 11 && hour < 23) {
            badge.className = 'status-badge open';
            badge.innerHTML = '<span class="dot"></span> مفتوح الآن';
        } else {
            badge.className = 'status-badge closed';
            badge.style.background = 'rgba(230,57,70,0.1)';
            badge.style.color = '#E63946';
            badge.innerHTML = '<span class="dot"></span> مغلق حالياً';
        }
    }
}
updateOpenStatus();

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

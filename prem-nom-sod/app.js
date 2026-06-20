/* --------------------------------------------------
 * prem-nom-sod - Application Logic
 * Features: Multilingual (TH/ZH), Cart State, Lightbox, Dynamic Render
 * -------------------------------------------------- */

// --- 1. Multilingual Translations Dictionary ---
const translations = {
    th: {
        web_title: "เปรมนมสด - นมโคแท้ 100% และขนมปังปิ้งเตาถ่าน",
        nav_brand: "เปรมนมสด",
        nav_home: "หน้าแรก",
        nav_about: "เกี่ยวกับเรา",
        nav_menu: "เมนูแนะนำ",
        nav_gallery: "บรรยากาศร้าน",
        nav_contact: "ติดต่อเรา",
        hero_title: "เปรมนมสด",
        hero_subtitle: "นมโคแท้ 100% หอม มัน กลมกล่อม เสิร์ฟพร้อมขนมปังปิ้งเตาถ่านหอมกรุ่น",
        hero_btn: "ดูเมนูร้าน",
        about_badge: "นมโคสดแท้",
        about_tag: "เรื่องราวของร้าน",
        about_title: "ความใส่ใจในทุกหยดและทุกแผ่น",
        about_desc_1: "เราเริ่มก่อตั้งร้านด้วยความตั้งใจที่จะมอบรสชาติความสุขที่แท้จริงจาก \"นมโคแท้ 100% เกรดพรีเมียม\" ที่ผ่านกระบวนการต้มอย่างพิถีพิถันจนได้ความหอม มัน และเข้มข้นที่เป็นเอกลักษณ์เฉพาะตัว",
        about_desc_2: "ไม่เพียงแค่นมสดเท่านั้น ขนมปังปิ้งเตาถ่านแบบโบราณของเราก็ใช้เตาถ่านในการปิ้งแบบดั้งเดิม ทำให้ตัวขนมปังมีความกรอบนอก นุ่มใน และมีกลิ่นหอมกรุ่นควันไฟจางๆ ทานคู่กับสังขยาใบเตยโฮมเมดสูตรคุณแม่ รับรองว่าคุณจะตกหลุมรักในทันที",
        about_feat_1_title: "นมโคสดแท้ 100%",
        about_feat_1_desc: "ส่งตรงจากฟาร์มท้องถิ่นทุกวัน ปราศจากสารเคมีเจือปน",
        about_feat_2_title: "ปิ้งเตาถ่านดั้งเดิม",
        about_feat_2_desc: "หอมกลิ่นไหม้เตาถ่านอ่อนๆ กรอบนอกนุ่มในฟินสุดๆ",
        menu_tag: "เมนูแนะนำ",
        menu_title: "ลิ้มลองความอร่อยยอดนิยม",
        menu_subtitle: "เลือกสรรความอร่อยที่คุณชื่นชอบลงตะกร้า แล้วสั่งจำลองได้เลยทันที",
        menu_tab_all: "ทั้งหมด",
        menu_tab_milk: "นมสด",
        menu_tab_toast: "ขนมปังปิ้ง",
        gallery_tag: "บรรยากาศร้าน",
        gallery_title: "ความอบอุ่นใน \"เปรมนมสด\"",
        gallery_subtitle: "เพลิดเพลินกับมุมถ่ายรูปสวยๆ และบรรยากาศที่แสนเป็นกันเองของเรา",
        contact_header: "เปรมนมสด",
        contact_sub: "ความสุขง่ายๆ เสิร์ฟในแก้วนมและขนมปังร้อนๆ",
        contact_address_title: "ที่อยู่ร้าน",
        contact_address_desc: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110",
        contact_hours_title: "เวลาเปิดทำการ",
        contact_hours_desc: "เปิดบริการทุกวัน 16:30 น. - 23:30 น.",
        contact_phone_title: "เบอร์โทรศัพท์",
        feedback_title: "ส่งข้อความหาเรา",
        form_name: "ชื่อของคุณ",
        form_email: "อีเมล / เบอร์โทร",
        form_msg: "ข้อความ",
        form_btn: "ส่งข้อความ",
        footer_design: "ออกแบบด้วยความรักพรีเมียม 💖 เพื่อคนรักนมสด",
        cart_title: "ตะกร้าของคุณ",
        cart_empty: "ยังไม่มีสินค้าในตะกร้า",
        cart_total: "ราคารวมทั้งสิ้น:",
        cart_checkout: "ส่งรายการสั่งซื้อจำลอง",
        success_title: "สั่งซื้อจำลองสำเร็จ!",
        success_msg: "ระบบได้รับรายการจำลองเรียบร้อยแล้ว! นมสดแท้และขนมปังร้อนๆ กำลังเตรียมเสิร์ฟในจินตนาการของคุณ",
        success_summary_title: "รายละเอียดคำสั่งซื้อ",
        success_btn: "กลับไปหน้าร้าน",
        add_to_cart_btn: "เพิ่มลงตะกร้า"
    },
    zh: {
        web_title: "Prem Nom Sod - 100% 纯鲜牛奶与炭烤吐司",
        nav_brand: "เปรมนมสด (普瑞姆鲜奶)",
        nav_home: "首页",
        nav_about: "关于我们",
        nav_menu: "推荐菜色",
        nav_gallery: "店铺环境",
        nav_contact: "联系我们",
        hero_title: "เปรมนมสด",
        hero_subtitle: "100% 纯鲜牛奶，浓郁香醇，搭配炭火烤制的香脆吐司",
        hero_btn: "浏览菜单",
        about_badge: "100% 纯鲜奶",
        about_tag: "品牌故事",
        about_title: "每一滴、每一片的匠心坚守",
        about_desc_1: "我们创立这家店铺的初衷，是为了分享来自优质农场的 “100% 纯鲜牛奶” 的纯粹美味。经过精细的慢火熬煮，呈现出独特的浓郁奶香。",
        about_desc_2: "除了香浓鲜奶，我们的传统炭烤吐司也坚持使用传统炭火烤制，外焦里嫩，带着淡淡的炭香。搭配纯手工制作的招牌班兰叶咖椰酱，绝对让您一尝难忘。",
        about_feat_1_title: "100% 纯鲜奶",
        about_feat_1_desc: "每日由当地牧场新鲜直达，无任何添加剂",
        about_feat_2_title: "传统炭火烤制",
        about_feat_2_desc: "独特的淡淡炭香味，外酥里嫩，极致美味",
        menu_tag: "推荐菜色",
        menu_title: "品尝人气美味",
        menu_subtitle: "挑选您喜爱的美食放入购物车，即可体验模拟下单",
        menu_tab_all: "全部",
        menu_tab_milk: "鲜奶类",
        menu_tab_toast: "炭烤吐司",
        gallery_tag: "店铺环境",
        gallery_title: "温暖的 “เปรมนมสด” 空间",
        gallery_subtitle: "在这里享受拍照打卡的乐趣，感受温馨舒适的氛围",
        contact_header: "เปรมนมสด",
        contact_sub: "一杯温鲜奶与香脆吐司，传递简单的幸福",
        contact_address_title: "店铺地址",
        contact_address_desc: "曼谷空堤区素坤逸路 123 号，邮编 10110",
        contact_hours_title: "营业时间",
        contact_hours_desc: "每日营业 16:30 - 23:30",
        contact_phone_title: "联系电话",
        feedback_title: "留言给我们",
        form_name: "您的姓名",
        form_email: "电子邮箱 / 电话",
        form_msg: "您的留言",
        form_btn: "提交留言",
        footer_design: "高品质精心设计 💖 献给鲜奶爱好者",
        cart_title: "您的购物车",
        cart_empty: "购物车目前为空",
        cart_total: "订单总额:",
        cart_checkout: "提交模拟订单",
        success_title: "模拟下单成功！",
        success_msg: "您的模拟订单已提交！香浓的鲜奶与热腾腾的烤吐司正在想象中为您准备。",
        success_summary_title: "订单明细",
        success_btn: "返回店铺",
        add_to_cart_btn: "加入购物车"
    }
};

// --- 2. Menu Items Dataset ---
const menuItems = [
    {
        id: 1,
        nameTH: "นมสดร้อนออริจินัล",
        nameZH: "经典热鲜奶",
        category: "milk",
        price: 35,
        descTH: "นมโคสดแท้ 100% ต้มร้อนๆ หอมกลิ่นนมธรรมชาติ รสชาติละมุนลิ้น",
        descZH: "100% 纯热鲜牛奶，天然乳香，口感丝滑细腻",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/เมนูร้าน/44318093_775478239458207_3282462492936110080_n.jpg",
        fallbackImg: "../เมนูร้าน/44318093_775478239458207_3282462492936110080_n.jpg"
    },
    {
        id: 2,
        nameTH: "ปังปิ้งสังขยาใบเตย",
        nameZH: "招牌班兰叶咖椰吐司",
        category: "toast",
        price: 45,
        descTH: "ขนมปังปิ้งเตาถ่านกรอบนอกนุ่มใน ราดซอสสังขยาใบเตยสูตรโฮมเมดเข้มข้นหอมกรุ่น",
        descZH: "炭烤至金黄酥脆的吐司，淋上纯手工熬制的浓郁班兰叶酱",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/เมนูร้าน/44342331_775477832791581_5534039281854578688_n.jpg",
        fallbackImg: "../เมนูร้าน/44342331_775477832791581_5534039281854578688_n.jpg"
    },
    {
        id: 3,
        nameTH: "นมเย็นพาสเทลชมพู",
        nameZH: "经典粉红冰奶",
        category: "milk",
        price: 40,
        descTH: "นมเย็นสีชมพูหวานละมุน นมโคสดผสมไซรัปแดงสไตล์ไทย หวานมันสดชื่น",
        descZH: "泰国风味粉红冰牛奶，鲜奶与红糖浆完美融合，甜而不腻",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/เมนูร้าน/492412841_2527023350970345_4918805182070823305_n.jpg",
        fallbackImg: "../เมนูร้าน/492412841_2527023350970345_4918805182070823305_n.jpg"
    },
    {
        id: 4,
        nameTH: "ปังปิ้งเนยนมน้ำตาล",
        nameZH: "经典奶油炼乳吐司",
        category: "toast",
        price: 35,
        descTH: "ขนมปังทาเนยสดปิ้งเตาถ่านร้อนๆ ราดนมข้นหวานและโรยน้ำตาล อร่อยคลาสสิก",
        descZH: "抹上香浓黄油的炭烤吐司，淋上香甜炼乳并撒上白糖，经典必点",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/เมนูร้าน/492846847_2529634777375869_7035050521733813971_n.jpg",
        fallbackImg: "../เมนูร้าน/492846847_2529634777375869_7035050521733813971_n.jpg"
    },
    {
        id: 5,
        nameTH: "นมสดอัญชันเย็น",
        nameZH: "蝶豆花鲜奶",
        category: "milk",
        price: 45,
        descTH: "นมสดแท้ผสมน้ำอัญชันสีฟ้าพาสเทลสวยงาม เพิ่มความสดชื่นและมีมิติสุขภาพดี",
        descZH: "富含营养的天然蝶豆花汁融入冰鲜奶，呈现梦幻淡蓝色泽",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/เมนูร้าน/492942909_2528367987502548_811911000064678643_n.jpg",
        fallbackImg: "../เมนูร้าน/492942909_2528367987502548_811911000064678643_n.jpg"
    },
    {
        id: 6,
        nameTH: "ปังปิ้งเนยนมภูเขาไฟ",
        nameZH: "火山美禄吐司",
        category: "toast",
        price: 50,
        descTH: "ขนมปังเนยนมปิ้งเตาถ่าน จัดเต็มด้วยผงไมโล/โอวัลตินเข้มข้นพูนๆ ประหนึ่งภูเขาไฟ",
        descZH: "热腾腾的牛油吐司，表面洒满厚厚的美禄巧克力粉与炼乳，口感丰富",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/เมนูร้าน/493473120_2528534147485932_1438962868243656304_n.jpg",
        fallbackImg: "../เมนูร้าน/493473120_2528534147485932_1438962868243656304_n.jpg"
    },
    {
        id: 7,
        nameTH: "ชาไทยพรีเมียมเย็น",
        nameZH: "泰式皇家冰奶茶",
        category: "milk",
        price: 45,
        descTH: "ชาไทยสีส้มเข้มข้น กลิ่นหอมใบชาแท้ ผสมกับนมโคสดหอมมัน ลงตัวที่สุด",
        descZH: "精选皇家泰茶茶叶，冲泡出浓郁茶香，融入香甜鲜奶，泰味十足",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/เมนูร้าน/493540617_2527023530970327_8570458719034524791_n.jpg",
        fallbackImg: "../เมนูร้าน/493540617_2527023530970327_8570458719034524791_n.jpg"
    }
];

// --- 3. Gallery Items Dataset ---
const galleryItems = [
    {
        id: 1,
        captionTH: "บรรยากาศหน้าร้านเปรมนมสด แสงไฟอบอุ่นต้อนรับลูกค้า",
        captionZH: "Prem Nom Sod 店门口，温馨灯光迎接每位顾客",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/บรรยากาศในร้าน/461514505_2344750892530926_8616067714999523478_n.jpg",
        fallbackImg: "../บรรยากาศในร้าน/461514505_2344750892530926_8616067714999523478_n.jpg"
    },
    {
        id: 2,
        captionTH: "มุมจัดโต๊ะสวยงาม ตกแต่งด้วยความใส่ใจ น่ารักสไตล์พาสเทล",
        captionZH: "用心布置的店内角落，温馨可爱的马卡龙色调",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/บรรยากาศในร้าน/492518988_2527277434278270_2006123765050258299_n.jpg",
        fallbackImg: "../บรรยากาศในร้าน/492518988_2527277434278270_2006123765050258299_n.jpg"
    },
    {
        id: 3,
        captionTH: "ขนมปังปิ้งเตาถ่านสดใหม่เสิร์ฟร้อนๆ จากครัว",
        captionZH: "厨房炉火炭烤，热气腾腾新鲜出炉的吐司",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/บรรยากาศในร้าน/492549908_2527277360944944_1235157329857653281_n.jpg",
        fallbackImg: "../บรรยากาศในร้าน/492549908_2527277360944944_1235157329857653281_n.jpg"
    },
    {
        id: 4,
        captionTH: "นมสดคัดสรรพิเศษบรรจุแก้วพร้อมจำหน่าย",
        captionZH: "精心挑选的醇香牛奶，随时为您呈现",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/บรรยากาศในร้าน/493940943_2527267730945907_8741123150059989016_n.jpg",
        fallbackImg: "../บรรยากาศในร้าน/493940943_2527267730945907_8741123150059989016_n.jpg"
    },
    {
        id: 5,
        captionTH: "ลูกค้าเพลิดเพลินกับความหวานละมุนในช่วงเย็น",
        captionZH: "顾客们在这里享受傍晚的甜蜜舒适时光",
        img: "D:/สอน AI/ช่วงบ่าย/02 ข้อมูล DashBoard/01 ข้อมูล landing page/ร้านนม/บรรยากาศในร้าน/494147542_2529628654043148_5498278050551664507_n.jpg",
        fallbackImg: "../บรรยากาศในร้าน/494147542_2529628654043148_5498278050551664507_n.jpg"
    }
];

// --- 4. Application State Variables ---
let currentLanguage = 'th';
let cart = [];
let activeCategoryFilter = 'all';

// --- 5. DOM Element Selectors ---
const elements = {
    langTH: document.getElementById('langTH'),
    langZH: document.getElementById('langZH'),
    menuGrid: document.getElementById('menuGrid'),
    galleryGrid: document.getElementById('galleryGrid'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    
    // Cart Elements
    cartTrigger: document.getElementById('cartTrigger'),
    cartClose: document.getElementById('cartClose'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartItemsList: document.getElementById('cartItemsList'),
    cartBadge: document.getElementById('cartBadge'),
    cartTotalSum: document.getElementById('cartTotalSum'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    
    // Lightbox
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxClose: document.getElementById('lightboxClose'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    
    // Checkout Modal
    checkoutSuccessOverlay: document.getElementById('checkoutSuccessOverlay'),
    successCloseBtn: document.getElementById('successCloseBtn'),
    orderItemsSummary: document.getElementById('orderItemsSummary'),
    successTotalSum: document.getElementById('successTotalSum'),
    
    // Header/Mobile Menu
    navbar: document.querySelector('.navbar'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link')
};

// --- 6. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('th'); // Default language is Thai
    renderMenu();
    renderGallery();
    setupEventListeners();
});

// --- 7. Event Listeners Config ---
function setupEventListeners() {
    // Language togglers
    elements.langTH.addEventListener('click', () => switchLanguage('th'));
    elements.langZH.addEventListener('click', () => switchLanguage('zh'));
    
    // Tab Filters
    elements.tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            elements.tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategoryFilter = btn.dataset.filter;
            renderMenu();
        });
    });

    // Sticky Navbar & ScrollSpy active links
    window.addEventListener('scroll', () => {
        // Sticky Header class scrolled
        if (window.scrollY > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
        
        // Scrollspy highlight
        let fromTop = window.scrollY + 120;
        elements.navLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (section) {
                if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    elements.navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Mobile Hamburger Menu Toggle
    elements.menuToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        const icon = elements.menuToggle.querySelector('i');
        if (elements.navMenu.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close Mobile Menu when link clicked
    elements.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            elements.navMenu.classList.remove('active');
            elements.menuToggle.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // Cart Drawer actions
    elements.cartTrigger.addEventListener('click', openCart);
    elements.cartClose.addEventListener('click', closeCart);
    elements.cartOverlay.addEventListener('click', closeCart);
    elements.checkoutBtn.addEventListener('click', triggerCheckout);

    // Lightbox actions
    elements.lightboxClose.addEventListener('click', () => elements.lightboxModal.classList.remove('active'));
    elements.lightboxModal.addEventListener('click', (e) => {
        if (e.target === elements.lightboxModal) {
            elements.lightboxModal.classList.remove('active');
        }
    });
    
    // Esc key closes lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            elements.lightboxModal.classList.remove('active');
            closeCart();
        }
    });

    // Success Modal action
    elements.successCloseBtn.addEventListener('click', closeSuccessModal);
}

// --- 8. Language Management Function ---
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Toggle active state of language buttons
    if (lang === 'th') {
        elements.langTH.classList.add('active');
        elements.langZH.classList.remove('active');
        document.documentElement.lang = 'th';
    } else {
        elements.langZH.classList.add('active');
        elements.langTH.classList.remove('active');
        document.documentElement.lang = 'zh';
    }
    
    // Translate static elements that have a data-key attribute
    const translatableElements = document.querySelectorAll('[data-key]');
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Re-render components with translated dynamic contents
    renderMenu();
    updateCartUI();
}

// --- 9. Rendering Menu Cards ---
function renderMenu() {
    elements.menuGrid.innerHTML = '';
    
    const filteredItems = menuItems.filter(item => {
        return activeCategoryFilter === 'all' || item.category === activeCategoryFilter;
    });

    filteredItems.forEach(item => {
        const name = currentLanguage === 'th' ? item.nameTH : item.nameZH;
        const description = currentLanguage === 'th' ? item.descTH : item.descZH;
        const categoryLabel = item.category === 'milk' 
            ? (currentLanguage === 'th' ? 'นมสด' : '鲜奶') 
            : (currentLanguage === 'th' ? 'ขนมปังปิ้ง' : '烤吐司');
            
        const card = document.createElement('div');
        card.className = 'menu-card glass-effect';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <span class="card-category">${categoryLabel}</span>
                <img src="${item.img}" alt="${name}" class="card-img" onerror="this.onerror=null; this.src='${item.fallbackImg}';">
            </div>
            <div class="card-content">
                <div>
                    <h3 class="card-title">${name}</h3>
                    <p class="card-desc">${description}</p>
                </div>
                <div class="card-footer">
                    <span class="card-price">฿${item.price}</span>
                    <button class="btn-add-cart" onclick="addToCart(${item.id})" title="${translations[currentLanguage].add_to_cart_btn}">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        elements.menuGrid.appendChild(card);
    });
}

// --- 10. Rendering Atmosphere Gallery ---
function renderGallery() {
    elements.galleryGrid.innerHTML = '';
    
    galleryItems.forEach((item, index) => {
        const caption = currentLanguage === 'th' ? item.captionTH : item.captionZH;
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.img}" alt="Gallery ${item.id}" class="gallery-image" onerror="this.onerror=null; this.src='${item.fallbackImg}';">
            <div class="gallery-overlay">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
            </div>
        `;
        
        // Add click listener to show lightbox
        galleryItem.addEventListener('click', () => {
            elements.lightboxImage.src = item.img;
            // set fallback in case lightbox fails
            elements.lightboxImage.onerror = function() {
                this.onerror = null;
                this.src = item.fallbackImg;
            };
            elements.lightboxCaption.innerText = caption;
            elements.lightboxModal.classList.add('active');
        });
        
        elements.galleryGrid.appendChild(galleryItem);
    });
}

// --- 11. Shopping Cart Functions ---
function openCart() {
    elements.cartDrawer.classList.add('active');
    elements.cartOverlay.classList.add('active');
}

function closeCart() {
    elements.cartDrawer.classList.remove('active');
    elements.cartOverlay.classList.remove('active');
}

function addToCart(itemId) {
    const item = menuItems.find(m => m.id === itemId);
    if (!item) return;

    const existingCartItem = cart.find(ci => ci.id === itemId);
    if (existingCartItem) {
        existingCartItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            price: item.price,
            nameTH: item.nameTH,
            nameZH: item.nameZH,
            img: item.img,
            fallbackImg: item.fallbackImg,
            quantity: 1
        });
    }

    updateCartUI();
    openCart(); // Show drawer on add
    
    // Small micro-animation for cart trigger
    elements.cartTrigger.style.transform = 'scale(1.2)';
    setTimeout(() => {
        elements.cartTrigger.style.transform = 'none';
    }, 200);
}

window.addToCart = addToCart; // Make globally accessible for onclick attributes

function changeQuantity(itemId, amount) {
    const cartItem = cart.find(ci => ci.id === itemId);
    if (!cartItem) return;

    cartItem.quantity += amount;
    if (cartItem.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartUI();
    }
}
window.changeQuantity = changeQuantity;

function removeFromCart(itemId) {
    cart = cart.filter(ci => ci.id !== itemId);
    updateCartUI();
}
window.removeFromCart = removeFromCart;

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
    elements.cartItemsList.innerHTML = '';
    
    let totalItems = 0;
    cart.forEach(item => totalItems += item.quantity);
    elements.cartBadge.innerText = totalItems;

    if (cart.length === 0) {
        elements.cartItemsList.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-box-open"></i>
                <p>${translations[currentLanguage].cart_empty}</p>
            </div>
        `;
        elements.cartTotalSum.innerText = '฿0';
        elements.checkoutBtn.disabled = true;
        return;
    }

    cart.forEach(item => {
        const name = currentLanguage === 'th' ? item.nameTH : item.nameZH;
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item';
        itemRow.innerHTML = `
            <img src="${item.img}" alt="${name}" class="cart-item-img" onerror="this.onerror=null; this.src='${item.fallbackImg}';">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${name}</h4>
                <div class="cart-item-price">฿${item.price}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
        elements.cartItemsList.appendChild(itemRow);
    });

    const grandTotal = calculateTotal();
    elements.cartTotalSum.innerText = `฿${grandTotal}`;
    elements.checkoutBtn.disabled = false;
}

// --- 12. Checkout Functionality ---
function triggerCheckout() {
    closeCart();
    
    // Clear items summary in checkout modal
    elements.orderItemsSummary.innerHTML = '';
    
    // Populate summaries
    cart.forEach(item => {
        const name = currentLanguage === 'th' ? item.nameTH : item.nameZH;
        const summaryRow = document.createElement('div');
        summaryRow.className = 'order-summary-item';
        summaryRow.innerHTML = `
            <span>${name} x ${item.quantity}</span>
            <span>฿${item.price * item.quantity}</span>
        `;
        elements.orderItemsSummary.appendChild(summaryRow);
    });

    const grandTotal = calculateTotal();
    elements.successTotalSum.innerText = `฿${grandTotal}`;
    
    // Open Success Checkout Modal overlay
    elements.checkoutSuccessOverlay.classList.add('active');
}

function closeSuccessModal() {
    elements.checkoutSuccessOverlay.classList.remove('active');
    cart = []; // clear cart
    updateCartUI();
}

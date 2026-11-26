"use strict";

const catalogBrands = [
    {nama: "Apple iBox", 
        imageLink: "https://zonalogo.com/assets/apple-logo-png-svg.webp"},
    {nama: "Samsung TAM", 
        imageLink: "https://zonalogo.com/assets/samsung-logo-png-svg.webp?asset=2649"},
    {nama: "Xiaomi", 
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWKJGCNpzaU95CrnKmSHAsV26e8AP6V9GU5X84082dfcag7anGuHfUEaw&s=10"},
    {nama: "Google Pixel", 
        imageLink: "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/12/Black-google-logo-design-on-transparent-background-PNG.png"},
    {nama: "Oppo TAM", 
        imageLink: "https://i.pinimg.com/736x/9f/c2/60/9fc2604b5e46b15575f807ffacf7c95c.jpg"},
    {nama: "Sony Audio", 
        imageLink: "https://zonalogo.com/assets/sony-logo-png-svg.webp"},
    {nama: "OnePlus", 
        imageLink: "https://static.vecteezy.com/system/resources/previews/068/277/124/non_2x/oneplus-black-icon-mobile-company-brand-official-logo-emblem-premium-quality-transparent-background-free-png.png"},
];
        
const catalogProduk = [
    {  
        id: 1,
        name: "iPhone 15 Pro 128GB Titanium",
        priceString: "Rp 18.999.000",
        priceNumber: 18999000,
        discount: 0.15,
        description: "Kamera utama 48MP Pro dengan sensor canggih, chip A17 Pro super cepat untuk gaming berat, bodi berbahan titanium kelas dirgantara, serta port USB-C universal berkecepatan tinggi.",
        spesifikasi: [
            "A17 Pro", "Titanium", "5G Ready", "Dynamic Island", "ProRes Video", "USB-C 3.0"
        ],
        imageLink: "https://awsimages.detik.net.id/community/media/visual/2023/11/08/iphone-15-1_169.jpeg?w=1200"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 256GB",
        priceString: "Rp 13.499.000",
        priceNumber: 13499000,
        discount: 0.15,
        description: "Fitur cerdas Galaxy AI, layar Dynamic AMOLED 2X super cerah, dan performa baterai awet sepanjang hari untuk menunjang aktivitas harian.",
        spesifikasi: [
            "Galaxy AI", "Exynos 2400", "AMOLED 2X", "50MP Camera", "IP68 Waterproof", "Super Fast Charge"
        ],
        imageLink: "https://asset.kompas.com/crops/lwaDzCuwKgljRGyhqp8xW3gA8Xk=/169x425:4000x2979/1200x800/data/photo/2024/01/17/65a7746169421.jpg"
    },
    {
        id: 3, 
        name: "Powerbank Anker 10k PD", 
        priceString: "Rp 349.000",
        priceNumber: 349000,
        discount: 0.10,
        description: "Powerbank mungil berkecepatan 30W Power Delivery dengan kabel Type-C built-in yang praktis untuk pengisian daya di mana saja.",
        spesifikasi: [
            "10000mAh", "30W PD", "Built-in Cable", "PowerIQ 3.0", "Trickle Charge", "Ultra Compact"
        ],
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnudIVHjNxecqANBe_caWJ03PPlZF7YKatzKlZqKZ8Gu2CB9Jn-I6vMJ2&s=10"
    },
    {
        id: 4, 
        name: "TWS Soundcore R50i",
        priceString: "Rp 199.000",
        priceNumber: 199000,
        discount: 0.10,
        description: "TWS bluetooth dengan bass mantap, tahan cipratan air IPX5, dan total daya baterai awet hingga 30 jam bersama charging case.",
        spesifikasi: [
            "Bluetooth 5.3", "IPX5 Water", "30h Playtime", "10mm Drivers", "BassUp Tech", "Soundcore App"
        ],
        imageLink: "https://cdn.shopify.com/s/files/1/0610/7640/6438/files/A_charging_dock_with_TWS_bluetooth_headset.jpg?v=1689238593"
    },
];

// const appleDiv = document.querySelector(".apple-logo");
// const samsungDiv = document.createElement("div");
//  samsungDiv.classList.add("samsung-logo");

//  const imEl = document.createElement("img");
//  imEl.src = "https://zonalogo.com/assets/samsung-logo-png-svg.webp?asset=2649";
//  imEl.alt = "Samsung Logo";
//  imEl.classList.add("brandpid");
//  imEl.style.width = "40px";

//  const textEl = document.createElement("p");
//  textEl.classList.add("brand-p");
//  textEl.textContent = "Samsung TAM";

//  samsungDiv.appendChild(imEl);
//  samsungDiv.appendChild(textEl);
//  appleDiv.appendChild(samsungDiv); 

const KATEGORI_LIST = ["iPhone", "Samsung", "Powerbank", "TWS"];

const brandContainer = document.querySelector(".brand-logo-main");
const productContainer = document.querySelector(".catalog-container");
const catalogHeader = document.querySelector(".catalog-header");

let selectedCategory = "";
let searchInputEl = null;
let clearBtnEl = null;
let categoryButtons = [];

function renderBrands(brands){
    if(!brandContainer) return;
    brandContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();

    brands.forEach((brand,index) => {
        const brandDiv = document.createElement("div");
        brandDiv.className = `brand-item-${index + 1}`;

        const imgEl = document.createElement("img");
        imgEl.src = brand.imageLink;
        imgEl.alt = `${brand.nama}Logo`;
        imgEl.className = "brandpict";

        const pEl = document.createElement("p");
        pEl.className = "brand-p";
        pEl.textContent = brand.nama;

        brandDiv.appendChild(imgEl);
        brandDiv.appendChild(pEl);
        fragment.appendChild(brandDiv)
    });

    brandContainer.appendChild(fragment);
}

function renderProducts(products, label =""){
    if(!productContainer) return;
    productContainer.innerHTML ="";

    if(!products||products.length === 0){
        const emptyMsg = document.createElement("p");
        emptyMsg.className = "search-empty";
        emptyMsg.textContent = `Tidak ada produk yang cocok dengan "${label}".`;
        productContainer.appendChild(emptyMsg);
        return;
    }

    const fragment = document.createDocumentFragment();

    products.forEach((prod, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = `product-card${index + 1}product-item-${prod.id}`;

        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";

        const badgeTag = document.createElement("span");
        badgeTag.className = "badge-tag";
        badgeTag.textContent = prod.badge||"OFFICIAL";

        const categoryTag = document.createElement("span");
        categoryTag.className = "category-tag";
        categoryTag.textContent = prod.category||"Gadget";

        cardHeader.appendChild(badgeTag);
        cardHeader.appendChild(categoryTag);

        const imageDiv = document.createElement("div");
        imageDiv.className = "image-iphone";

        const prodImg = document.createElement("img");
        prodImg.src = prod.imageLink;
        prodImg.alt = prod.name;
        prodImg.className = "product-image";

        imageDiv.appendChild(prodImg);

        const productInfo = document.createElement("div");
        productInfo.className = "product-info";

        const priceSpan = document.createElement("span");
        priceSpan.className = "product-price";
        priceSpan.textContent = prod.priceString;

        const nameH2 = document.createElement("h2");
        nameH2.className = "product-name";
        nameH2.textContent = prod.name;

        const descP = document.createElement("p");
        descP.className = "product-detail";
        descP.textContent = prod.description;

        const specsContainer = document.createElement("div");
        specsContainer.className = "specs-tag";
        (prod.spesifikasi||[]).forEach((spec) => {
            const specTag = document.createElement("span");
            specTag.className = "spec-tag";
            specTag.textContent = spec;
            specsContainer.appendChild(specTag);
        });

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "card-actions";

        const btnPrimary = document.createElement("button");
        btnPrimary.type = "button";
        btnPrimary.className = "btn-primary";
        btnPrimary.textContent = "Beli Sekarang";
        btnPrimary.dataset.productId = String(prod.id);

        const btnSecondary = document.createElement("button");
        btnSecondary.type = "button";
        btnSecondary.className = "btn-secondary";
        btnSecondary.textContent = "Spesifikasi";

        actionsDiv.appendChild(btnPrimary);
        actionsDiv.appendChild(btnSecondary);

        productInfo.appendChild(priceSpan);
        productInfo.appendChild(nameH2);
        productInfo.appendChild(descP);
        productInfo.appendChild(specsContainer);
        productInfo.appendChild(actionsDiv);

        cardDiv.appendChild(cardHeader);
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(productInfo);

        fragment.appendChild(cardDiv);
    });

    productContainer.appendChild(fragment);
}

function updateCategoryButtons(){
    categoryButtons.forEach((btn) => {
        const isActive = btn.dataset.category === selectedCategory;
        btn.classList.toggle("active", isActive);
    });
}

function runCombinedFilter(){
    const rawKeyword = searchInputEl?searchInputEl.value:"";
    const trimmedKeyword = rawKeyword.trim();
    const searchKey = trimmedKeyword.toLowerCase();
    const categoryKey = selectedCategory.toLowerCase();

    if(!searchKey&&!categoryKey){
        renderProducts(catalogProduk);
        return;
    }

    const filtered = catalogProduk.filter((prod) => {
        const nameLower = prod.name.toLowerCase();
        const descLower = prod.description.toLowerCase();
        const specsLower = (prod.spesifikasi||[]).map((s) => s.toLowerCase());

        const matchSearch = !searchKey||(
            nameLower.includes(searchKey)||
            descLower.includes(searchKey)||
            specsLower.some((s) => s.includes(searchKey))
        );

        const matchCategory = !categoryKey||(
            nameLower.includes(categoryKey)||
            descLower.includes(categoryKey)||
            specsLower.some((s) => s.includes(categoryKey))
        );

        return matchSearch && matchCategory;
    });

    renderProducts(filtered, trimmedKeyword || selectedCategory);
}

function createSearchAndCategoryFilter(){
    const wrapper = document.createElement("div");
    wrapper.className = "search-filter-wrapper";

    const searchBox = document.createElement("div");
    searchBox.className = "search-wrapper";

    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.id = "searchInput";
    searchInput.className = "search-input";
    searchInput.placeholder = "Cari produk (misal: iPhone, Samsung, Powerbank, TWS)...";
    searchInput.setAttribute("aria-label", "Cari produk");

    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "search-clear";
    clearBtn.textContent = "BATAL";
    clearBtn.style.display = "none";
    searchInputEl = searchInput;
    clearBtnEl = clearBtn;

    searchInput.addEventListener("input", (event) => {
        const val = event.target.value;
        clearBtn.style.display = val.trim()?"inline-flex":"none";
        runCombinedFilter();
    });

    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearBtn.style.display = "none";
        selectedCategory = "";
        updateCategoryButtons();
        runCombinedFilter();
        searchInput.focus();
    });

    searchBox.appendChild(searchInput);
    searchBox.appendChild(clearBtn);

    const filterRow = document.createElement("div");
    filterRow.className = "category-filter-row";
    
    categoryButtons = [];

    KATEGORI_LIST.forEach((cat) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "category-filter-btn";
        btn.dataset.category = cat;
        btn.textContent = cat;

        btn.addEventListener("click", () => {
            selectedCategory = selectedCategory === cat?"":cat;
            updateCategoryButtons();
            runCombinedFilter();
        });

        categoryButtons.push(btn);
        filterRow.appendChild(btn);
    });

    wrapper.appendChild(searchBox);
    wrapper.appendChild(filterRow);

    return wrapper;
}

renderBrands(catalogBrands);

if(catalogHeader){
    catalogHeader.appendChild(createSearchAndCategoryFilter());
}

renderProducts(catalogProduk);

const cartBtnEl = document.querySelector(".btn-cart");
let cartCount = 0;

function updateCartDisplay() {
    if (!cartBtnEl) return;
    cartBtnEl.textContent = `Keranjang (${cartCount})`;
}

if (productContainer) {
    productContainer.addEventListener("click", (event) => {
        const buyBtn = event.target.closest(".btn-primary");
        if (!buyBtn) return;

        cartCount += 1;
        updateCartDisplay();
    });
}

updateCartDisplay();


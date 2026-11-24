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

const appleDiv = document.querySelector(".apple-logo");
const samsungDiv = document.createElement("div");
 samsungDiv.classList.add("samsung-logo");

 const imEl = document.createElement("img");
 imEl.src = "https://zonalogo.com/assets/samsung-logo-png-svg.webp?asset=2649";
 imEl.alt = "Samsung Logo";
 imEl.classList.add("brandpid");
 imEl.style.width = "40px";

 const textEl = document.createElement("p");
 textEl.classList.add("brand-p");
 textEl.textContent = "Samsung TAM";

 samsungDiv.appendChild(imEl);
 samsungDiv.appendChild(textEl);
 appleDiv.appendChild(samsungDiv); 

 const brandContainer = document.querySelector(".brand-logo-main");
 if (brandContainer) {
    brandContainer.innerHTML = "";
     const brandFragment = document.createDocumentFragment();
     catalogBrands.forEach((brand, index) => {
        const brandDiv = document.createElement("div");
        brandDiv.className = `brand-item-${index + 1}`;
        const imgEl = document.createElement("img");
        imgEl.src = brand.imageLink;
        imgEl.alt = `${brand.nama} Logo`;
        imgEl.className = "brandpict";

        const pEl = document.createElement("p");
        pEl.className = "brand-p";
        pEl.textContent = brand.nama;

        brandDiv.appendChild(imgEl);
        brandDiv.appendChild(pEl);

        brandFragment.appendChild(brandDiv);
     });

     brandContainer.appendChild(brandFragment);
    }


    const productContainer = document.querySelector(".catalog-container");
    if (productContainer) {
        productContainer.innerHTML = "";
        const productFragment = document.createDocumentFragment();
        catalogProduk.forEach((prod, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = `product-item-${index + 1}`;

        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";

        const badgeTag = document.createElement("span");
        badgeTag.className = "badge-tag";
        badgeTag.textContent = prod.badge;  

        const categoryTag = document.createElement("span");
        categoryTag.className = "category-tag";
        categoryTag.textContent = prod.category;

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
        specsContainer.className = "specs-tags";
        prod.spesifikasi.forEach(spec => {
            const specTag = document.createElement("span");
            specTag.className = "spec-tag";
            specTag.textContent = spec;
            specsContainer.appendChild(specTag);
        });

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "card-actions";

        const btnPrimary = document.createElement("button");
        btnPrimary.className = "btn-primary";
        btnPrimary.textContent = "Beli Sekarang";

        const btnSecondary = document.createElement("button");
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

        productFragment.appendChild(cardDiv);
    });

    productContainer.appendChild(productFragment);
    }

    //  //  console.log(card);
     
    // //  for (const brand of catalogBrands) {
    // //      // console.log(brand.nama);
    // //     }



//mikha (bagian keranjang)

//<button class="btn-primary">Beli Sekarang</button>
//<button class="btn-cart">Keranjang (0)</button>

let jumlahKeranjang = 0;

const cartBtn = document.getElementById("btn-cart");
const tombolBeli = document.querySelectorAll(".btn-primary");

tombolBeli.forEach((btn) => {
    btn.addEventListener("click", () => {
        jumlahKeranjang++;
        cartBtn.textContent = `keranjang (${jumlahKeranjang})`;
    });
});

(() => {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes gvPulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.15); }
      100% { transform: scale(1); }
    }
    .gv-pulse {
      animation: gvPulse 0.3s ease-in-out;
    }
    #gv-cart-modal {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      font-family: inherit;
    }
    #gv-cart-modal.active {
      display: flex;
    }
    .gv-modal-box {
      background: #fff;
      width: 92%;
      max-width: 480px;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
    }
    .gv-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 12px;
    }
    .gv-modal-header h3 {
      margin: 0;
      font-size: 18px;
    }
    #gv-close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      line-height: 1;
    }
    #gv-cart-list {
      margin: 14px 0;
      max-height: 290px;
      overflow-y: auto;
    }
    .gv-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid #f1f5f9;
    }
    .gv-item-title {
      font-weight: 600;
      font-size: 14px;
    }
    .gv-item-sub {
      font-size: 12px;
      color: #64748b;
    }
    .gv-qty-controls {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .gv-qty-controls button {
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      border-radius: 6px;
      padding: 2px 8px;
      cursor: pointer;
    }
    .gv-qty-controls .gv-del {
      background: #fee2e2;
      border-color: #fecaca;
      color: #dc2626;
    }
    .gv-modal-footer {
      border-top: 1px solid #e5e7eb;
      padding-top: 14px;
    }
    .gv-total-row {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      margin-bottom: 12px;
    }
    #gv-checkout-btn {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background: #0d6efd;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const modal = document.createElement("div");
  modal.id = "gv-cart-modal";
  modal.innerHTML = `
    <div class="gv-modal-box">
      <div class="gv-modal-header">
        <h3>List Pembelian</h3>
        <button id="gv-close-btn" type="button">&times;</button>
      </div>
      <div id="gv-cart-list"></div>
      <div class="gv-modal-footer">
        <div class="gv-total-row">
          <span>Total Pembayaran</span>
          <strong id="gv-total-price">Rp 0</strong>
        </div>
        <button id="gv-checkout-btn" type="button">Checkout Sekarang</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const semuaTombol = Array.from(document.querySelectorAll("button, a"));
  const cartBtn =
    document.getElementById("cart-btn") ||
    semuaTombol.find((el) => /keranjang/i.test(el.textContent));

  const beliBtns = semuaTombol.filter((el) =>
    /beli sekarang/i.test(el.textContent)
  );

  let keranjang = [];

  const formatRupiah = (angka) => "Rp " + angka.toLocaleString("id-ID");

  function updateCounterDanPulse() {
    if (!cartBtn) return;
    const totalQty = keranjang.reduce((sum, item) => sum + item.qty, 0);

    const countSpan = cartBtn.querySelector("#cart-count, span");
    if (countSpan) {
      countSpan.textContent = totalQty;
    } else {
      cartBtn.textContent = `Keranjang (${totalQty})`;
    }

    cartBtn.classList.remove("gv-pulse");
    void cartBtn.offsetWidth;
    cartBtn.classList.add("gv-pulse");
  }

  function renderList() {
    const listEl = document.getElementById("gv-cart-list");
    const totalEl = document.getElementById("gv-total-price");

    if (keranjang.length === 0) {
      listEl.innerHTML = `<p style="text-align:center;color:#64748b;margin:20px 0;">Keranjang belanja masih kosong.</p>`;
      totalEl.textContent = "Rp 0";
      return;
    }

    let total = 0;
    listEl.innerHTML = keranjang
      .map((item, idx) => {
        const subtotal = item.harga * item.qty;
        total += subtotal;
        return `
          <div class="gv-item">
            <div>
              <div class="gv-item-title">${item.nama}</div>
              <div class="gv-item-sub">${formatRupiah(item.harga)} x ${item.qty} = ${formatRupiah(subtotal)}</div>
            </div>
            <div class="gv-qty-controls">
              <button type="button" data-action="minus" data-idx="${idx}">-</button>
              <span>${item.qty}</span>
              <button type="button" data-action="plus" data-idx="${idx}">+</button>
              <button type="button" class="gv-del" data-action="del" data-idx="${idx}">Hapus</button>
            </div>
          </div>
        `;
      })
      .join("");

    totalEl.textContent = formatRupiah(total);
  }

  beliBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const card = btn.closest("div")?.parentElement || btn.parentElement;
      const teksCard = card ? card.innerText : "";

      const matchHarga = teksCard.match(/Rp\s*([\d.]+)/i);
      const harga = matchHarga
        ? Number(matchHarga[1].replace(/\./g, ""))
        : 0;

      const headingEl = card?.querySelector("h2, h3, h4, h5, strong");
      const barisTeks = teksCard
        .split("\n")
        .map((t) => t.trim())
        .filter(Boolean);
      const nama =
        btn.dataset.nama ||
        headingEl?.textContent.trim() ||
        barisTeks.find((t) => !/^Rp/i.test(t) && !/beli sekarang/i.test(t)) ||
        "Produk";

      const existing = keranjang.find((item) => item.nama === nama);
      if (existing) {
        existing.qty += 1;
      } else {
        keranjang.push({ nama, harga, qty: 1 });
      }

      updateCounterDanPulse();
    });
  });

  document.getElementById("gv-cart-list").addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    const idx = Number(e.target.dataset.idx);
    if (!action) return;

    if (action === "plus") keranjang[idx].qty += 1;
    if (action === "minus") {
      keranjang[idx].qty -= 1;
      if (keranjang[idx].qty <= 0) keranjang.splice(idx, 1);
    }
    if (action === "del") keranjang.splice(idx, 1);

    updateCounterDanPulse();
    renderList();
  });

  if (cartBtn) {
    cartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      renderList();
      modal.classList.add("active");
    });
  }

  document.getElementById("gv-close-btn").addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  document.getElementById("gv-checkout-btn").addEventListener("click", () => {
    if (keranjang.length === 0) return alert("Keranjang masih kosong!");
    alert("Checkout berhasil! Terima kasih sudah belanja di GADGETVERSE.");
    keranjang = [];
    updateCounterDanPulse();
    renderList();
    modal.classList.remove("active");
  });
})();

//done

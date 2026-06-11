const categoryInfo = {
  filters: {
    title: "Фильтры и сепараторы",
    description:
      "Воздушные, масляные, магистральные фильтры и сепараторы для винтовых компрессоров.",
    productCategory: "filters"
  },
  separators: {
    title: "Сепараторы",
    description:
      "Сепараторы масла/воздуха для компрессорного оборудования.",
    productCategory: "separators"
  },
  "mainline-filters": {
    title: "Магистральные фильтры",
    description:
      "Магистральные фильтры для подготовки и очистки сжатого воздуха.",
    productCategory: "mainline-filters"
  },
  "oil-filters": {
    title: "Масляные фильтры",
    description:
      "Масляные фильтры для обслуживания компрессорного оборудования.",
    productCategory: "oil-filters"
  },
  "air-filters": {
    title: "Воздушные фильтры",
    description:
      "Воздушные фильтры для компрессорного оборудования.",
    productCategory: "air-filters"
  },
  dryers: {
    title: "Осушители и очистка воздуха",
    description:
      "Адсорбционные и рефрижераторные осушители, а также оборудование для подготовки воздуха.",
    productCategory: "dryers"
  },
  "dryers-adsorption": {
    title: "Адсорбционные осушители",
    description:
      "Раздел находится в подготовке. Каталог доступен по запросу.",
    productCategory: "dryers-adsorption"
  },
  "dryers-refrigerated": {
    title: "Рефрижераторные осушители",
    description:
      "Раздел находится в подготовке. Каталог доступен по запросу.",
    productCategory: "dryers-refrigerated"
  },
  oils: {
    title: "Компрессорные масла",
    description:
      "Компрессорные масла и смазочные материалы для промышленной эксплуатации.",
    productCategory: "oils"
  }
};

const params = new URLSearchParams(window.location.search);
const currentType = params.get("type") || "filters";

const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const productsGrid = document.getElementById("productsGrid");
const productsCount = document.getElementById("productsCount");
const catalogEmpty = document.getElementById("catalogEmpty");

const catalogSearch = document.getElementById("catalogSearch");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
const dynamicFilters = document.getElementById("dynamicFilters");
const resetFilters = document.getElementById("resetFilters");

let allProducts = [];
let categoryProducts = [];

const info = categoryInfo[currentType] || categoryInfo.filters;

if (categoryTitle) {
  categoryTitle.textContent = info.title;
}

if (categoryDescription) {
  categoryDescription.textContent = info.description;
}

function formatPrice(price) {
  if (!price) return "Цена по запросу";

  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

function productMatchesCategory(product) {
  if (!product.category || !Array.isArray(product.category)) return false;

  return product.category.includes(info.productCategory);
}

function getFeatureKeys(products) {
  const keys = new Set();

  products.forEach((product) => {
    if (!product.features) return;

    Object.keys(product.features).forEach((key) => {
      const value = product.features[key];

      if (value !== null && value !== undefined && String(value).trim() !== "") {
        keys.add(key);
      }
    });
  });

  return Array.from(keys);
}

function createDynamicFilters(products) {
  if (!dynamicFilters) return;

  dynamicFilters.innerHTML = "";

  const featureKeys = getFeatureKeys(products);

  featureKeys.forEach((key) => {
    const values = new Set();

    products.forEach((product) => {
      const value = product.features?.[key];

      if (value !== null && value !== undefined && String(value).trim() !== "") {
        values.add(String(value));
      }
    });

    if (values.size < 2) return;

    const block = document.createElement("div");
    block.className = "dynamic-filter";
    block.dataset.feature = key;

    const title = document.createElement("div");
    title.className = "dynamic-filter-title";
    title.textContent = key;

    block.appendChild(title);

    Array.from(values).sort().forEach((value) => {
      const label = document.createElement("label");

      label.innerHTML = `
        <input type="checkbox" value="${value}" data-feature="${key}">
        <span>${value}</span>
      `;

      block.appendChild(label);
    });

    dynamicFilters.appendChild(block);
  });

  dynamicFilters.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", renderProducts);
  });
}

function getSelectedFeatureFilters() {
  const selected = {};

  if (!dynamicFilters) return selected;

  dynamicFilters.querySelectorAll("input:checked").forEach((input) => {
    const feature = input.dataset.feature;
    const value = input.value;

    if (!selected[feature]) {
      selected[feature] = [];
    }

    selected[feature].push(value);
  });

  return selected;
}

function applyFilters(products) {
  const searchValue = catalogSearch ? catalogSearch.value.trim().toLowerCase() : "";
  const min = priceMin && priceMin.value ? Number(priceMin.value) : null;
  const max = priceMax && priceMax.value ? Number(priceMax.value) : null;
  const selectedFeatures = getSelectedFeatureFilters();

  return products.filter((product) => {
    const title = product.title.toLowerCase();
    const sku = product.sku.toLowerCase();

    if (searchValue && !title.includes(searchValue) && !sku.includes(searchValue)) {
      return false;
    }

    if (min !== null && product.price < min) {
      return false;
    }

    if (max !== null && product.price > max) {
      return false;
    }

    for (const feature in selectedFeatures) {
      const productValue = String(product.features?.[feature] || "");

      if (!selectedFeatures[feature].includes(productValue)) {
        return false;
      }
    }

    return true;
  });
}

function renderProducts() {
  if (!productsGrid || !productsCount || !catalogEmpty) return;

  const products = applyFilters(categoryProducts);

  productsGrid.innerHTML = "";

  if (!categoryProducts.length) {
    productsCount.textContent = "Товаров в этом разделе пока нет";
    catalogEmpty.classList.add("is-open");
    productsGrid.style.display = "none";
    return;
  }

  catalogEmpty.classList.remove("is-open");
  productsGrid.style.display = "grid";

  productsCount.textContent = `Найдено товаров: ${products.length}`;

  if (!products.length) {
    productsGrid.innerHTML = `
      <div class="catalog-empty is-open" style="grid-column: 1 / -1;">
        <h2>Ничего не найдено</h2>
        <p>Попробуйте изменить параметры фильтрации или сбросить фильтры.</p>
      </div>
    `;
    return;
  }

  products.forEach((product) => {
    const featureRows = Object.entries(product.features || {})
      .filter(([, value]) => value !== null && value !== undefined && String(value).trim() !== "")
      .slice(0, 5)
      .map(([key, value]) => {
        return `
          <div class="product-feature">
            <span>${key}</span>
            <span>${value}</span>
          </div>
        `;
      })
      .join("");

    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-card-image">
        <img src="${product.image || "images/no-photo.png"}" alt="${product.title}">
      </div>

      <div class="product-card-content">
        <h3>${product.title}</h3>
        <p class="product-sku">Артикул: ${product.sku}</p>
        <p class="product-price">${formatPrice(product.price)}</p>
        <p class="product-text">${product.text || ""}</p>

        <div class="product-features">
          ${featureRows}
        </div>

        <a href="product.html?id=${encodeURIComponent(product.id)}">Подробнее</a>
      </div>
    `;

    productsGrid.appendChild(card);
  });
}

async function loadProducts() {
  try {const response = await fetch("products.json");

    if (!response.ok) {
      throw new Error("Не удалось загрузить products.json");
    }

    allProducts = await response.json();
    categoryProducts = allProducts.filter(productMatchesCategory);

    createDynamicFilters(categoryProducts);
    renderProducts();
  } catch (error) {
    console.error(error);

    if (productsCount) {
      productsCount.textContent = "Не удалось загрузить каталог";
    }

    if (catalogEmpty) {
      catalogEmpty.classList.add("is-open");
    }
  }
}

if (catalogSearch) {
  catalogSearch.addEventListener("input", renderProducts);
}

if (priceMin) {
  priceMin.addEventListener("input", renderProducts);
}

if (priceMax) {
  priceMax.addEventListener("input", renderProducts);
}

if (resetFilters) {
  resetFilters.addEventListener("click", () => {
    if (catalogSearch) catalogSearch.value = "";
    if (priceMin) priceMin.value = "";
    if (priceMax) priceMax.value = "";

    if (dynamicFilters) {
      dynamicFilters.querySelectorAll("input").forEach((input) => {
        input.checked = false;
      });
    }

    renderProducts();
  });
}

loadProducts();
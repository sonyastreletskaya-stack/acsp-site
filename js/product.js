
const productDetail = document.getElementById("productDetail");
const productNotFound = document.getElementById("productNotFound");

const productParams = new URLSearchParams(window.location.search);
const productId = productParams.get("id");

function formatProductPrice(price) {
  if (!price) return "Цена по запросу";

  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

function renderProduct(product) {
  if (!productDetail) return;

  document.title = `${product.title} — ACSP`;

  const features = Object.entries(product.features || {})
    .filter(([, value]) => value !== null && value !== undefined && String(value).trim() !== "")
    .map(([key, value]) => {
      return `
        <div class="product-detail-feature">
          <span>${key}</span>
          <strong>${value}</strong>
        </div>
      `;
    })
    .join("");

  productDetail.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image || "images/no-photo.png"}" alt="${product.title}">
    </div>

    <div class="product-detail-info">
      <p class="product-detail-label">ACSP Product</p>

      <h1>${product.title}</h1>

      <p class="product-detail-sku">
        Артикул: <strong>${product.sku}</strong>
      </p>

      <p class="product-detail-price">
        ${formatProductPrice(product.price)}
      </p>

      <p class="product-detail-text">
        ${product.text || "Для уточнения характеристик и наличия обратитесь к менеджеру ACSP."}
      </p>

      <div class="product-detail-actions">
        <a href="contacts.html" class="product-request-button">
          Запросить наличие
        </a>

        <a href="category.html?type=filters" class="product-catalog-button">
          В каталог
        </a>
      </div>
    </div>

    <div class="product-detail-specs">
      <h2>Характеристики</h2>

      <div class="product-detail-features">
        ${features || "<p>Характеристики уточняются.</p>"}
      </div>
    </div>
  `;
}

function showProductNotFound() {
  if (productDetail) {
    productDetail.style.display = "none";
  }

  if (productNotFound) {
    productNotFound.classList.add("is-open");
  }
}

async function loadProduct() {
  if (!productId) {
    showProductNotFound();
    return;
  }

  try {
    const response = await fetch("products.json");

    if (!response.ok) {
      throw new Error("Не удалось загрузить products.json");
    }

    const products = await response.json();

    const product = products.find((item) => String(item.id) === String(productId));

    if (!product) {
      showProductNotFound();
      return;
    }

    renderProduct(product);
  } catch (error) {
    console.error(error);
    showProductNotFound();
  }
}

loadProduct();
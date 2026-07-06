const productParams = new URLSearchParams(window.location.search);
const productId = productParams.get("id");

const productDetail = document.getElementById("productDetail");
const productNotFound = document.getElementById("productNotFound");

function formatProductPrice(price) {
  if (!price || Number(price) === 0) {
    return "Цена по запросу";
  }

  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

function renderProduct(product) {
  if (!productDetail) return;

  const features = Object.entries(product.features || {})
    .filter(([, value]) => {
      return value !== null && value !== undefined && String(value).trim() !== "";
    })
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

    <div class="product-detail-content">
      <p class="product-detail-sku">Артикул: ${product.sku}</p>

      <h1>${product.title}</h1>

      <p class="product-detail-price">
        ${formatProductPrice(product.price)}
      </p>

      <p class="product-detail-text">
        ${product.text || "За точной стоимостью и наличием обратитесь к менеджеру ACSP."}
      </p>

      <div class="product-detail-features">
        ${features}
      </div>

      <a class="product-detail-btn" href="contacts.html">
        Связаться с менеджером
      </a>
    </div>
  `;
}

function showProductNotFound() {
  if (productDetail) {
    productDetail.style.display = "none";
  }

  if (productNotFound) {
    productNotFound.style.display = "block";
  }
}

async function loadProduct() {
  try {
    if (!productId) {
      throw new Error("ID товара не указан");
    }

    const response = await fetch("products.json");

    if (!response.ok) {
      throw new Error("Не удалось загрузить products.json");
    }

    const products = await response.json();

    const product = products.find((item) => {
      return String(item.id) === String(productId);
    });

    if (!product) {
      throw new Error("Товар не найден");
    }

    if (productNotFound) {
      productNotFound.style.display = "none";
    }

    if (productDetail) {
      productDetail.style.display = "grid";
    }

    renderProduct(product);

  } catch (error) {
    console.error(error);
    showProductNotFound();
  }
}

loadProduct();
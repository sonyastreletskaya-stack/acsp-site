document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header-placeholder", "header.html", initHeaderMenu);
  loadHTML("footer-placeholder", "footer.html");
});

function loadHTML(elementId, filePath, callback) {
  const element = document.getElementById(elementId);

  if (!element) {
    if (callback) callback();
    return;
  }

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Не удалось загрузить ${filePath}`);
      }

      return response.text();
    })
    .then(html => {
      element.innerHTML = html;

      if (callback) callback();
    })
    .catch(error => {
      console.error("Ошибка загрузки HTML:", error);
    });
}

function initHeaderMenu() {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const headerActions = document.querySelector(".header-actions");
  const catalogButton = document.querySelector(".catalog-link");
  const navItem = document.querySelector(".nav-item");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("is-open");
      mainNav.classList.toggle("is-open");

      if (headerActions) {
        headerActions.classList.toggle("is-open");
      }

      document.body.classList.toggle("menu-open");
    });
  }

  if (catalogButton && navItem) {
    catalogButton.addEventListener("click", (event) => {
      event.preventDefault();
      navItem.classList.toggle("is-open");
    });
  }
}

const catalogData = {
  dryers: {
    image: "images/dryers.jpg",
    title: "Осушители и очистка воздуха",
    description:
      "Адсорбционные и рефрижераторные осушители, комплекты магистральных фильтров для подготовки сухого и чистого сжатого воздуха.",
    link: "category.html?type=dryers"
  },

  filters: {
    image: "images/filters.jpg",
    title: "Фильтры и сепараторы",
    description:
      "Воздушные, масляные, магистральные фильтры и сепараторы для винтовых компрессоров.",
    link: "filters-separators.html"
  },

  parts: {
    image: "images/parts-valves.jpeg",
    title: "Запчасти и клапаны",
    description:
      "Клапаны, датчики, ремкомплекты и электромеханические компоненты для обслуживания компрессорного оборудования.",
    link: "parts-valves.html"
  },

  oils: {
    image: "images/oils.jpeg",
    title: "Компрессорные масла",
    description:
      "Смазочные материалы для винтовых компрессоров, подобранные под интенсивную промышленную эксплуатацию.",
    link: "category.html?type=oils"
  }
};

const tabs = document.querySelectorAll(".catalog-tab");

const catalogImage = document.getElementById("catalogImage");
const catalogTitle = document.getElementById("catalogTitle");
const catalogDescription = document.getElementById("catalogDescription");
const catalogLink = document.getElementById("catalogLink");

function changeCatalogTab(tab) {
  const tabName = tab.dataset.tab;
  const item = catalogData[tabName];

  if (!item) return;

  tabs.forEach((button) => {
    button.classList.remove("active");
  });

  tab.classList.add("active");

  if (catalogImage) {
    catalogImage.src = item.image;
    catalogImage.alt = item.title;
  }

  if (catalogTitle) {
    catalogTitle.textContent = item.title;
  }

  if (catalogDescription) {
    catalogDescription.textContent = item.description;
  }

  if (catalogLink) {
    catalogLink.href = item.link;
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("mouseenter", () => {
    changeCatalogTab(tab);
  });

  tab.addEventListener("focus", () => {
    changeCatalogTab(tab);
  });

  tab.addEventListener("click", () => {
    changeCatalogTab(tab);
  });
});

const headerSearchButton = document.querySelector(".header-search");
const headerSearchPanel = document.querySelector(".header-search-panel");
const headerSearchInput = document.querySelector(".header-search-panel input");

if (headerSearchButton && headerSearchPanel) {
  headerSearchButton.addEventListener("click", (event) => {
    event.stopPropagation();

    headerSearchPanel.classList.toggle("is-open");

    if (headerSearchPanel.classList.contains("is-open") && headerSearchInput) {
      headerSearchInput.focus();
    }
  });

  headerSearchPanel.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    headerSearchPanel.classList.remove("is-open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      headerSearchPanel.classList.remove("is-open");
    }
  });
}
const contactForm = document.getElementById("contactForm");
const formPopup = document.getElementById("formPopup");
const formPopupClose = document.getElementById("formPopupClose");
const formPopupOk = document.getElementById("formPopupOk");

const privacyCheckbox = document.getElementById("privacyCheckbox");
const privacyError = document.getElementById("privacyError");
const privacyCheckWrap = document.querySelector(".privacy-check-wrap");

function openFormPopup() {
  if (!formPopup) return;
  formPopup.classList.add("is-open");
  document.body.classList.add("modal-open");
}

function closeFormPopup() {
  if (!formPopup) return;
  formPopup.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

function showPrivacyError() {
  if (!privacyCheckWrap) return;

  privacyCheckWrap.classList.add("is-error");

  if (privacyError) {
    privacyError.textContent =
      "Для отправки заявки необходимо согласиться с Политикой обработки персональных данных.";
  }

  privacyCheckWrap.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function hidePrivacyError() {
  if (!privacyCheckWrap) return;
  privacyCheckWrap.classList.remove("is-error");
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6x5Ue6IMnaXylTFuv_zQNQonCxwkrpzhMAgPML3EwBcIKZF1EM6hUmsZu_NVhxRgA/exec";

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (privacyCheckbox && !privacyCheckbox.checked) {
      showPrivacyError();
      return;
    }

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    hidePrivacyError();

    const formData = new FormData(contactForm);

    const data = {
      phone: formData.get("phone") || "",
      company: formData.get("company") || "",
      message: formData.get("message") || "",
      page: window.location.href
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
      });

      contactForm.reset();
      openFormPopup();
    } catch (error) {
      console.error("Ошибка отправки заявки:", error);
      alert("Не удалось отправить заявку. Попробуйте ещё раз.");
    }
  });
}

if (privacyCheckbox) {
  privacyCheckbox.addEventListener("change", () => {
    if (privacyCheckbox.checked) {
      hidePrivacyError();
    }
  });
}

if (formPopupClose) {
  formPopupClose.addEventListener("click", closeFormPopup);
}

if (formPopupOk) {
  formPopupOk.addEventListener("click", closeFormPopup);
}

if (formPopup) {
  const overlay = formPopup.querySelector(".form-popup-overlay");

  if (overlay) {
    overlay.addEventListener("click", closeFormPopup);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeFormPopup();
  }
});
(function () {
  const burgerButton = document.querySelector(".mobile-menu-toggle");
  const mobileNav = document.querySelector(".main-nav");
  const mobileActions = document.querySelector(".header-actions");

  if (!burgerButton || !mobileNav) return;

  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("is-open");
    mobileNav.classList.toggle("is-open");

    if (mobileActions) {
      mobileActions.classList.toggle("is-open");
    }
  });
})();

(function () {
  const catalogButton = document.querySelector(".catalog-link");
  const catalogNavItem = catalogButton ? catalogButton.closest(".nav-item") : null;

  if (!catalogButton || !catalogNavItem) return;

  catalogButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    catalogNavItem.classList.toggle("is-open");
  });
})();
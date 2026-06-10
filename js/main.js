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
    link: "category.html?type=filters"
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

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab;
    const item = catalogData[tabName];

    if (!item) return;

    tabs.forEach((button) => {
      button.classList.remove("active");
    });

    tab.classList.add("active");

    catalogImage.src = item.image;
    catalogImage.alt = item.title;

    catalogTitle.textContent = item.title;
    catalogDescription.textContent = item.description;
    catalogLink.href = item.link;
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

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
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
    openFormPopup();
    contactForm.reset();
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

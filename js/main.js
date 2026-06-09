const catalogData = {
  dryers: {
    image: "images/dryers.jpg",
    title: "Осушители и очистка воздуха",
    description:
      "Адсорбционные и рефрижераторные осушители, комплекты магистральных фильтров для подготовки сухого и чистого сжатого воздуха.",
    link: "dryers.html"
  },

  filters: {
    image: "images/filters.jpg",
    title: "Фильтры и сепараторы",
    description:
      "Магистральные фильтры, воздушные фильтры, масляные фильтры и сепараторы для винтовых компрессоров.",
    link: "filters.html"
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
    link: "oils.html"
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
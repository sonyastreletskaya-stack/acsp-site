const catalogData = {
  dryers: {
    image: "images/catalog/dryers.webp",
    title: "Осушители и очистка воздуха",
    text: "Адсорбционные и рефрижераторные осушители, комплекты магистральных фильтров для подготовки сухого и чистого сжатого воздуха.",
    link: "dryers.html"
  },
  filters: {
    image: "images/catalog/filters.webp",
    title: "Фильтры и сепараторы",
    text: "Магистральные фильтры, воздушные фильтры, масляные фильтры и сепараторы для винтовых компрессоров.",
    link: "filters.html"
  },
  parts: {
    image: "images/catalog/parts-valves.webp",
    title: "Запчасти и клапаны",
    text: "Клапаны, датчики, ремкомплекты и электромеханические компоненты для обслуживания компрессорного оборудования.",
    link: "parts-valves.html"
  },
  oils: {
    image: "images/catalog/oils.webp",
    title: "Компрессорные масла",
    text: "Смазочные материалы для винтовых компрессоров, подобранные под интенсивную промышленную эксплуатацию.",
    link: "oils.html"
  }
};

const tabs = document.querySelectorAll(".catalog-tab");
const catalogImage = document.getElementById("catalogImage");
const catalogTitle = document.getElementById("catalogTitle");
const catalogText = document.getElementById("catalogText");
const catalogLink = document.getElementById("catalogLink");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab;
    const item = catalogData[tabName];

    if (!item) return;

    tabs.forEach((btn) => btn.classList.remove("active"));
    tab.classList.add("active");

    catalogImage.src = item.image;
    catalogImage.alt = item.title;
    catalogTitle.textContent = item.title;
    catalogText.textContent = item.text;
    catalogLink.href = item.link;
  });
});

const categoryData = {
  dryers: {
    title: "Осушители",
    description:
      "Каталог осушителей для подготовки сухого и чистого сжатого воздуха.",
    image: "images/dryers.jpg",
    subcategories: [
      "Адсорбционные осушители",
      "Рефрижераторные осушители",
      "Набор магистральных фильтров"
    ]
  },

  "dryers-adsorption": {
    title: "Адсорбционные осушители",
    description:
      "Адсорбционные осушители для систем подготовки сжатого воздуха. Подбор моделей и условий поставки доступен по запросу.",
    image: "images/dryers.jpg",
    subcategories: []
  },

  "dryers-refrigerated": {
    title: "Рефрижераторные осушители",
    description:
      "Рефрижераторные осушители для удаления влаги из сжатого воздуха в промышленных компрессорных системах.",
    image: "images/dryers.jpg",
    subcategories: []
  },

  "main-filter-kits": {
    title: "Набор магистральных фильтров",
    description:
      "Комплекты магистральных фильтров для подготовки чистого сжатого воздуха.",
    image: "images/filters.jpg",
    subcategories: []
  },

  filters: {
    title: "Фильтры и сепараторы",
    description:
      "Воздушные, масляные, магистральные фильтры и сепараторы для винтовых компрессоров.",
    image: "images/filters.jpg",
    subcategories: [
      "Воздушные фильтры",
      "Масляные фильтры",
      "Сепараторы",
      "Магистральные фильтры"
    ]
  },

  "air-filters": {
    title: "Воздушные фильтры",
    description:
      "Воздушные фильтры для защиты компрессорного оборудования от загрязнений.",
    image: "images/filters.jpg",
    subcategories: []
  },

  "oil-filters": {
    title: "Масляные фильтры",
    description:
      "Масляные фильтры для обслуживания винтовых компрессоров и защиты масляной системы.",
    image: "images/filters.jpg",
    subcategories: []
  },

  separators: {
    title: "Сепараторы",
    description:
      "Сепараторы для отделения масла от сжатого воздуха в компрессорных системах.",
    image: "images/filters.jpg",
    subcategories: []
  },

  "mainline-filters": {
    title: "Магистральные фильтры",
    description:
      "Магистральные фильтры для очистки сжатого воздуха на разных ступенях подготовки.",
    image: "images/filters.jpg",
    subcategories: []
  },

  parts: {
    title: "Запчасти",
    description:
      "Электродвигатели, частотные преобразователи и конденсатоотводчики для обслуживания компрессорного оборудования.",
    image: "images/parts-valves.jpeg",
    subcategories: [
      "Электродвигатели",
      "Частотные преобразователи",
      "Конденсатоотводчики"
    ]
  },

  motors: {
    title: "Электродвигатели",
    description:
      "Электродвигатели для компрессорного оборудования. Подбор осуществляется по характеристикам и модели оборудования.",
    image: "images/parts-valves.jpeg",
    subcategories: []
  },

  inverters: {
    title: "Частотные преобразователи",
    description:
      "Частотные преобразователи для управления работой компрессорных систем.",
    image: "images/parts-valves.jpeg",
    subcategories: []
  },

  "drain-valves": {
    title: "Конденсатоотводчики",
    description:
      "Конденсатоотводчики для удаления влаги и конденсата из систем сжатого воздуха.",
    image: "images/parts-valves.jpeg",
    subcategories: []
  },

  valves: {
    title: "Клапаны",
    description:
      "Клапаны и электромагнитные компоненты для обслуживания компрессорных систем.",
    image: "images/parts-valves.jpeg",
    subcategories: [
      "Электромагнитные клапаны"
    ]
  },

  "solenoid-valves": {
    title: "Электромагнитные клапаны",
    description:
      "Электромагнитные клапаны для управления потоками воздуха и рабочих сред в компрессорных системах.",
    image: "images/parts-valves.jpeg",
    subcategories: []
  },

  oils: {
    title: "Компрессорные масла",
    description:
      "Смазочные материалы для винтовых компрессоров, подобранные под интенсивную промышленную эксплуатацию.",
    image: "images/oils.jpeg",
subcategories: []
  }
};
const params = new URLSearchParams(window.location.search);
const currentType = params.get("type") || "dryers";

const currentCategory = categoryData[currentType] || categoryData.dryers;

const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const categoryImage = document.getElementById("categoryImage");
const subcategoryList = document.getElementById("subcategoryList");

document.title = `${currentCategory.title} — каталог ACSP`;

categoryTitle.textContent = currentCategory.title;
categoryDescription.textContent = currentCategory.description;

categoryImage.src = currentCategory.image;
categoryImage.alt = currentCategory.title;

subcategoryList.innerHTML = "";

const subcategoryLinks = {
  "Адсорбционные осушители": "category.html?type=dryers-adsorption",
  "Рефрижераторные осушители": "category.html?type=dryers-refrigerated",
  "Набор магистральных фильтров": "category.html?type=main-filter-kits",

  "Воздушные фильтры": "category.html?type=air-filters",
  "Масляные фильтры": "category.html?type=oil-filters",
  "Сепараторы": "category.html?type=separators",
  "Магистральные фильтры": "category.html?type=mainline-filters",

  "Электродвигатели": "category.html?type=motors",
  "Частотные преобразователи": "category.html?type=inverters",
  "Конденсатоотводчики": "category.html?type=drain-valves",

  "Электромагнитные клапаны": "category.html?type=solenoid-valves"
};

currentCategory.subcategories.forEach((item) => {
  const card = document.createElement("a");
  card.className = "subcategory-card";
  card.textContent = item;
  card.href = subcategoryLinks[item] || "#";

  subcategoryList.appendChild(card);
});
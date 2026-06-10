const newsData = [
  {
    id: "site-launch",
    type: "featured",
    date: "2025",
    title: "Сайт компании ACSP официально заработал",
    excerpt:
      "Новый сайт ACSP помогает быстрее находить запчасти, аналоги, цены, фото, чертежи и условия доставки.",
    body: `
      <p>Друзья, коллеги, все, кто хоть раз сталкивался с ремонтом компрессорного оборудования — это наш общий праздник.</p>

      <p><strong>Сайт компании ACSP официально заработал!</strong></p>

      <p>Да, мы тоже раньше думали: «Ну зачем сайт, если можно всё по телефону?» А потом поняли, как это бесит — искать запчасть для компрессора вечером в воскресенье, когда оборудование встало, а завтра сдавать объект. Или перебирать десять прайсов в Excel, где артикулы перепутаны.</p>

      <h3>На нашем сайте вы найдете:</h3>

      <ul>
        <li><strong>Более 5000 позиций</strong> — от маслосъемных колец до целых блоков клапанов.</li>
        <li><strong>Фильтр по брендам</strong> — Atlas Copco, Ingersoll Rand, Comprag, Dalgakiran, Remeza, Airpol, Abac, Fiac, Alup, BOGE, Kaeser, Chicago Pneumatic и многие другие.</li>
        <li><strong>Поиск по OEM-номеру</strong> — вбиваете родной номер детали, система показывает точный аналог или оригинал с остатком на складе.</li>
        <li><strong>Честные цены</strong> — без наценки «на звонок менеджеру». Видите цену — столько и платите.</li>
        <li><strong>Фото и чертежи</strong> — чтобы вы точно убедились, что это та самая прокладка, фильтр или клапан.</li>
        <li><strong>Доставка от 1 дня</strong> — по Москве, регионам и странам СНГ.</li>
      </ul>

      <h3>Почему мы вообще решили сделать сайт?</h3>

      <p>Потому что сами работаем с компрессорами. И знаем: когда у вас стоит винтовой блок или поршневая группа — время — деньги. Каждый час простоя означает прямые потери.</p>

      <p>Наш сайт создан, чтобы вы не ждали. Заходите днём или ночью, с компьютера или телефона. Кладёте детали в корзину, оплачиваете картой или на расчетный счет. Для юридических лиц документы формируются автоматически. Менеджеры всё равно на связи, но теперь сайт делает большую часть рутинной работы за них.</p>

      <h3>Кстати, о скидках</h3>

      <p>В честь открытия сайта действует стартовый промокод <strong>WELCOME2025</strong> — скидка 7% на первый заказ от 3000 рублей.</p>

      <p>А если оформить заказ сегодня или завтра — добавим бесплатную экспресс-доставку по городу для локальных клиентов.</p>

      <h3>Что говорят первые посетители?</h3>

      <blockquote>«Нашел маслоотделитель за 3 минуты, которые раньше бы убил на созвон».</blockquote>

      <blockquote>«Артикул скопировал из старой накладной — вставил — нашлось — купил — счастье».</blockquote>

      <h3>Мы не просто магазин</h3>

      <p>У нас есть техническая поддержка. Если сомневаетесь в совместимости — пишите в чат на сайте. Инженер ответит в рабочее время и подберет точную замену, даже если деталь давно снята с производства.</p>
    `
  },

  {
    id: "search-optimization",
    type: "feed",
    date: "2025",
    title: "Мы оптимизировали подбор запчастей",
    excerpt:
      "На сайте внедрен поисковый модуль: OEM-номера, морфология, фильтрация по наличию, цене и автокоррекция ввода.",
    body: `
      <p>С момента открытия нашего сайта мы собирали обратную связь от клиентов. Основной запрос звучал одинаково: «Нужен быстрый и точный поиск по каталогу, без звонков менеджеру и ожидания ответа».</p>

      <p>Мы завершили внедрение поискового модуля. Система уже активна на сайте.</p>

      <h3>Что теперь доступно пользователям:</h3>

      <h4>1. Поиск по OEM-номерам</h4>
      <p>Достаточно ввести оригинальный номер детали — система отобразит совместимые позиции с актуальными остатками. Поиск распознает номера Atlas Copco, Ingersoll Rand, Comprag, Dalgakiran, Remeza, Kaeser, BOGE и других брендов.</p>

      <h4>2. Морфологический поиск на русском и английском</h4>
      <p>Запросы «маслоотделитель», «масло отделитель», «сепаратор масла» приводят к одному результату. Система учитывает падежи, опечатки и профессиональные синонимы.</p>

      <h4>3. Фильтрация по наличию и цене</h4>
      <p>Результаты можно сортировать по складу, ценовому диапазону и бренду. Это сокращает время анализа предложений.</p>

      <h4>4. Автокоррекция ввода</h4>
      <p>При ошибке в артикуле на один-два символа поиск предлагает ближайшие корректные варианты.</p>

      <h3>Результаты после запуска за первую неделю:</h3>

      <ul>
        <li>Среднее время подбора детали снизилось с 5 минут до 1 минуты 20 секунд.</li>
        <li>Доля успешных находок с первой попытки — 83%.</li>
        <li>Количество уточняющих звонков в отдел продаж сократилось на 27%.</li>
      </ul>

      <h3>Техническая реализация</h3>

      <p>Поиск построен на ElasticSearch с обновлением индекса каждые 15 минут. Это означает, что новые поступления на склад становятся доступны в поиске практически моментально.</p>

      <h3>Кому это будет полезно:</h3>

      <ul>
        <li>сервисным инженерам и механикам, которым нужна деталь «на вчера»;</li>
        <li>отделам снабжения, формирующим заявки без участия менеджера;</li>
        <li>специалистам, которые хотят сократить время на подбор и сравнение цен.</li>
      </ul>
    `
  }
];

const newsList = document.getElementById("newsList");
const featuredNews = document.getElementById("featuredNews");

const newsModal = document.getElementById("newsModal");
const newsModalOverlay = document.getElementById("newsModalOverlay");
const newsModalClose = document.getElementById("newsModalClose");

const modalDate = document.getElementById("modalDate");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

function openNewsModal(newsItem) {
  modalDate.textContent = newsItem.date;
  modalTitle.textContent = newsItem.title;
  modalBody.innerHTML = newsItem.body;

  newsModal.classList.add("is-open");
  document.body.classList.add("modal-open");
}

function closeNewsModal() {
  newsModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

function createFeedItem(newsItem) {
  const button = document.createElement("button");
  button.className = "news-feed-item";
  button.type = "button";

  button.innerHTML = `
    <span>${newsItem.date}</span>
    <strong>${newsItem.title}</strong>
    <p>${newsItem.excerpt}</p>
  `;

  button.addEventListener("click", () => openNewsModal(newsItem));

  return button;
}

function createFeaturedCard(newsItem) {
  const article = document.createElement("article");
  article.className = "featured-news-card";

  article.innerHTML = `
    <div class="featured-news-card-content">
      <span>${newsItem.date}</span>
      <h3>${newsItem.title}</h3>
      <p>${newsItem.excerpt}</p>
      <button type="button">Читать полностью</button>
    </div>
  `;

  article.querySelector("button").addEventListener("click", () => {
    openNewsModal(newsItem);
  });

  article.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") {
      openNewsModal(newsItem);
    }
  });

  return article;
}

newsData.forEach((newsItem) => {
  if (newsItem.type === "featured") {
    featuredNews.appendChild(createFeaturedCard(newsItem));
  } else {
    newsList.appendChild(createFeedItem(newsItem));
  }
});

newsModalClose.addEventListener("click", closeNewsModal);
newsModalOverlay.addEventListener("click", closeNewsModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNewsModal();
  }
});
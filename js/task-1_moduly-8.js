// Створи галерею з можливістю кліка по її елементах і перегляду повнорозмірного
// зображення в модальному вікні. Прев'ю результату подивися за посиланням
// https://monosnap.com/file/KKoRHdov8Thm2oWpzURSOg2L6iDCp3.
// -------
// Розбий завдання на кілька підзадач:
//     Створення і рендер розмітки по масиву даних і наданим шаблоном.
//     Реалізація делегування на галереї ul.js-gallery і отримання url великого зображення.
//     Відкриття модального вікна при натисканні на елементі галереї.
//     Підміна значення атрибута src елемента img.lightbox__image.
//     Закриття модального вікна при натисканні на кнопку button[data-action="close-modal"].
//     Очищення значення атрибута src елемента img.lightbox__image. Це необхідно   для того,
// щоб при наступному відкритті модального вікна, поки вантажиться   зображення, ми не бачили попереднє.
// --------
// +++Додатково+++
// Наступний функціонал не обов'язковий при здачі завдання, але буде хорошою практикою
// по роботі з подіями.
//     Закриття модального вікна при натисканні на div.lightbox__overlay.
//     Закриття модального вікна після натискання клавіші ESC.
// Перегортування зображень галереї у відкритому модальному вікні клавішами "вліво"
// і "вправо".

const array= [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const ulListRef = document.querySelector(".js-gallery");
const divWrapper = document.querySelector(".js-lightbox");
const imgRef = document.querySelector('.lightbox__image');

array.forEach((el) => {
  ulListRef.insertAdjacentHTML("afterbegin", `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}"> 
   <img class="gallery__image" src="${el.preview}" 
   data-source="${el.original}"
    alt="${el.description}" />
    </a></li>`);
    });
ulListRef.addEventListener("click", (e) => {
  e.preventDefault();
    if (e.target.nodeName !== "IMG") { return }   
  let imgRef = e.target;
  openModal(imgRef.dataset.source); 
    })

const openModal = function (foto) {
    divWrapper.classList.add("is-open");
  imgRef.setAttribute("src", foto)
  }
const btn = document.querySelector(".lightbox__button");
btn.addEventListener("click", () => { 
  divWrapper.classList.remove("is-open")
  })
window.addEventListener("keydown", (e) => { 
   if (e.key === "Escape") {
    divWrapper.classList.remove("is-open")
  }
  })



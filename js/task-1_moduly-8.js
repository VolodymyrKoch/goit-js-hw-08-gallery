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


import gallery_items from './gallery_items.js';

const ulListRef = document.querySelector(".js-gallery");
const divWrapper = document.querySelector(".js-lightbox");
const imgRef = document.querySelector('.lightbox__image');

gallery_items.forEach((el) => {
  ulListRef.insertAdjacentHTML("afterbegin", `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}"> 
   <img class="gallery__image" src="${el.preview}" 
   data-source="${el.original}"
    alt="${el.description}" />
    </a></li>`);
    });

const imgTru = (e) => {
  e.preventDefault();
    if (e.target.nodeName !== "IMG") { return }   
  let imgRef = e.target;
  openModal(imgRef.dataset.source); 
    }

const openModal = function (foto) {
  divWrapper.classList.add("is-open");
  imgRef.removeAttribute('src')
  imgRef.setAttribute("src", foto)

  divWrapper.addEventListener("click", clouseModal)
 window.addEventListener("keydown", clouseModalEsc)
  }
  
const btn = document.querySelector(".lightbox__button");

const clouseModal =(e) => { 
  if (e.target.nodeName !== "IMG") {
   divWrapper.classList.remove("is-open")
    divWrapper.removeEventListener('click', clouseModal)
    window.removeEventListener("keydown", clouseModalEsc)
    }
  }
  
const clouseModalEsc = (e) => { 
     if (e.key === "Escape") {
      divWrapper.classList.remove("is-open")
     window.removeEventListener("keydown", clouseModalEsc)
   }
}
ulListRef.addEventListener("click", imgTru)
  



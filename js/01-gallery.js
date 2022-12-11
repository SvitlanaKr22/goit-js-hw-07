//Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    (acc =
      acc +
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`),
  ""
);

divGallery.innerHTML += markup;

divGallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  //const linkImage = evt.target.closest(".gallery__link").href;

  const instance = basicLightbox.create(`
     <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  document.addEventListener("keydown", onWindowKeydown, { once: true });

  function onWindowKeydown(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  }
}

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
// Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    (acc =
      acc +
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`),
  ""
);

divGallery.innerHTML += markup;

new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionPosition: "botton",
  captionDelay: 250,
  animationSpeed: 500,
  fadeSpeed: 200,
});

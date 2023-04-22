import { galleryItems } from './gallery-items.js';
// Change code below this line

galleryItems.forEach((img) => {
  const imageTemplate = `
  <a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
  </a>
  `;
  console.log(imageTemplate);
  const ul = document.body.querySelector('.gallery');
  ul.insertAdjacentHTML('beforeend', imageTemplate);
});
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function selectImage() {
  lightbox.on();
}
console.log(lightbox);

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', selectImage);

// szablon
// <a class="gallery__item" href="large-image.jpg">
//  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>
// DZIAŁA - W DÓŁ - POCZĄTEK
// const imageTemplate = [];
// galleryItems.forEach((img) => {
//   imageTemplate.push(
//     `<a class="gallery__item" href="${img.original}"><img class="gallery__image" src=" ${img.preview}" alt=" ${img.description}"/></a>`
//   );
// });

// const obj = document.body.querySelector('.gallery');
// const galleryToPublish = imageTemplate.map((image) => image).join('');
// obj.insertAdjacentHTML('beforeend', galleryToPublish);

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt', // title
//   captionDelay: 250, // 0
// });
// function selectImage(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   lightbox.on();
// }
// const gallery = document.querySelector('.gallery');
// gallery.addEventListener('click', selectImage);
// DZIAŁA - W GÓRĘ - KONIEC

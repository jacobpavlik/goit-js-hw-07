import { galleryItems } from './gallery-items.js';
// Change code below this line

galleryItems.forEach((img, i) => {
  const imageTemplate = `
  <li>
   <div class='gallery__item'>
   <a class="gallery__link href="${galleryItems[i].original}">   
   <img class='gallery__image'
      src ="${galleryItems[i].preview}"
      data-source ="${galleryItems[i].original}"
      alt ="${galleryItems[i].description}"/>
      </a>
   </div>
  </li> `;
  const ul = document.body.querySelector('.gallery');
  ul.insertAdjacentHTML('beforeend', imageTemplate);
});

function selectImage(event) {
  const selectedImage = event.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src= "${selectedImage}">
  `);
  instance.show();
  document.addEventListener('keydown', ({ key }) => {
    if (key === 'Escape') {
      instance.close();
    }
  });
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', selectImage);

// Esc close z biblioteki uproszczone przez mentora
// document.onkeydown = function (e) {
//   if (e.code === 'Escape') {
//     instance.close();
//   }
// };
//
// szablon
//   <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
//
// poniżej działa lepiej, ale template jest nie wg szablonu - brak div i linka - poprawiam u góry
// galleryItems.forEach((img, i) => {
//   const imageTemplate = `<li class='gallery__item'>
//   <img class='gallery__image'
//    src ="${galleryItems[i].preview}"
//    data-source ="${galleryItems[i].original}"
//    alt ="${galleryItems[i].description}"/>
//   </li> `;
// const ul = document.body.querySelector(".gallery");
// ul.insertAdjacentHTML("beforeend", imageTemplate);
// });

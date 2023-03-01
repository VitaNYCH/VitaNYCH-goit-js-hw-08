import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const picturesContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

picturesContainer.insertAdjacentHTML('beforeend', galleryMarkup);

picturesContainer.addEventListener('click', onPicturesContainerClick);

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onPicturesContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}' width="800" height="600">
`);

  instance.show();

  picturesContainer.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
  picturesContainer.removeEventListener('keydown', onPicturesContainerClick);
}
console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems.map(({original, preview, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`}).join("");

const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;


const lightbox = new SimpleLightbox('.gallery a', { caption: true, captionSelector: 'img[alt]', captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 }); 

console.log(galleryItems);

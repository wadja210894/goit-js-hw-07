import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems.map(({original, preview, description})  => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`}).join("");

const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;

galleryBox.addEventListener('click', onLinkClickHandler);

function onLinkClickHandler(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`, {
        onShow: () => { window.addEventListener('keydown', onEscPress) },
        onClose: () => { window.removeEventListener('keydown', onEscPress) }
    });
    instance.show();
    
    function onEscPress(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    };
}

console.log(galleryItems);

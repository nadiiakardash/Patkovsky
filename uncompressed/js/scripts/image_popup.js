const imageZoom = () => {
  const popupWindow = document.querySelector('.image-popup');
  const popupButton = document.querySelector('.image-popup__button');
  const popupImage = document.querySelector('.image-popup__picture');
  const galleryPictures = document.querySelectorAll('.gallery__picture--image');
  const body = document.querySelector('body');

  popupWindow.addEventListener('click', event => {
    const target = event.target;

    if(target === popupWindow || target === popupButton) {
      // body.classList.remove('body--active');

      popupWindow.classList.remove('image-popup--active');

      popupWindow.classList.add('image-popup--hide');

      setTimeout(() => popupWindow.classList.remove('image-popup--hide'), 300);
    }
  });

  galleryPictures.forEach(img => {
    img.addEventListener('click', event => {
      event.stopPropagation();

      const targetImage = img.querySelector('.gallery__image');
      //
      // body.classList.add('body--active');

      popupWindow.classList.add('image-popup--active');

      popupImage.src = targetImage.src;
    });
  });
};

if(document.querySelector('.gallery')) {
  imageZoom();
}

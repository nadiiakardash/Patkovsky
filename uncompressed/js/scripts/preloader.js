function preloader() {
  const preloaderDescription = document.querySelector('.preloader__description');
  const preloader = document.querySelector(`.preloader`);
  const pictureOwl = document.querySelector('.preloader__picture--owl');
  const pictureDeer = document.querySelector('.preloader__picture--deer');
  const preloaderLogo = document.querySelector('.preloader-logo');

  setTimeout(() => preloaderDescription.classList.add('preloader__description--active'), 600);

  preloaderLogo.classList.add('preloader-logo--active');


  document.body.onload = () => {
    setTimeout(() => {
      if(!preloader.classList.contains('preloader--done')) {
        preloader.classList.add('preloader--done');
      }
    }, 2500);

    setTimeout(() => {
      if(!pictureOwl.classList.contains('preloader__picture--done--owl')) {
        pictureOwl.classList.add('preloader__picture--done--owl');
      }
    }, 1000);

    setTimeout(() => {
      if(!pictureDeer.classList.contains('preloader__picture--done--deer')) {
        pictureDeer.classList.add('preloader__picture--done--deer');
      }
    }, 1500);

    setTimeout(() => {
      if(preloaderLogo.classList.contains('preloader-logo')) {
        preloaderLogo.classList.remove('preloader-logo');
      }
    },2000);

    setTimeout(() => {
      if(preloaderDescription.classList.contains('preloader__description--active')) {
        preloaderDescription.classList.remove('preloader__description--active');
      }
    },2000);

    setTimeout(() => {
      if(preloaderLogo.classList.contains('preloader-logo--active')) {
        preloaderLogo.classList.remove('preloader-logo--active');
      }
    },2500);
  }
}

preloader();

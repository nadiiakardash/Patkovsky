const mainRoom = new Swiper('.room__box', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  cubeEffect: {
    slideShadows: false,
    shadow: false
  },
  navigation: {
    nextEl: '.room__gallery-button--next',
    prevEl: '.room__gallery-button--prev',
  },
  speed: 900,
  noSwiping: true
});

const promoSwiper = new Swiper('.promo__inner', {
  spaceBetween: 0,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.promo__button--next',
    prevEl: '.promo__button--prev',
  },
  noSwiping: true,
});

// Promo
const promoSlides = document.querySelectorAll('.promo__item');


if(window.screen.width < 768) {
  promoSlides.forEach(slide => {
    const promoSwiper = new Swiper(slide.querySelector('.promo__photo-wrapper'), {
      slidesPerView: 1,
      spaceBetween: 6,
      speed: 900,
      pagination: {
        el: slide.querySelector('.promo__pagination'),
        clickable: true,
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item--active',
        bulletElement: 'li'
      },
      noSwiping: false,
    });
  })
}

// Gallery
const roomItem = document.querySelectorAll('.room__gallery-item');

roomItem.forEach((item, index) => {
  const thumbs = new Swiper(item.querySelector('.room__thumbs'), {
    direction: 'horizontal',
    spaceBetween: 6,
    slidesPerView: 3,
    speed: 900,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    noSwiping: false,
    mousewheel: true,
    breakpoints: {
      768: {
        direction: 'vertical'
      }
    }
  });

  const slider = new Swiper(item.querySelector('.room__photos'), {
    spaceBetween: 6,
    speed: 900,
    pagination: {
      el: item.querySelector('.room__pagination-list'),
      clickable: true,
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item--active',
      bulletElement: 'li'
    },
    noSwiping: false,
    autoplay: true,
    thumbs: {
      swiper: thumbs,
    },
  });
})



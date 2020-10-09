// function fixedProgressBar() {
//   window.addEventListener('scroll', () => {
//     const priceBox = document.querySelector('.price__box--main');
//     const pricePaginationWrapper = document.querySelector('.price__pagination-wrapper--main');
//     const windowPositionTop = window.pageYOffset;
//     let priceBoxPositionTop = window.pageYOffset + priceBox.getBoundingClientRect().top - 700;
//     let priceBoxPositionBottom = window.pageYOffset + priceBox.getBoundingClientRect().bottom -450;
//
//     if(priceBoxPositionTop < windowPositionTop) {
//       pricePaginationWrapper.classList.add('price__pagination-wrapper--fixed');
//     } else {
//       pricePaginationWrapper.classList.remove('price__pagination-wrapper--fixed');
//     }
//
//     if(priceBoxPositionBottom < windowPositionTop) {
//       pricePaginationWrapper.classList.remove('price__pagination-wrapper--fixed');
//     }
//   })
// }
function fixedProgressBar(prefix) {
  window.addEventListener('scroll', () => {
    const priceBox = document.querySelector(`.price__box${prefix}`);
    const pricePaginationWrapper = document.querySelector(`.price__pagination-wrapper${prefix}`);
    const windowPositionTop = window.pageYOffset;
    let priceBoxPositionTop = window.pageYOffset + priceBox.getBoundingClientRect().top - 700;
    let priceBoxPositionBottom = window.pageYOffset + priceBox.getBoundingClientRect().bottom - 700;

    if(priceBoxPositionTop < windowPositionTop) {
      pricePaginationWrapper.classList.add('price__pagination-wrapper--fixed');
    } else {
      pricePaginationWrapper.classList.remove('price__pagination-wrapper--fixed');
    }

    if(priceBoxPositionBottom < windowPositionTop) {
      pricePaginationWrapper.classList.remove('price__pagination-wrapper--fixed');
    }
  })
}

if(document.querySelector('.price') && !document.querySelector('.video')) {
  fixedProgressBar('--main');
  fixedProgressBar('--second');
}

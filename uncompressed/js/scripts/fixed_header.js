function fixedHeader() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const headerBox = document.querySelector('.header__box');
    const headerLogo = document.querySelector('.header__image');
    const windowPositionTop = window.pageYOffset;
    let headerPositionBottom = window.pageYOffset + header.getBoundingClientRect().bottom - 90;

    if(document.querySelector('.price')) {
      headerPositionBottom = window.pageYOffset + header.getBoundingClientRect().bottom - 300;
    }

    if(headerPositionBottom < windowPositionTop) {
      headerBox.classList.add('header__box--fixed');
    } else {
      headerBox.classList.remove('header__box--fixed');
    }
  })
}

fixedHeader();



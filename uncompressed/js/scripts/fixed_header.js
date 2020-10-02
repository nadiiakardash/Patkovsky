window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const headerBox = document.querySelector('.header__box');
  const headerLogo = document.querySelector('.header__image');
  const setLogo = logo => headerLogo.setAttribute('src', `img/svg/header/${logo}.svg`);
  const headerPositionBottom = window.pageYOffset + header.getBoundingClientRect().bottom - 90;
  const windowPositionTop = window.pageYOffset;

  if(headerPositionBottom < windowPositionTop) {
    headerBox.classList.add('header__box--fixed');
    setLogo('logo_gold');
  } else {
    headerBox.classList.remove('header__box--fixed');
    setLogo('logo');
  }
})



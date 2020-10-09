const tabControl = () => {
  const tabNavigation = document.querySelectorAll('.gallery__tabs-item');
  const tabContent = document.querySelectorAll('.gallery__list');
  let tabName;

  tabNavigation.forEach(item => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {

    setTimeout(() => AOS.refresh(),0);

    tabNavigation.forEach(item => {
      item.classList.remove('gallery__tabs-item--active');
    });

    this.classList.add('gallery__tabs-item--active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(name) {
    tabContent.forEach(item => {
      if(item.classList.contains(name)) {
        item.classList.add('gallery__list--active');
      } else {
        item.classList.add('gallery__list--hide');
        item.classList.remove('gallery__list--active');

        setTimeout(() => {
          item.classList.remove('gallery__list--hide');
        }, 300);
      }
    })
  }
};

if(document.querySelector('.gallery')) {
  tabControl();
}

function loadMore(container, item, button = 'pages__button', amount = 1) {
  const work = document.querySelector(`.${container}`);
  const items = Array.from(work.querySelectorAll(`.${item}`));
  const loadMore = document.querySelector(`.${button}`);
  maxItems = amount;
  loadItems = amount;
  hiddenClass = 'load-more';
  hiddenItems = Array.from(document.querySelectorAll('.load-more'));

  items.forEach(function (item, index) {
    if (index > maxItems - 1) {
      item.classList.add(hiddenClass);
    }
  });

  loadMore.addEventListener('click', event => {
    event.preventDefault();

    const windowPosition = window.pageYOffset;

    setTimeout(() => AOS.refresh(),300);

    [].forEach.call(document.querySelectorAll('.' + hiddenClass), (item, index) => {
      if (index < loadItems) {
        item.classList.remove(hiddenClass);
      }

      if (document.querySelectorAll('.' + hiddenClass).length === 0) {
        loadMore.style.display = 'none';
      }

      window.scrollTo(0, windowPosition);
    });
  });
}

if(document.querySelector('.gallery')) {
  loadMore('gallery__container', 'gallery__wrapper');
}

if(document.querySelector('.news')) {
  loadMore('news__container', 'news__more-list');
}

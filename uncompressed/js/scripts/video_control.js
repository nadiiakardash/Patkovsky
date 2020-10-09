function initVideoControl(video, buttonSelector) {
  const videoButton = document.querySelectorAll(`.${buttonSelector}`);

  if(!videoButton) {
    return;
  }

  videoButton.forEach(button => {
    button.addEventListener('click', event => {
      const target = event.target.closest('.video-box');
      const videoItem = target.querySelector(`.${video}`);


      if(button.classList.contains(`${buttonSelector}--paused`)) {
        button.classList.remove(`${buttonSelector}--paused`);
        videoItem.pause();
      } else {
        button.classList.add(`${buttonSelector}--paused`);
        videoItem.play();
      }
    })
  })
}

initVideoControl('video__item','video__button');
initVideoControl('gallery__video','gallery__video-button');

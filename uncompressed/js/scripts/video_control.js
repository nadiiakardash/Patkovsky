function initVideoControl(video, button) {
  const videoButton = document.querySelectorAll(`.${button}`);
  let videoPlay = true;

  if(!videoButton) {
    return;
  }

  videoButton.forEach(button => {
    button.addEventListener('click', event => {
      const target = event.target.closest('section');
      const videoItem = target.querySelector(`.${video}`);

      if(videoPlay) {
        button.classList.remove('video__button--paused');
        videoItem.pause();
        videoPlay = false;
      } else {
        button.classList.add('video__button--paused');
        videoItem.play();
        videoPlay = true;
      }
    })
  })
}

initVideoControl('video__item','video__button');
// initVideoControl('promo__video','promo__video-button');

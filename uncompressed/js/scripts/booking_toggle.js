function toggleTriangle() {
  const inputBox = document.querySelectorAll('.booking__input-box');
  let ua = navigator.userAgent;
  let event = (ua.match(/iPad/i) || ua.match(/iPhone/)) ? "touchstart" : "click";

  if(!inputBox) {
    return;
  }

  inputBox.forEach(input => {
    input.addEventListener('click', () => {
      const active = input.querySelector('.active');
      const buttons = document.querySelectorAll('.select-dropdown__button');

      try {
        active.closest('.select-dropdown');
      } catch {
        return;
      }

      if(!active) {
        buttons.forEach(button => button.classList.remove('open'));

        return;
      }

      const targetSelect = active.closest('.select-dropdown');

      try {
        const targetButton = targetSelect.querySelector('.select-dropdown__button');

        if(active) {
          targetButton.classList.add('open');
        }
      } catch {
        return;
      }
    })
  })

  function beyondTarget(event) {
    const parentElements = document.querySelectorAll('span.select-dropdown');
    const buttons = document.querySelectorAll('.select-dropdown__button');


    if(!buttons && !parentElements) {
      return;
    }

    let target = event.target;

    for (let i = 0; i < parentElements.length; i++) {
      let parent = parentElements[i];
      let button = buttons[i];

      if(parent === target || button == target) {
        continue;
      }

      button.classList.remove('open');
    }
  }

  document.addEventListener(event, beyondTarget);
}


toggleTriangle();

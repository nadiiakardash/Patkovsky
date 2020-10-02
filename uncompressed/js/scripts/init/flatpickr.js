const checkIn = document.querySelector(".booking__input--check-in");
const checkOut = document.querySelector(".booking__input--check-out");

function flatpickInit() {
  const wrapperCheckIn = document.querySelector('.booking__input-wrapper--check-in');
  const wrapperCheckOut = document.querySelector('.booking__input-wrapper--check-out');

  const dateToCheckIn = flatpickr(checkIn, {
    dateFormat: "d-m-Y",
    locale: 'uk',
    // altInput: true,
    // altFormat: "F j, Y",
    minDate: "today",
    disableMobile: "true",
    onOpen() {
      wrapperCheckIn.classList.add('open');
    },
    onClose() {
       wrapperCheckIn.classList.remove('open');
    }
  });

  const dateToCheckOut = flatpickr(checkOut, {
    dateFormat: "d-m-Y",
    locale: 'uk',
    // altInput: true,
    // altFormat: "F j, Y",
    minDate: "today",
    disableMobile: "true",
    onOpen() {
      wrapperCheckOut.classList.add('open');
    },
    onClose() {
       wrapperCheckOut.classList.remove('open');
    }
  });
}

if(checkIn && checkOut) {
  flatpickInit();
}

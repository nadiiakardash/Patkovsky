if (document.documentElement.clientWidth < 1440) {
  AOS.init({
    duration: 900,
    offset: 0
  })
} else {
  AOS.init({
    duration: 900,
    offset: 100
  })
}

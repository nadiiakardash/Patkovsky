"use strict";window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)});var objectFitImages=function(){function e(e,t,o){var r=function(e,t){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e+"' height='"+t+"'%3E%3C/svg%3E"}(t||1,o||0);p.call(e,"src")!==r&&f.call(e,"src",r)}function t(e,o){e.naturalWidth?o(e):setTimeout(t,100,e,o)}function o(o){var n=function(e){for(var t,o=getComputedStyle(e).fontFamily,r={};null!==(t=c.exec(o));)r[t[1]]=t[2];return r}(o),a=o[i];if(n["object-fit"]=n["object-fit"]||"fill",!a.img){if("fill"===n["object-fit"])return;if(!a.skipTest&&l&&!n["object-position"])return}if(!a.img){a.img=new Image(o.width,o.height),a.img.srcset=p.call(o,"data-ofi-srcset")||o.srcset,a.img.src=p.call(o,"data-ofi-src")||o.src,f.call(o,"data-ofi-src",o.src),o.srcset&&f.call(o,"data-ofi-srcset",o.srcset),e(o,o.naturalWidth||o.width,o.naturalHeight||o.height),o.srcset&&(o.srcset="");try{r(o)}catch(o){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}(function(e){if(e.srcset&&!d&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}})(a.img),o.style.backgroundImage='url("'+(a.img.currentSrc||a.img.src).replace(/"/g,'\\"')+'")',o.style.backgroundPosition=n["object-position"]||"center",o.style.backgroundRepeat="no-repeat",o.style.backgroundOrigin="content-box",/scale-down/.test(n["object-fit"])?t(a.img,(function(){a.img.naturalWidth>o.width||a.img.naturalHeight>o.height?o.style.backgroundSize="contain":o.style.backgroundSize="auto"})):o.style.backgroundSize=n["object-fit"].replace("none","auto").replace("fill","100% 100%"),t(a.img,(function(t){e(o,t.naturalWidth,t.naturalHeight)}))}function r(e){var t={get:function(t){return e[i].img[t||"src"]},set:function(t,r){return e[i].img[r||"src"]=t,f.call(e,"data-ofi-"+r,t),o(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}function n(e,t){var r=!g&&!e;if(t=t||{},e=e||"img",s&&!t.skipTest||!u)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var c=0;c<e.length;c++)e[c][i]=e[c][i]||{skipTest:t.skipTest},o(e[c]);r&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&n(e.target,{skipTest:t.skipTest})}),!0),g=!0,e="img"),t.watchMQ&&window.addEventListener("resize",n.bind(null,e,{skipTest:t.skipTest}))}var i="fregante:object-fit-images",c=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,a="undefined"==typeof Image?{style:{"object-position":1}}:new Image,l="object-fit"in a.style,s="object-position"in a.style,u="background-size"in a.style,d="string"==typeof a.currentSrc,p=a.getAttribute,f=a.setAttribute,g=!1;return n.supportsObjectFit=l,n.supportsObjectPosition=s,function(){function e(e,t){return e[i]&&e[i].img&&("src"===t||"srcset"===t)?e[i].img:e}s||(HTMLImageElement.prototype.getAttribute=function(t){return p.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,o){return f.call(e(this,t),t,String(o))})}(),n}();function toggleTriangle(){var e=document.querySelectorAll(".booking__input-box"),t=navigator.userAgent,o=t.match(/iPad/i)||t.match(/iPhone/)?"touchstart":"click";e&&(e.forEach((function(e){e.addEventListener("click",(function(){var t=e.querySelector(".active"),o=document.querySelectorAll(".select-dropdown__button");try{t.closest(".select-dropdown")}catch(e){return}if(t){var r=t.closest(".select-dropdown");try{var n=r.querySelector(".select-dropdown__button");t&&n.classList.add("open")}catch(e){return}}else o.forEach((function(e){return e.classList.remove("open")}))}))})),document.addEventListener(o,(function(e){var t=document.querySelectorAll("span.select-dropdown"),o=document.querySelectorAll(".select-dropdown__button");if(o||t)for(var r=e.target,n=0;n<t.length;n++){var i=t[n],c=o[n];i!==r&&c!=r&&c.classList.remove("open")}})))}function parallaxInit(){var e=170;window.screen.width<1440&&(e=160);var t=document.querySelector(".parallax--deer"),o=document.querySelector(".parallax__image--deer"),r=document.querySelector(".details__photo--building"),n=(document.querySelector(".header__box"),window.pageYOffset+t.getBoundingClientRect().top-e),i=window.pageYOffset+r.getBoundingClientRect().bottom-e;t&&window.addEventListener("scroll",(function(){n<window.pageYOffset&&window.pageYOffset<i?o.style.backgroundPositionY="".concat(window.pageYOffset-n,"px"):o.style.backgroundPositionY="0"}))}function preloader(){var e=document.querySelector(".preloader__description"),t=document.querySelector(".preloader"),o=document.querySelector(".preloader__picture--owl"),r=document.querySelector(".preloader__picture--deer"),n=document.querySelector(".preloader-logo");setTimeout((function(){return e.classList.add("preloader__description--active")}),600),n.classList.add("preloader-logo--active"),document.body.onload=function(){setTimeout((function(){t.classList.contains("preloader--done")||t.classList.add("preloader--done")}),2500),setTimeout((function(){o.classList.contains("preloader__picture--done--owl")||o.classList.add("preloader__picture--done--owl")}),1e3),setTimeout((function(){r.classList.contains("preloader__picture--done--deer")||r.classList.add("preloader__picture--done--deer")}),1500),setTimeout((function(){n.classList.contains("preloader-logo")&&n.classList.remove("preloader-logo")}),2e3),setTimeout((function(){e.classList.contains("preloader__description--active")&&e.classList.remove("preloader__description--active")}),2e3),setTimeout((function(){n.classList.contains("preloader-logo--active")&&n.classList.remove("preloader-logo--active")}),2500)}}function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,n=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function initVideoControl(e,t){var o=document.querySelectorAll(".".concat(t)),r=!0;o&&o.forEach((function(t){t.addEventListener("click",(function(o){var n=o.target.closest("section").querySelector(".".concat(e));r?(t.classList.remove("video__button--paused"),n.pause(),r=!1):(t.classList.add("video__button--paused"),n.play(),r=!0)}))}))}toggleTriangle(),window.addEventListener("scroll",(function(){var e=document.querySelector(".header"),t=document.querySelector(".header__box"),o=document.querySelector(".header__image"),r=function(e){return o.setAttribute("src","img/svg/header/".concat(e,".svg"))};window.pageYOffset+e.getBoundingClientRect().bottom-90<window.pageYOffset?(t.classList.add("header__box--fixed"),r("logo_gold")):(t.classList.remove("header__box--fixed"),r("logo"))})),document.querySelector(".parallax--deer")&&parallaxInit(),preloader(),function(){var e,t=_createForOfIteratorHelper(document.querySelectorAll(".scroll"));try{var o=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}))};for(t.s();!(e=t.n()).done;)o()}catch(e){t.e(e)}finally{t.f()}}(),initVideoControl("video__item","video__button"),document.documentElement.clientWidth<1440?AOS.init({duration:900,offset:0}):AOS.init({duration:900,offset:100});var checkIn=document.querySelector(".booking__input--check-in"),checkOut=document.querySelector(".booking__input--check-out");function flatpickInit(){var e=document.querySelector(".booking__input-wrapper--check-in"),t=document.querySelector(".booking__input-wrapper--check-out");flatpickr(checkIn,{dateFormat:"d-m-Y",locale:"uk",minDate:"today",disableMobile:"true",onOpen:function(){e.classList.add("open")},onClose:function(){e.classList.remove("open")}}),flatpickr(checkOut,{dateFormat:"d-m-Y",locale:"uk",minDate:"today",disableMobile:"true",onOpen:function(){t.classList.add("open")},onClose:function(){t.classList.remove("open")}})}function swiperInit(){new Swiper(".room__box",{effect:"fade",fadeEffect:{crossFade:!0},cubeEffect:{slideShadows:!1,shadow:!1},navigation:{nextEl:".room__gallery-button--next",prevEl:".room__gallery-button--prev"},speed:900,noSwiping:!0}),new Swiper(".promo__inner",{spaceBetween:0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".promo__button--next",prevEl:".promo__button--prev"},noSwiping:!0});var e=document.querySelectorAll(".promo__item");window.screen.width<768&&e.forEach((function(e){new Swiper(e.querySelector(".promo__photo-wrapper"),{slidesPerView:1,spaceBetween:6,speed:900,pagination:{el:e.querySelector(".promo__pagination"),clickable:!0,bulletClass:"pagination__item",bulletActiveClass:"pagination__item--active",bulletElement:"li"},noSwiping:!1})})),document.querySelectorAll(".room__gallery-item").forEach((function(e,t){var o=new Swiper(e.querySelector(".room__thumbs"),{direction:"horizontal",spaceBetween:6,slidesPerView:3,speed:900,freeMode:!0,loopedSlides:5,watchSlidesVisibility:!0,watchSlidesProgress:!0,noSwiping:!1,mousewheel:!0,breakpoints:{768:{direction:"vertical"}}});new Swiper(e.querySelector(".room__photos"),{spaceBetween:6,speed:900,pagination:{el:e.querySelector(".room__pagination-list"),clickable:!0,bulletClass:"pagination__item",bulletActiveClass:"pagination__item--active",bulletElement:"li"},noSwiping:!1,autoplay:!0,thumbs:{swiper:o}})}))}checkIn&&checkOut&&flatpickInit(),objectFitImages(),document.querySelector(".news")||swiperInit();try{var HEADER=new ToggleClass({toggleItem:"header",toggleButton:"header__button",toggleBody:!0})}catch(e){var catchError=function(){}}
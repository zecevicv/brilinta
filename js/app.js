/* #Category Sliders
  ======================================================= */
// Top Slider
if (document.querySelector('.category .top .swiper')) {
  new Swiper(".category .top .swiper", {
    navigation: {
      nextEl: ".category .top .next",
      prevEl: ".category .top .prev",
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        slidesPerView: 'auto'
      },
      1024: {
        allowTouchMove: false
      }
    }
  });
}

// Bottom Slider
if (document.querySelector('.category .bottom .swiper')) {
  new Swiper(".category .bottom .swiper", {
    pagination: {
      el: ".category .bottom .swiper-pagination",
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        centeredSlides: true,
        slidesPerView: 1.35,
        loop: true
      },
      1024: {
        allowTouchMove: false,
        loop: false
      }
    }
  });
}
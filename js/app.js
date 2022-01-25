/* #Global
  ======================================================= */
const body = document.querySelector('body')

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

/* #Post Cards Slider
  ======================================================= */
if (document.querySelector('.post-cards .swiper')) {
  new Swiper(".post-cards .swiper", {
    pagination: {
      el: ".post-cards .swiper-pagination",
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
        loop: false,
        slidesPerView: 3
      }
    }
  });
}

/* #Popup
  ======================================================= */
const popups = document.querySelectorAll('.popup');
const popupTogglers = document.querySelectorAll('.popup-toggler');
const popupClosers = document.querySelectorAll('.popup-close');
const popupBackdrops = document.querySelectorAll('.popup-backdrop');

if (popups && popupTogglers) {
  popups.forEach((popup) => {
    gsap.set(popup, {
      display: 'flex'
    });

    popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content')) {
        body.classList.remove('no-scroll');
        popup.classList.remove('show');
      }
    });
  });

  popupTogglers.forEach((toggler) => {

    toggler.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = document.querySelector(toggler.dataset.popup);

      body.classList.add('no-scroll');
      popup.classList.add('show');
    });
  });
}

if (popupClosers) {
  popupClosers.forEach((closer) => {
    closer.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = closer.closest('.popup');

      body.classList.remove('no-scroll');
      popup.classList.remove('show');

    })
  });
}
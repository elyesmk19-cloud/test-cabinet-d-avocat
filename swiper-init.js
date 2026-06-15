const expertisesSwiper = new Swiper('.expertises-swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  speed: 650,
  coverflowEffect: {
    rotate: 22,
    stretch: 0,
    depth: 160,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      coverflowEffect: { rotate: 0, depth: 0, modifier: 1, slideShadows: false },
    },
    768: {
      slidesPerView: 3,
      coverflowEffect: { rotate: 22, depth: 160, modifier: 1, slideShadows: false },
    },
  },
  on: {
    slideChange: function () {
      document.querySelectorAll('.expertise-card h3')
        .forEach(h => h.style.fontStyle = 'normal');
      const active = document.querySelector(
        '.swiper-slide-active .expertise-card h3'
      );
      if (active) active.style.fontStyle = 'italic';
    }
  }
});

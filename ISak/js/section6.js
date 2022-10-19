const s6_paginationNameEl = document.querySelector(
  '.section6 .pagination-name'
);
const s6_nextBtnEl = document.querySelector('.section6 .next-btn');
const s6_prevBtnEl = document.querySelector('.section6 .prev-btn');

//section 6 스와이퍼
const s6_swiper = new Swiper('.section6 .swiper', {
  // observer: true,
  // observeParents: true,
  autoplay: true,
  speed: 900,
  rewind: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.section6 .next-btn',
    prevEl: '.section6 .prev-btn',
  },
  scrollbar: {
    el: '.section6 .pagination-bars',
  },
  pagination: {
    el: '.section6 .pagination-name',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      let text;
      switch (current) {
        case 1:
          text = '이솝 파르나스';
          break;
        case 2:
          text = '이솝 성수';
          break;
        case 3:
          text = '이솝 한남';
          break;
        default:
          text = 'None';
          break;
      }

      gsap.to(s6_paginationNameEl, 0.2, {
        opacity: 0,
      });

      setTimeout(() => {
        s6_paginationNameEl.textContent = text;
        gsap.to(s6_paginationNameEl, 0.2, {
          opacity: 1,
        });
      }, 300);
    },
  },
});

// section6 버튼 등장
const s6_colRight = document.querySelector('.section6 .col-right');
s6_colRight.addEventListener('mouseover', () => {
  s6_nextBtnEl.classList.add('show');
  s6_prevBtnEl.classList.add('show');
  s6_swiper.autoplay.stop();
});

s6_colRight.addEventListener('mouseout', () => {
  s6_nextBtnEl.classList.remove('show');
  s6_prevBtnEl.classList.remove('show');
  s6_swiper.autoplay.start();
});

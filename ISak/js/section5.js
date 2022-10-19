//sectino 5 스와이퍼
const s5_swiper = new Swiper('.section5 .swiper', {
  speed: 900,
  autoplay: true,
  loop: false,
  slidesPerView: 3,
  navigation: {
    nextEl: '.section5 .next-btn',
    prevEl: '.section5 .prev-btn',
  },
  scrollbar: {
    el: '.section5 .pagination-bars',
    dragSize: 400,
  },
});

// section 5 버튼 등장 토글
const s5_el = document.querySelector('.section5');
const s5_prevBtn = document.querySelector('.section5 .prev-btn');
const s5_nextBtn = document.querySelector('.section5 .next-btn');

s5_el.addEventListener('mouseover', () => {
  s5_nextBtn.classList.add('show');
  s5_prevBtn.classList.add('show');
});

s5_el.addEventListener('mouseout', () => {
  s5_nextBtn.classList.remove('show');
  s5_prevBtn.classList.remove('show');
});

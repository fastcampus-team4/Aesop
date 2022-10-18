///////////////////////////////////////////////////////////////////////////////////// Section 2

//section2 버튼
const s2_prevBtn = document.querySelector('.section2 .prev-btn');
const s2_nextBtn = document.querySelector('.section2 .next-btn');

// section2 slides
const s2_swiper = new Swiper('.section2 .swiper', {
  speed: 900,
  loop: false,
  slidesPerView: 3,
  navigation: {
    nextEl: '.section2 .next-btn',
    prevEl: '.section2 .prev-btn',
  },
  scrollbar: {
    el: '.section2 .pagination-bar',
    dragSize: 170,
  },
});

// section2 row에 마우스 올리면 버튼 나타나기
const s2_El = document.querySelector('.section2');

s2_El.addEventListener('mouseover', () => {
  s2_nextBtn.classList.add('show');
  s2_prevBtn.classList.add('show');
});
s2_El.addEventListener('mouseout', () => {
  s2_nextBtn.classList.remove('show');
  s2_prevBtn.classList.remove('show');
});

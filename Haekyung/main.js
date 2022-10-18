new Swiper('.sec2 .swiper', {
  observe: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3.2,
  spaceBetween: 15,

  navigation: {
    nextEl: '.sec2 .inner .swiper-button-next',
    prevEl: '.sec2 .inner .swiper-button-prev',
  },

  scrollbar: {
    el: '.sec2 .swiper-scrollbar',
    dragSize: 200,
  },
});

new Swiper('.sec5 .swiper', {
  observe: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3,
  spaceBetween: 42,

  navigation: {
    nextEl: '.sec5 .swiper-button-next',
    prevEl: '.sec5 .swiper-button-prev',
  },

  scrollbar: {
    el: '.sec5 .inner .swiper .swiper-scrollbar',
    dragSize: 350,
  },
});

const s6_swiper = new Swiper('.sec6 .inner .swiper', {
  observe: true,
  observeParents: true,
  loopedSlides: 1,
  slidesPerView: 1,
  spaceBetween: 0,
  rewind: true,

  navigation: {
    nextEl: '.sec6 .swiper-button-next',
    prevEl: '.sec6 .swiper-button-prev',
  },

  scrollbar: {
    el: '.sec6 .inner .swiper .swiper-scrollbar',
    dragSize: 300,
  },
});

// BANNER-MODAL
const bModal = document.getElementById('banner-modal');
const bBtn = document.getElementById('banner-btn');
const bModalClose = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
bBtn.onclick = function () {
  bModal.classList.add('modal-open');
};

// When the user clicks on <span> (x), close the modal
bModalClose.onclick = function () {
  bModal.classList.remove('modal-open');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == bModal) {
    bModal.classList.remove('modal-open');
  }
};

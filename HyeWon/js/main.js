// Perfume section Swiper
// new Swiper('선택자', 옵션);
new Swiper('#perfume-section .swiper', {
  // autoplay: true,
  slidesPerView: 3,
  spaceBetween: 20,
  scrollbar: {
    el: '#perfume-section .swiper-scrollbar',
    dragSize: 200,
    snapOnRelease: true,
  },
  navigation: {
    prevEl: '#perfume-section .swiper-button-prev',
    nextEl: '#perfume-section .swiper-button-next',
  },
});

// Selection section Swiper
new Swiper('#selection-section .swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  scrollbar: {
    el: '#selection-section .swiper-scrollbar',
    dragSize: 883,
    snapOnRelease: true,
  },
  navigation: {
    prevEl: '#selection-section .swiper-button-prev',
    nextEl: '#selection-section .swiper-button-next',
  },
});

// Store section Swiper
const paginationEl = document.querySelector('#store-section .swiper-pagination');
new Swiper('#store-section .swiper', {
  // loop: true,
  rewind: true,
  autoplay: {
    delay: 3000,
    // disableOnInteraction: false,
  },
  slidesPerView: 1,
  scrollbar: {
    el: '#store-section .swiper-scrollbar',
    dragSize: 370,
    // snapOnRelease: true,
  },
  pagination: {
    el: '#store-section .swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      let text;
      // current : 슬라이드 순서
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
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(paginationEl, 0.1, {
        opacity: 0,
      });
      setTimeout(() => {
        paginationEl.textContent = text;
        gsap.to(paginationEl, 0.1, {
          opacity: 1,
        });
      }, 300);
    },
  },
  navigation: {
    prevEl: '#store-section .swiper-button-prev',
    nextEl: '#store-section .swiper-button-next',
  },
});

//  Header (최상단 띠배너) 클릭시 Modal창 오픈
const body = document.querySelector('body');
const headerEl = document.querySelector('.header');
const headerBtn = document.querySelector('.header .header-btn');
const modal = document.querySelector('.header .modal');

const openModal = () => {
  modal.classList.toggle('open');
  if (modal.classList.contains('open')) {
    body.style.overflow = 'hidden';
  }
};

headerBtn.addEventListener('click', openModal);

// Modal button 및 Modal창 외부영역 클릭 시, modal창 닫힘
const overlay = document.querySelector('.modal .modal__overlay');
const modalBtn = document.querySelector('.modal .modal-btn');

const closeModal = () => {
  modal.classList.remove('open');
  if (!modal.classList.contains('open')) {
    body.style.overflow = 'scroll';
  }
};

overlay.addEventListener('click', closeModal);
modalBtn.addEventListener('click', closeModal);

// GNB 각 카테고리 시, 해당 GNB modal창 오픈 및 Header(최상단 띠배너) 사라짐
// Gnb Modal elements
const skinCareModalEl = document.querySelector('.gnb-item .skin-care-modal');
const bodyHandModalEl = document.querySelector('.gnb-item .body-hand-modal');
const hairModalEl = document.querySelector('.gnb-item .hair-modal');
const perfumeModalEl = document.querySelector('.gnb-item .perfume-modal');
const homeModalEl = document.querySelector('.gnb-item .home-modal');
const kitModalEl = document.querySelector('.gnb-item .kit-modal');
const giftModalEl = document.querySelector('.gnb-item .gift-modal');
const readingModalEl = document.querySelector('.gnb-item .reading-modal');
const storeModalEl = document.querySelector('.gnb-item .store-modal');
const searchModalEl = document.querySelector('.gnb-item .search-modal');

// Gnb elements
const skinCareEl = document.querySelector('.skin-care');
const bodyHandEl = document.querySelector('.gnb-item.body-hand');
const hairEl = document.querySelector('.gnb-item.hair');
const perfumeEl = document.querySelector('.gnb-item.perfume');
const homeEl = document.querySelector('.gnb-item.home');
const kitEl = document.querySelector('.gnb-item.kit');
const giftEl = document.querySelector('.gnb-item.gift');
const readingEl = document.querySelector('.gnb-item.reading');
const storeEl = document.querySelector('.gnb-item.store');
const searchEl = document.querySelector('.gnb-item.search');
const closeBtn = document.querySelector('.gnb-item.close');

const gnb = document.querySelector('.gnb');
const gnbItemEls = document.querySelectorAll('.gnb .gnb-item');
const gnbContainer = document.querySelector('.gnb .gnb-container');
const gnbBox = document.querySelector('.gnb .gnb-box');
const gnbModals = document.querySelectorAll('.gnb-item .gnb-modal');

// SkinCar category
const openSkinCare = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  skinCareModalEl.classList.add('open');
  if (skinCareModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  } else {
    gnbBox.style.position = 'fixed';
  }
};
skinCareEl.addEventListener('click', openSkinCare);

// BodyHand category
const openBodyHand = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  bodyHandModalEl.classList.add('open');
  if (bodyHandModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
};
bodyHandEl.addEventListener('click', openBodyHand);

// Hair category
const openHair = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  hairModalEl.classList.add('open');
  if (hairModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
};
hairEl.addEventListener('click', openHair);

// Perfume categoty
const openPerfume = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  perfumeModalEl.classList.add('open');
  if (perfumeModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
  console.log('click');
};
perfumeEl.addEventListener('click', openPerfume);

// Home categoty
const openHome = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  homeModalEl.classList.add('open');
  if (homeModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
  console.log('click');
};
homeEl.addEventListener('click', openHome);

// Kit categoty
const openKit = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  kitModalEl.classList.add('open');
  if (kitModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
  console.log('click');
};
kitEl.addEventListener('click', openKit);

// Gift categoty
const openGift = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  giftModalEl.classList.add('open');
  if (giftModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
  console.log('click');
};
giftEl.addEventListener('click', openGift);

// Reading categoty
const openReading = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  readingModalEl.classList.add('open');
  if (readingModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
  console.log('click');
};
readingEl.addEventListener('click', openReading);

// Store categoty
const openStore = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  storeModalEl.classList.add('open');
  if (storeModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
  console.log('click');
};
storeEl.addEventListener('click', openStore);

// Search categoty
const openSearch = () => {
  gnbModals.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  searchModalEl.classList.add('open');
  if (searchModalEl.classList.contains('open')) {
    closeBtn.classList.remove('hidden');
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
  console.log('click');
};
searchEl.addEventListener('click', openSearch);

// close button
const closeGnbModal = () => {
  closeBtn.classList.add('hidden');
  if (closeBtn.classList.contains('hidden')) {
    gnbModals.forEach((gnbModal) => {
      gnbModal.classList.remove('open');
    });
    body.style.overflow = 'scroll';
    headerEl.classList.remove('hidden');
    gnbBox.classList.remove('open');
  }
};
closeBtn.addEventListener('click', closeGnbModal);

// Gnb 효과 속성값 제거 및 변경
function removeGnbBoxEffect() {
  gnbBox.classList.remove('header--white');
  gnbBox.style.position = 'absolute';
}

//윈도우 마우스 wheel 감지해서 Gnb 작동시키기
window.addEventListener(
  'wheel',
  _.throttle(function (event) {
    let wheel = event.wheelDeltaY;
    // console.log(event.screenY);
    if (event.scrollY === 0) {
      // 최상단에 위치하면 모든 효과 제거
      removeGnbBoxEffect();
    } else if (wheel > 0 && window.scrollY > 128) {
      // Gnb가 보이지 않을때, Gnb를 흰색으로 변경 및 fixed 시킴
      gnbBox.classList.add('gnb--white');
      gnbBox.style.position = 'fixed';
    } else if (wheel > 0 && window.scrollY < 55) {
      // 원래 Gnb가 위치한 자리에 도달하면 Gnb를 속성값 제거 및 absolute 변경
      gnbBox.classList.remove('gnb--white');
      gnbBox.style.position = 'absolute';
    } else if (wheel < 0) {
      gnbBox.style.position = 'absolute';
    }
  }, 10)
);

// Footer
const emailInputEl = document.querySelector('#footer #newsletter-email');

// 이메일주소 Input이 focused 될때, placehoder 제거
emailInputEl.addEventListener('focus', () => {
  emailInputEl.removeAttribute('placeholder', '이메일주소');
});

// 이메일주소 Input이 focus가 해제 될때, placehoder 제거
emailInputEl.addEventListener('blur', () => {
  emailInputEl.setAttribute('placeholder', '이메일주소');
});

// 제어요소
const checkinputEls = document.querySelectorAll('#footer .check');
// 체크박스 체크하지 않았을경우, check message 띄움
const checkMsgEls = document.querySelectorAll('#footer .check-msg');

const emailEl = document.querySelector('#footer .last-input-box');
const emailBtnEl = emailEl.querySelector('.email-btn');
emailBtnEl.addEventListener('click', () => {
  console.log('click');
  checkinputEls.forEach((inputBoxEl, index) => {
    if (checkinputEls[index].checked) {
      checkMsgEls[index].style.display = 'none';
      emailEl.classList.remove('border--red');
    } else {
      checkMsgEls[index].style.display = 'block';
      emailEl.classList.add('border--red');
    }
  });
  email();
});

//
function email() {
  const x = document.querySelector('#footer #newsletter-email');
  if (x.required) {
    x.classList.remove('border--red');
  } else {
    x.classList.add('border--red');
  }
}

emailBtnEl.addEventListener('click', email);

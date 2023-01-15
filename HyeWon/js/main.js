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
  slidesPerView: 3.3,
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

// Gnb 효과 속성값 제거 및 변경
function removeGnbBoxEffect() {
  gnbBox.classList.remove('gnb--white');
  gnbBox.style.position = 'absolute';
}

// 1. wheel 이벤트 사용할 경우
// 윈도우 마우스 wheel 감지해서 Gnb 작동시키기
// window.addEventListener(
//   'wheel',
//   _.throttle(function (event) {
//     let wheel = event.wheelDeltaY;
//     if (event.scrollY === 0) {
//       // 최상단에 위치하면 모든 효과 제거
//       removeGnbBoxEffect();
//     } else if (wheel > 0 && window.scrollY > 128) {
//       // Gnb가 보이지 않을때, Gnb를 흰색으로 변경 및 fixed 시킴
//       gnbBox.classList.add('gnb--white');
//       gnbBox.style.position = 'fixed';
//     } else if (wheel > 0 && window.scrollY < 55) {
//       // 원래 Gnb가 위치한 자리에 도달하면 Gnb를 속성값 제거 및 absolute 변경
//       gnbBox.classList.remove('gnb--white');
//       gnbBox.style.position = 'absolute';
//     } else if (wheel < 0) {
//       if (gnbBox.classList.contains('open')) {
//         gnbBox.style.position = 'fixed';
//       } else {
//         gnbBox.style.position = 'absolute';
//       }
//     }
//   }, 10)
// );

// 2. scroll 이벤트 사용할 경우
let preScrollTop = 0;

window.addEventListener(
  'scroll',
  _.throttle(() => {
    // scrollY가 0일때 최상단 위치
    let nextScrollTop = window.scrollY;
    console.log('window.scrollY: ', nextScrollTop);
    const isActiveGNB = gnbBox.classList.contains('fixed');
    if (nextScrollTop === 0) {
      // 최상단에 위치하면 모든 효과 제거
      removeGnbBoxEffect();
    } else if (nextScrollTop < preScrollTop && nextScrollTop < 55) {
      // 스크롤 올릴 때 실행
      // 원래 Gnb가 위치한 자리에 도달하면 Gnb를 속성값 제거 및 absolute 변경
      removeGnbBoxEffect();
    } else if (nextScrollTop < preScrollTop && nextScrollTop > 128) {
      // 스크롤 올릴 때 실행
      // Gnb가 보이지 않을때, Gnb를 흰색으로 변경 및 fixed 시킴
      gnbBox.classList.add('gnb--white');
      gnbBox.style.position = 'fixed';
      gnbBox.style.position = 'fixed';
    } else if (nextScrollTop > preScrollTop) {
      // 스크롤 내릴 때 실행
      gnbBox.style.position = 'absolute';
      if (isActiveGNB) {
        /**
         * 닫기버튼을 누르면, overflow-y: hidden이 적용되면서 우측에 스크롤바가 사라짐
         * 그러면 화면이 우측으로 살짝 커지면서 퍼센트 너비로 적용된 이미지 크기가 바뀌고, 그러면서 화면 스크롤이 살짝 움직임 -> 스크롤이 살짝 아래로 내려감
         */
        gnbBox.style.position = 'fixed';
        gnbBox.classList.remove('fixed');
      }
    }
    preScrollTop = nextScrollTop;
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

// 체크박스 제어요소
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
    } else {
      checkMsgEls[index].style.display = 'block';
    }
  });
});

// 이메일 주소가 유효하지 않을 경우, check message 띄움
const checkEmailMsgEl = document.querySelector('#footer .check-msg.last');
function email() {
  const bol = emailInputEl.validity.patternMismatch;
  if (!bol && emailInputEl.value) {
    emailEl.classList.remove('border--red');
    checkEmailMsgEl.style.display = 'none';
  } else {
    emailEl.classList.add('border--red');
    checkEmailMsgEl.style.display = 'block';
  }
}
emailBtnEl.addEventListener('click', email);

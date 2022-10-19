// HEADER-MODAL
const hBtn1 = document.querySelector('.h-btn.skincare');
const hBtn2 = document.querySelector('.h-btn.body');
const hBtn3 = document.querySelector('.h-btn.hair');
const hBtn4 = document.querySelector('.h-btn.perfume');
const hBtn5 = document.querySelector('.h-btn.home');
const hBtn6 = document.querySelector('.h-btn.kit');
const hBtn7 = document.querySelector('.h-btn.gift');
const hBtn8 = document.querySelector('.h-btn.read');

const hModalCloseBtn = document.querySelector('.h-btn.h-close');
const modalOpenHeader = document.querySelector('.header');

const hModal = document.querySelector('.header-modal');
const hModalMenu = document.querySelector('.header-modal-menu');
const hModalSkin = document.querySelector('#modal-skincare');
const hModalBody = document.querySelector('#modal-body');
const hModalHair = document.querySelector('#modal-hair');
const hModalPerfume = document.querySelector('#modal-perfume');
const hModalHome = document.querySelector('#modal-home');
const hModalKit = document.querySelector('#modal-kit');
const hModalGift = document.querySelector('#modal-gift');
const hModalRead = document.querySelector('#modal-read');

//클릭한 메뉴를 제외하고 다른 메뉴 다 닫기
const removeOpens = function (except) {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  gsap.fromTo('.header-modal.on', 0.5, { height: 0, scaleY: 0 }, { scaleY: 1 });
  const opens = document.querySelectorAll('.open');
  opens.forEach((open) => open.classList.remove('open'));
  except.classList.add('open');
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
};

hBtn1.addEventListener('click', function () {
  removeOpens(hModalSkin);
});
hBtn2.addEventListener('click', function () {
  removeOpens(hModalBody);
});
hBtn3.addEventListener('click', function () {
  removeOpens(hModalHair);
});
hBtn4.addEventListener('click', function () {
  removeOpens(hModalPerfume);
});
hBtn5.addEventListener('click', function () {
  removeOpens(hModalHome);
});
hBtn6.addEventListener('click', function () {
  removeOpens(hModalKit);
});
hBtn7.addEventListener('click', function () {
  removeOpens(hModalGift);
});
hBtn8.addEventListener('click', function () {
  removeOpens(hModalRead);
});

// 메뉴 닫기버튼
hModalCloseBtn.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'block';
  document.querySelector('body').style.overflow = 'scroll';
  hModal.classList.remove('on');
  hModalMenu.classList.remove('open');
  hModalCloseBtn.classList.remove('open');
  modalOpenHeader.classList.remove('white-version');
});

// SCROLL - HEADER

let currentDirection = ''; // 현재의 방향을 나타내는 변수
let lastScrollTop = 0; // 방향을 구하기 위해 사용되는 변수

window.addEventListener('scroll', function () {
  let currentPos = document.documentElement.scrollTop;
  if (currentPos > lastScrollTop) {
    // 아래로 스크롤 중
    if (currentDirection != 'down') {
      // 마지막 방향 확인
      currentDirection = 'down';
      console.log('down');
      setTimeout(
        () => (modalOpenHeader.style.transform = 'translateY(-80px)'),
        50
      );
      setTimeout(() => modalOpenHeader.classList.remove('white-version'), 100);
    }
  } else if (window.pageYOffset == 0) {
    modalOpenHeader.classList.remove('white-version');
  } else if (currentPos < lastScrollTop) {
    // 위로 스크롤 중
    if (currentDirection != 'up') {
      // 마지막 방향 확인
      currentDirection = 'up';
      console.log('up');
      modalOpenHeader.classList.add('white-version');
      setTimeout(
        () => (modalOpenHeader.style.transform = 'translateY(0)'),
        100
      );
    }
  }
  lastScrollTop = currentPos; // 방향을 구하기 위해 마지막 스크롤 지점을 저장
});

// FOOTER-EMAIL-BUTTON
const emailBtn = document.querySelector('#email-check');
const emailAge = document.querySelector('#age');
const emailPersonalInfo = document.querySelector('#personal-info');
const emailMarketing = document.querySelector('#marketing');
const emailAddress = document.querySelector('#email-address');
const emailAgeError = document.querySelector('.age-error');
const emailPersonalInfoError = document.querySelector('.personal-info-error');
const emailMarketingError = document.querySelector('.marketing-error');
const emailAddressError = document.querySelector('.email-address-error');

function validateEmail(email) {
  var re =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

emailBtn.addEventListener('click', function () {
  if (!emailAge.checked) {
    emailAgeError.classList.add('error-on');
  } else {
    emailAgeError.classList.remove('error-on');
  }
  if (!emailPersonalInfo.checked) {
    emailPersonalInfoError.classList.add('error-on');
  } else {
    emailPersonalInfoError.classList.remove('error-on');
  }
  if (!emailMarketing.checked) {
    emailMarketingError.classList.add('error-on');
  } else {
    emailMarketingError.classList.remove('error-on');
  }
  if (!validateEmail(emailAddress.value)) {
    emailAddressError.classList.add('error-on');
    document.querySelector('.email-address').classList.add('error-on');
    emailBtn.classList.add('error-on');
  } else {
    emailAddressError.classList.remove('error-on');
    document.querySelector('.email-address').classList.remove('error-on');
    emailBtn.classList.remove('error-on');
  }
});

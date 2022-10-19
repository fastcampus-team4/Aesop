// SUPER-HEADER-MODAL
const superHeaderEl = document.querySelector('.super-header');
const superHeaderModalArea = document.querySelector('.super-header-modal');
const superHeaderModalCloseEl = document.querySelector(
  '.super-header-modal .close-container .material-symbols-outlined'
);

let superHeaderModalBool = false;
const bodyEl = document.querySelector('body');

// super-header 이벤트
superHeaderEl.addEventListener('click', () => {
  if (superHeaderModalBool) {
    // 열려있는 경우 닫아주기
    console.log('열려있어서 닫았어');
    superHeaderModalArea.classList.remove('show');
    superHeaderModalBool = false;
  } else {
    //닫혀 있는 경우 열어주기
    console.log('닫혀있어서 열었어');
    superHeaderModalArea.classList.add('show');
    superHeaderModalBool = true;
  }
  console.log(superHeaderModalBool);
});
// super-header-modal 닫기 버튼 이벤트
superHeaderModalCloseEl.addEventListener('click', () => {
  superHeaderModalArea.classList.remove('show');
  superHeaderModalBool = false;
});
//  body 클릭해서 닫기
bodyEl.addEventListener('click', (e) => {
  //해당 영역 누르면 super-header-modal 닫아주기
  if (e.x > 660 && superHeaderModalBool && e.y > 40) {
    superHeaderModalArea.classList.remove('show');
    superHeaderModalBool = false;
  }
});

// 모달 내용을 띄울 바탕
const headerModalArea = document.querySelector('.section1 .header-modal');
// BUTTONS ELEMENT
const headerLeftBtnsEl = document.querySelectorAll(
  '.section1 .header .left__list .left-menu-btn'
);
const headerCloseBtnEl = document.querySelector('#closeBtnInMenu');
//// MODAL ELEMENTS
const menuModalsEl = document.querySelectorAll(
  '.section1 .header-modal__inner'
);

//   버튼들 active 제거 & 컨텐츠 모두 닫기 & 닫기 버튼 제거
function turnOffAllHeaderMenu() {
  menuModalsEl.forEach((content) => content.classList.remove('show')); // 컨텐츠 모두 제거
  headerLeftBtnsEl.forEach((btn) => btn.classList.remove('active')); // 모든 버튼 밑줄 제거
  headerCloseBtnEl.classList.remove('show'); // close 버튼 제거
}

// 닫기 버튼 눌렀을 때
headerCloseBtnEl.addEventListener('click', () => {
  turnOffAllHeaderMenu(); // 헤더 메뉴 전부 끄기
  headerModalArea.classList.remove('show'); // 모달 컨테이너도 끄기
  superHeaderEl.classList.remove('hidden'); // super-header 도 더이상 감추지 말기

  if (window.scrollY === 0) {
    //바디 스크롤 최상단에 위치한 경우 fixed랑 white 옵션 끄기
    removeHeaderOptions();
  }
  //스크롤 막아놓은거 다시 풀기
  preventBodyScroll('off');
});

// input 값으로 'on' / 'off' 를 입력하여 바디 스크롤 유무 설정
function preventBodyScroll(input) {
  if (input === 'on') {
    // on 이 입력되면 바디 스크롤 기능 X
    bodyEl.style.overflow = 'hidden';
    bodyEl.style.height = '100%';
  } else if (input === 'off') {
    // off 가 입력되면 바디 스크롤 기능 O
    bodyEl.style.overflow = '';
    bodyEl.style.height = '';
  }
}

function handleMenuBtn() {
  const i = Number(this.id); // 누른 버튼의 id 넘버를 가져온다.
  //  우선 메뉴모달 관련하여 끌 수 있는 건 전부다 꺼준다
  turnOffAllHeaderMenu();

  // super-header감추기
  superHeaderEl.classList.add('hidden');

  //헤더 컨트롤
  headerEl.classList.add('header--white');
  headerEl.classList.add('header--fixed');

  //바디 스크롤 막기
  preventBodyScroll('on');

  //헤더EL 위치 설정
  gsap.to(headerEl, 0.2, {
    y: 0,
  });

  //버튼에 active 클래스 달아서 밑줄 표시
  this.classList.add('active');

  // 모달에 show 클래스 달린 유무에 따라 on 또는 off
  if (menuModalsEl[i].classList.contains('show')) {
    // true 인 경우(이미 켜진경우) 꺼준다.
    headerModalArea.classList.remove('show');
    menuModalsEl[i].classList.remove('show');
    headerCloseBtnEl.classList.remove('show');
  } else {
    //false 인 경우(안켜진 상태) 켜준다.
    headerModalArea.classList.add('show');
    menuModalsEl[i].classList.add('show');
    headerCloseBtnEl.classList.add('show');
  }

  if (i >= 9) {
    storeTextInputEls[i - 8].focus();
  }
}

// 모든 헤더메뉴버튼에 클릭시 이벤트 리스너를 추가한다.
headerLeftBtnsEl.forEach((el) => el.addEventListener('click', handleMenuBtn));

const storeTextBoxEls = document.querySelectorAll(
  '.section1 .header-modal__inner .textbox'
);
const storeTextInputEls = document.querySelectorAll(
  '.section1 .header-modal__inner .textbox input'
);
storeTextInputEls.forEach((el, index) => {
  el.addEventListener('focus', () => {
    storeTextBoxEls[index].style.borderBottom = '1px solid rgba(0,0,0)';
  });
  el.addEventListener('blur', () => {
    storeTextBoxEls[index].style.borderBottom = '1px solid rgba(0,0,0,0.3)';
  });
});

//  1. Header 모달창 제어
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

// 2. GNB 각 카테고리 클릭시, gnb 모달창 제어
const gnb = document.querySelector('.gnb');
const gnbBox = document.querySelector('.gnb .gnb-box');
const gnbItemEls = document.querySelectorAll('.gnb .gnb-item');
const gnbModalEls = document.querySelectorAll('.gnb-item .gnb-modal');
const closeBtn = document.querySelector('.gnb-item.close');

// GNB 각 카테고리 클릭시, 모든 gnb-item 및 gnb-modal 요소의 open 클래스 제거
function close() {
  gnbModalEls.forEach((gnbModal) => {
    gnbModal.classList.remove('open');
  });
  gnbItemEls.forEach((gnbItemEl) => {
    gnbItemEl.classList.remove('open');
  });
}

// GNB 각 카테고리 클릭시, 해당 카테고리의 모달창 open
function openGnbModal(gnbModal, gnbItem) {
  close();
  gnbModal.classList.add('open');
  gnbItem.classList.add('open'); // 클릭된 카테고리에 밑줄 생성
  if (gnbModal.classList.contains('open')) {
    // close 버튼 나타나게 하기
    closeBtn.classList.remove('hidden');

    // body태그 스크롤 막기
    body.style.overflowY = 'hidden';

    // Header(최상단 띠배너) 사라짐
    headerEl.classList.add('hidden');

    // gnb 배경색상 및 글자색 변경
    gnbBox.classList.add('open');

    // gnb modal창 fixed
    // gnbModal.style.position = 'fixed';
  }
}

gnbItemEls.forEach((gnbItemEl, index) => {
  gnbItemEl.addEventListener('click', () => {
    if (gnbItemEl !== gnbItemEls[gnbItemEls.length - 1]) {
      // close 버튼을 누를때는 openGnbModal 함수가 작동이 안되도록 한다.
      openGnbModal(gnbModalEls[index], gnbItemEl);
    } else {
      // close 버튼을 누를때 closeGnbModal 함수 호출
      closeGnbModal();
    }
  });
});

// close button
const closeGnbModal = () => {
  closeBtn.classList.add('hidden');
  if (closeBtn.classList.contains('hidden')) {
    close();
    body.style.overflowY = 'scroll';
    headerEl.classList.remove('hidden');
    gnbBox.classList.remove('open');
  }
};

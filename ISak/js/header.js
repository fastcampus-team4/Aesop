///////////////////// HEADER 스크롤 효과
window.__scrollPosition = document.documentElement.scrollTop || 0;
const headerEl = document.querySelector('#header');
// 헤더 옵션 모두 제거
function removeHeaderOptions() {
  headerEl.classList.remove('header--white');
  headerEl.classList.remove('header--fixed');
}
//윈도우 스크롤 감지해서 헤더 작동시키기
window.addEventListener(
  'scroll',
  _.throttle(function () {
    let _documentY = document.documentElement.scrollTop;
    let _direction = _documentY - window.__scrollPosition >= 0 ? 'down' : 'up';

    console.log(_direction, window.scrollY); // 콘솔창에 스크롤 방향을 출력

    if (window.scrollY === 0) {
      //최상단에 도착하면 모든 옵션 삭제
      removeHeaderOptions();
    } else if (_direction === 'down' && window.scrollY > 40 + 77) {
      //어느정도 스크롤 내리면 흰색으로 바꾸고 화면 위로 없애기
      headerEl.classList.add('header--white');
      gsap.to(headerEl, 0.2, {
        y: -120,
      });
    } else if (_direction === 'up' && window.scrollY > 40 + 77) {
      // 스크롤 올리면 fixed로 등장
      headerEl.classList.add('header--fixed');
      gsap.to(headerEl, 0.2, {
        y: 0,
      });
    } else if (_direction === 'up' && window.scrollY <= 40) {
      //최상단 근처에 가까워 지면 fixed 를 해제
      headerEl.classList.remove('header--fixed');
    }

    window.__scrollPosition = _documentY; // Update scrollY
  }, 10)
);

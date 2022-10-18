console.log('hello');
// scrollMagic 으로 스크롤시 섹션 등장하기 기능 구현

const spyEls = document.querySelectorAll('.scroll-spy');
console.log(spyEls, 'scroll 스파이');
spyEls.forEach((el, i) => {
  new ScrollMagic.Scene({
    triggerElement: el, //감시할 요소
    triggerHook: 0.8, //화면 80% 위치에 트리거
  })
    .setClassToggle(el, 'show') //show 를 토글
    .addTo(new ScrollMagic.Controller());
});

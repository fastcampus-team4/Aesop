//footer 에러메세지 구현

//require 요소들 : 조건체킹 할 요소
const ft_requireEls = document.querySelectorAll('footer .require');
// 에러메세지 요소들 : 조건이 안맞으면 띄울 에러메세지 요소
const ft_errMsgEls = document.querySelectorAll('footer .error-msg');
const ft_emailEl = document.querySelector('footer .email');
// 이메일버튼 : 누르면 조건 체크해서 에러메세지 띄움
const ft_emailBtnEl = document.querySelector('footer #enterEmail');

ft_emailBtnEl.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) {
    // 체크박스 에러메세지 구현하기
    if (ft_requireEls[i].checked) {
      // 체크가 된 경우 display : none;
      ft_errMsgEls[i].style.display = 'none';
    } else {
      // 체크 안된 경우 display 를 초기화 하여 나타냄
      ft_errMsgEls[i].style.display = 'flex';
    }
  }

  // 이메일 에러메세지 구현하기
  const textInput = ft_requireEls[3].value;

  if (checkEmail(textInput)) {
    //유효한 이메일이면 에러 없앰
    ft_emailEl.classList.remove('border--wine');
    ft_errMsgEls[3].style.display = 'none';
  } else {
    //입력한 메일이 유효하지 않으면 에러띄우기
    ft_emailEl.classList.add('border--wine');
    ft_errMsgEls[3].style.display = 'flex';
  }
});

//이메일 유효 체크 함수. 유효하면 True / 아니면 False
function checkEmail(str) {
  let reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}

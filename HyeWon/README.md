# 📌 이솝 사이트 레이아웃 클론

원본사이트 : https://www.aesop.com/

클론사이트 : https://aesop-clone-site.netlify.app

---

## 설명

다양한 레이아웃구조와 JS 라이브러리를 이용할 수 있는 사이트를 선택하여 클론코딩 해보았습니다.

작업 마무리 도중 원본사이트의 KV영역이 수정되어 해당부분은 똑같지 않다는 점 참고 부탁드립니다.

---

## 사용기술

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/Javascript-E7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

---

## 아쉬운점

- 반응형 사이트로 구현하고 싶었는데 시간상의 문제로 완성하지 못했습니다.

- Gnb(Navbar) 각 카테고리 클릭 시, modal창이 나타나는 함수 하나로 제어하고 싶었으나 하지 못해 각 영역에 이벤트를 주어 작동시켰습니다.

- BEM 방법론을 제대로 도입하지 못하였습니다.

---

## 질문 및 피드백 요청

1. BEM 방법론을 조금 사용하긴 했는데 css파일을 볼때 가독성이 좋지 않은것 같습니다. 각 section별로 **css파일을 쪼개서 관리**하는 것이 좋은지 궁금합니다.

2. Gnb(Navbar) 각 카테고리 클릭 시, modal창이 나타나는 **함수 하나**로 제어하고 싶은데 어떻게 구현할 수 있을지 궁금합니다.

   처음에는 javaScript `forEach문`을 이용하여 함수를 만들고 싶었으나 실패하여 각 카테고리에 클릭 이벤트를 주어 완성했는데 해당 방법이 코드량도 많아지고 비효율적이라고 생각이 듭니다.

3. 디스플레이스 사이즈에 따라 화면이 다르게 보이는데 처음부터 작업할 때 어떻게 작업을 해야 효율적이게 할 수 있을지 궁금합니다.

   예를 들어 저는 처음부터 각 요소의 사이즈를 **px단위**로 작업을 했는데 디스플레이를 몇퍼센트로 설정하고 작업했는지 매번 기억이 나지 않았던 경우가 있었습니다.
   그리고 디스프레이를 확대 하였을때 요소가 넘처나는 현상이 발생하여 **%단위**로 수정하였습니다.
   그러다 보니 작업할 때, px단위보다 직관적이지 않은데 작업할때 처음부터 CSS media Query를 사용하는것이 좋을지 궁금합니다.

4. 스크롤이 올라갈때, Gnb(Navbar)의 color가 변하고 position이 fixed되는걸로 바꿔주는 `wheel 이벤트`를 만들었는데 해당 조건문보다 더 좋은 방법이 있을지 궁금합니다. 그리고 wheel 이벤트가 아닌 **scroll 이벤트**를 사용하는것이 더 효율적일지도 궁금합니다.

5. `Store section` 영역 **슬라이더 요소**에서 `swiper-pagination`을 이용하여 이미지가 슬라이드 될때, 해당 이미지에 대한 텍스트로 슬라이드되도록 `switch`문을 사용해 구현하였습니다

   그러다보니 속도를 동시에 조절하기가 어려운데, swiper를 두개 만들고 서로 연동해서 작업하는 방법이 있을지, 아니면 다른 방법이 있을지도 궁금합니다.

6. JS로도 CSS로도 제어가능한 부분은 어떤걸로 작업하는것이 더 좋을지 궁금합니다.

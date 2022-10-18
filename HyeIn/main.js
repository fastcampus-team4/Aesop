/* GNB */
const header = document.querySelector(".head-bottom");
const gnbMenu = document.querySelector(".head-gnb-wrap >li");
const gnbMenuAll = document.querySelectorAll(".head-gnb-wrap>li");
const gnbMenuSearch = document.querySelector(".head-search");
const gnbDepth = document.querySelector(".gnb-main");
const gnbDepthAll = document.querySelectorAll(".gnb-main div");
const main = document.querySelector("main");

const gnbSkin = document.querySelector(".head-skin");
const gnbSkinCont = document.querySelector(".gnb-main-area.skin");
const gnbBody = document.querySelector(".head-body");
const gnbBodyCont = document.querySelector(".gnb-main-area.body");
const gnbHair = document.querySelector(".head-hair");
const gnbHairCont = document.querySelector(".gnb-main-area.hair");
const gnbPerfume = document.querySelector(".head-perfume");
const gnbPerfumeCont = document.querySelector(".gnb-main-area.perfume");
const gnbHome = document.querySelector(".head-home");
const gnbHomeCont = document.querySelector(".gnb-main-area.home");
const gnbKit = document.querySelector(".head-kit");
const gnbKitCont = document.querySelector(".gnb-main-area.kit");
const gnbGift = document.querySelector(".head-gift");
const gnbGiftCont = document.querySelector(".gnb-main-area.gift");
const gnbRead = document.querySelector(".head-read");
const gnbReadCont = document.querySelector(".gnb-main-area.read");
const gnbStore = document.querySelector(".head-store");
const gnbStoreCont = document.querySelector(".gnb-main-area.store");
const gnbSearch = document.querySelector(".head-search i");
const gnbSearchCont = document.querySelector(".gnb-main-area.search");
const gnbCloseBtn = document.querySelector(".head-close-btn");

const wordFade = document.querySelectorAll(".search-word-area>li");

gnbSkin.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((li) => {
    li.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbSkin) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbSkinCont.classList.add("up");
    gnbSkin.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
    gnbSkin.classList.remove("click");
  }
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
gnbBody.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbBody) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbBodyCont.classList.add("up");
    gnbBody.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
3;
gnbHair.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbHair) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbHairCont.classList.add("up");
    gnbHair.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
gnbPerfume.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbPerfume) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbPerfumeCont.classList.add("up");
    gnbPerfume.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
  console.log(e.target);
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
gnbHome.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbHome) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbHomeCont.classList.add("up");
    gnbHome.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
gnbKit.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbKit) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbKitCont.classList.add("up");
    gnbKit.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
gnbGift.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbGift) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbGiftCont.classList.add("up");
    gnbGift.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
gnbRead.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbRead) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbReadCont.classList.add("up");
    gnbRead.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
gnbStore.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbStore) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbStoreCont.classList.add("up");
    gnbStore.classList.add("click");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});
gnbSearch.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  gnbCloseBtn.classList.add("active");
  header.style.top = 0;
  header.classList.add("fixed");

  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbSearch) {
    gnbDepth.classList.add("open");
    gnbSearchCont.classList.add("up");
    gnbMenuSearch.classList.add("click");

    /* SEARCH-WORD */
    wordFade.forEach((fadeEl, index) => {
      gsap.to(fadeEl, 0.1, {
        delay: (index + 1) * 0.1,
        left: 0,
        opacity: 1,
      });
    });
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});

gnbCloseBtn.addEventListener("click", () => {
  gnbMenuAll.forEach((each) => {
    each.classList.remove("click");
  });
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  header.classList.remove("fixed");
  gnbDepth.classList.remove("open");
  gnbCloseBtn.classList.remove("active");
  body.style.overflowY = "scroll";
  /* SEARCH-WORD */
  wordFade.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 0.1, {
      delay: (index + 1) * 0.1,
      left: -10 + "px",
      opacity: 0,
    });
  });
});

/* STORE__INPUT */
const storeSearch = document.querySelector(
  ".gnb-main-content.store #search__input"
);
const storeSearchTxt = document.querySelector(".gnb-main-content.store span");

window.addEventListener("click", (e) => {
  if (e.target == storeSearch) {
    storeSearchTxt.classList.add("store--click");
  } else {
    storeSearchTxt.classList.remove("store--click");
  }
});

/* HEADER-SCROLL */
let lastScrollY = 0;

addEventListener("scroll", (e) => {
  const scrollY = window.scrollY;
  const direction = scrollY > lastScrollY ? "Scroll Down" : "Scroll Up";
  lastScrollY = scrollY;

  if (direction == "Scroll Up" && scrollY > 40) {
    header.classList.add("scroll--fixed");
    header.style.top = 0;
  } else if (header.classList.contains("fixed")) {
    header.classList.remove("scroll--fixed");
  } else if (direction == "Scroll Down") {
    header.classList.remove("scroll--fixed");
    header.style.top = -80 + "px";
  } else {
    header.classList.remove("scroll--fixed");
  }
});

/* MODAL */
const modalBtn = document.querySelector(".head-top-wrap");
const modalBg = document.querySelector(".modal-bg");
const modalArea = document.querySelector(".modal-wrap");
const modalCloseBtn = document.querySelector(".modal-close");
const body = document.querySelector("body");

modalBtn.addEventListener("click", () => {
  modalBg.style.opacity = 1;
  modalBg.style.zIndex = 1000;
  modalBg.style.transition = 1 + "s";
  modalArea.style.left = 0;
  modalArea.style.zIndex = 1001;
  modalArea.style.transition = 1 + "s";
  body.style.overflow = "hidden";
});
modalCloseBtn.addEventListener("click", () => {
  modalBg.style.opacity = 0;
  modalBg.style.zIndex = -10;
  modalArea.style.left = -50 + "vw";
  body.style.overflow = "visible";
});
body.addEventListener("click", (e) => {
  const selected = e.target;
  let state = window.getComputedStyle(selected).display;
  if (state === "block" && !selected.closest(".modal-wrap")) {
    modalBg.style.opacity = 0;
    modalBg.style.zIndex = -10;
    modalArea.style.left = -50 + "vw";
    body.style.overflow = "visible";
  }
});

/* SWIPER */
new Swiper(".section1 .swiper", {
  slidesPerView: 4.2,

  navigation: {
    nextEl: ".section1 .swiper-button-next",
    prevEl: ".section1 .swiper-button-prev",
  },

  scrollbar: {
    el: ".section1 .swiper-scrollbar",
    draggable: false,
    dragSize: 300,
    snapOnRelease: true,
  },
});

new Swiper(".section4 .swiper", {
  slidesPerView: 4,

  navigation: {
    nextEl: ".section4 .swiper-button-next",
    prevEl: ".section4 .swiper-button-prev",
  },

  scrollbar: {
    el: ".section4 .swiper-scrollbar",
    draggable: false,
    dragSize: 900,
    snapOnRelease: true,
  },
});

new Swiper(".section5 .swiper", {
  autoplay: true,
  rewind: true,

  navigation: {
    nextEl: ".section5 .swiper-button-next",
    prevEl: ".section5 .swiper-button-prev",
  },

  scrollbar: {
    el: ".section5 .swiper-scrollbar",
    draggable: false,
    dragSize: 330,
    snapOnRelease: true,
  },
});

/* EMAIL */
const inputElAll = document.querySelectorAll(".communication-form input");
const inputAge = inputElAll[0];
const inputInfo = inputElAll[1];
const inputAd = inputElAll[2];
const inputEmail = inputElAll[3];

const inputBtn = document.querySelector(".email button");
const emailPlaceholder = document.querySelector(".email span");

const errorElAll = document.querySelectorAll(".error");
const errorInfo = errorElAll[0];
const errorAd = errorElAll[1];
const errorAge = errorElAll[2];
const errorEmail = errorElAll[3];

// EMAIL CHEACK FUNCTION
function emailCheckFrom(email) {
  let regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return email != "" && email != "undefined" && regex.test(email);
}
// EMAIL BTN, INPUT ENTER COMMON FUNCTION
function emailCheckFromCommon() {
  let email = inputEmail.value;
  if (email == "" || email == "undefined") {
    errorEmail.style.display = "block";
    inputEmail.classList.add("error--color");
    inputBtn.classList.add("error--color");
    return false;
  }
  if (!emailCheckFrom(email)) {
    errorEmail.style.display = "block";
    inputEmail.classList.add("error--color");
    inputBtn.classList.add("error--color");
    return false;
  }
  if (emailCheckFrom(email)) {
    errorEmail.style.display = "none";
    inputEmail.classList.remove("error--color");
    inputBtn.classList.remove("error--color");
  }
}
// EMAIL INPUT CLICK
window.addEventListener("click", (e) => {
  if (e.target == inputEmail) {
    emailPlaceholder.style.opacity = 0;
  } else if (inputEmail.value) {
    emailPlaceholder.style.opacity = 0;
  } else {
    emailPlaceholder.style.opacity = 1;
  }
});
// EMAIL INPUT ENTER
inputEmail.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
    emailCheckFromCommon();
  }
});
// INPUT BTN CLICK
inputBtn.addEventListener("click", () => {
  emailCheckFromCommon();

  for (let i = 0; i < 3; i++) {
    if (inputElAll[i].checked) {
      errorElAll[i].style.display = "none";
    } else {
      errorElAll[i].style.display = "block";
    }
  }
});

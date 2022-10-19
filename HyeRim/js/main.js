// SWIPER
// perfume
new Swiper('.perfume.swiper', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 50,
  speed: 700,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1080: {
      slidesPerView: 3
    },
    1500: {
      slidesPerView: 4
    },
  },
  scrollbar: {
    el: '.perfume .swiper-scrollbar',
    dragSize: 200,
  },
  navigation: {
    nextEl: '.perfume .swiper-button-next',
    prevEl: '.perfume .swiper-button-prev',
  },
});

// SWIPER
// locater
const timer = 700;
const locateTxt = document.querySelector('.store-locate')

const locaterSwiper = new Swiper('.store.swiper', {
  // loop: true,
  autoplay: true,
  slidesPerView: 1,
  speed: timer,
  slideToClickedSlide: true,
  rewind: true,
  navigation: {
    nextEl: '.store .swiper-button-next',
    prevEl: '.store .swiper-button-prev',
  },
  // pagination: {
  //   el: '.store .swiper-pagination',
  //   type: "progressbar",
  // },
  // scrollbar: {
  //   el: '.store .swiper-scrollbar',
  //   type: "progressbar",
  // },
  pagination: {
    el: locateTxt,
    type: "custom",
    renderCustom: function (swiper, current, total) {
      let text;
      switch (current) {
        case 1:
          text = "이솝 파르나스";
          break;
        case 2:
          text = "이솝 성수";
          break;
        case 3:
          text = "이솝 한남";
          break;
        default:
          text = "";
          break;
      }
      gsap.to(locateTxt, 0.5, {
        opacity: 0,
      });
      setTimeout(() => {
        locateTxt.textContent = text;
        gsap.to(locateTxt, 0.5, {
          opacity: 1,
        });
      }, 500);
    },
  },
  scrollbar: {
    el: '.store .swiper-scrollbar',
    type: "custom",
    
  },
});

document.querySelector('.store.swiper').addEventListener('mouseover', function() {
  locaterSwiper.autoplay.stop();
  // locaterTxtSwiper.autoplay.stop();
})

document.querySelector('.store.swiper').addEventListener('mouseleave', function() {
  locaterSwiper.autoplay.start();
  // locaterTxtSwiper.autoplay.start();
})

// const locaterTxtSwiper = new Swiper('.store-locate.swiper', {
//   loop: true,
//   autoplay: true,
//   speed: timer,
//   effect: 'fade',
//   navigation: {
//     nextEl: '.store .swiper-button-next',
//     prevEl: '.store .swiper-button-prev',
//   },
// });


// TOP BANNER LEFT PANEL
const topBanner = document.querySelector('.shippingBanner-body a');
const panelBackground = document.querySelector('.panelBackground');
const topBannerPanel = document.querySelector('.shippingBanner-body__panel');
const topBannerClose = document.querySelector('.shippingBanner-body__panel .closeBtn')

topBanner.addEventListener('click', () => {
  panelBackground.classList.add('on');
  topBannerPanel.classList.add('on');
  document.querySelector('body').style.overflow = "hidden";
})

topBannerClose.addEventListener('click', () => {
  panelBackground.classList.remove('on');
  topBannerPanel.classList.remove('on');
  document.querySelector('body').style.overflow = "visible";
})

panelBackground.addEventListener('click', () => {
  panelBackground.classList.remove('on');
  topBannerPanel.classList.remove('on');
  document.querySelector('body').style.overflow = "visible";
})

// jquery
$(document).ready(function() {
  // NAV
  let mainMenu = $('.main-menu')
  let mainMenuLi = mainMenu.find('> li > a');
  let mainMenuPanel = mainMenu.find('.nav-panel');
  let mainMenuCloseBtn = $('header .header__closeBtn');

  mainMenuLi.on('click', function(e) {
    e.preventDefault();

    $('header').addClass('on');
    mainMenu.children('li').removeClass('on');
    $(this).parent('li').addClass('on');
    mainMenuPanel.fadeOut(500);
    mainMenuPanel.find('.nav__image').fadeOut(500);
    $('.pop-search').removeClass('on');

    if ($('header').hasClass('on')) {
      $('body').css('overflow-y', 'hidden')
    }

    if ($(this).parent('li').hasClass('on')) {
      $(this).siblings('.nav-panel').fadeIn(100);
      $(this).siblings('.nav-panel').find('.flex ul').fadeIn(500);
      $(this).siblings('.nav-panel').find('.nav__image').fadeIn(500);
    }

    $('.store__load__input input').focus(function() {
      $('.store__load__input label').addClass('on'); 
    });
  
    $('.store__load__input input').blur(function() {
      $('.store__load__input label').removeClass('on'); 
      if($(this).val()) {
        $('.store__load__input label').addClass('on'); 
      }
    });

    if ($(this).parent('li.search-area').hasClass('on')) {
      $('#searchInput').focus();
      $('.pop-search').addClass('on');
    } else {
      $('.pop-search').removeClass('on');
    }

    mainMenuCloseBtn.css('display','block');
  });
  
  mainMenuCloseBtn.on('click', function(e) {
    e.preventDefault();

    mainMenuCloseBtn.css('display','none');
    $('header').removeClass('on');
    mainMenuPanel.fadeOut(500);
    mainMenuLi.parent('li').removeClass('on');
    $('.pop-search').removeClass('on');

    if(! $('header').hasClass('on')) {
      $('body').css('overflow-y', 'visible')
    } else {
      $(this).addClass('on')
    }

  })
})


// SCROLL
const headerEl = document.querySelector('header');

let headerMoving = function(direction) {
  if (direction === 'up') {
    headerEl.classList.add('on');
  } else if (direction === "down") {
    headerEl.classList.remove('on');
  }
}

let prevScrollTop = 0;

document.addEventListener('scroll', function() {
  let nextScrollTop = window.scrollY;

  console.log(nextScrollTop);

  if(nextScrollTop > prevScrollTop) {
    headerMoving('down');
    if(nextScrollTop > 130) {
      headerEl.style.top = '-50px';
    }
  } else if (nextScrollTop < prevScrollTop) {
    headerMoving('up');
    headerEl.style.top = 0;
    if(nextScrollTop == 0) {
      headerEl.classList.remove('on');
    } else if(nextScrollTop >= 1270) {
    }
  }

  prevScrollTop = nextScrollTop;
})


// ERROR MESSAGE
const inputValue = document.querySelectorAll('.inputValue')
const errorMessage = document.querySelectorAll('.error-message');
const emailAddr = document.querySelector('footer .email-addr')
const emailInput = document.querySelector('.email-addr input')
const emailBtn  = document.querySelector('.email-addrBtn');

emailBtn.addEventListener('click', function() {
  for(let i = 0; i < inputValue.length -1 ; i += 1) {
    if(! inputValue[i].checked) {
      errorMessage[i].classList.add('on')
    } else {
      errorMessage[i].classList.remove('on')
    }
  }
  
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const emailValue = emailInput.value;
  if(! emailValue) {
    errorMessage[3].classList.add('on');
    emailAddr.classList.add('on');
    emailInput.classList.add('on');
  } else {
    errorMessage[3].classList.remove('on');
    emailAddr.classList.remove('on');
    emailInput.classList.remove('on');

    if (emailValue.match(regExp) != null) {
      errorMessage[3].classList.remove('on')
      emailAddr.classList.remove('on');
      emailInput.classList.remove('on');
    } else {
      errorMessage[3].classList.add('on');
      emailAddr.classList.add('on');
      emailInput.classList.add('on');
    }
  }
})
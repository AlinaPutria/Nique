// // loader
let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
  maskL.classList.add('hide');
  setTimeout(() => {
    maskL.remove();
  }, 1000)
});
// // BURGER
const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-navbar-list');
burger.addEventListener('click', toggleNav);
function toggleNav() {
  console.log('clicked');
  burger.classList.contains('is-active') ? burger.classList.remove('is-active') : burger.classList.add('is-active');
  burgerMenu.classList.contains('active') ? burgerMenu.classList.remove('active') : burgerMenu.classList.add('active');
}
// ...................
function box() {
  var x = document.getElementById("navbar-link-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// Filter 
$(function ($) {
  $.autofilter({
    duration: 300
  });
});
// .....................
// // ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
// // .....................
// SLIDER
const swiper_home = new Swiper('.wrapper-swiper', {
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  slidesPerView: 3,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    425: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2
    }
  }
});
// .....................
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
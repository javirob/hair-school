// navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item a');

const toggleMenu = () => {
  navToggle.classList.toggle('open');
  navList.classList.toggle('show');
};

navToggle.addEventListener('click', toggleMenu);

const closeMenu = () => {
  navToggle.classList.remove('open');
  navList.classList.remove('show');
};

navItems.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// Hero carousel

$('.hero-slider').owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  items: 1,
  autoplay: true,
  smartSpeed: 1000,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  // responsive: {
  //   0: {
  //     items: 1,
  //   },
  //   600: {
  //     items: 3,
  //   },
  //   1000: {
  //     items: 5,
  //   },
  // },
});

$('.school-slider').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  margin: 24,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

// reviews carousel

$('.reviews-slider').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  margin: 30,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    992: {
      items: 1,
    },
  },
});

// Back to top function
//Get the button
let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

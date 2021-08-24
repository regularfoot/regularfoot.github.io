import {tns} from "../../node_modules/tiny-slider/src/tiny-slider"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener('DOMContentLoaded', () => {

  const playBtn = document.querySelector('.play');
  const videoBlock = document.querySelector('.video');
  const video = document.querySelector('.video video');
  playBtn.addEventListener('click', () => {
    videoBlock.classList.add('show');
    video.play();
  })

  const slider = tns({
    container: '.advantages-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    responsive: {
      "200": {
        items: 1
      },
      "1024": {
        disable: true
      }
    },
    mouseDrag: true,
    controls: false,
    loop: false,
  });

  const tabsWrapper = tns({
  container: '.tabs-wrapper',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  responsive: {
    "200": {
      items: 1
    },
    "1024": {
      disable: true
    }
  },
  mode: 'gallery',
  autoHeight: true,
  controls: false,
  loop: false,
  nav: false
});

const tabsPriceWrapper = tns({
  container: '.tab-price-wrapper',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  responsive: {
    "200": {
      items: 1
    },
    "1024": {
      disable: true
    }
  },
  mode: 'gallery',
  autoHeight: true,
  controls: false,
  loop: false,
  nav: false
});

const tabsControls = document.querySelectorAll('.goto-tab');
const tabsPriceControls = document.querySelectorAll('.goto-price-tab');

Object.keys(tabsControls).forEach((item) => {
  tabsControls[item].onclick = function (e) {
    [...document.querySelectorAll('.' + e.target.dataset.tabtype)].map(
      (item) => {item.classList.remove('active')}
    )
    e.target.classList.add('active');
    tabsWrapper.goTo(e.target.dataset.tabindex);
  };
});

Object.keys(tabsPriceControls).forEach((item) => {
  tabsPriceControls[item].onclick = function (e) {
    [...document.querySelectorAll('.' + e.target.dataset.tabtype)].map(
      (item) => {item.classList.remove('active')}
    )
    e.target.classList.add('active');
    tabsPriceWrapper.goTo(e.target.dataset.tabindex);
  };
});



const defaultSlider = tns({
  container: '.slider',
  items: 1,
  autoplay: false,
  mouseDrag: true,
  autoWidth: true,
  loop: false,
  nav: false,
});


  const defaultSlider2 = tns({
    container: '.skateparks-slider',
    items: 1,
    autoplay: false,
    mouseDrag: true,
    autoWidth: true,
    loop: false,
    nav: false,
  });

  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', (item) => {
    if (menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
    } else {
      menu.classList.add('menu-open');
    }
  })

  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  if (window.innerWidth >= 1024) {

    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-img-block",
        start: "center bottom",
        end: "center top",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
      .to(".img1", {yPercent: 0, xPercent: 10, rotate: -4}, 0)
      .to(".img2", {yPercent: 50, xPercent: 50, rotate: 10}, 0)
      .to(".img3", {yPercent: 100, xPercent: -20, rotate: 3}, 0);

    gsap.timeline({
      scrollTrigger: {
        trigger: '.advantages-slider',
      },
    }).from('.advantages-item', {
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.last-trips',
      },
    }).from('.last-trips-item', {
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.skateparks',
        once: true
      },
    }).from('.skateparks-item', {
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1
    });


    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem)
        },
        // onEnterBack: function() { animateFrom(elem, -1) },
        // onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });

  }
})

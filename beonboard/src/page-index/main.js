import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"
require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})
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

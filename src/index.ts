import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import { Fancybox } from '@fancyapps/ui';

import App from './app/app';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './app/pages/FancyBox/fancybox.scss';
import Localization from './app/pages/Localization/Localization';

import dataMain from './Data/dataMain.json';
import dataMainEn from './Data/dataMainEn.json';

class AppInitializer {
  static initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      const app = new App();
      app.render();
    });
  }
}

AppInitializer.initialize();

// Slider
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia('(max-width: 1024px)').matches;

  if (isMobile) {
    $('.image-wrapper').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const $slider = $('.slider');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  $slider.on('init reInit afterChange', (_event, slick, currentSlide) => {
    const i = (currentSlide || 0) + 1;
    $('#slideIndicator').text(`${i} / ${slick.slideCount}`);
  });

  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
    // autoplay: true,
    // autoplaySpeed: 2000,
    fade: false, // Установите true для эффекта затухания
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Open Photo

document.addEventListener('DOMContentLoaded', () => {
  const localization = new Localization();
  const selectedData = localization.language === 'ru' ? dataMain : dataMainEn;
  const returnText = selectedData.general.return;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Fancybox.bind('[data-fancybox="gallery"]', {
    placeFocusBack: false,
    tpl: {},
    idle: false,
    compact: false,
    dragToClose: false,
    showClass: 'f-fadeIn',
    hideClass: 'f-fadeOut',
    Images: {
      zoom: false,
    },
    Thumbs: {
      type: 'none',
    },
    Toolbar: {
      items: {
        return: {
          tpl: `<button class="f-button"><p class="f-button__text" data-localize="return">${returnText}</p></button>`,
          click: () => {
            Fancybox.close();
          },
        },
      },
      display: {
        right: ['return'],
      },
    },
  });

  localization.updateTexts();
});

// Bear
document.addEventListener('DOMContentLoaded', () => {
  const bear = document.querySelector('.splitter__element') as HTMLElement;
  const directions = ['left', 'right'];
  // const delays = [0, 3000, 6000, 9000]; // in milliseconds
  const delays = [0]; // in milliseconds

  // Randomize direction and delay
  const direction = directions[Math.floor(Math.random() * directions.length)];
  const delay = delays[Math.floor(Math.random() * delays.length)];

  // Set the bear's initial position and direction

  setTimeout(() => {
    if (direction === 'left') {
      bear.style.animationName = 'walkLeft';
      bear.style.backgroundImage = 'url(/bear_1.gif)';
      bear.style.right = '100px';
      bear.style.animationDuration = '50s';
    } else {
      bear.style.animationName = 'walkRight';
      bear.style.backgroundImage = 'url(/bear_2.gif)';
      bear.style.left = '-100px';
    }
  }, delay);
});

// loacal
document.addEventListener('DOMContentLoaded', () => {
  const localization = new Localization();
  localization.updateTexts();
});

// Eye Contact
document.addEventListener('DOMContentLoaded', () => {
  const contactEyeIcon = document.querySelector('.contact__eye-icon') as HTMLElement;
  const contactEyeText = document.querySelector('.contact__eye-text') as HTMLElement;

  function handleInteraction() {
    contactEyeIcon.classList.add('hidden'); // Скрываем "глаз"
    contactEyeText.classList.remove('hidden'); // Показываем текст
  }
  if (contactEyeIcon) {
    contactEyeIcon.addEventListener('mouseover', handleInteraction); // Обработка наведения мыши
    contactEyeIcon.addEventListener('click', handleInteraction); // Обработка клика
  }
});

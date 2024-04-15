import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import { Fancybox } from '@fancyapps/ui';

import App from './app/app';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './app/pages/FancyBox/fancybox.scss';
import Localization from './app/pages/Localization/Localization';

class AppInitializer {
  static initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      const app = new App();
      app.render();
    });
  }
}

AppInitializer.initialize();

// Chage Background COlor
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia('(max-width: 1024px)').matches;

  const mainElement = document.querySelector('main');
  const bodyElement = document.body;

  if (isMobile && mainElement && mainElement.querySelector('.work-projects')) {
    bodyElement.style.backgroundColor = '#616161';
  }
});

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

// Open Photo
document.addEventListener('DOMContentLoaded', () => {
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
          tpl: `<button class="f-button">вернуться</button>`,
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
});

// Bear
document.addEventListener('DOMContentLoaded', () => {
  const bear = document.querySelector('.splitter__element') as HTMLElement;
  const directions = ['left', 'right'];
  const delays = [0, 3000, 6000, 9000]; // in milliseconds

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

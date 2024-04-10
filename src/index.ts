import { Fancybox } from '@fancyapps/ui';
import App from './app/app';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './app/pages/FancyBox/fancybox.scss';

class AppInitializer {
  static initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      const app = new App();
      app.render();
    });
  }
}

AppInitializer.initialize();

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Ваши настройки
    placeFocusBack: false,
    tpl: {
      main: `<div class="fancybox__container has-sidebar" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
              <div class="fancybox__backdrop"></div>
              <div class="fancybox__col">
                <div class="fancybox__carousel"></div>
              </div>
            </div>
          </div>`,
    },
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

// document.addEventListener('DOMContentLoaded', () => {
//   const bear = document.querySelector('.splitter__element') as HTMLElement;
//   const directions = ['left', 'right'];
//   const delays = [0, 3000, 6000, 9000]; // in milliseconds

//   // Randomize direction and delay
//   const direction = directions[Math.floor(Math.random() * directions.length)];
//   const delay = delays[Math.floor(Math.random() * delays.length)];

//   // Set the bear's initial position and direction
//   if (direction === 'left') {
//     bear.style.animationName = 'bearWalkLeft';
//     // bear.style.animationDuration = '25s';
//   } else {
//     bear.style.animationName = 'bearWalkRight';
//   }
//   // Show the bear after the randomized delay
//   setTimeout(() => {
//     bear.style.display = 'none';
//   }, delay);
// });

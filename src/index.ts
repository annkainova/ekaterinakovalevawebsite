import { Fancybox } from '@fancyapps/ui';
import App from './app/app';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './app/pages/FancyBox/fancybox.scss';

// import data from './Data/data.json';
// import dataEn from './Data/dataEn.json';
// import Localization from './app/pages/Localization/Localization';

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

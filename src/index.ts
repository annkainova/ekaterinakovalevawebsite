import { Fancybox } from '@fancyapps/ui';
import App from './app/app';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './app/pages/FancyBox/fancybox.scss';

class AppInitializer {
  static initialize() {
    const app = new App();
    app.render();
  }
}

AppInitializer.initialize();

Fancybox.bind('[data-fancybox="gallery"]', {
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

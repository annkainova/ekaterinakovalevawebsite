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
  // Toolbar: {
  //   parentEl: toolbar => {
  //     return toolbar.instance.container.querySelector('.fancybox__col');
  //   },
  //   items: {
  //     sidebar: {
  //       tpl: `<button class="f-button"><svg><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></button>`,
  //       click: toolbar => {
  //         toolbar.instance.container.classList.toggle('has-sidebar');
  //       },
  //     },
  //   },
  //   display: {
  //     left: [],
  //     middle: [],
  //     right: ['customButton'],
  //   },
  // },

  // on: {
  //   'Carousel.ready Carousel.change': fancybox => {
  //     const titleVal = fancybox.getSlide().triggerEl.dataset.title;
  //     const titleEl = document.getElementById('fancybox_title');

  //     if (titleEl) {
  //       titleEl.innerHTML = titleVal;
  //     }
  //   },
  //   init: fancybox => {
  //     fancybox.$container.querySelector('.is-close-btn').style.display = 'none';
  //     const customBackButton = fancybox.$container.querySelector('.fancybox-button--customReturn');
  //     if (customBackButton) {
  //       customBackButton.addEventListener('click', () => {
  //         fancybox.close();
  //       });
  //     }
  //   },
  // },

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

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '../../app/pages/FancyBox/fancybox.scss';
import Localization from '../pages/Localization/Localization';

import dataMain from '../../Data/dataMain.json';
import dataMainEn from '../../Data/dataMainEn.json';

export function initFansyBox() {
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
}

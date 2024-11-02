import App from './app/app';

import { initEyeContact } from './app/components/Contact/EyeContact';
import { initBearAnimation } from './app/utils/initBearAnimation';
import { initSlider } from './app/utils/sliders';
import { initFansyBox } from './app/utils/fansybox';
import Localization from './app/pages/Localization/Localization';

class AppInitializer {
  static initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      const app = new App();
      app.render();

      const localization = new Localization();
      localization.updateTexts();
    });
  }
}

AppInitializer.initialize();

initEyeContact();
initBearAnimation();
initSlider();
initFansyBox();

import App from './app/app';
import { initializeFancybox } from './app/pages/FancyBox/FancyBox.ts';

export default class AppInitializer {
  static initialize() {
    const app = new App();
    app.render();

    initializeFancybox();
  }
}
AppInitializer.initialize();

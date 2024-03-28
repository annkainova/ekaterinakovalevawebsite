import App from './app/app';

export default class AppInitializer {
  static initialize() {
    const app = new App();
    app.render();
  }
}
AppInitializer.initialize();

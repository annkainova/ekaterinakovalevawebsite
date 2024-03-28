import '../style/main.scss';
import Main from './pages/Main';
import MapsPage from './pages/Maps/Maps';

export default class App {
  mainPage: Main;
  mapsPage: MapsPage;

  constructor() {
    this.mainPage = new Main();
    this.mapsPage = new MapsPage();
  }

  render() {
    const mapsPage = this.mapsPage.render();
    return mapsPage;
  }
}

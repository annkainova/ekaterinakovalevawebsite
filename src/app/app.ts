import '../style/main.scss';
import Main from './pages/Main';
import MapsPage from './pages/Maps/Maps';
import MosaicsPage from './pages/Mosaics/Mosaics';

export default class App {
  mainPage: Main;
  mapsPage: MapsPage;
  mosaicsPage: MosaicsPage;

  constructor() {
    this.mainPage = new Main();
    this.mapsPage = new MapsPage();
    this.mosaicsPage = new MosaicsPage();
  }

  render() {
    const mapsPage = this.mapsPage.render();
    const mosaicsPage = this.mosaicsPage.render();
  }
}

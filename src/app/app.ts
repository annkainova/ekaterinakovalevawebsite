import '../style/main.scss';
import data from '../Data/data.json';
// import dataEn from '../Data/dataEn.json';
import dataProject from '../Data/projectData.json';

import Main from './pages/Main';
import Page from './pages/Gallery/Page.ts';
import Header from './pages/MainPage/Header.ts';
// import MainPageLocal from './pages/MainPage/MainPage.ts';
// import Localization from './pages/Localization/Localization.ts';

// interface choosenData {
//   name: string;
//   description: string;
//   paintDescription: string[];

//   imagePaths: [
//     {
//       small: string;
//       full: string;
//       descrip: string;
//     },
//   ];
// }

export default class App {
  header: Header;
  // mainPageLocal: MainPageLocal;
  mainPage: Main;
  page: Page;
  // localization: Localization;
  // selectedData: choosenData;

  constructor() {
    this.header = new Header(document.body);
    this.page = new Page();
    this.mainPage = new Main();

    // this.page.renderProject(dataProject);
    // this.header.render();

    // this.mainPageLocal = new MainPageLocal();
    // this.localization = new Localization();
    // this.selectedData = this.localization.language === 'ru' ? data : dataEn;
  }

  render() {
    // this.selectedData = this.localization.language === 'ru' ? data : dataEn;

    this.header.render();
    this.page.renderProject(dataProject);

    this.page.renderGallery('maps', data);
    this.page.renderGallery('mosaics', data);
    this.page.renderGallery('waiting-zone', data);
    this.page.renderGallery('horizon-colonization', data);
    this.page.renderGallery('artworks', data);
    this.page.renderGalleryWithoutMainPhoto('soup-of-the-day', data);
    this.page.renderGalleryWithoutMainPhoto('notebooks', data);
    this.page.renderGalleryWithoutMainPhoto('early-works', data);
    this.page.renderGalleryWithoutMainPhoto('antarctic-diary', data);
    this.page.renderGallery('memorial-objects', data);
    this.page.renderGalleryWithoutMainPhoto('right-to-rest', data);
  }
}

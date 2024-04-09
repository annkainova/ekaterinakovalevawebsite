import '../style/main.scss';
import data from '../Data/data.json';
import dataEn from '../Data/dataEn.json';
import dataProject from '../Data/projectData.json';

import Main from './pages/Main';
import Page from './pages/Gallery/Page.ts';
import Header from './pages/MainPage/Header.ts';
import MainPageLocal from './pages/MainPage/MainPage.ts';
import Localization from './pages/Localization/Localization.ts';

interface choosenData {
  name: string;
  description: string;
  paintDescription: string[];

  imagePaths: [
    {
      small: string;
      full: string;
      descrip: string;
    },
  ];
}

export default class App {
  header: Header;
  mainPageLocal: MainPageLocal;
  mainPage: Main;
  page: Page;
  localization: Localization;
  selectedData: choosenData;

  constructor() {
    this.header = new Header(document.body);
    this.page = new Page();
    this.mainPage = new Main();

    this.page.renderProject(dataProject);
    this.header.render();

    this.mainPageLocal = new MainPageLocal();
    this.localization = new Localization();
    this.selectedData = this.localization.language === 'ru' ? data : dataEn;
  }

  render() {
    this.page.renderGallery('maps', this.selectedData);
    this.page.renderGallery('mosaics', this.selectedData);
    this.page.renderGallery('waiting-zone', this.selectedData);
    this.page.renderGallery('horizon-colonization', this.selectedData);
    this.page.renderGallery('artworks', this.selectedData);
    this.page.renderGalleryWithoutMainPhoto('soup-of-the-day', this.selectedData);
    this.page.renderGalleryWithoutMainPhoto('notebooks', this.selectedData);
    this.page.renderGalleryWithoutMainPhoto('early-works', this.selectedData);
    this.page.renderGalleryWithoutMainPhoto('antarctic-diary', this.selectedData);
    this.page.renderGallery('memorial-objects', this.selectedData);
    this.page.renderGalleryWithoutMainPhoto('right-to-rest', this.selectedData);
  }
}

import '../style/main.scss';
import data from '../Data/data.json';
import dataEn from '../Data/dataEn.json';
import dataProject from '../Data/projectData.json';

import Main from './pages/Main';
import Page from './pages/Gallery/Page.ts';
import Header from './pages/MainPage/Header.ts';
import Localization from './pages/Localization/Localization.ts';
import FirstPage from './pages/MainPage/FirstPage.ts';
import Footer from './pages/MainPage/Footer.ts';
import NavPanel from './pages/MainPage/NavPanel.ts';
import ActiveLink from './pages/ActivePages/activePages.ts';

export default class App {
  header: Header;
  footer: Footer;
  firstPage: FirstPage;
  mainPage: Main;
  page: Page;
  localization: Localization;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedData: any;
  navPanel: NavPanel;
  activeLink: ActiveLink;

  constructor() {
    this.header = new Header(document.body);
    this.page = new Page();
    this.mainPage = new Main();
    this.firstPage = new FirstPage();
    this.footer = new Footer(document.body);

    this.header.render();
    this.firstPage.changeLanguageFirstPage();
    this.footer.render();

    this.localization = new Localization();
    this.navPanel = new NavPanel('main');
    this.selectedData = this.localization.language === 'ru' ? data : dataEn;

    this.activeLink = new ActiveLink();
    this.activeLink.setActiveLink();
  }

  render() {
    const selectData = this.selectedData;
    this.page.renderProject(dataProject);

    this.page.renderGallery('maps', selectData);
    this.page.renderGallery('mosaics', selectData);
    this.page.renderGallery('waiting-zone', selectData);
    this.page.renderGallery('horizon-colonization', selectData);
    this.page.renderGallery('artworks', selectData);
    this.page.renderGalleryWithoutMainPhoto('soup-of-the-day', selectData);
    this.page.renderGalleryWithoutMainPhoto('notebooks', selectData);
    this.page.renderGalleryWithoutMainPhoto('early-works', selectData);
    this.page.renderGalleryWithoutMainPhoto('antarctic-diary', selectData);
    this.page.renderGallery('memorial-objects', selectData);
    this.page.renderGalleryWithoutMainPhoto('right-to-rest', selectData);

    this.navPanel.render();
    this.activeLink.init();
  }
}

import '../style/main.scss';
import data from '../Data/data.json';
import dataEn from '../Data/dataEn.json';
import dataEvent from '../Data/Events/dataEvent.json';
import dataEventEn from '../Data/Events/dataEventEn.json';
import dataProject from '../Data/projectData.json';

import Page from './pages/Gallery/Page.ts';
import Header from './components/Header/Header.ts';
import Localization from './pages/Localization/Localization.ts';
import Footer from './components/Footer/Footer.ts';
import NavPanel from './components/NavPanel/NavPanel.ts';
import ActiveLink from './pages/ActivePages/activePages.ts';
import NewsPage from './pages/Events/Events.ts';
import BiographyComponent from './pages/Biography/BiographyComponent.ts';
import HomePage from './pages/HomePage/HomePage.ts';
import Interview from './pages/Events/DetailNews/Interview.ts';

export default class App {
  header: Header;
  footer: Footer;
  homePage: HomePage;
  page: Page;
  localization: Localization;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedData: any;
  eventData: any;
  navPanel: NavPanel;
  activeLink: ActiveLink;
  biography: BiographyComponent;
  news: NewsPage;
  interview: Interview;

  constructor() {
    this.header = new Header(document.body);
    this.page = new Page();
    this.homePage = new HomePage();
    this.footer = new Footer(document.body);

    this.header.render();
    this.page.renderProject(dataProject);
    this.footer.render();
    this.biography = new BiographyComponent();

    this.interview = new Interview();

    const newsSection = document.querySelector('.news-section') as HTMLElement;
    const paginationContainer = document.querySelector('.pagination-container') as HTMLElement;
    this.news = new NewsPage(newsSection, paginationContainer);

    this.localization = new Localization();
    this.navPanel = new NavPanel('main');
    this.selectedData = this.localization.language === 'ru' ? data : dataEn;
    this.eventData = this.localization.language === 'ru' ? dataEvent : dataEventEn;

    this.activeLink = new ActiveLink();
  }

  // eslint-disable-next-line class-methods-use-this
  isGalleryPage(): boolean {
    const galleryPages = [
      'waiting-zone',
      'maps',
      'horizon-colonization',
      'soup-of-the-day',
      'early-works',
      'antarctic-diary',
      'memorial-objects',
      'right-to-rest',
      'notebooks',
      'mosaics',
      'artworks',
    ];

    return galleryPages.some(id => window.location.pathname.endsWith(`${id}.html`));
  }

  isEventPage(): boolean {
    const eventPages = ['cosmocow', 'create-miracles', 'catch-fishing'];

    return eventPages.some(id => window.location.pathname.endsWith(`${id}.html`));
  }

  isNewsPage(): boolean {
    return window.location.pathname.endsWith('events.html');
  }

  isBioPage(): boolean {
    return window.location.pathname.endsWith('biography.html');
  }

  isInterviewPage() {
    return window.location.pathname.endsWith('interview.html');
  }

  renderGalleryPage() {
    const selectData = this.selectedData;
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

    if (this.isGalleryPage()) {
      this.navPanel.render();
    }
  }

  renderEventPage() {
    const selectData = this.eventData;
    this.page.renderGallery('cosmocow', selectData);
    this.page.renderGallery('create-miracles', selectData);
    this.page.renderGallery('catch-fishing', selectData);
  }

  renderNewsPage() {
    this.news.render();
  }

  renderBiography() {
    this.biography.render();
  }

  renderDetailPage() {
    this.interview.render();
  }

  render() {
    if (this.isNewsPage()) {
      this.renderNewsPage();
    } else if (this.isGalleryPage()) {
      this.renderGalleryPage();
    } else if (this.isBioPage()) {
      this.renderBiography();
    } else if (this.isInterviewPage()) {
      this.renderDetailPage();
    } else if (this.isEventPage()) {
      this.renderEventPage();
    }
    this.homePage.render();
  }
}

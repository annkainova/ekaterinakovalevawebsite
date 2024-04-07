import '../style/main.scss';
import data from '../Data/data.json';
import dataProject from '../Data/projectData.json';

import Main from './pages/Main';
import Page from './pages/Gallery/Page.ts';

export default class App {
  mainPage: Main;
  page: Page;

  constructor() {
    this.page = new Page();
    this.mainPage = new Main();
  }

  render() {
    document.addEventListener('DOMContentLoaded', () => {
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
    });
  }
}

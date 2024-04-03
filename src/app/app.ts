import '../style/main.scss';
import data from './pages/Gallery/data.json';

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
    this.page.render('maps', data);
    this.page.render('mosaics', data);
    this.page.render('waiting-zone', data);
    this.page.render('horizon-colonization', data);
    this.page.render('artworks', data);
    this.page.renderMethodWithoutBigFirstPhoto('soup-of-the-day', data);
    this.page.renderMethodWithoutBigFirstPhoto('notebooks', data);
  }
}

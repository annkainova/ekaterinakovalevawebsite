import Localization from '../Localization/Localization';
import dataMain from '../../../Data/dataMain.json';
import dataMainEn from '../../../Data/dataMainEn.json';

export default class FirstPage {
  localization: Localization;

  private title: HTMLElement | null;
  private citate: HTMLElement | null;
  private citateAuthor: HTMLElement | null;
  private about: HTMLElement | null;
  private citateAdditional: HTMLElement | null;

  constructor() {
    this.localization = new Localization();

    this.title = document.querySelector('.title__text') as HTMLElement;
    this.citate = document.querySelector('.citate__text') as HTMLElement;
    this.citateAuthor = document.querySelector('.citate__author') as HTMLElement;
    this.about = document.querySelector('.about__text') as HTMLElement;
    this.citateAdditional = document.querySelector('.additional__text') as HTMLElement;

    // this.changeLangMainPage();
  }

  changeLanguageFirstPage() {
    const selectedData = this.localization.language === 'ru' ? dataMain : dataMainEn;

    if (this.title && this.citate && this.citateAuthor && this.about && this.citateAdditional) {
      this.title.textContent = selectedData.main.title;
      this.citate.textContent = selectedData.main.citate;
      this.citateAuthor.textContent = selectedData.main.citateAuthor;
      this.about.innerHTML = selectedData.main.about;
      this.citateAdditional.textContent = selectedData.main.citateAdditional;
    }
  }
}

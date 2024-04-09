import Localization from '../Localization/Localization';
import dataMain from '../../../Data/dataMain.json';
import dataMainEn from '../../../Data/dataMainEn.json';

export default class MainPageLocal {
  localization: Localization;

  private citate: HTMLElement | null;
  private citateAuthor: HTMLElement | null;
  private about: HTMLElement | null;
  private citateAdditional: HTMLElement | null;

  constructor() {
    this.localization = new Localization();

    this.citate = document.querySelector('.citate__text') as HTMLElement;
    this.citateAuthor = document.querySelector('.citate__author') as HTMLElement;
    this.about = document.querySelector('.about__text') as HTMLElement;
    this.citateAdditional = document.querySelector('.additional__text') as HTMLElement;
    const selectedData = this.localization.language === 'ru' ? dataMain : dataMainEn;

    this.changeLangMainPage(selectedData);
  }

  changeLangMainPage(selectedData) {
    this.citate.textContent = selectedData.main.citate;
    this.citateAuthor.textContent = selectedData.main.citateAuthor;
    this.about.innerHTML = selectedData.main.about;
    this.citateAdditional.textContent = selectedData.main.citateAdditional;
  }
}

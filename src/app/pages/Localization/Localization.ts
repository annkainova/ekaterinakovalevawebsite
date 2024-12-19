import dataMain from '../../../Data/dataMain.json';
import dataMainEn from '../../../Data/dataMainEn.json';

interface TranslationData {
  [key: string]: string; // This index signature says that any string key returns a string value
}

export default class Localization {
  language?: string;
  buttonRu: HTMLElement | null;
  buttonEn: HTMLElement | null;
  selectedData: TranslationData;

  constructor() {
    this.buttonRu = document.querySelector('.language-switcher__option--ru');
    this.buttonEn = document.querySelector('.language-switcher__option--en');

    this.language = localStorage.getItem('language') || 'ru';

    this.buttonRu?.addEventListener('click', () => this.changeLanguage('ru'));
    this.buttonEn?.addEventListener('click', () => this.changeLanguage('en'));

    this.selectedData = this.language === 'ru' ? dataMain.general : dataMainEn.general;
    this.updateTexts();
  }

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.language = localStorage.getItem('language') as string;
    location.reload();
  }

  updateTexts() {
    document.querySelectorAll('[data-localize]').forEach(element => {
      const key = element.getAttribute('data-localize');
      if (key) {
        element.innerHTML = this.selectedData[key];
      }
    });
  }
}

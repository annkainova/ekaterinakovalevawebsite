import dataMain from '../../../Data/dataMain.json';
import dataMainEn from '../../../Data/dataMainEn.json';

export default class Localization {
  language?: string;
  buttonRu: HTMLElement | null;
  buttonEn: HTMLElement | null;

  constructor() {
    this.buttonRu = document.querySelector('.language-switcher__option--ru');
    this.buttonEn = document.querySelector('.language-switcher__option--en');

    this.language = localStorage.getItem('language') || 'ru';

    this.buttonRu?.addEventListener('click', () => this.changeLanguage('ru'));
    this.buttonEn?.addEventListener('click', () => this.changeLanguage('en'));

    this.updateTexts();
  }

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.language = localStorage.getItem('language') as string;
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  updateTexts() {
    const selectedData = this.language === 'ru' ? dataMain.general : dataMainEn.general;

    document.querySelectorAll('[data-localize]').forEach(element => {
      const key = element.getAttribute('data-localize');
      if (key && selectedData) {
        element.textContent = selectedData[key];
      }
    });
  }
}

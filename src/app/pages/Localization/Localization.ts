export default class Localization {
  language?: string;
  buttonRu: HTMLElement | null;
  buttonEn: HTMLElement | null;

  constructor() {
    this.buttonRu = document.querySelector('.language-switcher__option--ru');
    this.buttonEn = document.querySelector('.language-switcher__option--en');

    this.language = localStorage.getItem('language') || 'ru'; // Добавьте эту строку

    this.buttonRu?.addEventListener('click', () => this.changeLanguage('ru'));
    this.buttonEn?.addEventListener('click', () => this.changeLanguage('en'));
  }

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.language = localStorage.getItem('language') as string;
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
}

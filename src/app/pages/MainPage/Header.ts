import Localization from '../Localization/Localization';
import dataMain from '../../../Data/dataMain.json';
import dataMainEn from '../../../Data/dataMainEn.json';

export default class Header {
  private container: HTMLElement;
  private textMain: string;
  private textBio: string;
  private textWork: string;
  private textContact: string;
  private textMenu: string;

  localization: Localization;

  buttonRuElement: HTMLElement;
  buttonEnElement: HTMLElement;

  constructor(container: HTMLElement) {
    this.localization = new Localization();
    const selectedData = this.localization.language === 'ru' ? dataMain : dataMainEn;

    this.container = container;
    this.textMain = selectedData.header.textMain;
    this.textBio = selectedData.header.textBio;
    this.textWork = selectedData.header.textWork;
    this.textContact = selectedData.header.textContact;
    this.textMenu = selectedData.header.textMenu;

    this.buttonRuElement = document.createElement('button');
    this.buttonEnElement = document.createElement('button');

    window.addEventListener('resize', () => {
      if (window.innerWidth > 940) {
        this.closeMenu();
      }
    });

    document.addEventListener('click', event => {
      const target = event.target as HTMLElement;
      const withinBoundaries = target.closest('.header') || target.closest('.menu-button');

      if (!withinBoundaries) {
        this.closeMenu();
      }
    });
  }

  render() {
    const header = document.createElement('header');
    header.className = 'header';

    const headerMenu = document.createElement('div');
    headerMenu.className = 'header__menu container';
    header.appendChild(headerMenu);

    const logo = document.createElement('a');
    logo.href = 'https://katkart.ru';
    logo.className = 'logo';
    headerMenu.appendChild(logo);

    const menuButton = document.createElement('div');
    menuButton.className = 'menu-button';
    menuButton.textContent = this.textMenu;
    headerMenu.appendChild(menuButton);

    const navigation = document.createElement('nav');
    navigation.className = 'navigation';
    headerMenu.appendChild(navigation);

    menuButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      menuButton.classList.toggle('open');

      document.body.classList.toggle('body--no-scroll');
    });

    const navContainer = document.createElement('ul');
    navContainer.className = 'navigation__container';
    navigation.appendChild(navContainer);

    const navItems = [
      { href: 'https://katkart.ru', text: this.textMain, main: true },
      { href: 'biography.html', text: this.textBio },
      { href: 'work-projects.html', text: this.textWork },
      { href: 'contact.html', text: this.textContact },
    ];

    navItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'navigation__element';
      if (item.main) {
        li.classList.add('navigation__main');
      }
      const a = document.createElement('a');
      a.className = 'navigation__link';
      if (item.main) {
        a.classList.add('navigation__link--main');
      }
      a.href = item.href;
      a.innerHTML = item.text;
      li.appendChild(a);
      navContainer.appendChild(li);
    });

    const languageSwitcher = document.createElement('li');
    languageSwitcher.className = 'language-switcher';
    navContainer.appendChild(languageSwitcher);

    const ruButton = document.createElement('button');
    ruButton.className = 'language-switcher__option--ru';
    ruButton.textContent = 'RU';
    languageSwitcher.appendChild(ruButton);

    const dot = document.createElement('span');
    dot.className = 'language-switcher__dot';
    dot.textContent = '•';
    languageSwitcher.appendChild(dot);

    const enButton = document.createElement('button');
    enButton.className = 'language-switcher__option--en';
    enButton.textContent = 'EN';
    languageSwitcher.appendChild(enButton);

    const splitter = document.createElement('div');
    splitter.className = 'splitter';
    header.appendChild(splitter);

    const splitterElement = document.createElement('div');
    splitterElement.className = 'splitter__element';
    splitter.appendChild(splitterElement);

    const splitterLine = document.createElement('div');
    splitterLine.className = 'splitter__line';
    splitter.appendChild(splitterLine);

    this.container.appendChild(header);
  }

  // eslint-disable-next-line class-methods-use-this
  closeMenu() {
    const navigation = document.querySelector('.navigation') as HTMLElement;
    const menuButton = document.querySelector('.menu-button') as HTMLElement;

    if (navigation.classList.contains('open')) {
      navigation.classList.remove('open');
      menuButton.classList.remove('open');
      document.body.classList.remove('body--no-scroll');
    }
  }
}

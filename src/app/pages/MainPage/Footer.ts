import Localization from '../Localization/Localization';
import dataMain from '../../../Data/dataMain.json';
import dataMainEn from '../../../Data/dataMainEn.json';

export default class Footer {
  private container: HTMLElement;
  private footerText: string;

  localization: Localization;

  constructor(container: HTMLElement) {
    this.localization = new Localization();
    const selectedData = this.localization.language === 'ru' ? dataMain : dataMainEn;

    this.container = container;
    this.footerText = selectedData.footer.name;
  }

  render() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const footerTextElement = document.createElement('p');
    footerTextElement.className = 'footer__text';
    footerTextElement.textContent = this.footerText;
    footer.appendChild(footerTextElement);

    this.container.appendChild(footer);
  }
}

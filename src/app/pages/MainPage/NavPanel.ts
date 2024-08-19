import Localization from '../Localization/Localization';
import dataNavigation from '../../../Data/dataNavigation.json';
import dataNavigationEn from '../../../Data/dataNavigationEn.json';
import ActiveLink from '../ActivePages/activePages';

//

export default class NavPanel {
  private container: HTMLElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedData: any;
  localization: Localization;
  activeLink: ActiveLink;

  constructor(containerName: string) {
    this.localization = new Localization();
    this.selectedData = this.localization.language === 'ru' ? dataNavigation : dataNavigationEn;
    this.container = document.querySelector(containerName) as HTMLElement;

    this.activeLink = new ActiveLink();
  }

  public render(): void {
    const section = document.createElement('section');
    section.classList.add('sections-nav');
    section.classList.add('container');

    section.innerHTML = `
      <nav class="sections-nav__box">
        <ul class="sections-nav__container">
          <div class="row">
            <li class="sections-nav__element">
              <a class="sections-nav__link" id="waiting-zone" href="waiting-zone">
                <span class="sections-nav__text">${this.selectedData.waitingZone.text}</span>
              </a>
            </li>

            <li class="sections-nav__element">
              <a class="sections-nav__link" id="maps" href="maps">
                <span class="nav__dot">•</span>
                <span class="sections-nav__text">
                  ${this.selectedData.maps.text}</span>
              </a>
            </li>

            <li class="sections-nav__element">
              <a class="sections-nav__link" id="horizon-colonization" href="horizon-colonization">
                <span class="nav__dot">•</span>
                <span class="sections-nav__text">${this.selectedData.horizonColonization.text}</span>
              </a>
            </li>

            <li class="sections-nav__element">
              <a class="sections-nav__link" id="soup-of-the-day" href="soup-of-the-day">
                <span class="nav__dot">•</span> <span class="sections-nav__text">${this.selectedData.soup.text}</span>
              </a>
            </li>
          </div>

          <div class="row">
            <li class="sections-nav__element">
              <a class="sections-nav__link" id="early-works" href="early-works"><span
                  class="sections-nav__text">${this.selectedData.earlyWorks.text}</span></a>
            </li>

            <li class="sections-nav__element">
              <a class="sections-nav__link" id="antarctic-diary" href="antarctic-diary"><span
                  class="nav__dot">•</span>
                <span class="sections-nav__text">${this.selectedData.antarcticDiary.text}</span></a>
            </li>

            <li class="sections-nav__element">
              <a class="sections-nav__link" id="memorial-objects" href="memorial-objects"><span
                  class="nav__dot">•</span>
                <span class="sections-nav__text">${this.selectedData.memorialObjects.text}</span></a>
            </li>

            <li class="sections-nav__element">
              <a class="sections-nav__link" id="right-to-rest" href="right-to-rest"><span
                  class="nav__dot">•</span>
                <span class="sections-nav__text">${this.selectedData.medicalHistory.text}</span>
              </a>
            </li>
          </div>

          <div class="row">
            <li class="sections-nav__element">
              <a class="sections-nav__link" id="notebooks" href="notebooks">
                <span class="sections-nav__text">${this.selectedData.notebooks.text}</span>
              </a>
            </li>

            <li class="sections-nav__element">
              <a class="sections-nav__link" id="mosaics" href="mosaics"><span class="nav__dot">•</span>
                <span class="sections-nav__text">${this.selectedData.mosaics.text}</span>
              </a>
            </li>

            <li class="sections-nav__element">
              <a class="sections-nav__link" id="artworks" href="artworks"><span class="nav__dot">•</span>
                <span class="sections-nav__text">${this.selectedData.artworks.text}</span>
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <div class="mobile-nav">
        <a href="" class="mobile-nav__button" id="nav-prev">...</a>
        <a href="" class="mobile-nav__button" id="nav-next">...</a>
      </div>`;

    this.container.appendChild(section);

    this.activeLink.init();
  }
}

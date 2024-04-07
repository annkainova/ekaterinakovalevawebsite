import Biography from './biography';

export default class BiographyController {
  biographyView?: Biography;
  bio: HTMLElement | null;
  personal: HTMLElement | null;
  group: HTMLElement | null;

  bioView: Biography;
  personalView: Biography;
  groupView: Biography;

  constructor(bioView: Biography, personalView: Biography, groupView: Biography) {
    this.bioView = bioView;
    this.personalView = personalView;
    this.groupView = groupView;

    this.bio = document.querySelector('.biography__link--bio');
    this.personal = document.querySelector('.biography__link--personal');
    this.group = document.querySelector('.biography__link--group');

    this.chooseSection(this.bioView);
    if (this.bio) {
      this.bio.addEventListener('click', () => {
        this.chooseSection(this.bioView);
      });
    }

    if (this.personal) {
      this.personal?.addEventListener('click', () => {
        this.chooseSection(this.personalView);
      });
    }

    if (this.group) {
      this.group?.addEventListener('click', () => {
        this.chooseSection(this.groupView);
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  chooseSection(nameSection: Biography) {
    const biographySection = document.querySelector('.biography__info');
    if (biographySection) biographySection.innerHTML = ''; // Очистка содержимого перед добавлением нового
    const bioElement = nameSection.render();

    biographySection?.appendChild(bioElement);
  }
}

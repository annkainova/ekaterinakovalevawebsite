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

    this.bio = document.querySelector('.biography__link--bio ');
    this.personal = document.querySelector('.biography__link--personal');
    this.group = document.querySelector('.biography__link--group');

    this.bio?.classList.add('active');

    this.chooseSection(this.bioView);
    if (this.bio) {
      this.bio.addEventListener('click', () => {
        this.bio?.classList.add('active');
        this.personal?.classList.remove('active');
        this.group?.classList.remove('active');

        this.chooseSection(this.bioView);
      });
    }

    if (this.personal) {
      this.personal?.addEventListener('click', () => {
        this.personal?.classList.add('active');
        this.bio?.classList.remove('active');
        this.group?.classList.remove('active');

        this.chooseSection(this.personalView);
        const bioText = document.querySelector('.biography__personal-text') as HTMLElement;
        bioText.setAttribute('data-localize', 'personal-text');
        bioText.innerHTML = `
       
`;
      });
    }

    if (this.group) {
      this.group?.addEventListener('click', () => {
        this.group?.classList.add('active');
        this.bio?.classList.remove('active');
        this.personal?.classList.remove('active');

        this.chooseSection(this.groupView);
        const bioText = document.querySelector('.biography__group-text') as HTMLElement;
        bioText.setAttribute('data-localize', 'group-text');
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

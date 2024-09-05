import Biography from './biography';

export default class BiographyController {
  biographyView?: Biography;
  bio: HTMLElement | null;
  personal: HTMLElement | null;
  group: HTMLElement | null;
  interview: HTMLElement | null;

  bioView: Biography;
  personalView: Biography;
  groupView: Biography;
  interviewView: Biography;

  constructor(
    bioView: Biography,
    personalView: Biography,
    groupView: Biography,
    interviewView: Biography
  ) {
    this.bioView = bioView;
    this.personalView = personalView;
    this.groupView = groupView;
    this.interviewView = interviewView;

    this.bio = document.querySelector('.biography__link--bio ');
    this.personal = document.querySelector('.biography__link--personal');
    this.group = document.querySelector('.biography__link--group');
    this.interview = document.querySelector('.biography__link--interview');

    this.bio?.classList.add('active');

    if (this.bio) {
      this.bio.addEventListener('click', () => {
        this.bio?.classList.add('active');
        this.personal?.classList.remove('active');
        this.group?.classList.remove('active');
        this.interview?.classList.remove('active');

        this.chooseSection(this.bioView);
      });
    }

    if (this.personal) {
      this.personal?.addEventListener('click', () => {
        this.personal?.classList.add('active');
        this.bio?.classList.remove('active');
        this.group?.classList.remove('active');
        this.interview?.classList.remove('active');

        this.chooseSection(this.personalView);
      });
    }

    if (this.group) {
      this.group?.addEventListener('click', () => {
        this.group?.classList.add('active');
        this.bio?.classList.remove('active');
        this.personal?.classList.remove('active');
        this.interview?.classList.remove('active');

        this.chooseSection(this.groupView);
      });
    }

    if (this.interview) {
      this.interview?.addEventListener('click', () => {
        this.interview?.classList.add('active');
        this.group?.classList.remove('active');
        this.bio?.classList.remove('active');
        this.personal?.classList.remove('active');

        this.chooseSection(this.interviewView);
      });
    }
  }

  chooseSection(nameSection: Biography) {
    const biographySection = document.querySelector('.biography__info');
    if (biographySection) {
      biographySection.innerHTML = '';
    }
    const bioElement = nameSection.render();

    biographySection?.appendChild(bioElement);
  }
}

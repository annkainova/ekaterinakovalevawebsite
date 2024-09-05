import Anonsement from '../../../components/Annonsment/Anonsement';

export default class AnnouncementsComponent {
  announcements: Anonsement;

  constructor() {
    const announcementSection = document.querySelector('.slider-box') as HTMLElement;
    this.announcements = new Anonsement(announcementSection);
  }

  render() {
    this.announcements.render();
  }
}

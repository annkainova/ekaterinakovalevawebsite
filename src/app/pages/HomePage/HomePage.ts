import CollageComponent from './Components/CollageComponent';
import AnnouncementsComponent from './Components/AnnouncementsComponent';
import Localization from '../Localization/Localization';

export default class HomePage {
  collageComponent: CollageComponent;
  announcementsComponent: AnnouncementsComponent;
  localization: Localization;

  constructor() {
    this.localization = new Localization();
    this.collageComponent = new CollageComponent();
    this.announcementsComponent = new AnnouncementsComponent();
  }

  render() {
    this.collageComponent.render();
    this.announcementsComponent.render();
  }
}

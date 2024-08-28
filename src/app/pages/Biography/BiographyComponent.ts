import Localization from '../Localization/Localization';
import Biography from './biography';
import BiographyController from './BiographyController';

import dataBiography from './dataBiography.json';
import dataBiographyEn from './dataBiographyEn.json';

export default class BiographyComponent {
  // collage: Collage;

  bioView: Biography;
  personalView: Biography;
  groupView: Biography;
  biographyController: BiographyController;

  localization: Localization;

  constructor() {
    // this.bio = new Biography(bioData.name, bioData.text, bioData.image);
    // this.personal = new Biography(personalData.name, personalData.text, personalData.image);
    // this.group = new Biography(groupData.name, groupData.text, groupData.image);

    this.localization = new Localization();
    const selectedData = this.localization.language === 'ru' ? dataBiography : dataBiographyEn;

    this.bioView = new Biography(
      selectedData.bio.name,
      selectedData.bio.text,
      selectedData.bio.image
    );

    this.personalView = new Biography(
      selectedData.personal.name,
      selectedData.personal.text,
      selectedData.personal.image
    );

    this.groupView = new Biography(
      selectedData.group.name,
      selectedData.group.text,
      selectedData.group.image
    );

    this.biographyController = new BiographyController(
      this.bioView,
      this.personalView,
      this.groupView
    );
  }

  render() {
    this.biographyController.chooseSection(this.bioView);
    this.bioView.render();
  }

  // Другие методы для работы с персональной и групповой биографией
}

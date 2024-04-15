import Collage from './Collage/Collage';
import Biography from './Biography/biography';
import BiographyController from './Biography/BiographyController';
import dataBiography from './Biography/dataBiography.json';
import dataBiographyEn from './Biography/dataBiographyEn.json';

import Localization from './Localization/Localization';

export default class Main {
  collage: Collage;

  bioView: Biography;
  personalView: Biography;
  groupView: Biography;
  biographyController: BiographyController;

  localization: Localization;

  constructor() {
    this.collage = new Collage();
    this.collage.collageAnimation();

    this.localization = new Localization();
    const selectedData = this.localization.language === 'ru' ? dataBiography : dataBiographyEn;

    this.bioView = new Biography(
      selectedData.bio.name,
      selectedData.bio.text,
      selectedData.bio.image
    );

    this.bioView.render();

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

    this.biographyController.chooseSection(this.bioView);
  }
}

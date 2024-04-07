import Collage from './Collage/Collage';
import Biography from './Biography/biography';
import BiographyController from './Biography/BiographyController';
import dataBiography from './Biography/dataBiography.json';

export default class Main {
  collage: Collage;

  bioView: Biography;
  personalView: Biography;
  groupView: Biography;
  biographyController: BiographyController;

  constructor() {
    this.collage = new Collage();
    this.collage.collageAnimation();

    this.bioView = new Biography(
      dataBiography.bio.name,
      dataBiography.bio.text,
      dataBiography.bio.image
    );

    this.personalView = new Biography(
      dataBiography.personal.name,
      dataBiography.personal.text,
      dataBiography.personal.image
    );

    this.groupView = new Biography(
      dataBiography.group.name,
      dataBiography.group.text,
      dataBiography.group.image
    );

    this.biographyController = new BiographyController(
      this.bioView,
      this.personalView,
      this.groupView
    );
  }
}

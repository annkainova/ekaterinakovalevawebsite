import Collage from './Collage/Collage';

export default class Main {
  collage: Collage;

  constructor() {
    this.collage = new Collage();
    this.collage.collageAnimation();
  }
}

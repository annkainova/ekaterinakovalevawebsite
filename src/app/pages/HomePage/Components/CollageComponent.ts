import Collage from '../../Collage/Collage';

export default class CollageComponent {
  collage: Collage;

  constructor() {
    this.collage = new Collage();
  }

  render() {
    this.collage.collageAnimation();
  }
}

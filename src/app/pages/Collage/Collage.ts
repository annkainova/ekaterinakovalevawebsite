import Localization from '../Localization/Localization';

export default class Collage {
  allImg: NodeListOf<Element>;
  localization: Localization;

  constructor() {
    this.localization = new Localization();
    this.allImg = document.querySelectorAll('.collage__img');
  }

  collageAnimation() {
    this.allImg.forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.classList.add('position');
        this.greyScaleAll(img);
      });
      img.addEventListener('mouseleave', () => {
        img.classList.remove('position');
        this.resetGreyScale();
      });
    });
  }

  greyScaleAll(currentItem: Element): void {
    this.allImg.forEach(item => {
      if (item !== currentItem) {
        item.classList.add('greyscale');
      }
    });
  }

  resetGreyScale() {
    this.allImg.forEach(item => {
      item.classList.remove('greyscale');
    });
  }
}

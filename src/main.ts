import './style/main.scss';

class Collage {
  allImg: NodeListOf<Element>;

  constructor() {
    this.allImg = document.querySelectorAll('.collage__img');
  }

  collageAnimation() {
    this.allImg.forEach(img => {
      img.addEventListener('mouseenter', () => {
        this.greyScaleAll(img);
      });
      img.addEventListener('mouseleave', () => {
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

const collage = new Collage();
collage.collageAnimation();

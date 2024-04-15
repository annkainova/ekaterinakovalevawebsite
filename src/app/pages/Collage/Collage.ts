import Localization from '../Localization/Localization';

export default class Collage {
  allImg: NodeListOf<Element>;
  // linkIds: string[];
  localization: Localization;

  // private waitingZone: HTMLElement | null;
  // private maps: HTMLElement | null;
  // private horizonColonization: HTMLElement | null;
  // private soupOfTheDay: HTMLElement | null;
  // private earlyWorks: HTMLElement | null;
  // private antarcticDiary: HTMLElement | null;
  // private memorialObjects: HTMLElement | null;
  // private rightToRest: HTMLElement | null;
  // private notebooks: HTMLElement | null;
  // private mosaics: HTMLElement | null;
  // private artworks: HTMLElement | null;

  constructor() {
    this.localization = new Localization();
    this.allImg = document.querySelectorAll('.collage__img');

    // this.waitingZone = document.querySelector('collage__text--1');
    // this.maps = document.querySelector('collage__text--2');
    // this.horizonColonization = document.querySelector('collage__text--3');
    // this.soupOfTheDay = document.querySelector('collage__text--4');
    // this.earlyWorks = document.querySelector('collage__text--5');
    // this.antarcticDiary = document.querySelector('collage__text--6');
    // this.memorialObjects = document.querySelector('collage__text--7');
    // this.rightToRest = document.querySelector('collage__text--8');
    // this.notebooks = document.querySelector('collage__text--9');
    // this.mosaics = document.querySelector('collage__text--10');
    // this.artworks = document.querySelector('collage__text--11');

    // console.log(this.waitingZone);
  }

  // localizationCollage() {
  //   const selectedData = this.localization.language === 'ru' ? dataMain : dataMainEn;
  //   if (this.waitingZone) {
  //     this.waitingZone.textContent = selectedData.collage.waitingZone;
  //     this.maps.textContent = selectedData.collage.maps;
  //     this.horizonColonization.textContent = selectedData.collage['horizon-colonization'];
  //     this.soupOfTheDay.textContent = selectedData.collage['soup-of-the-day'];
  //     this.earlyWorks.textContent = selectedData.collage['early-works'];
  //     this.antarcticDiary.textContent = selectedData.collage['antarctic-diary'];
  //     this.memorialObjects.textContent = selectedData.collage['memorial-objects'];
  //     this.rightToRest.textContent = selectedData.collage['right-to-rest'];
  //     this.notebooks.textContent = selectedData.collage.notebooks;
  //     this.mosaics.textContent = selectedData.collage.mosaics;
  //     this.artworks.textContent = selectedData.collage.artworks;
  //   }
  // }

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

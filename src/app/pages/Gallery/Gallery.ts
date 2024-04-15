import Localization from "../Localization/Localization";
import dataMain from '../../../Data/dataMain.json';
import dataMainEn from '../../../Data/dataMainEn.json';

interface ImagePath {
  small: string;
  full: string;
  descrip: string;
}

export default class Gallery {
  name: string = '';
  description: string = '';
  paintDescription: string[] = [];
  imagePaths: ImagePath[];
  localization: Localization;

  constructor(
    name: string,
    description: string,
    paintDescription: string[],
    imagePaths: ImagePath[]
  ) {
    this.name = name;
    this.description = description;
    this.paintDescription = paintDescription;
    this.imagePaths = imagePaths;
    this.localization = new Localization()
  }

  render() {
    const galleryBlock = document.createElement('div');
    galleryBlock.classList.add('element');

    const galleryInfo = document.createElement('div');
    galleryInfo.classList.add('element__info');

    const galleryImg = document.createElement('div');
    galleryImg.classList.add('element__img');

    const elementInfo = document.createElement('div');
    elementInfo.classList.add('element__owerview');

    const elementName = document.createElement('p');
    elementName.classList.add('element__name');
    elementName.textContent = this.name;
    elementName.innerHTML = this.name.replace(/\n/g, '<br>');

    const elementDescription = document.createElement('p');
    elementDescription.classList.add('element__description');
    elementDescription.textContent = this.description;
    elementDescription.innerHTML = this.description.replace(/\n/g, '<br>');

    elementInfo.appendChild(elementName);
    elementInfo.appendChild(elementDescription);

    galleryInfo.appendChild(elementInfo);

    this.paintDescription.forEach((text, index) => {
      const elementPaintDescription = document.createElement('p') as HTMLElement;
      elementPaintDescription.classList.add('element__paint');
      elementPaintDescription.classList.add('folded');

      elementPaintDescription.textContent = text;
      elementPaintDescription.innerHTML = text.replace(/\n/g, '<br>');

      galleryInfo.appendChild(elementPaintDescription);

      if (this.isMobile()) {
            const selectedData = this.localization.language === 'ru' ? dataMain : dataMainEn;

        const toggleButton = document.createElement('button');
        toggleButton.classList.add(`toggle`);
        toggleButton.classList.add(`toggle--${index}`);

        toggleButton.innerHTML = `<span class="toggle__text">${selectedData.general.unfold}</span> <span class="toggle__element">▼</span>`;
        toggleButton.onclick = () => {
          const isUnfolded = elementPaintDescription.classList.toggle('unfolded');
          toggleButton.innerHTML = isUnfolded
            ? `<span class="toggle__text" data-localize="roll-up">${selectedData.general["roll-up"]}</span> <span class="toggle__element">▲</span>`
            : `<span class="toggle__text" data-localize="unfold">${selectedData.general.unfold}</span> <span class="toggle__element">▼</span>`;
        };
        galleryInfo.appendChild(toggleButton);
      }
    });

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    // Логика для мобильного отображения
    if (this.isMobile()) {
      imageWrapper.classList.add('slick');
      this.imagePaths.forEach(path => {
        const imageMobil = document.createElement('div');
        imageMobil.className = 'image-mobil';
        imageMobil.style.backgroundImage = `url('${path.full}')`;

        const imageMobilDescription = document.createElement('p');
        imageMobilDescription.className = 'image-mobil__description';
        imageMobilDescription.textContent = path.descrip;

        imageMobil.appendChild(imageMobilDescription);
        imageWrapper.appendChild(imageMobil);
      });
    } else {
      // descop
      this.imagePaths.forEach((path: ImagePath, index: number) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-box');
        imageContainer.classList.add(`image-box__${index}`);

        const imageLink = document.createElement('a');
        imageLink.classList.add('fancybox');
        imageLink.setAttribute('data-fancybox', 'gallery');
        imageLink.setAttribute('data-caption', path.descrip);
        imageLink.setAttribute('href', path.full);

        const image = document.createElement('img');
        image.classList.add('image');
        image.setAttribute('src', path.small);
        image.setAttribute('alt', `${this.name} image ${index + 1}`);

        // const imageMobil = document.createElement('img');
        // imageMobil.classList.add('image-mobil');
        // imageMobil.style.backgroundImage = `url('${path.full}')`;
        // //     imageWrapper.appendChild(imageBox);

        imageLink.appendChild(image);
        // imageLink.appendChild(imageMobil);
        imageContainer.appendChild(imageLink);

        if (index === 0) {
          imageContainer.classList.add('first-img');
          galleryImg.appendChild(imageContainer);
        } else {
          imageWrapper.appendChild(imageContainer);
        }
      });
    }

    galleryBlock.appendChild(galleryInfo);
    galleryBlock.appendChild(galleryImg);
    galleryImg.appendChild(imageWrapper);
    return galleryBlock;
  }

  renderMethodWithoutBigFirstPhoto() {
    const galleryBlock = document.createElement('div');
    galleryBlock.classList.add('element');

    const galleryInfo = document.createElement('div');
    galleryInfo.classList.add('element__info');

    const galleryImg = document.createElement('div');
    galleryImg.classList.add('element__img');

    const elementInfo = document.createElement('div');
    elementInfo.classList.add('element__owerview');

    const elementName = document.createElement('p');
    elementName.classList.add('element__name');
    elementName.textContent = this.name;
    elementName.innerHTML = this.name.replace(/\n/g, '<br>');

    const elementDescription = document.createElement('p');
    elementDescription.classList.add('element__description');
    elementDescription.textContent = this.description;
    elementDescription.innerHTML = this.description.replace(/\n/g, '<br>');

    elementInfo.appendChild(elementName);
    elementInfo.appendChild(elementDescription);

    galleryInfo.appendChild(elementInfo);

    this.paintDescription.forEach((text, index) => {
      const elementPaintDescription = document.createElement('p') as HTMLElement;
      elementPaintDescription.classList.add('element__paint');
      elementPaintDescription.innerHTML = text;
      elementPaintDescription.innerHTML = text.replace(/\n/g, '<br>');

      galleryInfo.appendChild(elementPaintDescription);

      if (this.isMobile()) {
        const toggleButton = document.createElement('button');
        toggleButton.classList.add(`toggle`);
        toggleButton.classList.add(`toggle--${index}`);

        toggleButton.innerHTML = `<span class="toggle__text" data-localize="unfold">Развернуть</span> <span class="toggle__element">▼</span>`;
        toggleButton.onclick = () => {
          const isUnfolded = elementPaintDescription.classList.toggle('unfolded');
          toggleButton.innerHTML = isUnfolded
            ? `<span class="toggle__text" data-localize="roll-up">Свернуть</span> <span class="toggle__element">▲</span>`
            : `<span class="toggle__text" data-localize="unfold">Развернуть</span> <span class="toggle__element">▼</span>`;
        };
        galleryInfo.appendChild(toggleButton);
      }
    });

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    // Логика для мобильного отображения
    if (this.isMobile()) {
      imageWrapper.classList.add('slick');
      this.imagePaths.forEach(path => {
        const imageMobil = document.createElement('div');
        imageMobil.className = 'image-mobil';
        imageMobil.style.backgroundImage = `url('${path.full}')`;

        const imageMobilDescription = document.createElement('p');
        imageMobilDescription.className = 'image-mobil__description';
        imageMobilDescription.textContent = path.descrip;

        imageMobil.appendChild(imageMobilDescription);
        imageWrapper.appendChild(imageMobil);
      });
    } else {
      // Desktop
      this.imagePaths.forEach((path, index) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-box');
        imageContainer.classList.add(`image-box__${index}`);

        const imageLink = document.createElement('a');
        imageLink.classList.add('fancybox');
        imageLink.setAttribute('data-fancybox', 'gallery');
        imageLink.setAttribute('data-caption', path.descrip);
        imageLink.setAttribute('href', path.full);

        const image = document.createElement('img');
        image.classList.add('image');
        image.setAttribute('src', path.small);
        image.setAttribute('alt', `${this.name} image ${index + 1}`);

        imageLink.appendChild(image);
        imageContainer.appendChild(imageLink);

        // if (index === 0) {
        //   imageContainer.classList.add('first-img');
        //   galleryImg.appendChild(imageContainer);
        // } else {
        imageWrapper.appendChild(imageContainer);
      });
    }

    galleryBlock.appendChild(galleryInfo);
    galleryBlock.appendChild(galleryImg);
    galleryImg.appendChild(imageWrapper);
    return galleryBlock;
  }

  // eslint-disable-next-line class-methods-use-this
  isMobile() {
    return window.matchMedia('(max-width: 1024px)').matches;
  }
}

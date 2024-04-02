export default class Gallery {
  name: string = '';
  description: string = '';
  paintDescription: string[] = [];
  imagePaths: string[] = [];

  constructor(name: string, description: string, paintDescription: string[], imagePaths: string[]) {
    this.name = name;
    this.description = description;
    this.paintDescription = paintDescription;
    this.imagePaths = imagePaths;
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
    // galleryInfo.appendChild(elementDescription);

    this.paintDescription.forEach(text => {
      const elementPaintDescription = document.createElement('p') as HTMLElement;
      elementPaintDescription.classList.add('element__paint');
      elementPaintDescription.textContent = text;
      elementPaintDescription.innerHTML = text.replace(/\n/g, '<br>');

      galleryInfo.appendChild(elementPaintDescription);
    });

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    this.imagePaths.forEach((path, index) => {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-box');

      const image = document.createElement('img');
      image.classList.add('image');
      image.setAttribute('src', path);
      image.setAttribute('alt', `${this.name} image ${index + 1}`);

      imageContainer.appendChild(image);

      if (index === 0) {
        imageContainer.classList.add('first-img');
        galleryImg.appendChild(imageContainer); // Для первого изображения добавляем контейнер непосредственно в galleryImg
      } else {
        imageWrapper.appendChild(imageContainer); // Для остальных изображений добавляем контейнер в wrapper
      }
    });

    

    galleryBlock.appendChild(galleryInfo);
    galleryBlock.appendChild(galleryImg);
    galleryImg.appendChild(imageWrapper);
    return galleryBlock;
  }
}

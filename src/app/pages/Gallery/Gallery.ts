export default class Gallery {
  name: string = '';
  description: string = '';
  paintDescription: string = '';
  imagePaths: string[] = [];

  constructor(name: string, description: string, paintDescription: string, imagePaths: string[]) {
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

    const elementName = document.createElement('p');
    elementName.classList.add('element__name');
    elementName.textContent = this.name;
    elementName.innerHTML = this.name.replace(/\n/g, '<br>');

    const elementDescription = document.createElement('p');
    elementDescription.classList.add('element__description');
    elementDescription.textContent = this.description;
    elementDescription.innerHTML = this.description.replace(/\n/g, '<br>');

    const elementPaintDescription = document.createElement('p');
    elementPaintDescription.classList.add('element__paint');
    elementPaintDescription.textContent = this.paintDescription;
    elementPaintDescription.innerHTML = this.paintDescription.replace(/\n/g, '<br>');

    galleryInfo.appendChild(elementName);
    galleryInfo.appendChild(elementDescription);
    galleryInfo.appendChild(elementPaintDescription);

    this.imagePaths.forEach((path, index) => {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-box');
      if (index === 0) {
        imageContainer.classList.add('first-img');
      }

      const image = document.createElement('img');
      image.classList.add('image');

      image.setAttribute('src', path);
      image.setAttribute('alt', `${this.name} image ${index + 1}`);

      imageContainer.appendChild(image);

      galleryImg.appendChild(imageContainer);
    });

    galleryBlock.appendChild(galleryInfo);
    galleryBlock.appendChild(galleryImg);
    return galleryBlock;
  }
}

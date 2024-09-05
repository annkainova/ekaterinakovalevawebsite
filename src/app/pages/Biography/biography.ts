export default class Biography {
  name: string;
  text: string;
  image: string[];

  constructor(name: string, text: string, image: string[]) {
    this.name = name;
    this.text = text;
    this.image = image;
  }

  render() {
    const bioBlock = document.createElement('div');
    bioBlock.classList.add(`biography__${this.name}`, 'biography__component');

    const bioText = document.createElement('p');
    bioText.classList.add(`biography__${this.name}-text`, 'biography__text');
    bioText.setAttribute('data-localize', 'bio-text');
    bioText.innerHTML = this.text.replace(/\n/g, '<br>');

    bioBlock.appendChild(bioText);

    const bioImageBox = document.createElement('div');
    bioImageBox.classList.add(`biography__${this.name}-images`, 'biography__image');

    this.image.forEach(image => {
      const bioImage = document.createElement('img');
      bioImage.classList.add(`biography__${this.name}-image`, 'biography__image');
      bioImage.setAttribute('src', image);

      bioImageBox.appendChild(bioImage);
    });

    bioBlock.appendChild(bioImageBox);

    return bioBlock;
  }
}

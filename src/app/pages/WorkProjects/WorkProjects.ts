export default class WorkProjects {
  nameSection: string;
  imgSection: string;
  linkSection: string;

  constructor(name: string, imgSection: string, linkSection: string) {
    this.nameSection = name;
    this.imgSection = imgSection;
    this.linkSection = linkSection;
  }

  render() {
    const projectLink = document.createElement('a');
    projectLink.classList.add('work-projects__link');
    projectLink.setAttribute('href', `${this.linkSection}`);

    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');

    const projectImg = document.createElement('img');
    projectImg.classList.add('work-projects__img');
    projectImg.setAttribute('src', `${this.imgSection}`);
    projectImg.setAttribute('alt', `${this.nameSection}`);

    const projectText = document.createElement('p');
    projectText.classList.add('work-projects__text');
    projectText.textContent = this.nameSection;

    imageBox.appendChild(projectImg);

    projectLink.appendChild(imageBox);
    projectLink.appendChild(projectText);

    return projectLink;
  }
}

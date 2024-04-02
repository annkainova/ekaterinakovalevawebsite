import Gallery from './Gallery';

export default class Page {
  galleryViews: Gallery[];

  constructor() {
    this.galleryViews = [];
  }

  render(namePage: string, dataPaint) {
    this.galleryViews = dataPaint[namePage].map(
      (item: object) =>
        new Gallery(item.name, item.description, item.paintDescription, item.imagePaths || [])
    );
    const mapsContainer = document.querySelector(`.${namePage}`);
    this.galleryViews.forEach(galleryView => {
      const galleryEl = galleryView.render();
      mapsContainer?.appendChild(galleryEl);
    });
  }
}

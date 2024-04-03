import Gallery from './Gallery';

interface PaintDataItem {
  name: string;
  description: string;
  paintDescription: string[];
  imagePaths: string[];
}

export default class Page {
  galleryViews: Gallery[];

  constructor() {
    this.galleryViews = [];
  }

  render(namePage: string, dataPaint: Record<string, PaintDataItem[]>) {
    this.galleryViews = dataPaint[namePage].map(
      (item: PaintDataItem) =>
        new Gallery(item.name, item.description, item.paintDescription, item.imagePaths)
    );
    const mapsContainer = document.querySelector(`.${namePage}`);
    this.galleryViews.forEach(galleryView => {
      const galleryEl = galleryView.render();
      mapsContainer?.appendChild(galleryEl);
    });
  }

  renderMethodWithoutBigFirstPhoto(namePage: string, dataPaint: Record<string, PaintDataItem[]>) {
    this.galleryViews = dataPaint[namePage].map(
      (item: PaintDataItem) =>
        new Gallery(item.name, item.description, item.paintDescription, item.imagePaths)
    );
    const mapsContainer = document.querySelector(`.${namePage}`);
    this.galleryViews.forEach(galleryView => {
      const galleryEl = galleryView.renderMethodWithoutBigFirstPhoto();
      mapsContainer?.appendChild(galleryEl);
    });
  }
}

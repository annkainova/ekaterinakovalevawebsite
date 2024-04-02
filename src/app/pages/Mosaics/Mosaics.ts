import Gallery from '../Gallery/Gallery';
import data from '../Gallery/data.json';

export default class MosaicsPage {
  galleryViews: Gallery[];

  constructor() {
    this.galleryViews = data.mosaics.map(
      item => new Gallery(item.name, item.description, item.paintDescription, item.imagePaths || [])
    );
  }

  render() {
    const mapsContainer = document.querySelector('.mosaics');
    this.galleryViews.forEach(galleryView => {
      const galleryEl = galleryView.render();
      mapsContainer?.appendChild(galleryEl);
    });
  }
}

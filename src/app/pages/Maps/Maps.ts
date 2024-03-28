import Gallery from '../Gallery/Gallery';
import data from '../Gallery/data.json';

export default class MapsPage {
  galleryViews: Gallery[];

  constructor() {
    this.galleryViews = data.maps.map(
      map => new Gallery(map.name, map.description, map.paintDescription, map.imagePaths || [])
    );
  }

  render() {
    const mapsContainer = document.querySelector('.maps');

    this.galleryViews.forEach(galleryView => {
      const galleryEl = galleryView.render();
      mapsContainer?.appendChild(galleryEl);
    });
  }
}

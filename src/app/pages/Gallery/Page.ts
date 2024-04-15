import Gallery from './Gallery';
import WorkProjects from '../WorkProjects/WorkProjects';

declare global {
  interface JQuery {
    fancybox(options?: unknown): JQuery;
  }
}

interface ImagePath {
  small: string;
  full: string;
  descrip: string;
}

interface PaintDataItem {
  name: string;
  description: string;
  paintDescription: string[];
  imagePaths: ImagePath[];
}

interface ProjectDataItem {
  nameSection: string;
  linkSection: string;
  imgSection: string;
}

export default class Page {
  galleryViews: Gallery[];
  workProjectViews: WorkProjects[];

  constructor() {
    this.galleryViews = [];
    this.workProjectViews = [];
  }

  renderGallery(namePage: string, dataPaint: Record<string, PaintDataItem[]>) {
    this.galleryViews = dataPaint[namePage].map(
      (item: PaintDataItem) =>
        new Gallery(item.name, item.description, item.paintDescription, item.imagePaths)
    );
    const mapsContainer = document.querySelector(`.${namePage}`);
    this.galleryViews.forEach(galleryView => {
      const galleryEl = galleryView.render();
      mapsContainer?.appendChild(galleryEl);
    });
    // $('.fancybox').fancybox();
  }

  renderGalleryWithoutMainPhoto(namePage: string, dataPaint: Record<string, PaintDataItem[]>) {
    this.galleryViews = dataPaint[namePage].map(
      (item: PaintDataItem) =>
        new Gallery(item.name, item.description, item.paintDescription, item.imagePaths)
    );
    const mapsContainer = document.querySelector(`.${namePage}`);
    this.galleryViews.forEach(galleryView => {
      const galleryEl = galleryView.renderMethodWithoutBigFirstPhoto();
      mapsContainer?.appendChild(galleryEl);
    });
    // $('.fancybox').fancybox();
  }

  renderProject(dataProject: Record<string, ProjectDataItem[]>) {
    this.workProjectViews = dataProject.workProjects.map(
      (item: ProjectDataItem) =>
        new WorkProjects(item.id, item.nameSection, item.imgSection, item.linkSection)
    );

    const mapsContainer = document.querySelector('.work-projects');
    this.workProjectViews.forEach(workProjectView => {
      const workProjectElement = workProjectView.render();
      mapsContainer?.appendChild(workProjectElement);
    });
  }
}

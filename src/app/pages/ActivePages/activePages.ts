export default class ActiveLink {
  currentPath: string;
  linkIds: string[];

  constructor() {
    this.currentPath = window.location.pathname;
    this.linkIds = [
      'waiting-zone',
      'maps',
      'horizon-colonization',
      'soup-of-the-day',
      'early-works',
      'antarctic-diary',
      'memorial-objects',
      'medical-history',
      'notebooks',
      'mosaics',
      'artworks',
      'right-to-rest',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  setActiveLink() {
    this.linkIds.forEach(id => {
      const link = document.getElementById(id);
      if (link) {
        link.classList.remove('active');
      }
    });

    const currentPage = this.linkIds.find(id => this.currentPath.endsWith(`${id}.html`));
    if (currentPage) {
      const link = document.getElementById(currentPage);
      if (link) {
        link.classList.add('active');
      }
    }
  }
}

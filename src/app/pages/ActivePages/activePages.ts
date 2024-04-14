export default class ActiveLink {
  currentPath: string;
  linkIds: string[];
  prevLink?: string;
  nextLink?: string;

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
    this.determineAdjacentLinks();
  }
  determineAdjacentLinks() {
    const currentIndex = this.linkIds.findIndex(id => this.currentPath.endsWith(`${id}.html`));

    this.prevLink = currentIndex > 0 ? this.linkIds[currentIndex - 1] : undefined;
    this.nextLink =
      currentIndex < this.linkIds.length - 1 ? this.linkIds[currentIndex + 1] : undefined;
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

  setNavigationLinks() {
    const prevButton = document.getElementById('nav-prev') as HTMLAnchorElement;
    const nextButton = document.getElementById('nav-next') as HTMLAnchorElement;

    if (this.prevLink) {
      prevButton.href = `${this.prevLink}.html`;
      prevButton.textContent = this.getLinkText(this.prevLink);
      prevButton.style.display = 'block';
    } else {
      prevButton.style.display = 'none';
    }

    if (this.nextLink) {
      nextButton.href = `${this.nextLink}.html`;
      nextButton.textContent = this.getLinkText(this.nextLink);
      nextButton.style.display = 'block';
    } else {
      nextButton.style.display = 'none';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getLinkText(linkId: string): string {
    const link = document.getElementById(linkId);
    const linkText = link?.querySelector('.sections-nav__text') as HTMLElement;
    return link ? linkText.textContent || link.getAttribute('title') || '' : '';
  }

  init() {
    this.setActiveLink();
    this.setNavigationLinks();
  }
}

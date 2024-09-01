// NewsPage.ts

import EventBlock from '../../components/EventBlock/EventBlock';
import Localization from '../Localization/Localization';
import { EventsData } from '../../interfaces/Event';

import dataNews from '../../../Data/News/dataNews.json';
import dataNewsEn from '../../../Data/News/dataNewsEn.json';

export default class NewsPage {
  private container: HTMLElement;
  private containerPagination: HTMLElement;
  localization: Localization;
  selectedData: EventsData;
  itemsPerPage: number;
  currentPage: number;

  constructor(container: HTMLElement, containerPagination: HTMLElement) {
    this.localization = new Localization();
    this.selectedData = this.localization.language === 'ru' ? dataNews : dataNewsEn;

    this.container = container;
    this.containerPagination = containerPagination;

    this.itemsPerPage = 6;

    const urlParams = new URLSearchParams(window.location.search);
    this.currentPage = parseInt(urlParams.get('page') || '1', 10);

    console.log('NewsPage initialized');
    console.log(this.container, this.containerPagination, this.selectedData);
  }

  render() {
    console.log('Rendering page', this.currentPage);

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const pageData = this.selectedData.events.slice(startIndex, endIndex);

    this.container.innerHTML = '';
    this.containerPagination.innerHTML = '';

    pageData.forEach(event => {
      const eventBlock = new EventBlock(this.container, event);
      eventBlock.render();
    });
    this.renderPagination();
    this.scrollToTop();
  }

  scrollToTop() {
    console.log('Scrolling to top');
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  renderPagination() {
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination';

    const totalPages = Math.ceil(this.selectedData.events.length / this.itemsPerPage);
    console.log('Total Pages:', totalPages);

    // Кнопка для перехода к предыдущей странице
    const prevPageButton = document.createElement('button');
    prevPageButton.className = 'pagination__button pagination__button--prev';

    prevPageButton.disabled = this.currentPage === 1;
    prevPageButton.addEventListener('click', () => {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.updateURL();
        this.render();
      }
    });
    paginationContainer.appendChild(prevPageButton);

    // Кнопки для страниц
    for (let i = 1; i <= totalPages; i += 1) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i.toString();
      pageButton.className = 'pagination__button pagination__page-number';
      if (i === this.currentPage) {
        pageButton.classList.add('pagination__page-number--active');
      }
      pageButton.addEventListener('click', () => {
        this.currentPage = i;
        this.updateURL();
        this.render();
      });
      paginationContainer.appendChild(pageButton);
    }

    // Кнопка для перехода к последней странице
    const lastPageButton = document.createElement('button');
    lastPageButton.className = 'pagination__button pagination__button--last';
    lastPageButton.innerHTML = '∞';
    lastPageButton.addEventListener('click', () => {
      this.currentPage = totalPages;
      this.updateURL();
      this.render();
    });
    paginationContainer.appendChild(lastPageButton);

    // Кнопка для перехода к следующей странице
    const nextPageButton = document.createElement('button');
    nextPageButton.className = 'pagination__button pagination__button--next';
    nextPageButton.disabled = this.currentPage === totalPages;
    nextPageButton.addEventListener('click', () => {
      if (this.currentPage < totalPages) {
        this.currentPage += 1;
        this.updateURL();
        this.render();
      }
    });
    paginationContainer.appendChild(nextPageButton);

    this.containerPagination.appendChild(paginationContainer);
  }

  updateURL() {
    const url = new URL(window.location.href);
    url.searchParams.set('page', this.currentPage.toString());
    window.history.pushState({}, '', url.toString());
  }
}

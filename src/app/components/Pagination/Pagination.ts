// Pagination.ts
export default class Pagination {
  private container: HTMLElement;
  private totalPages: number;
  private currentPage: number;
  private onPageChange: (page: number) => void;

  constructor(container: HTMLElement, totalPages: number, onPageChange: (page: number) => void) {
    this.container = container;
    this.totalPages = totalPages;
    this.currentPage = 1;
    this.onPageChange = onPageChange;

    this.render();
    this.addEventListeners();
  }

  private render() {
    let buttonsHtml = '';

    for (let i = 1; i <= this.totalPages; i++) {
      buttonsHtml += `<button class="pagination-btn" data-page="${i}">${i}</button>`;
    }

    this.container.innerHTML = `
      <div class="pagination-controls">
        ${buttonsHtml}
      </div>
    `;
  }

  private addEventListeners() {
    const buttons = this.container.querySelectorAll('.pagination-btn');
    buttons.forEach(button => {
      button.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        const page = parseInt(target.getAttribute('data-page') || '1', 10);

        if (page !== this.currentPage) {
          this.currentPage = page;
          this.onPageChange(this.currentPage);
        }
      });
    });
  }
}

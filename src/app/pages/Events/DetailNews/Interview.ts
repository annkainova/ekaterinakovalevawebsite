import Localization from '../../Localization/Localization';

export default class Interview {
  localization: Localization;
  selectedData: string;

  constructor() {
    this.localization = new Localization();
    const interviewRu = '15_interview/15_INTERVIEW_RU.jpg';
    const interviewEn = '15_interview/15_INTERVIEW_EN.jpg';

    this.selectedData = this.localization.language === 'ru' ? interviewRu : interviewEn;
  }

  render() {
    // Находим контейнер, куда будет добавлено изображение
    const container = document.querySelector('.interview-section') as HTMLElement;

    // Создаем обертку для изображения
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('interview-img');

    // Создаем ссылку для Fancybox
    const imageLink = document.createElement('a');
    imageLink.classList.add('fancybox');
    imageLink.setAttribute('data-fancybox', 'gallery');
    imageLink.setAttribute('data-caption', '');
    imageLink.setAttribute('href', this.selectedData);

    // Создаем изображение
    const image = document.createElement('img');
    image.setAttribute('src', this.selectedData);
    image.setAttribute('alt', 'Interview Image');

    // Добавляем изображение в ссылку
    imageLink.appendChild(image);

    // Добавляем ссылку в обертку
    imageWrapper.appendChild(imageLink);

    // Добавляем обертку в контейнер
    container.appendChild(imageWrapper);
  }
}

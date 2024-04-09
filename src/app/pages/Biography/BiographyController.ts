import Biography from './biography';

export default class BiographyController {
  biographyView?: Biography;
  bio: HTMLElement | null;
  personal: HTMLElement | null;
  group: HTMLElement | null;

  bioView: Biography;
  personalView: Biography;
  groupView: Biography;

  constructor(bioView: Biography, personalView: Biography, groupView: Biography) {
    this.bioView = bioView;
    this.personalView = personalView;
    this.groupView = groupView;

    this.bio = document.querySelector('.biography__link--bio');
    this.personal = document.querySelector('.biography__link--personal');
    this.group = document.querySelector('.biography__link--group');

    this.chooseSection(this.bioView);
    if (this.bio) {
      this.bio.addEventListener('click', () => {
        this.chooseSection(this.bioView);
      });
    }

    if (this.personal) {
      this.personal?.addEventListener('click', () => {
        this.chooseSection(this.personalView);

        const bioText = document.querySelector('.biography__personal-text') as HTMLElement;
        bioText.innerHTML = `
        <div class="personal-data">
  <p class="year">1991</p>
  <p>
    <span class="bold">«Колонизация Горизонта».</span>  Pace Gallery, Нью-Йорк
  </p>
</div>

<div class="personal-data">
  <p class="year">1992</p>
  <p>
    <span class="bold">«Колонизация Горизонта 2».</span> Галерея Студия 20, Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">1995</p>
  <p>
    <span class="bold">«Базис».</span> Галерея Студия 20, Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">1998</p>
  <p>
    <span class="bold">«Несбывшееся путешествие».</span> Галерея «Юнион», Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">2009</p>
  <p>
    <span class="bold">«SNEGOVICUS».</span> Галерея «ЦЕХ V», Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">2012</p>
  <p>
    <span class="bold">«7 слов».</span> Культурный центр Покровские ворота
  </p>
</div>

<div class="personal-data">
  <p class="year">2017</p>
  <p>
    <span class="bold">«Антарктический дневник».</span> Научно-исследовательское судно «Академик Вавилов», пролив Дрейка, Аргентина
  </p>
</div>

<div class="personal-data">
  <p class="year">2018</p>
  <p>
    <span class="bold">«Маршруты памяти».</span> Московский музей современного искусства
  </p>
</div>

<div class="personal-data">
  <p class="year">2019</p>
  <p>
    <span class="bold">«Кройка ненужных вещей».</span> Галерея Перелетный кабак, Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">2021</p>
  <p>
    <span class="bold">«История болезни. Право на отдых.»</span> Музей Росфото, Санкт-Петербург
  </p>
</div>

<div class="personal-data">
  <p class="year">2022</p>
  <p>
    <span class="bold">«Зона ожидания».</span> Соляной амбар XVIII в., Таруса
  </p>
</div>

<div class="personal-data">
  <p class="year">2023</p>
  <p>
    <span class="bold">«Зона ожидания».</span> Музей истории ГУЛАГа, Москва
  </p>
</div>
`;

      });
    }

    if (this.group) {
      this.group?.addEventListener('click', () => {
        this.chooseSection(this.groupView);

        const bioText = document.querySelector('.biography__group-text') as HTMLElement;
        bioText.innerHTML = `
        <div class="personal-data">
  <p class="year">1991</p>
  <p>
    <span class="bold">«Колонизация Горизонта».</span>  Pace Gallery, Нью-Йорк
  </p>
</div>

<div class="personal-data">
  <p class="year">1992</p>
  <p>
    <span class="bold">«Колонизация Горизонта 2».</span> Галерея Студия 20, Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">1995</p>
  <p>
    <span class="bold">«Базис».</span> Галерея Студия 20, Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">1998</p>
  <p>
    <span class="bold">«Несбывшееся путешествие».</span> Галерея «Юнион», Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">2009</p>
  <p>
    <span class="bold">«SNEGOVICUS».</span> Галерея «ЦЕХ V», Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">2012</p>
  <p>
    <span class="bold">«7 слов».</span> Культурный центр Покровские ворота
  </p>
</div>

<div class="personal-data">
  <p class="year">2017</p>
  <p>
    <span class="bold">«Антарктический дневник».</span> Научно-исследовательское судно «Академик Вавилов», пролив Дрейка, Аргентина
  </p>
</div>

<div class="personal-data">
  <p class="year">2018</p>
  <p>
    <span class="bold">«Маршруты памяти».</span> Московский музей современного искусства
  </p>
</div>

<div class="personal-data">
  <p class="year">2019</p>
  <p>
    <span class="bold">«Кройка ненужных вещей».</span> Галерея Перелетный кабак, Москва
  </p>
</div>

<div class="personal-data">
  <p class="year">2021</p>
  <p>
    <span class="bold">«История болезни. Право на отдых.»</span> Музей Росфото, Санкт-Петербург
  </p>
</div>

<div class="personal-data">
  <p class="year">2022</p>
  <p>
    <span class="bold">«Зона ожидания».</span> Соляной амбар XVIII в., Таруса
  </p>
</div>

<div class="personal-data">
  <p class="year">2023</p>
  <p>
    <span class="bold">«Зона ожидания».</span> Музей истории ГУЛАГа, Москва
  </p>
</div>
`;

      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  chooseSection(nameSection: Biography) {
    const biographySection = document.querySelector('.biography__info');
    if (biographySection) biographySection.innerHTML = ''; // Очистка содержимого перед добавлением нового
    const bioElement = nameSection.render();

    biographySection?.appendChild(bioElement);
  }
}

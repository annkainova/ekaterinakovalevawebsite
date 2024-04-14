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

    this.bio = document.querySelector('.biography__link--bio ');
    this.personal = document.querySelector('.biography__link--personal');
    this.group = document.querySelector('.biography__link--group');

    this.bio?.classList.add('active');

    this.chooseSection(this.bioView);
    if (this.bio) {
      this.bio.addEventListener('click', () => {
        this.bio?.classList.add('active');
        this.personal?.classList.remove('active');
        this.group?.classList.remove('active');

        this.chooseSection(this.bioView);
      });
    }

    if (this.personal) {
      this.personal?.addEventListener('click', () => {
        this.personal?.classList.add('active');
        this.bio?.classList.remove('active');
        this.group?.classList.remove('active');

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
        this.group?.classList.add('active');
        this.bio?.classList.remove('active');
        this.personal?.classList.remove('active');

        this.chooseSection(this.groupView);
        const bioText = document.querySelector('.biography__group-text') as HTMLElement;
        bioText.innerHTML = `
<div class="group-data">
  <p class="year">1988</p>
  <p class="group-text">
    <span class="bold">«Выставка графики московских художников».</span> ЦДХ, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">1989</p>
  <p class="group-text">
    Российско-французская видео-акция <span class="bold">«Ритуалы».</span> Москва-Ленинград-Архангельск-Северная Двина
  </p>
</div>

<div class="group-data">
  <p class="year">1992</p>
  <div class="group-text">
    <p>
      <span class="bold">«Still Leven».</span> Галерея Велта, Москва
    </p>
    <p>
      <span class="bold">«Пейзаж».</span> Галерея А-3, Москва
    </p>
    <p>
      <span class="bold">«Натюрморт в конце XX века».</span> Галерея Московская палитра, Москва
    </p>
    <p>
      <span class="bold">«Хорн-92».</span> Кунстхалле Хорн, Австрия
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">1993</p>
  <div class="group-text">
    <p>
      <span class="bold">«Графика группы Эрмитаж».</span> Музей изящных искусств, Анкара, Турция — ЦДХ, Москва
    </p>
    <p>
      Международная ярмарка <span class="bold">АРТ-МИФ</span>, аукцион SOTHEBY'S, ЦВЗ Манеж
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">1995</p>
  <div class="group-text">
    <p>
      <span class="bold">«Ингерманландия. Проект Культурдорф»,</span> Царское село, С. - Петербург.
    </p>
    <p>
      <span class="bold">«Москва - Берлин».</span> Галерея Чекпойнт Чарли, Берлин
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">1996</p>
  <div class="group-text">
    <p>
      <span class="bold">«Артотека»,</span> ЦДХ., Москва
    </p>
    <p>
      <span class="bold">«Московская студия».</span> Музей Коркоран, Вашингтон, США
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">1997</p>
  <p>
    <span class="bold">«Женщина двух морей».</span> Салоники, Греция
  </p>
</div>

<div class="group-data">
  <p class="year">1998</p>
  <div class="group-text">
    <p>
      <span class="bold">«Уроки труда».</span> Галерея «Сегодня»
    </p>
    <p>
      <span class="bold">Галерея «Московская палитра»,</span> ЦВЗ «Манеж», Москва
    </p>
    <p>
      Выставки в рамках фестиваля современного искусства<span class="bold">«Пушкин и современность».</span> Центр
      современного искусства »Арс-Форум», Ярославль
    </p>
    <p>
      Центр современного искусства<span class="bold">«Арс-Форум»,</span> Ярославль
    </p>
    <p>
      Плесский государственный историко-культурный и художественный музей-заповедник, Плес
    </p>
    <p>
      Муниципальная художественная галерея, Кострома
    </p>
    <p>
      Нижегородский художественный музей, Нижний Новгород
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">1998 <br> - <br> 1999</p>
  <div class="group-text">
    <p>
      Российско-польская выставка<span class="bold">«Фауна»,</span> МГВЗ «Новый манеж»
    </p>
    <p>
      Дом архитекторов, Нижний Новгород
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">1999</p>
  <div class="group-text">
    <p>
      <span class="bold">«А. С. П. посвящается»,</span> Нижнетагильский музей изобразительных искусств, Нижний Тагил
    </p>
    <p>
      Екатеринбургский музей изобразительных искусств, Екатеринбург
    </p>
    <p>
      Государственный художественный музей им. Нестерова, Уфа
    </p>
    <p>
      Самарский художественный музей, Самара
    </p>
    <p>
      Казанский музей изобразительных искусств, Казань.
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">2000</p>
  <p>
    Российско-польская выставка<span class="bold">«Сериалы».</span> ЦВЗ «Манеж», Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2003</p>
  <div class="group-text">
    <p>
      <span class="bold">«Искусство разведки»</span> Форум художественных инициатив, Малый манеж, Москва.
    </p>
    <p>
      <span class="bold">«Фотобиеннале 2003».</span> ЦВЗ «Манеж»
    </p>
    <p>
      <span class="bold">«День рождения»,</span> ГЦСИ, Москва
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">2000</p>
  <p>
    <span class="bold">«Сны Афродиты».</span> «Зверевский центр современного искусства», Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2009</p>
  <p>
    <span class="bold">«SUMMA SUMMARUM».</span> Государственный центр современного искусства, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2009</p>
  <p>
    <span class="bold">АРТ-МОСКВА.</span> Ravenscourt gallery, London, UK, ЦДХ, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2012</p>
  <p>
    <span class="bold">«Тотальная ирония».</span> Галерея Беляево, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2014</p>
  <p>
    <span class="bold">«Посвящение Маркесу».</span> Институт Сервантеса, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2015</p>
  <p>
    <span class="bold">«Интервенция».</span> Музей декоративно-прикладного искусства, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2017</p>
  <p>
    <span class="bold">«Antarctic Biennale».</span> Антарктический павильон на венецианской биеннале, Венеция
  </p>
</div>

<div class="group-data">
  <p class="year">2017</p>
  <p>
    <span class="bold">«Герника».</span> Институт Сервантеса, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2018</p>
  <p>
    <span class="bold">«После иконы».</span> Анненкирхе, Санкт-Петербург
  </p>
</div>

<div class="group-data">
  <p class="year">2019</p>
  <p>
    <span class="bold">COSMOSCOW.</span> Галерея Гридчинхолл, Гостиный двор, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2019</p>
  <p>
    <span class="bold">RA&AF</span> Галерея Гридчинхолл, ЦВЗ Манеж, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2019</p>
  <p>
    <span class="bold">«Тает».</span> Галерея Гридчинхолл. Cube, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2020</p>
  <p>
    <span class="bold">COSMOSCOW, «Шар и крест. Выбор художника».</span> Гостиный двор, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2020</p>
  <div class="group-text">
    <p>
      <span class="bold">«Выбор коллекционера»,</span> Московский музей декоративного искусства.
    </p>
    <p>
      <span class="bold">«Личный космос».</span> Калужский инновационный культурный центр, Калуга
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">2021</p>
  <p>
    <span class="bold">«Игра в крестики нолики».</span> Ярославский Художественный музей, Ярославль
  </p>
</div>

<div class="group-data">
  <p class="year">2021</p>
  <p>
    <span class="bold">COSMOSCOW.</span> Галерея Гридчинхолл, ЦВЗ Манеж, Москва
  </p>
</div>

<div class="group-data">
  <p class="year">2022</p>
  <div class="group-text">
    <p>
      <span class="bold">«Возвращение Дон Кихота».</span> Центр Вознесенского, Москва
    </p>
    <p>
      <span class="bold">«Курорт».</span> Дом писателей, Комарово, Санкт-Петербург
    </p>
    <p>
      <span class="bold">«Пассажиры».</span> Диалоги о ландшафте. Галерея Триумф. Казанский вокзал, Москва
    </p>
    <p>
      <span class="bold">«Охота на растворимую рыбу».</span> Зверевский центр современного искусства, Москва
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">2023</p>
  <div class="group-text">
    <p>
      Ярмарка современного искусства <span class="bold">АРТ МИР 2023</span>. Галерея Gridchinhall, Нижний Новгород
    </p>
    <p>
      Ярмарка графики <span class="bold">«Контур»</span>. Галерея InGallery, Нижний Новгород
    </p>
    <p>
      Фестиваль <span class="bold">«Курорт»</span>. Комарово, Санкт-Петербург
    </p>
    <p>
      Ярмарка современного искусства <span class="bold">Cosmoscow</span>. Галерея InGallery, Экспоцентр, Москва
    </p>
    <p>
      <span class="bold">«Охота на растворимую рыбу».</span> Зверевский центр современного искусства, Москва
    </p>
    <p>
      <span class="bold">«Открытки от художников».</span> Галерея Погодиной, Институт искусствознания, Москва
    </p>
  </div>
</div>

<div class="group-data">
  <p class="year">2024</p>
  <div class="group-text">
    <p>
      <span class="bold">«Планы на лето».</span> Галерея Ковчег, Москва
    </p>
    <p>
      <span class="bold">«Автопортрет 1900-2024».</span> In artibus foundation, Москва
    </p>
    <p>
      <span class="bold">«Три главы из жизни женщины».</span> Галерея Artstory, Москва
    </p>
    <p>
      <span class="bold">«Personal structures»</span> CCE foundation, Palazzo Bembo, 60я Венецианская биеннале
      современного искусства
    </p>
  </div>
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

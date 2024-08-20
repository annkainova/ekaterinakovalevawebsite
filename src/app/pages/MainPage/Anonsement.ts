import Localization from '../Localization/Localization';
import dataAnonsment from '../../../Data/dataAnonsment.json';
import dataAnonsmentEn from '../../../Data/dataAnonsmentEn.json';

interface EventLocation {
  link: string;
  linkText: string;
  locationText: string;
}

interface Event {
  class: string;
  active: string;
  imageSrc: string;
  imageAlt: string;
  eventType: string;
  eventName: string;
  eventDate: string;
  eventLocation: EventLocation;
}

interface EventsData {
  events: Event[];
}

export default class Anonsement {
  private container: HTMLElement;
  localization: Localization;
  selectedData: EventsData;

  constructor(container: HTMLElement) {
    this.localization = new Localization();
    this.selectedData = this.localization.language === 'ru' ? dataAnonsment : dataAnonsmentEn;

    this.container = container;
  }

  render() {
    const slider = document.createElement('div');
    slider.className = 'slider';

    this.selectedData.events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event', event.class, event.active);

      const eventImg = document.createElement('img');
      eventImg.setAttribute('src', event.imageSrc);
      eventImg.setAttribute('alt', event.imageAlt);

      const eventText = document.createElement('div');
      eventText.className = 'event__text';

      const eventType = document.createElement('p');
      eventType.className = 'event__type';
      eventType.textContent = event.eventType;

      const eventName = document.createElement('p');
      eventName.className = 'event__name';
      eventName.innerHTML = event.eventName;

      const eventInfo = document.createElement('div');
      eventInfo.className = 'event__info';

      const eventDate = document.createElement('p');
      eventDate.className = 'data';
      eventDate.textContent = event.eventDate;

      const eventLocation = document.createElement('p');
      eventLocation.className = 'location';
      eventLocation.textContent = event.eventLocation.locationText;

      const eventLocationLink = document.createElement('a');
      eventLocationLink.className = 'location__link';
      eventLocationLink.setAttribute('href', event.eventLocation.link);
      eventLocationLink.textContent = event.eventLocation.linkText;

      // eventLocation.textContent = `${eventLocationLink}${event.eventLocation.locationText}`;

      eventInfo.appendChild(eventDate);
      eventInfo.appendChild(eventLocationLink);
      eventInfo.appendChild(eventLocation);

      eventText.appendChild(eventType);
      eventText.appendChild(eventName);
      eventText.appendChild(eventInfo);

      eventElement.appendChild(eventImg);
      eventElement.appendChild(eventText);

      slider.appendChild(eventElement);
    });

    this.container.appendChild(slider);
  }
}

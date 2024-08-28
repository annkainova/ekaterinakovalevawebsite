// EventBlock.ts
import { EventProps } from '../../interfaces/Event';

export default class EventBlock {
  container: HTMLElement;
  data: EventProps;

  constructor(container: HTMLElement, data: EventProps) {
    this.container = container;
    this.data = data;
  }

  render() {
    const eventElement = this.data.eventLink
      ? document.createElement('a')
      : document.createElement('div');

    if (this.data.eventLink) {
      eventElement.setAttribute('href', this.data.eventLink);
      eventElement.classList.add('event-link');
    }

    eventElement.classList.add('event', this.data.class, this.data.active);

    const eventImg = document.createElement('img');
    eventImg.setAttribute('src', this.data.imageSrc);
    eventImg.setAttribute('alt', this.data.imageAlt);

    const eventText = document.createElement('div');
    eventText.className = 'event__text';

    const eventType = document.createElement('p');
    eventType.className = 'event__type';
    eventType.textContent = this.data.eventType;

    const eventName = document.createElement('p');
    eventName.className = 'event__name';
    eventName.innerHTML = this.data.eventName;

    const eventInfo = document.createElement('div');
    eventInfo.className = 'event__info';

    const eventDate = document.createElement('p');
    eventDate.className = 'data';
    eventDate.textContent = this.data.eventDate;

    const eventLocationLink = document.createElement('a');
    eventLocationLink.className = 'location__link';
    eventLocationLink.setAttribute('href', this.data.eventLocation.link);
    eventLocationLink.textContent = this.data.eventLocation.linkText;

    const eventLocation = document.createElement('p');
    eventLocation.className = 'location';
    eventLocation.textContent = this.data.eventLocation.locationText;

    eventInfo.appendChild(eventDate);
    eventInfo.appendChild(eventLocationLink);
    eventInfo.appendChild(eventLocation);

    eventText.appendChild(eventType);
    eventText.appendChild(eventName);
    eventText.appendChild(eventInfo);

    eventElement.appendChild(eventImg);
    eventElement.appendChild(eventText);

    this.container.appendChild(eventElement);
  }
}

import { CmsEvent, EventProps } from '../interfaces/Event';

export default function convertCmsEvents(
  cmsEvents: CmsEvent[],
  language: string,
): EventProps[] {
  return cmsEvents.map(event => {
    const tr = language === 'en' ? event.en : event.ru;
    return {
      class: 'event',
      active: 'active',
      imageSrc: event.imageSrc,
      imageAlt: tr.eventName,
      eventType: tr.eventType,
      eventName: tr.eventName,
      eventNameLink: event.eventLink || '',
      eventDate: tr.eventDate,
      eventLink: event.eventLink || '',
      eventLocation: {
        link: '',
        linkText: '',
        locationText: tr.locationText,
      },
    };
  });
}

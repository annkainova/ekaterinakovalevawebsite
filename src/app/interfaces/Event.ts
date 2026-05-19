export interface EventLocation {
  link: string;
  linkText: string;
  locationText: string;
}

export interface EventProps {
  class: string;
  active: string;
  imageSrc: string;
  imageAlt: string;
  eventType: string;
  eventName: string;
  eventNameLink?: string;
  eventDate: string;
  eventLink?: string;
  eventLocation: EventLocation;
}

export interface EventsData {
  events: EventProps[];
}

export interface CmsEventTranslation {
  eventType: string;
  eventName: string;
  eventDate: string;
  locationText: string;
}

export interface CmsEvent {
  imageSrc: string;
  eventLink?: string;
  ru: CmsEventTranslation;
  en: CmsEventTranslation;
}

export interface CmsEventsData {
  events: CmsEvent[];
}

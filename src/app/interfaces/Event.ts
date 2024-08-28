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
  eventDate: string;
  eventLink?: string;
  eventLocation: EventLocation;
}

export interface EventsData {
  events: EventProps[];
}

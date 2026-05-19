import Localization from '../../pages/Localization/Localization';
import { CmsEventsData, EventsData } from '../../interfaces/Event';
import EventBlock from '../EventBlock/EventBlock';
import convertCmsEvents from '../../utils/cmsConverter';

import dataAnonsment from '../../../Data/dataAnonsment.json';
import dataAnonsmentEn from '../../../Data/dataAnonsmentEn.json';
import cmsEvents from '../../../Data/cmsEvents.json';

export default class Anonsement {
  private container: HTMLElement;
  localization: Localization;
  selectedData: EventsData;

  constructor(container: HTMLElement) {
    this.localization = new Localization();
    const lang = this.localization.language === 'ru' ? 'ru' : 'en';
    const baseData = lang === 'ru' ? dataAnonsment : dataAnonsmentEn;
    const cmsConverted = convertCmsEvents((cmsEvents as CmsEventsData).events, lang);
    this.selectedData = { events: [...cmsConverted, ...baseData.events] };
    this.container = container;
  }

  render() {
    const slider = document.createElement('div');
    slider.className = 'slider';

    this.selectedData.events.forEach(event => {
      const eventBlock = new EventBlock(slider, event);
      eventBlock.render();
    });

    this.container.appendChild(slider);
  }
}

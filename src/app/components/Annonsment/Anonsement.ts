import Localization from '../../pages/Localization/Localization';
import { EventsData } from '../../interfaces/Event';
import EventBlock from '../EventBlock/EventBlock';

import dataAnonsment from '../../../Data/dataAnonsment.json';
import dataAnonsmentEn from '../../../Data/dataAnonsmentEn.json';

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
      const eventBlock = new EventBlock(slider, event);
      eventBlock.render();
    });

    this.container.appendChild(slider);
  }
}

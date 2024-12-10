import { PRICE_INFO } from "../constants/Menu";

class Event {
  #date;
  #menus;
  #totalPrice;

  constructor(date, menus) {
    this.#date = date;
    this.#menus = menus;
    this.#totalPrice = 0;
  }

  calculateEvent() {
    for (let [menu, count] of this.#menus) {
      this.#totalPrice += PRICE_INFO[menu] * count;
    }

    if (this.#totalPrice < 10000) return;
  }

  getEventInfo() {
    return {
      totalPrice: this.#totalPrice,
      benefits: [],
    };
  }
}

export default Event;

import { PRICE_INFO } from "../constants/Menu";

class Event {
  #date;
  #menus;
  #totalPrice;
  #benefits;

  constructor(date, menus) {
    this.#date = date;
    this.#menus = menus;
    this.#totalPrice = 0;
    this.#benefits = {};
  }

  calculateEvent() {
    for (let [menu, count] of this.#menus) {
      this.#totalPrice += PRICE_INFO[menu] * count;
    }

    if (this.#totalPrice < 10000) return;

    this.#benefits["christmas"] = this.#applayChristmasEvent();
  }

  #applayChristmasEvent() {
    if (this.#date > 25) return 0;

    return 1000 + (this.#date - 1) * 100;
  }

  getEventInfo() {
    return {
      totalPrice: this.#totalPrice,
      benefits: this.#benefits,
    };
  }
}

export default Event;

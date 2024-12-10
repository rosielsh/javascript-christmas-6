import { MENU, PRICE_INFO } from "../constants/Menu.js";

class Event {
  static SPECIAL_DATE = [3, 10, 17, 24, 25, 31];

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

    if (this.#isWeekDay()) {
      this.#benefits["weekday"] = this.#applyWeekDayEvent();
    } else {
      this.#benefits["weekend"] = this.#applyWeekEndEvent();
    }

    this.#benefits["special"] = this.#applySpecialEvent();
    this.#benefits["gift"] = this.#applyGiftEvent();
  }

  #applayChristmasEvent() {
    if (this.#date > 25) return 0;

    return 1000 + (this.#date - 1) * 100;
  }

  #applyWeekDayEvent() {
    const desert = Object.keys(MENU.desert);

    return this.#menus.reduce((acc, cur) => {
      if (desert.includes(cur[0])) {
        return acc + 2023 * cur[1];
      }
      return acc;
    }, 0);
  }

  #applyWeekEndEvent() {
    const main = Object.keys(MENU.main);

    return this.#menus.reduce((acc, cur) => {
      if (main.includes(cur[0])) {
        return acc + 2023 * cur[1];
      }
      return acc;
    }, 0);
  }

  #applySpecialEvent() {
    if (Event.SPECIAL_DATE.includes(this.#date)) return 1000;
  }

  #applyGiftEvent() {
    if (this.#totalPrice >= 120000) return 25000;
  }

  #isWeekDay() {
    return this.#date % 7 > 2;
  }

  #calculateTotalBenefit() {
    let totalBenefit = 0;

    for (let price of Object.values(this.#benefits)) {
      totalBenefit + price;
    }

    return totalBenefit;
  }

  getEventInfo() {
    const totalBenefit = this.#calculateTotalBenefit();

    return {
      totalPrice: this.#totalPrice,
      benefits: this.#benefits,
      totalBenefit: totalBenefit,
      finalPay: this.#totalPrice - totalBenefit,
    };
  }
}

export default Event;

import { MENU } from "../constants/Menu.js";
import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class OrderValidator {
  static checkDate(date) {
    this.#validateDateType(date);
    this.#validateDateRange(date);
  }

  static checkMenu(menus) {
    this.#validateMenuFormat(menus);
    this.#validateMenuDuplicate(menus);
    this.#validateMenuCount(menus);
    this.#validateTotalMenuCount(menus);
    this.#validateNotOnlyBeberage(menus);
    this.#validateNotExistMenu(menus);
  }

  static #validateDateType(date) {
    if (Validator.isNotNumber(date)) {
      generateError("유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  }

  static #validateDateRange(date) {
    if (date < 1 || date > 31) {
      generateError("유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  }

  static #validateMenuFormat(menus) {
    if (menus.some((info) => info.length < 2)) {
      generateError("유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  static #validateMenuDuplicate(menus) {
    const menuArr = [];

    for (let [menu, _] of menus) {
      menuArr.push(menu);
    }

    const menuSet = new Set(menuArr);

    if (menuArr.length !== menuSet.size) {
      generateError("유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  static #validateMenuCount(menus) {
    if (menus.some((info) => Validator.isNotNumber(info[1]) || info[1] < 1)) {
      generateError("유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  static #validateTotalMenuCount(menus) {
    const sum = menus.reduce((acc, cur) => acc + cur[1], 0);

    if (sum > 20) {
      generateError("주문량의 총 개수는 20개까지 가능합니다.");
    }
  }

  static #validateNotOnlyBeberage(menus) {
    let beverageCount = 0;
    const beverages = Object.keys(MENU.beverage);

    for (let [menu, _] of menus) {
      if (beverages.includes(menu)) {
        beverageCount++;
      }
    }

    if (beverageCount === menus.length) {
      generateError("음료만 주문할 수 없습니다.");
    }
  }

  static #validateNotExistMenu(menus) {
    const menusArr = [];

    for (let key of Object.keys(MENU)) {
      menusArr.push(...Object.keys(MENU[`${key}`]));
    }

    for (let [menu, _] of menus) {
      if (!menusArr.includes(menu)) {
        generateError("존재하지 않는 메뉴입니다.");
      }
    }
  }
}

export default OrderValidator;

import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class OrderValidator {
  static checkDate(date) {
    this.#validateDateType(date);
    this.#validateDateRange(date);
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
}

export default OrderValidator;

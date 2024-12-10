class Validator {
  // 숫자가 아닌지 확인
  static isNotNumber(value) {
    if (Array.isArray(value) || value === "" || value === null) {
      return true;
    }

    return Number.isNaN(Number(value));
  }

  // 유효한 숫자인지 확인
  static isInvalidNumber(value) {
    return !Number.isFinite(value);
  }

  // 문자가 아닌지 확인
  static isNotString(value) {
    return typeof value !== "string";
  }

  // 공백, undefined, null 인지 확인
  static isEmpty(value) {
    return value === null || value === undefined || String(value).trim() === "";
  }

  // 중복된 숫자가 있는지 확인
  static hasUniqueNumber(values) {
    const set = new Set(values);
    return values.length !== set.size;
  }
}

export default Validator;

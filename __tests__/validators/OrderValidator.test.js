import OrderValidator from "../../src/validators/OrderValidator.js";

describe("OrderValidator 클래스 테스트", () => {
  describe("식당 방문 날짜 유효성 검사", () => {
    test("식당 방문 날짜는 숫자로 입력할 수 있다", () => {
      const dates = [undefined, NaN, null, "string"];

      dates.forEach((date) => {
        expect(() => OrderValidator.checkDate(date)).toThrow("[ERROR]");
      });
    });

    test("식당 방문 날짜는 1~31 사이의 숫자로 입력할 수 있다", () => {
      const dates = [0, 32, Infinity];

      dates.forEach((date) => {
        expect(() => OrderValidator.checkDate(date)).toThrow("[ERROR]");
      });
    });
  });
});

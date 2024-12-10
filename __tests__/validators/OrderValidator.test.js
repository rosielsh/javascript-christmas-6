import OrderValidator from "../../src/validators/OrderValidator.js";

describe("OrderValidator 클래스 테스트", () => {
  describe("식당 방문 날짜 유효성 검사", () => {
    test("식당 방문 날짜가 숫자가 아니면 에러가 발생한다", () => {
      const dates = [undefined, NaN, null, "string"];

      dates.forEach((date) => {
        expect(() => OrderValidator.checkDate(date)).toThrow("[ERROR]");
      });
    });

    test("식당 방문 날짜는 1~31 사이의 숫자가 아니면 에러가 발생한다", () => {
      const dates = [0, 32, Infinity];

      dates.forEach((date) => {
        expect(() => OrderValidator.checkDate(date)).toThrow("[ERROR]");
      });
    });
  });

  describe("주문할 메뉴와 개수 유효성 검사", () => {
    test("주문할 메뉴가 메뉴판에 없으면 에러가 발생한다", () => {
      const menus = [["짜파게티", 1]];

      expect(() => OrderValidator.checkMenu(menus)).toThrow("[ERROR]");
    });

    test("총 메뉴의 개수가 20개가 넘으면 에러가 발생한다", () => {
      const menus = [
        ["양송이수프", 10],
        ["티본스테이크", 12],
      ];

      expect(() => OrderValidator.checkMenu(menus)).toThrow("[ERROR]");
    });

    test("음료만 주문하면 에러가 발생한다", () => {
      const menus = [["제로콜라", 10]];

      expect(() => OrderValidator.checkMenu(menus)).toThrow("[ERROR]");
    });

    test("메뉴의 개수는 1이상의 숫자가 아니면 에러가 발생한다", () => {
      const menus = [["티본스테이크", 0]];

      expect(() => OrderValidator.checkMenu(menus)).toThrow("[ERROR]");
    });

    test("메뉴 형식이 예시와 다른 경우 에러가 발생한다", () => {
      const menus = [["티본스테이크.1"]];

      expect(() => OrderValidator.checkMenu(menus)).toThrow("[ERROR]");
    });

    test("중복 메뉴를 입력한 경우 에러가 발생한다", () => {
      const menus = [
        ["티본스테이크", 5],
        ["티본스테이크", 5],
      ];

      expect(() => OrderValidator.checkMenu(menus)).toThrow("[ERROR]");
    });
  });
});

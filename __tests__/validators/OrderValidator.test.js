describe("OrderValidator 클래스 테스트", () => {
  describe("식당 방문 날짜 유효성 검사", () => {
    test("식당 방문 날짜는 1~31 사이의 숫자로 입력할 수 있다", () => {
      const dates = [undefined, NaN, null, "1", "a", 0, 32];

      dates.forEach((date) => {
        expect(() => OrderValidator.checkDate(date)).toThrow("[ERROR]");
      });
    });
  });
});

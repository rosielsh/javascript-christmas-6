describe("Event 클래스 테스트", () => {
  test("총 주문 금액이 만원 미만이면 이벤트를 적용할 수 없다.", () => {
    const date = 3;
    const menus = [["제로콜라", 1]];
    const expectedPrice = 3000;

    const event = new Event(date, menus);
    const eventInfo = event.getEventInfo();

    expect(eventInfo.totalPrice).toEqual(expectedPrice);
    expect(eventInfo.benefits.length).toEqual(0);
  });
});

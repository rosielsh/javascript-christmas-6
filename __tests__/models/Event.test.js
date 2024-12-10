import Event from "../../src/models/Event.js";

describe("Event 클래스 테스트", () => {
  test("총 주문 금액이 만원 미만이면 이벤트를 적용할 수 없다.", () => {
    const date = 3;
    const menus = [["제로콜라", 1]];
    const expectedPrice = 3000;

    const event = new Event(date, menus);
    event.calculateEvent();

    const eventInfo = event.getEventInfo();

    expect(eventInfo.totalPrice).toEqual(expectedPrice);
    expect(Object.keys(eventInfo.benefits).length).toEqual(0);
  });

  test("크리스마스 디데이 할인을 적용한다", () => {
    const date = 11;
    const menus = [["양송이수프", 2]];
    const expectedPrice = 12000;

    const event = new Event(date, menus);
    event.calculateEvent();

    const eventInfo = event.getEventInfo();

    expect(eventInfo.totalPrice).toEqual(expectedPrice);
    expect(eventInfo.benefits["christmas"]).toEqual(2000);
  });

  test("평일 할인을 적용한다", () => {
    const date = 4;
    const menus = [["초코케이크", 2]];
    const expectedPrice = 30000;
    const expectedSalePrice = 4046;

    const event = new Event(date, menus);
    event.calculateEvent();

    const eventInfo = event.getEventInfo();

    expect(eventInfo.totalPrice).toEqual(expectedPrice);
    expect(eventInfo.benefits["weekday"]).toEqual(expectedSalePrice);
  });

  test("주말 할인을 적용한다", () => {
    const date = 1;
    const menus = [["티본스테이크", 2]];
    const expectedPrice = 110000;
    const expectedSalePrice = 4046;

    const event = new Event(date, menus);
    event.calculateEvent();

    const eventInfo = event.getEventInfo();

    expect(eventInfo.totalPrice).toEqual(expectedPrice);
    expect(eventInfo.benefits["weekend"]).toEqual(expectedSalePrice);
  });

  test("특별 할인을 적용한다", () => {
    const date = 3;
    const menus = [["티본스테이크", 2]];
    const expectedPrice = 110000;
    const expectedSalePrice = 1000;

    const event = new Event(date, menus);
    event.calculateEvent();

    const eventInfo = event.getEventInfo();

    expect(eventInfo.totalPrice).toEqual(expectedPrice);
    expect(eventInfo.benefits["special"]).toEqual(expectedSalePrice);
  });

  test("증정 이벤트를 적용한다", () => {
    const date = 3;
    const menus = [["티본스테이크", 4]];
    const expectedPrice = 220000;
    const expectedSalePrice = 25000;

    const event = new Event(date, menus);
    event.calculateEvent();

    const eventInfo = event.getEventInfo();

    expect(eventInfo.totalPrice).toEqual(expectedPrice);
    expect(eventInfo.benefits["gift"]).toEqual(expectedSalePrice);
  });
});

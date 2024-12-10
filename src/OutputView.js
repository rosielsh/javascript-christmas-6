import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printStart() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n");
  },

  printResult(menus, eventInfo) {
    Console.print("12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n");

    const logs = [];
    logs.push("<주문 메뉴>");

    for (let [menu, count] of menus) {
      logs.push(`${menu} ${count}개`);
    }

    logs.push("");

    logs.push("<할인 전 총주문 금액>");
    logs.push(`${eventInfo.totalPrice}원`);

    logs.push("");

    logs.push("<증정 메뉴>");
    logs.push(eventInfo.benefits["gift"] ? "샴페인 1개" : "없음");

    logs.push("");

    logs.push("<혜택 내역>");

    let benefitCount = 0;

    for (let [key, price] of Object.entries(eventInfo.benefits)) {
      switch (key) {
        case "christmas": {
          logs.push(`크리스마스 디데이 할인: -${price}원`);
          benefitCount++;
          break;
        }
        case "weekday": {
          logs.push(`평일 할인: -${price}원`);
          benefitCount++;
          break;
        }
        case "weekend": {
          logs.push(`주말 할인: -${price}원`);
          benefitCount++;
          break;
        }
        case "special": {
          logs.push(`특별 할인: -${price}원`);
          benefitCount++;
          break;
        }
        case "gift": {
          logs.push(`증정 이벤트: -${price}원`);
          benefitCount++;
          break;
        }
      }
    }

    if (!benefitCount) logs.push("없음");

    logs.push("");

    logs.push("<총혜택 금액>");
    logs.push(`${eventInfo.totalBenefit}원`);

    logs.push("");

    logs.push("<할인 후 예상 결제 금액>");
    logs.push(`${eventInfo.finalPay}원`);

    logs.push("");

    logs.push("<12월 이벤트 배지>");
    logs.push(eventInfo["badge"] || "없음");

    Console.print(logs.join("\n"));
  },
};

export default OutputView;

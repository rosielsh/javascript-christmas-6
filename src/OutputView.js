import { Console } from "@woowacourse/mission-utils";

export default OutputView = {
  printError(message) {
    Console.print(message);
    printEmptyLine();
  },

  printStart() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n");
  },

  printResult() {
    Console.print("12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n\n");
    Console.print("<주문 메뉴>\n");

    Console.print("<할인 전 총주문 금액>\n");

    Console.print("<증정 메뉴>\n");

    Console.print("<혜택 내역>\n");

    Console.print("<총혜택 금액>\n");

    Console.print("<할인 후 예상 결제 금액>\n");

    Console.print("<12월 이벤트 배지>\n");
  },

  printEmptyLine() {
    Console.print("");
  },
};

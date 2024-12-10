import Converter from "../converter/Converter.js";
import Event from "../models/Event.js";
import InputHandler from "../utils/inputHandler.js";
import OrderValidator from "../validators/OrderValidator.js";

class OrderController {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async order() {
    this.#outputView.printStart();

    const date = await InputHandler.repeatUntilValidInput(() => this.#getDate(), this.#outputView);
    const menus = await InputHandler.repeatUntilValidInput(() => this.#getMenus(), this.#outputView);

    const event = new Event(date, menus);
    event.calculateEvent();

    const eventInfo = event.getEventInfo();

    this.#outputView.printResult(menus, eventInfo);
  }

  async #getDate() {
    const date = await this.#inputView.readDate();
    const convertedMenu = Converter.convertDateToNumber(date);
    OrderValidator.checkDate(convertedMenu);
    return convertedMenu;
  }

  async #getMenus() {
    const menus = await this.#inputView.readMenu();
    const convertedMenus = Converter.convertMenuToArr(menus);
    OrderValidator.checkMenu(convertedMenus);
    return convertedMenus;
  }
}

export default OrderController;

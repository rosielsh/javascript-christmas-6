import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import OrderController from "./controller/OrderController.js";

class App {
  async run() {
    const views = {
      inputView: InputView,
      outputView: OutputView,
    };

    await new OrderController(views).order();
  }
}

export default App;

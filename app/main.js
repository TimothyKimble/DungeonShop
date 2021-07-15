import ValuesController from "./Controllers/ValuesController.js";
import ShopsController from "./Controllers/ShopsController.js";

class App {
  valuesController = new ValuesController();

  shopsController = new ShopsController();


}

window["app"] = new App();

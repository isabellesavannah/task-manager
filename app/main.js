import ValuesController from "./Controllers/ValuesController.js";
import TitleController from "./Controllers/TitleController.js"

class App {
  valuesController = new ValuesController();
  titleController = new TitleController()
}

window["app"] = new App();


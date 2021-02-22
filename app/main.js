import ValuesController from "./Controllers/ValuesController.js";
import TitleController from "./Controllers/TitleController.js";
import TodoController from "./Controllers/todoController.js"

class App {
  valuesController = new ValuesController();
  titleController = new TitleController();
  todoController = new TodoController();
}

window["app"] = new App();


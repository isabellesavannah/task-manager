import Value from "./Models/Value.js"
import Tasks from "./Models/TitleModel.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Todo from "./Models/todoModel.js"
// import todoController from "./Controllers/todoController.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  /** @type {Tasks[]} */  
  tasks = []
  /** @type {Todo[]}*/
  todo = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

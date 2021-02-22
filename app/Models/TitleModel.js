import {generateId} from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"
export default class Tasktitle{
    constructor({title, id = generateId()}) {
        this.title = title
        this.id = id
    }
get taskTemplate() {
    return /*html*/`
            <div class="col-4 border rounded shadow-lg">
                <h1>${this.title}<button class="text-danger close mt-3"
                onclick="app.pizzaController.delete('${this.id}')"><span>&times;</span></button> </h1>
                <h5>Task Title</h5>
                <form onsubmit="app.TodoController.create(event, '${this.id}')">
                    <div class="form-group">
                        <input type="text" name="title" placeholder="Enter your to-do...">
                        <button type="submit">Add To-do</button>
                        <div class="row">
                        </div>
                    </div>
                </form>
            </div>
    `
}
// get Todo() {
//     let template = ''
//     let todo = ProxyState.todo.filter(t => t.pizzaId == this.id)
//     todo.forEach(t => template += t.Template)
//     return templatez
}
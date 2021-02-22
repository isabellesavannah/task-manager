import {generateId} from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"
export default class Tasktitle{
    constructor({title, id = generateId()}) {
        this.title = title
        this.id = id
    }
get taskTemplate() {
    let template = /*html*/`
            <div class="col-4 border rounded shadow-lg">
                <h1>${this.title}<button class="text-danger close mt-3"
                onclick="app.titleController.delete('${this.id}')"><span>&times;</span></button> </h1>
                <h5>Task Title</h5>
                <form onsubmit="app.todoController.create(event, '${this.id}')">
                    <div class="form-group">
                        <input type="text" name="title" minlength="3" required maxlength="15" placeholder="Enter your to-do...">
                        <button type="submit">Add To-do</button>
                        <div class="row" id = "todos-${this.id}">`

                        let todo = ProxyState.todo.filter(t => t.taskId == this.id)
                        todo.forEach(t => template += t.Template)

                        template += `</div>
                    </div>
                </form>
            </div>
    `
    return template
}
get Todo() {
    console.log("drawing todo from model")
    let template = ''
    let todo = ProxyState.todo.filter(t => t.taskId == this.id)
    todo.forEach(t => template += t.Template)
    return template
}
}
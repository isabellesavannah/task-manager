import {generateId} from "../Utils/GenerateId.js"

export default class Todo {
    constructor({ title, id = generateId(), taskId, quantity, completed })
    {
        this.title = title
        this.id = id
        this.taskId = taskId
        this.quantity = quantity
        this.completed = completed || false
    }
    get Template(){
        return /* html */`
        <div class="col-12">
            <h1 class="${this.title.includes('extra') ? 'text-danger': ''}" >${this.title}<button type="button" class="text-danger close mt-3"
                    onclick="app.todoController.delete('${this.id}')"><span>&times;</span></button> </h1>
                    <input type="checkbox" id="box" onclick="app.titleController.checked('${this.completed}')">
        </div>
        `
    }
}

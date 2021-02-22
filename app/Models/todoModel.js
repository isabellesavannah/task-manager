import {generateId} from "../Utils/GenerateId.js"

export default class Todo {
    constructor({ title, id = generateId(), titleId })
    {
        this.title = title
        this.id = id
        this.titleId = titleId
    }
    get Template(){
        return /* html */`
        <div class="col-12">
            <h1 class="${this.title.includes('extra') ? 'text-danger': ''}" >${this.title}<button type="button" class="text-danger close mt-3"
                    onclick="app.toppingsController.delete('${this.id}')"><span>&times;</span></button> </h1>
        </div>
        `
    }
}

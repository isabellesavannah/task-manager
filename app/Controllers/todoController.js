import {todoService} from "../Services/todoServices.js"
import {ProxyState} from "../AppState.js"

export default class TodoController{
    constructor(){

    }
    create(event, titleId){
        event.preventDefault()
        let form = event.target
        let rawTodo = {
            title: form.title.value,
            taskId: titleId
        }
        todoService.create(rawTodo)
    }
    delete(todoId) {
        //todoService.delete(todoId)
        if(confirm("do you want to delete?")){
            todoService.delete(todoId)
        }
    }
    checked(todoId){
        todoService.checked(todoId)
    }
    
}
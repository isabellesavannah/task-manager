import {ProxyState} from "../AppState.js"
import Todo from "../Models/todoModel.js"
import { saveState} from "../Utils/LocalStorage.js"
class TodoServices{
    constructor(){
        ProxyState.on('todo', saveState)
    }
    create(rawTodo){
        ProxyState.todo = [new Todo(rawTodo),...ProxyState.todo]
        console.log(ProxyState.todo)
    }
    delete(todoId){
        let temp = ProxyState.todo
        let todoIndex = temp.findIndex(t => t.id == todoId)
        temp.splice(todoIndex,1)
        ProxyState.todo = ProxyState.todo.filter(t => t.id != todoId)
        //ProxyState.todo = ProxyState.todo.filter (t=> t.id ! = todoId)
    }
    checked(elem){
        ProxyState.todo = ProxyState.todo.filter(t=> t.id != todoId)
    }
}
export const todoService = new TodoServices()
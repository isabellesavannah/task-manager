import {ProxyState} from "../AppState.js"
import Todo from "../Models/todoModel.js"
class TodoServices{
    create(rawTodo){
        ProxyState.todo = [new Todo(rawTodo),...ProxyState.todo]
    }
    delete(todoId){
        ProxyState.todo = ProxyState.todo.filter (t=> t.id  = todoId)
    }
}
export const todoService = new TodoServices()
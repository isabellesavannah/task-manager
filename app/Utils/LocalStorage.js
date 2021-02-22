import {ProxyState} from "../AppState.js"
import Tasks from "../Models/TitleModel.js"
import Todo from "../Models/todoModel.js"
export function saveState(){
    localStorage.setItem('taskmanager', JSON.stringify({
        tasks: ProxyState.tasks,
        todo: ProxyState.todo
    }))
}
export function loadState(){
    let data = JSON.parse(localStorage.getItem('taskmanager'))
    if (data){
        ProxyState.tasks = data.tasks.map(coldTask => new Tasks(coldTask))
        ProxyState.todo = data.todo.map(t => new Todo(t))
    }
}
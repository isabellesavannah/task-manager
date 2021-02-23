import {ProxyState} from "../AppState.js"
import Tasks from "../Models/TitleModel.js"
import {saveState} from "../Utils/LocalStorage.js"
class TitleServices{
    constructor(){
        ProxyState.on('tasks', saveState)
    }
    create(rawTask){
        ProxyState.tasks = [new Tasks(rawTask), ...ProxyState.tasks]
    }
    delete(taskId){
        ProxyState.tasks = ProxyState.tasks.filter (p=> p.id != taskId)
        ProxyState.todo = ProxyState.todo.filter(t=> t.id != taskId)
    }
    
    
    
}
export const titleServices = new TitleServices()
import {ProxyState} from "../AppState.js"
import Tasks from "../Models/TitleModel.js"
class TitleServices{
    create(rawTask){
        ProxyState.tasks = [new Tasks(rawTask), ...ProxyState.tasks]
    }
    delete(titleId){
        ProxyState.tasks = ProxyState.tasks.filter (p=> p.id != titleId)
        ProxyState.todo = ProxyState.todo.filter(t=> t.id != titleId)

    }
}
export const titleServices = new TitleServices()
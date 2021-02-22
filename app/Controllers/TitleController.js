import {titleServices} from "../Services/TitleServices.js";
import {ProxyState} from "../AppState.js"

function _draw(){
    let taskTitleElem = document.getElementById("tasks")
    let taskTemplate = ""
    ProxyState.tasks.forEach(task => taskTemplate += task.taskTemplate)
    taskTitleElem.innerHTML = taskTemplate
    //console.log("hello from controller")
}

export default class TitleController{
    constructor(){
        ProxyState.on("tasks", _draw)
        ProxyState.on("todo",_draw)
    }
    create(event){
        event.preventDefault()
        let form = event.target
        let rawTask = {
            title: form.title.value
        }
        titleServices.create(rawTask)
    }
    delete(taskId){
        //titleServices.delete(taskId)
        //confirm()
        //if( == true)
        if(confirm("do you want to delete?")){
            titleServices.delete(taskId)
        }
    }
}
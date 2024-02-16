export default class controlDom{
  static initEventListeners(){
    const projectModalBG = document.getElementById('projectModalBackground')
    const taskModalBG = document.getElementById('taskModalBackground')
    const createProjectButton = document.getElementById('createProjectBtn')
    const createTaskButton = document.getElementById('createTaskBtn')

    window.onclick = function(event) {
      if(event.target == projectModalBG || event.target == taskModalBG){
        event.target.style.display = "none"
      }
    }
  }
}
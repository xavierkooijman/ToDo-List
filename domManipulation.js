import Project from "./project"
import Storage from "./storage"

export const controlDom = (()=>{

  //get elements
  const createProjectButton = document.getElementById('createProjectBtn')
  const createTaskButton = document.getElementById('createTaskBtn')
  const projectModalBG = document.getElementById('projectModalBackground')
  const taskModalBG = document.getElementById('taskModalBackground')
  const addProjectForm = document.getElementById('projectForm')
  const projectTitle = document.getElementById('projectTitle')

  //add event listeners
  const initDomController = () =>{
    createProjectButton.addEventListener('click', () => openModal(projectModalBG))
    createTaskButton.addEventListener('click', () => openModal(taskModalBG))
    window.addEventListener('click', checkToCloseModal)

    addProjectForm.addEventListener('submit', (event) =>{
      event.preventDefault()
      addProject()
      closeModal(projectModalBG)
      addProjectForm.reset()
    })

  }


  //functions

  const openModal = (modal) =>{
    modal.style.display = "flex"
  }

  const closeModal = (modal) =>{
    modal.style.display = "none"
  }

  const checkToCloseModal = (event) =>{
    if(event.target == projectModalBG || event.target == taskModalBG){
      closeModal(event.target)
    }
  }

  const addProject = () =>{
    console.log(projectTitle.value)
  }

  return{initDomController}
})()

/*export default class controlDom{
  static initMainEventListeners(){

    const createProjectButton = document.getElementById('createProjectBtn')
    const createTaskButton = document.getElementById('createTaskBtn')
    const projectModalBG = document.getElementById('projectModalBackground')
    const taskModalBG = document.getElementById('taskModalBackground')
    const addProjectForm = document.getElementById('projectForm')

    createProjectButton.addEventListener('click', () => controlDom.openModal(projectModalBG))
    createTaskButton.addEventListener('click', () => controlDom.openModal(taskModalBG))

    addProjectForm.addEventListener('submit', (event) => {
      event.preventDefault()
      controlDom.createProject()
      addProjectForm.reset()
    })

    window.addEventListener('click', controlDom.closeModal)
  }

  static openModal(modal){
    modal.style.display = "flex"
  }

  static closeModal(event){
    const projectModalBG = document.getElementById('projectModalBackground')
    const taskModalBG = document.getElementById('taskModalBackground')
    if(event.target == projectModalBG || event.target == taskModalBG){
      event.target.style.display = "none"
    }
  }

  static createProject(){
    const projectTitle = document.getElementById('projectTitle').value
    
  }
  
}*/
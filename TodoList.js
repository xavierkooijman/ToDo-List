import Project from "./project"

export default class TodoList{
  constructor(){
    this.projects = []
    this.projects.push(new Project('All'))
  }
}
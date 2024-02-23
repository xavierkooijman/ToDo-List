import TodoList from "./TodoList"
import TodoList from "./TodoList"

export default class Storage{
  static saveTodoList(data){
    localStorage.setItem('TodoList', JSON.stringify(data))
  }

  static getTodoList(){
    const TodoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem('TodoList')))
    return TodoList
  }

  static addProject(title){
    const TodoList = Storage.getTodoList()
    
  }
}
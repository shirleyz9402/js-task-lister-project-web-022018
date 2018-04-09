let taskId = 0
class Task {
  // your code here
  constructor(list, description, priority){
    this.list = list
    this.description = description
    this.priority = priority
    this.id = taskId++
    this.listId = list.id
  }
  render(){
    return (
      `<li>
        Task: ${this.description}
        <button data-listid="${this.list.id}" data-id="${this.id}" data-task-name="${this.description}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${this.priority}
      </li>`
  )}


}

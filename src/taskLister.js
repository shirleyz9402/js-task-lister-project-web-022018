class TaskLister {
  constructor(){
    this.lists = []
    this.activeList = null
    this.currentDescription = null
    this.currentPriority = null
  }
  // your solution here
  render() {
    return (`
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
      ${this.listOptions()}
      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">
    </form>
  <div id="lists">
  ${this.renderLists()}
  </div>`);
}
  renderLists(){
  return this.lists.map(list => list.render()).join("")
  }
  listOptions(){
    return this.lists.map( list => `<option value=${list.id}>${list.title}</option>`)
  }
  deleteList(e){
    let list = this.lists.find(list => e.target.dataset.id == list.id)
    this.lists = this.lists.filter(newList => newList.id != list.id)
  }
  deleteTask(e){
    let list = this.lists.find(list => e.target.dataset.listid == list.id)
    let task = list.tasks.find(task => e.target.dataset.id == task.id)
    list.tasks = list.tasks.filter(newTask => newTask.id != task.id)
  }
  addList(event){

  }
  addTask(event){

  }
}

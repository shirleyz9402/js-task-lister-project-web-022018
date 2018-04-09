let listId = 0
class List {
  // your code here
  constructor(title){
    this.title = title
    this.tasks = []
    this.id = listId++
  }
  render(){
    return `
      <div id="${this.id}">
      <h2> ${this.title}
        <button data-id="${this.id}" class="delete-list">
          X
        </button>
      </h2>
      <ul>
      ${this.renderTasks()}
      </ul>
      </div>`
  }
  renderTasks(){
    return this.tasks.map(task => task.render()).join(" ")
  }
}

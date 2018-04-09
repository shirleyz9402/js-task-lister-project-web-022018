document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const app = new TaskLister();
  const listForm = $('#create-list-form')[0]
  listForm.addEventListener('submit', createList)
  const taskForm = $('#app-content')[0]
  taskForm.addEventListener('submit', createTask)
  listDiv.addEventListener('click', e => {
    if (e.target.className === "delete-list"){
      let list = app.lists.find(list => e.target.dataset.id == list.id)
      app.lists = app.lists.filter(newList => newList.id != list.id)
      listDiv.innerHTML = app.render()
    }
    else if (e.target.className === "delete-task"){
      let list = app.lists.find(list => e.target.dataset.listid == list.id)
      let task = list.tasks.find(task => e.target.dataset.id == task.id)
      list.tasks = list.tasks.filter(newTask => newTask.id != task.id)
      listDiv.innerHTML = app.render()
    }
  })

  function createList(event){
    event.preventDefault()
    // debugger
    let list = new List($('#new-list-title')[0].value)
    app.lists.push(list)
    // let listItem = document.createElement('div')
    listDiv.innerHTML = app.render()
    // listItem.innerHTML = list.render()
    // listDiv.appendChild(listItem)
  }
  function createTask(event){
    event.preventDefault()
    app.activeList = app.lists.find(list => list.id == $('#parent-list')[0].value)
    let list = app.activeList
    let task = new Task(list, $('#new-task-description')[0].value, $('#new-task-priority')[0].value)
    app.currentDescription = task.description
    app.currentPriority = task.priority
    list.tasks.push(task)
    list.render()
    listDiv.innerHTML = app.render()
    // let taskElement = document.createElement('li')
    // taskElement.innerHTML = task.render()
    // let listElement = $(`#${list.id}`)[0]
    // listElement.appendChild(taskElement)
  }
});

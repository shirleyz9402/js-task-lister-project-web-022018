document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const app = new TaskLister();
  const listForm = $('#create-list-form')[0]
  listForm.addEventListener('submit',createList)
  const taskForm = $('#app-content')[0]
  taskForm.addEventListener('submit', createTask)
  listDiv.addEventListener('click', e => {
    if (e.target.className === "delete-list"){
      app.deleteList(e)
      listDiv.innerHTML = app.render()
    }
    else if (e.target.className === "delete-task"){
      app.deleteTask(e)
      listDiv.innerHTML = app.render()
    }
  })

  function createList(event){
    event.preventDefault()
    let list = new List($('#new-list-title')[0].value)
    app.lists.push(list)
    listDiv.innerHTML = app.render()
    event.target.reset()
  }
  function createTask(event){
    event.preventDefault()
    let list = app.lists.find(list => list.id == $('#parent-list')[0].value)
    let task = new Task(list, $('#new-task-description')[0].value, $('#new-task-priority')[0].value)
    list.tasks.push(task)
    listDiv.innerHTML = app.render()
    event.target.reset()
  }
});

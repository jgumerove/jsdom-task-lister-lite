  
const form = document.getElementById("create-task-form")
form.addEventListener("submit", handleSubmit)
const tasks = document.getElementById("tasks")

// tasks is in global scope 

//handleSubmit is used instead of passing in anonymous function 

function handleSubmit(e) {
  e.preventDefault()
  const description = e.target["new-task-description"].value
  addTask(description)
  e.target.reset()
  //debugger
}

function addTask(description){
  const task = document.createElement("li")
  task.innerText = description 
  const button = document.createElement("button")
  button.innerText = "delete"
  button.addEventListener("click", function() {
    task.remove()
  })
  task.appendChild(button)
  tasks.appendChild(task)
}

//notice how we divided into steps -- separation of concerns 
//it is okay for functions to get long 
//note that button is an element
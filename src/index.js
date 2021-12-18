//As a user, I should be able to type a task into the input field.
//As a user, I should be able to click some form of a submit button.
//As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.


//Extra Deliverables
//A delete function that will remove tasks from your list
//A priority value selected from a dropdown (Links to an external site.) that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
//As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
//An additional input field (e.g. user, duration, date due)
//Ability to edit tasks

//Grabs 'form' from DOM
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target["new-task-description"].value)
  })
});

//Appends new task to task list
function handleToDo(todo){
  let p = document.createElement("p")
  let button = document.createElement('button')
  let drop = document.createElement('select')
  button.textContent = "x"
  button.addEventListener("click", handleDelete)

  p.textContent = `${todo} `
  p.appendChild(button)
  p.prependChild()
  document.querySelector("#list").appendChild(p)
}

//deletes task from task list
function handleDelete(e){
  e.target.parentNode.remove()
}


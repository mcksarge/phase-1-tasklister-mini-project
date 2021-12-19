//As a user, I should be able to type a task into the input field.
//As a user, I should be able to click some form of a submit button.
//As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.


//Extra Deliverables
//A delete function that will remove tasks from your list
//A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
//As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
//An additional input field (e.g. user, duration, date due)
//Ability to edit tasks

//Grabs 'form' from DOM
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener('submit', (e) => {
    let color = e.target.priority.value;
    console.log(color)
    e.preventDefault();
    handleToDo(e.target["new-task-description"].value, color)
  })
});

//Appends new task to task list
function handleToDo(todo, color){
  let p = document.createElement("p") //adds new item to todo list
  let button = document.createElement('button') //adds remove button next to created items in todo list
  
  //remove button
  button.textContent = "x"
  button.addEventListener("click", handleDelete)

  //todo item
  p.style.color = color
  p.textContent = ` ${todo} `
  p.appendChild(button)
  document.querySelector("#list").appendChild(p)
}

//deletes task from task list
function handleDelete(e){
  e.target.parentNode.remove()
}

function colorTask (input, color) {

}

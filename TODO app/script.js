const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value ===''){
        alert("Please enter a task.");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li); // Add the new task to the list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span); // Add the delete button to the task
    }

    inputBox.value="";
    saveData(); // Save the updated list to localStorage
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the checked class on click

        saveData(); // Save the updated list to localStorage
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task when the delete button is clicked
    saveData(); // Save the updated list to localStorage
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Save the current list to localStorage
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") || ""; // Load the saved list from localStorage
}

showTask(); // Call the function to display tasks on page load
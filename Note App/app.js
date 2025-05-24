const notesContainer = document.querySelector(".notes-container"); //
const createBtn = document.querySelector(".btn"); // Create button
let notes = document.querySelectorAll(".input-box"); // Existing notes

function showNotes() { // Function to display notes from local storage
    // Check if there are saved notes in local storage
        notesContainer.innerHTML = localStorage.getItem("notes"); // Load saved notes into the container
    }

showNotes() // Call the function to display notes on page load
function updateStorage() { // Function to update local storage with current notes
    localStorage.setItem("notes", notesContainer.innerHTML); // Save the current notes to local storage
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p"); // Create a new paragraph element for the note
    let img = document.createElement("img"); // Create a new image element for the delete icon
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img); // Append the new note to the container


})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") { // Check if the clicked element is an image
        e.target.parentElement.remove(); // Remove the parent element (the note)
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box"); // Update the notes variable to include the new note
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage(); // Update local storage whenever a note is edited
            }
        })
    }
})


document.addEventListener("keydown",event  => {
     // Ensure the script runs after the DOM is fully loaded
     if (event.key === "Enter") { // Check if the Enter key is pressed
        document.execCommand("insertLineBreak"); // Insert a line break instead of creating a new paragraph
        event.preventDefault(); // Prevent the default action of the Enter key

     }
    }); 
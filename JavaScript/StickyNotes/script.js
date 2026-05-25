function addNote(){
    let input = document.getElementById("text-area").value;
    console.log(input)
    let note = document.createElement("div");
    let noteVal = document.createElement("p");
    noteVal.textContent = input;
    let crossBtn = document.createElement("button")
    crossBtn.classList.add("crossBtn")
    crossBtn.textContent = "+";
    note.appendChild(noteVal);
    note.appendChild(crossBtn);
    note.classList.add("note-card")
    let notesSection = document.getElementById("notes-section");
    notesSection.appendChild(note);
    input.value = "";
}

let notesSection = document.getElementById("notes-section");
notesSection.addEventListener('click',(e)=>{
    if(e.target.classList.contains('crossBtn')){
        console.log(e.target);
        let div = e.target.parentElement;
        console.log(div)
        div.remove()
    }
})
function getPriority(){
    let priority = document.getElementById("priority").value;
    document.getElementById("priority").value = "";

    let priorityItem = `<li>${priority}</li>`;
    const ol = document.getElementById("priorityItem");
    ol.innerHTML+=priorityItem;
}


function addToDo(){
    let toDo = document.getElementById("toDo").value;
    console.log(toDo);
    document.getElementById("toDo").value = "";

    let toDoItem = `<li>${toDo}</li>`;
    const ol = document.getElementById("toDoItem");
    ol.innerHTML+=toDoItem;
}

function addNote(){
    let note = document.getElementById("note").value;
    console.log(note);
    document.getElementById("note").value = "";

    let noteItem = `<li>${note}</li>`;
    const ol = document.getElementById("noteItem");
    ol.innerHTML+=noteItem;
}
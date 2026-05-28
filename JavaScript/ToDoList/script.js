let addButton = document.getElementById("add-task-btn");
let searchInput = document.getElementById("search-input");
if(!('tasks' in localStorage)){
    localStorage.setItem('tasks',JSON.stringify([]));
}

addButton.addEventListener('click',(e)=>{
    let taskNameDiv = document.getElementById("task-input");
    let dateDiv = document.getElementById("date-input");
    let timeDiv = document.getElementById("time-input");
    if(addButton.textContent === "Edit Task"){
        let parentDiv = e.target.parentElement.parentElement;
        let p = parentDiv.querySelector("p");
        let [task,time] = p.textContent.split(" at ");
        task = taskNameDiv.value;
        p.textContent = `${task} at ${time}`;
        addButton.textContent = 'Add Task';
        addButton.classList.remove('edit-task-btn');
        dateDiv.disabled = false;
        timeDiv.disabled = false;
        taskNameDiv.value = ""
        return;
    }
    let taskName = taskNameDiv.value;
    let date = dateDiv.value;
    let time = timeDiv.value;
    if(!taskName || !date || !time){
        let overlay = document.querySelector(".overlay-section");
        overlay.classList.remove("hidden");
        let alert = document.querySelector(".alert-section");
        alert.classList.remove("hidden")
        return;
    }
    let task = {
        taskName,
        date,
        time,
    }
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    addTask({...task});
    filterData(searchInput.value)
})

let container = document.querySelector(".container");
container.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete-btn")){
        let parentDiv = e.target.parentElement.parentElement;
            let p = parentDiv.querySelector("p");
            let [task,time] = p.textContent.split(" at ");
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            let updatedTasks = tasks.filter((t)=> t && t.taskName!==task);
            localStorage.setItem('tasks',JSON.stringify(updatedTasks))
        e.target.parentElement.parentElement.parentElement.remove();

            filterData(searchInput.value);
    }
    if(e.target.classList.contains("edit-btn")){
        if(e.target.classList.contains('clicked')){
            let dateDiv = document.getElementById("date-input");
            let timeDiv = document.getElementById("time-input");
            let parentDiv = e.target.parentElement.parentElement;
            let p = parentDiv.querySelector("p");
            let [task,time] = p.textContent.split(" at ");
            let taskNameDiv = document.getElementById("task-input");
            let updateDiv = document.getElementById("task-input-update");
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            let updatedTasks = tasks.map((t)=>{
                if(t && t.taskName === task) t.taskName = updateDiv.value;
                return t;
            })
            localStorage.setItem('tasks',JSON.stringify(updatedTasks))
            task = updateDiv.value;
            p.textContent = `${task} at ${time}`;
            addButton.disabled = false;
            dateDiv.disabled = false;
            timeDiv.disabled = false;
            taskNameDiv.disabled = false;
            taskNameDiv.value = ""
            e.target.classList.remove("clicked")
            e.target.textContent = "Edit"
            let updateSection = document.querySelector(".update-section");
            updateSection.classList.add("hidden");
            filterData(searchInput.value);
            return;
        }else{
            let date = document.getElementById("date-input");
            let timeDiv = document.getElementById("time-input");
            let updateDiv = document.getElementById("task-input-update");
            date.disabled = true;
            timeDiv.disabled = true;
            addButton.disabled = true;
            let taskNameDiv = document.getElementById("task-input");
            taskNameDiv.disabled = true;
            let parentDiv = e.target.parentElement.parentElement;
            let p = parentDiv.querySelector("p");
            let [task,time] = p.textContent.split(" at ");
            updateDiv.value = task
            updateDiv.autofocus = true
            let updateSection = document.querySelector(".update-section");
            updateSection.classList.remove("hidden");
            let h3 = updateSection.querySelector("h3")
            h3.textContent = parentDiv.parentElement.querySelector("h3").textContent
            e.target.classList.add('clicked');
            e.target.textContent = "Update"
        }

    }
})
window.addEventListener('DOMContentLoaded',(e)=>{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    loadTasks(tasks);
})
const loadTasks = (tasks)=>{
    let todayTask = document.getElementById('today-tasks-section');
let dueTask = document.getElementById('due-tasks-section');
let upcTask = document.getElementById('upcoming-tasks-section');
    todayTask.replaceChildren();
    dueTask.replaceChildren();
    upcTask.replaceChildren()
    dueTasks = false;
    upcTasks = false
    let dueCon = document.getElementById('due-tasks-container');
    let upcCon = document.getElementById('upcoming-tasks-container');
    dueCon.classList.add('hidden');
    upcCon.classList.add('hidden') 
   tasks.forEach(task => {
    if(task) addTask({...task})
   });
}
let dueTasks,upcTasks;
const addTask = ({taskName,date,time})=>{
    let taskNameDiv = document.getElementById("task-input");
    let dateDiv = document.getElementById("date-input");
    let timeDiv = document.getElementById("time-input");
    const taskDate = new Date(date);
    taskDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let h3 = document.createElement("h3");
    h3.textContent = date;
    let span = document.createElement('span');
    span.textContent = time;
    let p = document.createElement('p');
    p.textContent = `${taskName} at `;
    p.appendChild(span)
    let b1 = document.createElement('button');
    b1.textContent = 'Edit';
    b1.classList.add("edit-btn")
    let b2 = document.createElement('button');
    b2.textContent = 'Delete';
    b2.classList.add("delete-btn");
    let taskDiv = document.createElement('div');
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-container');
    let contentContainer = document.createElement('div');
    contentContainer.classList.add("ctn-btn-container");
    buttonContainer.appendChild(b1);
    buttonContainer.appendChild(b2)
    let dueContainer = document.getElementById("due-tasks-container");
    let upcContainer = document.getElementById("upcoming-tasks-container");
    
    if (taskDate.getTime() === today.getTime()) {
        let todayTask = document.getElementById('today-tasks-section');
        todayTask.appendChild(taskDiv);
        h3.textContent = "Today"
    } else if (taskDate.getTime() < today.getTime()) {
        let dueTask = document.getElementById('due-tasks-section');
        dueTask.appendChild(taskDiv);
        dueTasks = true;
    } else {
        let upcTask = document.getElementById('upcoming-tasks-section');
        upcTask.appendChild(taskDiv);
        upcTasks = true;
    }
    if(dueTasks) dueContainer.classList.remove("hidden")
    if(upcTasks) upcContainer.classList.remove("hidden")
    taskDiv.appendChild(h3);
contentContainer.appendChild(p);
contentContainer.appendChild(buttonContainer);
    taskDiv.appendChild(contentContainer);
    taskDiv.classList.add('task-div');
    taskNameDiv.value = "";
    dateDiv.value = "";
    timeDiv.value = ""
}


let id;
const debounce = (callback)=>{
    clearTimeout(id);
    id = setTimeout(()=>{
        callback()
    },300);
}

searchInput.addEventListener('input',(e)=>{
    debounce(filterData);
})
const filterData = ()=>{
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let searchInput =  document.getElementById("search-input");
    if(!searchInput.value) loadTasks(tasks);
    let filteredTasks = tasks.filter((task)=>task && task.taskName.toLowerCase().includes(searchInput.value.toLowerCase()));
    loadTasks(filteredTasks)
}

let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener('click',()=>{
    let overlay = document.querySelector(".overlay-section");
        overlay.classList.add("hidden");
        let alert = document.querySelector(".alert-section");
        alert.classList.add("hidden")
})
let okBtn = document.getElementById("ok-btn");
okBtn.addEventListener('click',()=>{
    let overlay = document.querySelector(".overlay-section");
        overlay.classList.add("hidden");
        let alert = document.querySelector(".alert-section");
        alert.classList.add("hidden")
})
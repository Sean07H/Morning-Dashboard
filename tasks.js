let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}



function addTask(){


let input=document.getElementById("taskInput");

let priority=document.getElementById("priorityInput");


if(input.value==="") return;



tasks.push({

id:Date.now(),

name:input.value,

priority:priority.value,

complete:false

});


saveTasks();


input.value="";


displayTasks();


}



function completeTask(id){


tasks.forEach(task=>{

if(task.id===id){

task.complete=!task.complete;

}

});


saveTasks();

displayTasks();


}



function deleteTask(id){


tasks =
tasks.filter(task=>task.id!==id);


saveTasks();

displayTasks();


}



function displayTasks(){


let area=document.getElementById("taskList");


area.innerHTML="";


tasks.forEach(task=>{


area.innerHTML += `

<div class="task">


<div>


<input 
type="checkbox"
${task.complete?"checked":""}
onclick="completeTask(${task.id})">


<span class="${task.complete?"done":""}">

${task.name}

</span>


<small>
${task.priority}
</small>


</div>



<button onclick="deleteTask(${task.id})">
X
</button>



</div>


`;


});


}



displayTasks();

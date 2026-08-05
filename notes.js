let notes = JSON.parse(localStorage.getItem("notes")) || [];



function saveNotes(){

localStorage.setItem(
"notes",
JSON.stringify(notes)
);

}



function addNote(){


let input=document.getElementById("noteInput");


if(input.value.trim()==="") return;



notes.push({

id:Date.now(),

text:input.value,

pinned:false,

created:new Date().toLocaleDateString()

});


saveNotes();


input.value="";


displayNotes();


}




function deleteNote(id){


notes =
notes.filter(note=>note.id!==id);


saveNotes();

displayNotes();


}




function pinNote(id){


notes.forEach(note=>{

if(note.id===id){

note.pinned=!note.pinned;

}

});


saveNotes();

displayNotes();


}





function displayNotes(){


let area=document.getElementById("notesList");

let search=document.getElementById("noteSearch").value.toLowerCase();



area.innerHTML="";



let filtered = notes.filter(note=>

note.text.toLowerCase().includes(search)

);



filtered.sort((a,b)=>

b.pinned-a.pinned

);



filtered.forEach(note=>{


area.innerHTML += `


<div class="note ${note.pinned?"pinned":""}">


<p>

${note.text}

</p>


<small>
${note.created}
</small>


<br>


<button onclick="pinNote(${note.id})">
${note.pinned?"Unpin":"Pin"}
</button>


<button onclick="deleteNote(${note.id})">
Delete
</button>



</div>


`;


});


}



displayNotes();

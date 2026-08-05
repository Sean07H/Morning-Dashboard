let notes = JSON.parse(localStorage.getItem("notes")) || [];

let editingNote = null;



function saveNotes(){

localStorage.setItem(
"notes",
JSON.stringify(notes)
);

}





function addNote(){


let input = document.getElementById("noteInput");

let category = document.getElementById("categoryInput");



if(input.value.trim()==="") return;



// Editing existing note

if(editingNote !== null){


notes = notes.map(note=>{


if(note.id === editingNote){

note.text = input.value;

note.category = category.value;

}


return note;


});


editingNote = null;


}


// Creating new note

else{


notes.push({

id:Date.now(),

text:input.value,

category:category.value,

pinned:false,

date:new Date().toLocaleDateString()

});


}



saveNotes();


input.value="";


displayNotes();


}







function editNote(id){


let note = notes.find(note=>note.id===id);


document.getElementById("noteInput").value =
note.text;


document.getElementById("categoryInput").value =
note.category;



editingNote=id;


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

let search =
document.getElementById("noteSearch").value.toLowerCase();



area.innerHTML="";



let filtered = notes.filter(note=>{


return note.text.toLowerCase().includes(search);


});



filtered.sort((a,b)=>{

return b.pinned-a.pinned;

});





filtered.forEach(note=>{


area.innerHTML += `



<div class="note ${note.pinned?"pinned":""}">


<strong>
${note.category}
</strong>


<p>
${note.text}
</p>


<small>
${note.date}
</small>


<br>


<button onclick="editNote(${note.id})">
Edit
</button>


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




window.onload=function(){

displayNotes();

};

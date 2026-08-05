let now = new Date();


document.getElementById("date").innerHTML =
now.toDateString();



let hour = now.getHours();


let greeting;


if(hour < 12){

greeting="Good Morning";

}

else if(hour < 18){

greeting="Good Afternoon";

}

else{

greeting="Good Evening";

}



document.getElementById("greeting").innerHTML=greeting;

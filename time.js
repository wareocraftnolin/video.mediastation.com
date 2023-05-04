const hour = new Date().getHours(); 
let greeting;

if (hour < 12) {
   greeting = "Good Morning";
} else if(hour < 15){
   greeting = "Good Afternoon";
} else if(hour < 18){
   greeting = "Good Evening";
}else{
   greeting = "Good Night";
}

document.getElementById("greet").innerHTML = greeting;

const splash = document.querySelector(".splash");

document.addEventListener('DDMEventContentLoaded', (e)=>{
   setTimeout(()=>{
   splash.classList.add(".display-none");
   }, 2000);
});
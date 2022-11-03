const navToggle=document.querySelector(".nav-toggle");
const nav_list=document.querySelector(".nav-list");


navToggle.addEventListener("click",()=>{
    nav_list.classList.toggle("nav-list-visible");
    console.log("so")
})
const menu=document.querySelector(".menu");

const openMenu=document.querySelector(".open-menu");
const closeMenu=document.querySelector(".close-menu");



openMenu.addEventListener("click",menuToggle);
closeMenu.addEventListener("click",menuToggle);



function menuToggle(){
    menu.classList.toggle("menu_opened")
}




const menuLinks=document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    });


});
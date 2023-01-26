const hamburger = document.querySelector(".fa-bars");
const nav = document.querySelector("nav")
hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("fa-times");
    if(hamburger.classList.contains("fa-times")){
        nav.classList.add("activeState");
    }else{
        nav.classList.remove("activeState"); 
    }
})
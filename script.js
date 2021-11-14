const res = document.querySelector(".res");
const navCont = document.querySelector(".nav-container");
const navLinks = document.querySelectorAll(".link");

res.addEventListener("click", responsiveNav);
navLinks.forEach(n => n.addEventListener("click", closeNav));

function responsiveNav() {
    res.classList.toggle("active");
    navCont.classList.toggle("active");
}

function closeNav() {
    res.classList.remove("active");
    navCont.classList.remove("active");
}

function openPage(pageName, elmnt, color) {
 
    var i, howto, tabnavs;
    howto = document.getElementsByClassName("howto");
    for (i = 0; i < howto.length; i++) {
      howto[i].style.display = "none";
    }
  
    
    tabnavs = document.getElementsByClassName("tabnav");
    for (i = 0; i < tabnavs.length; i++) {
      tabnavs[i].style.backgroundColor = "";
    }
  
    
    document.getElementById(pageName).style.display = "block";
  
   
    elmnt.style.backgroundColor = color;

}
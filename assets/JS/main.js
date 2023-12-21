
let theme = document.querySelector(".theme-container i");
let link = document.querySelectorAll("link")
console.log(link[1].href);
function lightMode(){
    if(theme.classList.contains("fa-sun")){
link[1].href ="./assets/CSS/light.css";
theme.classList.replace("fa-sun" , "fa-moon");
}
else{
link[1].href = "./assets/CSS/main.css";
theme.classList.replace("fa-moon" , "fa-sun");
}
}
theme.onclick = lightMode;
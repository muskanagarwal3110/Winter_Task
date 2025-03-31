let btn= document.querySelector("#menu-btn")
let sidebar= document.querySelector(".sidebar")
btn.onclick= function(){
    sidebar.classList.toggle("active")
}

//adding real time
// let currentTime= new Date()
// let date= currentTime.toDateString()
// document.getElementById("time").innerHTML= date

//changing to add new book
function loadpage(page){
    fetch(page)
        .then(response => response.text())
        .then(html=>{
            document.querySelector(".home-cnt").innerHTML= html
            setTimeout(updateTime, 100);
        })
        .catch(error => console.error("Error loading page:", error));
}

function updateTime() {
    let timeElement = document.getElementById("time");
    if (timeElement) {
        let currentTime = new Date();
        let date = currentTime.toDateString();
        timeElement.innerHTML = date;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    loadpage("dashboard.html");
});

var home = document.getElementById("homeContainer")
var work = document.getElementById("workContainer")
var contacts = document.getElementById("contactsContainer")

document.getElementById("home-btn").onclick = function(){

home.style.display = "block"
home.style.transition="all 2s"
work.style.display = "none"
contacts.style.display = "none"
}

document.getElementById("work-btn").onclick = function(){

home.style.display = "none"
work.style.display = "block"
contacts.style.display = "none"
}
document.getElementById("contacts-btn").onclick = function(){

home.style.display = "none"
work.style.display = "none"
contacts.style.display = "block"

}

// adds a loaded class to the body when the body is fully loaded
document.addEventListener("DOMContentLoaded", function(event){
  event.target.body.classList.add("loaded");
});
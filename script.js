function openPopup() {
        document.getElementById("project1-popup").style.display = "block";
    }
    
    function closePopup() {
        document.getElementById("project1-popup").style.display = "none";
    }
//Close modal if clicked outside of the modal-content
window.onclick = function(event){
    var modal = document.getElementById("project1-popup");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openPopup2() {
    document.getElementById("project2-popup").style.display = "block";
}

function closePopup2() {
    document.getElementById("project2-popup").style.display = "none";
}
//Close modal if clicked outside of the modal-content
window.onclick = function(event){
var modal = document.getElementById("project2-popup");
if (event.target == modal) {
    modal.style.display = "none";
}
}

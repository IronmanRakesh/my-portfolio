document.addEventListener("DOMContentLoaded", () => {
    function openPopup(popupId) {
        document.getElementById(popupId).style.display = "flex";
    }
    
    function closePopup(popupId) {
        document.getElementById(popupId).style.display = "none";
    }
    console.log("Website is ready!");
});
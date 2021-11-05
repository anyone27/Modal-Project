const modal = document.getElementById("modal");

const button = document.getElementById("modalButton");

const close = document.getElementsByClassName("close")[0];

button.addEventListener("click", function() {
    modal.style.display = "block";
})

close.addEventListener("click", function() {
    modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() { //Help button
    let button = document.getElementById("submit")
    button.addEventListener("click", onClick)

}

function onClick(event) { //Confirm help request was submitted
    if (event) {
        alert("Your ticket was submitted.")
    }
}
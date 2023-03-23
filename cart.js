window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
    let deliveryIndicator = document.getElementById("option")
    deliveryIndicator.addEventListener("input", optionChange)

    if (document.getElementById("checkoutCart")) { //Update cart on checkout page
        let checkoutCart = document.getElementById("checkoutCart")
        var array = JSON.parse(sessionStorage.getItem('theCart'))
        if (array.length == 0) {
            checkoutCart.innerHTML = "Your cart is empty. <br> You can add items to the cart from the ordering page. "
        }
        for (let item of array) {
            checkoutCart.innerHTML += "<li>" + item + "</li>"
        }
    }
}

function optionChange(event) { //If delivery is selected, show needed delivery details
    if (event) {
        let val = event.target.value
        console.log("value is " + val)
        if (val == "delivery") {
            document.getElementById("delivery").hidden = false
        } else
            document.getElementById("delivery").hidden = true
    }
}
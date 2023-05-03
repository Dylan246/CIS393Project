window.addEventListener("DOMContentLoaded", loadedHandler);
items = []; //Cart items

function loadedHandler() { //Add to cart button 
    if (document.querySelector(".order")) {
        let buttonArray = document.querySelectorAll(".order")
        buttonArray.forEach(function(button) {
            button.addEventListener("click", updateCart)
        });
    }
    if (document.getElementById("reset")) { //Enable reset cart button
        let button2 = document.getElementById("reset")
        button2.addEventListener("click", resetCart)
    }
    if (document.getElementById("cart")) { //Update cart on menu page
        let cartList = document.getElementById("cart")
        var array = JSON.parse(sessionStorage.getItem('theCart'))
        message.innerText = "There are " + array.length + " item(s) in your cart."
        for (let item of array) {
            cartList.innerHTML += "<li>" + item + "</li>";
        }
    };
}


function updateCart(event) { //Display items in cart
    if (event) {
        let button = event.target
        let itemName = event.target.value
        if (JSON.parse(sessionStorage.getItem('theCart') == null)) {
            sessionStorage.setItem("theCart", JSON.stringify(items))
        }

        var array = JSON.parse(sessionStorage.getItem('theCart'))
        items = array
        items.push(itemName)
        sessionStorage.setItem("theCart", JSON.stringify(items)); //Update universal cart

        let cartList = document.getElementById('cart')
        let message = document.getElementById('message')

        message.innerText = "There are " + array.length + " item(s) in your cart."
        cartList.innerHTML = ""
        for (let item of array) {
            cartList.innerHTML += "<li>" + item + "</li>";
        }
        alert(itemName + " was added to the cart!")

    }
}

function resetCart(event) { //Clear items from cart
    if (event) {
        let button = event.target
        let itemName = event.target.value
        let items2 = []
        sessionStorage.setItem("theCart", JSON.stringify(items2))

        let cartList = document.getElementById('cart')
        let message = document.getElementById('message')

        message.innerText = "There are " + 0 + " item(s) in your cart."
        cartList.innerHTML = ""
        alert("Your cart was emptied")
    }
}
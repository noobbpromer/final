
var quantity = document.forms["modal"]["quantity"];
var totalPrice = document.forms["modal"]["price"];
var ITEM_PRICE = 100.00
document.addEventListener("DOMContentLoaded", function(event)
{
    updatePrice();
})

function updatePrice(){
    totalPrice.value = "$" + (ITEM_PRICE * quantity.value);
}


window.onload = function () {
   

    //get ID images
    var images = document.getElementById("cc");
    
    var path = ["pink.jpg", "brown.jpg", "white.jpeg"];

    //set index 0 
    var index = 0;

    //get button
    var bt = document.getElementsByTagName("p3");
    var ct = document.getElementsByTagName("p4");

    ct[0].onclick = function () {
        images.src = path[0];

    };
    ct[1].onclick = function () {
        images.src = path[1];

    };
    ct[2].onclick = function () {
        images.src = path[2];

    };

    
    //clik function 
    bt[0].onclick = function () {
        images.src = path[0];
        

    };

    
    bt[1].onclick = function () {
        
        images.src = path[1];
        

    };

    bt[2].onclick = function () {
        
        images.src = path[2];
        

    };

};


 // zoomer
$(document).ready(function () {
    $('#ex1').zoom();
    $('#ex2').zoom();
    $('#ex3').zoom();


});
//show checkout form 

function Show(){
    
    
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('modal').classList.remove('hide');
    
    //hide check form
    
}
 function Hide(){
    
   
    document.getElementById('shade').classList.add('hide');
    document.getElementById('modal').classList.add('hide');

    
}



//input handle

zipcode.onblur = function() {
    var zipcodeww = /^[0-9]{5}$/;
    var isTrue = zipcodeww.test(zipcode.value);

    if (!isTrue) { // not zipcode
        zipcode.classList.add('invalid');
        
      }
    };


  zipcode.onfocus = function() {
    if (this.classList.contains('invalid')) {

      this.classList.remove('invalid');
      
    }
  };

  credit.onblur = function() {
    var creditww = /^[0-9]{16}$/;
    var isTrue = creditww.test(credit.value);

    if (!isTrue) { // not Credit card 
        credit.classList.add('invalid');
        
      }
    };


  credit.onfocus = function() {
    if (this.classList.contains('invalid')) {

      this.classList.remove('invalid');
      
    }
  };

  cvv.onblur = function() {
    var cvvww = /^[0-9]{3}$/;
    var isTrue = cvvww.test(cvv.value);

    if (!isTrue) { // not cvv 
        cvv.classList.add('invalid');
        
      }
    };


  cvv.onfocus = function() {
    if (this.classList.contains('invalid')) {

      this.classList.remove('invalid');
      
    }
  };
// price calculate
  var quantity = document.forms["order-form"]["quantity"];
  var totalPrice = document.forms["order-form"]["price"];
  
  
  var ITEM_PRICE = 10.00
  
  document.addEventListener("DOMContentLoaded", function(event)
{
    updatePrice();
})

//function to update the price as the quantity changes
function updatePrice(){
    totalPrice.value = "$" + (ITEM_PRICE * quantity.value);
}
 /*-----------------------------------------------------------------------------
                     Add To Cart
 -----------------------------------------------------------------------------*/
 var count = 0;
 var addToCart = document.getElementsByClassName('addToCart');
 for (var i = 0; i < addToCart.length; i++) {
     addToCart[i].onclick = function (e) {
         count++;
         document.getElementById("cart-icon").style.display = "block";
         document.getElementById("cart-items").innerHTML = count;
         document.getElementById(this.id).innerHTML = "Added";
         document.getElementById(this.id).disabled = true;
     }
 }

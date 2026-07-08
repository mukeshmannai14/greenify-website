var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav= document.getElementById("closenav")

menuicon.addEventListener("click", function (){
    sidenav.style.right = "0"
})
closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})
 
// Product search functionality

var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {

    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {

        var productName = productlist[count].querySelector("h1").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }

});
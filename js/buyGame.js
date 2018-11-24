document.addEventListener("DOMContentLoaded", function() {
    
    /* Request for the json */
	var url = "https://shisuiraijin.github.io/proyecto/data/games.json";
	var r = new XMLHttpRequest();
    r.open('GET', url);
    r.responseType = 'json';
    r.send();
    
    r.onload = function loadGames(){
        var json = r.response;
        var gameId = document.getElementById("gameId");

        var gamePrice = json[gameId]["price"]
    }
})


/**
 * function for displaying the additional buy form
 * @param {*} bool if true the form is display, else the form gets hide.
 */
function buyGame(bool) {

    if (bool == true) {
        var form = document.getElementById("buy");
        form.style.display="block";
        
        var footer = document.getElementById("mainContainer");
        footer.style.marginBottom="600px";

        extraFields();
    }else{
        var form = document.getElementById("buy");
        form.style.display="none";

        var footer = document.getElementById("mainContainer");
        footer.style.marginBottom="200px";
    }
}

/**
 * function for the add item buttom
 */
function addItem() {
    var quantity = document.getElementById("itemQuantity");
    var num = parseInt(quantity.innerText);
    num++;
    quantity.innerText = num;
    setPrePrice(10);
}

/**
 * function for the sub item buttom
 * note: can't subtract to an negative value
 */
function subItem() {
    var quantity = document.getElementById("itemQuantity");
    var num = parseInt(quantity.innerText);
    if (num <= 1) {return}
    num--;
    quantity.innerText = num;
    setPrePrice(-10);
}

/**
 * Function for handling additional input fields
 * @param {*} bool if true the conditional fields are display else there are hide.
 */
function extraFields(bool) {

    if (bool == true) {
        var elem = document.getElementById("delivery");
        elem.style.display="block";
        elem = document.getElementById("precioEnvio")
        elem.style.display="block";
    }else{
        var elem = document.getElementById("delivery");
        elem.style.display="none";
        elem = document.getElementById("precioEnvio")
        elem.style.display="none";
    }
}

/**
 * Function for adding into the pre price
 * @param {*} quantity amount to add
 */
function setPrePrice(quantity) {
    var precioElement = document.getElementById("prePrecio");
    var precio = parseInt(precioElement.innerText);
    precio += quantity;
    precioElement.innerText = precio;
}

function  setPrice(quantity) {
    
}
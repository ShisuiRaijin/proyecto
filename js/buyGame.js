var precio = document.getElementById("prePrecio")


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

function addItem() {
    var quantity = document.getElementById("itemQuantity");
    var num = parseInt(quantity.innerText);
    num++;
    quantity.innerText = num;
}

function subItem() {
    var quantity = document.getElementById("itemQuantity");
    var num = parseInt(quantity.innerText);
    if (num <= 1) {return}
    num--;
    quantity.innerText = num;
}

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
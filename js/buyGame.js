function buyGame() {
    var form = document.getElementById("buy");
    form.style.display="block"
}

function addItem(){
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
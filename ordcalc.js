const itemprice= document.getElementById("price")
const itemamount= document.getElementById("quantity")
const calcbutton = document.getElementById("calculate")
const pretotal = document.getElementById("lowtotal")
const subtratotal = document.getElementById("disctotal")
const lastotal = document.getElementById("fintotal")


let subtotal = 0;
let total=0;

calcbutton.onclick = function(){
    
    subtotal = itemprice.value * itemamount.value;
    if(subtotal >= 50){
        total = subtotal * .90;
        discountotal = subtotal - total
    } 
    else{
        total = subtotal
        discountotal = 0
    }
    pretotal.innerText = subtotal.toFixed(2);
    subtratotal.innerText = discountotal.toFixed(2);
    lastotal.innerText = total.toFixed(2);
}
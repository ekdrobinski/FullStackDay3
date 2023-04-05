let billAmount = 250;


function calculateTip(billAmount) {
   return (.2 * billAmount);
    
}
console.log("returns tip amount: $" + calculateTip(billAmount));

function getBillTotal(billAmount) {
    return billAmount + calculateTip(billAmount);
}

console.log("returns total bill: $" + getBillTotal(billAmount));
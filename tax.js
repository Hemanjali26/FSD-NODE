function calculateTotalTax(basePrice, gstRate, callback) {
  const taxAmount = basePrice * (gstRate / 100);
  const totalAmount = basePrice + taxAmount;
  callback(totalAmount);
}
function displayBill(totalAmount) {
  console.log(`Total (including GST): ₹${totalAmount.toFixed(2)}`);
}


const basePrice = 1000;   
const gstRate = 18;        

calculateTotalTax(basePrice, gstRate, displayBill);
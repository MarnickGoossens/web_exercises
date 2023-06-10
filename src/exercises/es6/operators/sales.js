//  Sales
const trousers = 85;
const sweater = 62;
const coat = 120;
const shirt = 25;
const shoes = 105;
const discount = 70;
const span = document.getElementById('bill');

const subtotal = trousers + sweater + coat + shirt + shoes;
const bill = subtotal - (subtotal / 100 * discount);

span.textContent = Math.round(bill);

// Centimeters to Feet
let centimeters = 60;
let factor = 0.0328084;
let feet = centimeters * factor;

const centimeter = document.getElementById('centimeters');
const feetLabel = document.getElementById('feet');

centimeter.textContent = centimeters;
feetLabel.textContent = feet.toFixed(2);

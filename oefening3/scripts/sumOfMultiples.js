'use strict';

const getal = prompt(     "Geef een getal");
var totaleSom3 = 0;
var totaleSom5 = 0;

if (getal >= 3) {
  for (var i = 3; i <= getal; i+=3) {
    totaleSom3 += i;
  }
}

console.log(totaleSom3);
if (getal >= 5) {
  for (var i = 5; i <= getal; i+=5) {
    totaleSom5 += i;
  }
}
console.log(totaleSom5);

var totaal = totaleSom3 + totaleSom5;
console.log(totaal);

'use strict';

const speedLimit = 70;
const kmPerPoint = 5;

let snelheid = prompt("hoe snel gaat u?");

if (snelheid <= speedLimit) {
  console.log("OK");
}
else if (snelheid > speedLimit) {
  var teSnel = snelheid - speedLimit;
  var punten = Math.round((teSnel - (teSnel % kmPerPoint)) / kmPerPoint);

  console.log("Strafpunten: " + punten);
}

"use strict";

const num = +prompt("Enter the number");

function primeNumber(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(primeNumber(num));
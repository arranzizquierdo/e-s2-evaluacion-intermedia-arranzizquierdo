'use strict';

const numberElement = document.querySelector('#number');
const buttonElement = document.querySelector('.button');
const resultElement = document.querySelector('.result');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

let randomNumber = getRandomNumber(100); 
console.log(getRandomNumber(100));
function clickNumber() {

    if (randomNumber === parseInt(numberElement.value) {
        resultElement.innerHTML = "HAS GANADO, CAMPEONA!";
    } else {
        
    }

}
buttonElement.addEventListener('click', clickNumber);




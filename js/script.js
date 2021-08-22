'use strict'
let main = document.getElementsByClassName('placeholder');
console.log(main);
let test = main.forEach(() => {window.getComputedStyle(main, null)});
console.log(test.color);

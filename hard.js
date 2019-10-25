"use strict";
let firstNum1,   
    firstNum2;

const question = function () { 
    //1
    do {
        firstNum1 = prompt("Введите число первое");      
      }
      while (isNaN(firstNum1) || firstNum1 == null || firstNum1 == '');
    //2
    do {
        firstNum2 = prompt("Введите число второе");
      }
      while (isNaN(firstNum2) || firstNum2 == null || firstNum2 == '');
    }
question();


 const comparison = function () { 

      if (firstNum1 > firstNum2) {
          return 'Первое число больше второго';
      } 
      else if (firstNum2 === firstNum1) {
         return 'Числа равны'
      }
      else { return 'Второе число больше первого'}
    }
alert(comparison());

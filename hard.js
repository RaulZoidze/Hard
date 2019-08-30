'use strict'
let num = [2, 6, 6, 2, 1, 9]
let degree;
// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
let result = num.reduce(function(sum, current) {
    num = sum * current;
    degree = num ** 3;

  return num;

}, );

console.log("Результат умножения: " + result);
console.log("Результат умножения с возведением в степень: " + degree);
console.log("Первые 2 числа :" + String (degree).slice(0,2));
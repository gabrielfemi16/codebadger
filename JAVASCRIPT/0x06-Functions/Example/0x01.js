function userName(name) {
  console.log(`My name is ${name}`);
}

userName("john");

userName("gabriel");

userName("maro");

function greaterThanTen(number) {
  if (number > 10) {
    console.log(`${number} is greater than 10`);
  } else {
    console.log(`${number} is less than 10`);
  }
}

greaterThanTen(5);
greaterThanTen(30);

function addNumbers(num1, num2) {
  let addition = num1 + num2;

  return addition;
}

let num1 = 3;
let num2 = 4;

let add = addNumbers(num1, num2);
console.log(`addition of ${num1} and ${num2} is ${add}`);

function addNumbers(a, b, c, d) {
  let addition = b + c;

  return addition;
}
let numb2 = 5;
let numb3 = 5;

let addition = addNumbers(numb1, numb2, numb3, numb4);
console.log(`addition of ${numb2} and ${numb3} is ${addition}`);

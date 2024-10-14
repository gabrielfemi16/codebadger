function calculateFactorial(num1) {
  let num = 1;

  for (let i = 2; i <= num1; i++) {
    num *= i;
  }
  return num;
}

console.log(calculateFactorial(3));

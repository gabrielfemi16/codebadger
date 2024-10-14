let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    sum += 1;
  }
}
console.log("sum of even numbers from 1 to " + n + " :" + sum);

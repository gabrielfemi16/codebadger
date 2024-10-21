// let fruits = [
//   "apple",
//   "grape",
//   "banana",
//   "orange",
//   "apple",
//   "grape",
//   "banana",
//   "orange",
// ];
// console.log(fruits);

// for (let i = 0; i < 8; i++) {
//   //console.log(fruits[i]);
// //}
// //console.log(fruits[2]);

// //fruits[2] = "something";
// //console.log(fruits);

let age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplesOf3 = (num) => {
  for (i = 0; i <= 10; i++) {
    if (num[i] % 3 === 0) {
      console.log(num[i]);
    }
  }
};

multiplesOf3(age);

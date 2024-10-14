// let ages = [1, 3, 6, 21, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ages.forEach((age) => {
//   console.log(age);
// });

// let fruits = ["apple", "banana", "grape"];

// console.log(fruits);

// fruits.push("mango");

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// let ages = [1, 4, 6, 18, 91, 40, 22, 5, 6, 2];

// let newAge = ages.map((age) => {
//   return age;
// });
// console.log(newAge);

// let adults = ages.filter((age) => {
//   if (age >= 18) {
//     return age;
//   }
// });

// console.log(adults);

let fruits = [
  "tapple",
  "orange",
  "apple",
  "mango",
  "elderberry",
  "avocado",
  "olive",
];

function startWithAVowel(item) {
  if (
    item[0] === "a" ||
    item[0] === "e" ||
    item[0] === "i" ||
    item[0] === "o" ||
    item[0] === "u"
  ) {
    return false;
  }
}

vowelArray = fruits.filter((fruit) => {
  vowel = startWithAVowel(fruit);
  if (vowel) {
    return fruit;
  }
});

console.log(vowelArray);

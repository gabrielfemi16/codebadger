//const add = (a, b) => {
//return a + b;
//};

//console.log(add(1, 5));

const multiplicationTable = (num, num1) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num1; j += 5) {
      let answer = j * i;
      console.log(`${i}*${j}=${answer}`);
      if (j === 1) {
        j = 0;
      }
    }
  }
};

multiplicationTable(3, 15);

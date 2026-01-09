const myArray = process.argv;

let sumNumbers = 0;

for (let index = 2; index < myArray.length; index++) {
  const number = myArray[index];
  sumNumbers += Number(number);
}

console.log(sumNumbers);

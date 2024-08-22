// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let result = 0;
  for (let i = 1; i <= n; i++){

    result += i;

  }
return result;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
let totalSum = 0;
for (let i = 1; i <= n; i++){
  totalSum += addNums(i);
}

return totalSum;
}



module.exports = [addNums, addManyNums];
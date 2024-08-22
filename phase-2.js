const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in

  let results = [];
  for (let i = 1; i <= 10; i++){
    results.push(addNums(i* increment));
  }

  return results;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in

  let results = [];
  for (let i = 1; i <= 10; i++){
    results.push(addManyNums(i * increment));
  }

  return results;

}


console.log("addNums10 Results:", addNums10(5));
console.log("addManyNums10 Results:", addManyNums10(5));


module.exports = [addNums10, addManyNums10];

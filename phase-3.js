const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here 

  function addManyNums10Timing(increment) {
    let startTime = Date.now(); 
    let results = [];
  
    for (let i = 1; i <= 10; i++) {
      results.push(addManyNums(i * increment));
    }
  
    let endTime = Date.now(); 
    let timeTaken = endTime - startTime; // this calcualtes the time it took
  
   // console.log(`Time taken for addManyNums10 with increment ${increment}: ${timeTaken}ms`);
    return results;
  }
  
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here 



  function addManyNums10Timing(increment) {
    let startTime = Date.now(); 
    let results = [];
  
    for (let i = 1; i <= 10; i++) {
      results.push(addManyNums(i * increment));
    }
  
    let endTime = Date.now(); 
    let timeTaken = endTime - startTime;
  

    return results;
  }
  
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);

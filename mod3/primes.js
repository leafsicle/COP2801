//find all the numbers up to 150 that are prime
//create the array of numbers to iterate over
let numObj = []
let primeCheck = 2
let stopValue = 150 //this can change to find any set of prime numbers
for (i = primeCheck; i < stopValue + 1; i++) {
  numObj.push({
    num: i,
    prime: true
  })
}
// iterate over the big array of numbers as iteratees
for (iteratee of numObj) {
  // check if iteratee is divisible by 2. if so set prime to false
  if (iteratee.num % 2 === 0 && iteratee.num > primeCheck) {
    iteratee.prime = false
    //if it's divis by 3
  } else if (iteratee.num > 3 && iteratee.num % 3 === 0 && iteratee.prime === true) {
    iteratee.prime = false
    //if it's divis by 5
  } else if (iteratee.num > 5 && iteratee.num % 5 === 0 && iteratee.prime === true) {
    iteratee.prime = false
  }
}
//to show the prime numbers
for (iteratee of numObj) {
  if (iteratee.prime === true) {
    console.log(iteratee.num)
  }
}

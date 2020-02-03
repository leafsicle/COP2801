// take the string of the number and separate it out into individual numbers
// drop them into an array and iterate overr them with a for loop. return the total value to the user.

// define the variables
let stringOfNumbers = '22'
let total = 0
let bank = []

//loop through the string of numebrs
for (let char of stringOfNumbers) {
  //parse the int from the string and push it to a new array
  bank.push(parseInt(char))
}
// iterate over the new array and add their values to the total
for (num of bank) {
  total += num
}
//return the total
console.log(total)

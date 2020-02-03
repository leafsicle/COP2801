// to begin I want to create an array with the words for each number in their indexed position
// that will have value for the numbers 0-9
// set the input variable to the specified number to begin the process in changing it from a number to a string
// use the join method to separate them by spaces

var testNum = 932
let numDicitonary = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let stringArray = []

//turn the number into a string.
let stringNum = testNum.toString()
//FOR LOOOP to iterate over our string
for (let s of stringNum) {
  //match the value of the outer loop if it's foudn in the number dictionary to print out the string version
  for (let i = 0; i <= 10; i++)
    if (i.toString() == s) {
      stringArray.push(numDicitonary[i])
    }
}
//join them into a single string separated by a space
let output = stringArray.join(' ')
console.log(output)

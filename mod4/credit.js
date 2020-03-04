//set initial variables and object
var MIN_PAYMENT_PERCENT = 2
var INTEREST_RATE = 18
var balance = 1500
var id = 0
var totalInterestPaid = 0
var year = 1

//step 1: inform the user as to the purpose of the program
function displayWelcome() {
  console.log(
    'This is a program that will allow you determine the pay-off time' +
      ' to pay a loan balance as well as the total interest paid.'
  )
}

//step 2: calculate the minimim payment
function calculateMinPayment(balance, minPercent) {
  //balance times minBalance percent to get minimum payment
  return (balance * (minPercent / 100)).toFixed(2)
}

//step 3
function generateId() {
  //takes  global object for id and return it
  id++
  return id
}

//step 4
function processPaymentSchedule(balance, interestRate, minInterestPayment) {
  //define each of the steps and get the math right
  //the minimum payment is interest + principal payment
  var principalOnlyPayment = minInterestPayment - (balance * interestRate) / 1200
  var interestOnly = minInterestPayment - principalOnlyPayment

  var newbalance = balance - principalOnlyPayment
  if (newbalance < 0) {
    newbalance = 0
  }
  var addYear = id / 12
  var paidInterest = interestOnly + totalInterestPaid
  totalInterestPaid += interestOnly
  //create new object literal for a payment
  var payment = {
    paymentId: generateId(),
    year: addYear + 1,
    balance: newbalance,
    interestPaid: paidInterest
  }
  //call the display and pass in the payment object
  displayPayment(payment)
  return payment
}

//step 5 display the payemnt as an object
function displayPayment(paymentObj) {
  //show it off to the user
  if (paymentObj.paymentId % 12 == 0 || paymentObj.paymentId == 1) {
    console.log(
      paymentObj.year.toFixed(0) +
        ' \t\t$' +
        paymentObj.balance.toFixed(2) +
        ' \t\t\t' +
        paymentObj.paymentId +
        ' \t\t\t\t$' +
        totalInterestPaid.toFixed(2)
    )
  } else {
    console.log(
      '\t\t\t$' +
        paymentObj.balance.toFixed(2) +
        ' \t\t\t' +
        paymentObj.paymentId +
        ' \t\t\t\t$' +
        totalInterestPaid.toFixed(2)
    )
  }
}

displayWelcome()
//display it on the console
console.log('Starting balance on your card : $' + balance)
console.log('\nPAYOFF SCHEDULE\n-----------------')
console.log('Year Balance PaymentId InterestPaid')

var newPayment = processPaymentSchedule(balance, INTEREST_RATE, calculateMinPayment(balance, MIN_PAYMENT_PERCENT))
while (newPayment.balance > 0) {
  newPayment = processPaymentSchedule(
    newPayment.balance,
    INTEREST_RATE,
    calculateMinPayment(balance, MIN_PAYMENT_PERCENT)
  )

  //totalInterestPaid +=
  //something needs to catch from the payment object after it gets passed to the display
}

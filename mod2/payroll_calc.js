let firstName = 'Meredith'
let lastName = 'Fitch'
let hoursWorked = 40
let hourlyRate = 15.5
let medDeduction = 55.0

let federalTax = 0.15
let stateTax = 0.034
let countyTax = 0.011

let grossPay = hourlyRate * hoursWorked
let partialNetPay = grossPay * (1 - (federalTax + stateTax + countyTax))
let netPay = partialNetPay - medDeduction

console.log('Employee Name: ' + firstName + ' ' + lastName)
console.log('Hours worked: ' + hoursWorked)
console.log('Hoursly rate: ' + hourlyRate)
console.log('Gross pay: $' + grossPay.toFixed(2))
console.log('Total taxes: $' + partialNetPay.toFixed(2))
console.log('Medical Deduction: $' + medDeduction.toFixed(2))
console.log('Weekly pay: $' + netPay.toFixed(2))

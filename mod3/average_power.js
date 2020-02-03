// define the variables
let volts = [] //voltage
let amps = [] //current
let power = []

// random nums from 5-20
for (i = 0; i < 24; i++) {
  let num = Math.floor(Math.random() * 16) + 5
  volts.push(num)
}
// random nums from 1-10
for (i = 0; i < 24; i++) {
  let num = Math.floor(Math.random() * 10) + 1
  amps.push(num)
}

//use a loop so we can combine the counting values for each of them and push the value to power and take the average
for (i = 0; i < 24; i++) {
  power.push(volts[i] * amps[i])
}
//use another loop to iterate over the power to add them all up.
let totalPower = 0
for (i = 0; i < power.length; i++) {
  totalPower += power[i]
}

console.log('Hour\tCurrent\tVoltage\tPower')
for (i = 0; i < 24; i++) {
  console.log(i + 1 + '\t\t' + amps[i] + '\t\t' + volts[i] + '\t\t' + power[i])
  console.log('----------------------------------------------------')
}
console.log('Average power usage: ' + Math.round(totalPower / power.length) + ' watts')

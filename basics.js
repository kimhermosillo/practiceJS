console.log('we all finna die anyways!!!!')

var firstName = 'Kim'
var lastName = 'Hermosillo'
var age = 22
var job = 'software developer'

// boolean logic but also else / if statements.
if (age < 20 ) {
  console.log(firstName + ' is a girl.')
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' ' + 'is a teenager.')
} else  {
  console.log(firstName + ' ' + 'is a lady.')
}
// Temporary Operater and Switch Statements.
age >= 21 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + 'drinks juice.')

var drink = age >= 21 ? 'beer' : 'juice'
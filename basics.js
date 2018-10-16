console.log('we all finna die anyways!!!!')
// setting some of the basic variables.
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
console.log(drink)
/*
if (age>= 21) {
  var drink = 'beer'
} else {
  var drink = 'juice'
}
*/
// FUNCTIONS
function calculateAge(birthYear) {
  return 2018-birthYear
}

var ageKim = calculateAge(1996)
var ageShaun = calculateAge(1986)
var ageMary = calculateAge(1996)

console.log(ageKim, ageShaun, ageMary)

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year)
  var retirement = 65 - age

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years ')
  } else {
    console.log(firstName + ' retires in ' + retirement + ' years ')
  }
}
yearsUntilRetirement(1996, 'Kim')
//FUNCTION DECLERATION
//function whatDoYouDo(job, firstName) {}
//FUNCTION STATEMENTS AND EXPRESSIONS
var whatDoYouDo = function(job, firstName) {
  switch(job) {
  case 'software developer':
    return firstName + ' creates full stack applications'
  case 'desinger':
    return firstName + ' designs usually everything'
  case 'traveler':
    return firstName + ' anywhere but here'
  default: 
    return firstName + ' hangs out with Remix'
  }
}
console.log(whatDoYouDo('software developer', 'Kim'))
console.log(whatDoYouDo('desinger', 'Mary'))
console.log(whatDoYouDo('traveler', 'Shaun'))

// ARRAYS
var names = ['Kim', 'Mary', 'Angie', 'Georgia']
var kim = ['Kim', 'Hermosillo', 1996, 'Software Developer', false]

kim.push('blue')

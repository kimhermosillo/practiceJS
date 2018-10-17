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

//OBJECTS AND PROPERTIES

var kim = {
  firstName: 'Kim',
  lastName: 'Hermosillo',
  birthYear: 1996,
  family: ['Raquel', 'Leo', 'Melissa', 'Kaylee', 'Leonardo'],
  job: 'software developer',
  isMarried: false,
}
console.log(kim) // = Object of Kim
console.log(kim['lastName']) // = Hermosillo
var x = 'birthYear'
console.log(kim[x]) // = 1996

var martin = new Object()
martin.name = 'Martin'
martin.birthYear = 1985,
martin['lastName'] = 'Kovinchick'
console.log(martin)

//OBJECTS AND METHODS
var kim = {
  firstName: 'Kim',
  lastName: 'Hermosillo',
  birthYear: 1996,
  family: ['Raquel', 'Leo', 'Melissa', 'Kaylee', 'Leonardo'],
  job: 'software developer',
  isMarried: false,
  calcAge: function(birthYear) {
    this.age = 2018 - this.birthYear
  },
}
console.log(kim.calcAge()) // = 22 years

kim.calcAge()
console.log(kim)

// LOOPS AND ITERATION
// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }

var kim = ['Kim', 'Hermosillo', 1996, 'developer', false]

for (var i = 0; i < kim.length; i++){
  console.log(kim[i])
}
while (i < kim.length) {
  console.log(kim[i])
}

// continue and break statements
var kim = ['Kim', 'Hermosillo', 1996, 'developer', false]
for (var i = 0; i < kim.length; i++) {
  if (typeof kim[i] !== 'string') continue
  console.log(kim[i])
}

for (var i = 0; i < kim.length; i++) {
  if(typeof kim[i] !== 'string') break
  console.log(kim[i])
}

// Calculate the average tip!
var kim ={
  fullName: 'Kimberly Hermosillo',
  bills: [124, 48,268, 180, 42],
  calcTips: function() {
    this.tips = [],
    this.finalValue = []

    for (var i = 0; i < this.bills.length; i++) {
      // DETERMINE PERCENTAGE BASED ON TIPPING RULES
      var percentage
      var bill = this.bills[i]

      if (bill < 50) {
        percentage = .2
      } else if (bill >= 50 && bill < 200) {
        percentage =.15
      } else {
        percentage = 0.1
      }
      // ADD RESULT TO CORRESPONDING ARRAYS
      this.tips[i] = bill * percentage
      this.finalValue[i] = bill + bill + percentage
    }
  },
}

kim.calcTips()
console.log(kim)

// PART 2 
var martin ={
  fullName: 'Martin Kovinchick',
  bills: [77, 475, 229, 184, 48],
  calcTips: function() {
    this.tips = [],
    this.finalValue = []
  
    for (var i = 0; i < this.bills.length; i++) {
      // DETERMINE PERCENTAGE BASED ON TIPPING RULES
      var percentage
      var bill = this.bills[i]
  
      if (bill < 100) {
        percentage = .20
      } else if (bill >= 100 && bill < 300) {
        percentage =.10
      } else {
        percentage = 0.25
      }
      // ADD RESULT TO CORRESPONDING ARRAYS
      this.tips[i] = bill * percentage
      this.finalValue[i] = bill + bill + percentage
    }
  },
}
function calcAverage(tips) {
  var sum = 0
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i]
  }
  return sum / tips.length
}

martin.calcTips()

kim.average = calcAverage(kim.tips)
martin.average = calcAverage(martin.tips)
console.log(kim, martin)

if (kim.average > martin.average) {
  console.log(kim.fullName + 'pays higher tips')
} else if (martin.average > kim.average) {
  console.log(martin.fullName + ' pays higher tips')
}
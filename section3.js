//HOISTING
function calculateAge(year) {
  console.log(2018 - year)
}
calculateAge(1996)
// CALC RETIREMENT
var retirement = function(year) {
  console.log(65 - (2018 - year))
}

retirement(1996)
console.log(age)
var age = 22

function foo() {
  console.log(age)
  var age = 65
  console.log(age)
}
foo()
console.log(age)

// KEYWORD THIS
//console.log(this)

function calculateAge(year) {
  console.log(2016 - year)
  console.log(this)
}

calculateAge(1996)

var kim = {
  name: 'Kimberly',
  yearOfBirth: 1996,
  calculateAge: function () {
    console.log(this)
    console.log(2018 - this.yearOfBirth)

    function innerFunction() {
      console.log(this)
    }
    innerFunction()
  },
}

kim.calculateAge()

var kimmy = {
  name: 'Kimmy',
  yearOfBirth: 1996,
}

kimmy.calculateAge = kim.calculateAge
kimmy.calculateAge() 

//END OF THEORETICAL LECTURES
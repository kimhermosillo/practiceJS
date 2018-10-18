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
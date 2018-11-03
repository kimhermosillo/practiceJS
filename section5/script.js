// FUNCTION CONSTRUCTOR
/*var kim = {
  name: 'Kim',
  yearOfBirth: 1996,
  job: 'developer',
}

var Person = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
  this.calculateAge = function() {
    console.log(2018-yearOfBirth)
  }
}

Person.prototype.calculateAge = function() {
  console.log(2018-yearOfBirth)
}

Person.prototype.lastName = 'Hermosillo'


var kim = new Person('Kim', 1996, 'developer')
var martin = new Person('Martin', 1985, 'jiujitsu')
var amanda = new Person('Amanda', 1995, 'cruiser')


kim.calculateAge()
martin.calculateAge()
amanda.calculateAge()

console.log(kim.lastName)

//they all inherit Hermosillo as a last name due to the prototype.
*/
//CREATING OBJECTS
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth)
  },
}

var kim = Object.create(personProto)

kim.name = 'Kim'
kim.yearOfBirth = 1996
kim.job = 'developer'

var martin = Object.create(personProto, {
  name: { value: 'Martin' },
  yearOfBirth: { value: 1985 },
  job: { value: 'lover' },
})
*/

// PRIMITIVE VS OBJECTS
//PRIMITIVES
var a = 69
var b = a
a = 420
console.log(a)
console.log(b)
// OBJECTS
var obj1 = {
  name: 'Kim',
  age: 22,
}
var obj2 = obj1
obj1.age = 21
console.log(obj1.age)
console.log(obj2.age)
// FUNCTIONS
var age = 22
var obj = {
  name: 'Kim',
  city: 'Mexico City',
}

function change(a, b) {
  a = 22,
  b.city = 'Oaxaca'
}

change(age, obj)

console.log(age)
console.log(obj.city)
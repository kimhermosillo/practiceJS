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
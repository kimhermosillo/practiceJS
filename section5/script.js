// FUNCTION CONSTRUCTOR
var kim = {
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


var kim = new Person('Kim', 1996, 'developer')
var martin = new Person('Martin', 1985, 'jiujitsu')
var amanda = new Person('Amanda', 1995, 'cruiser')


kim.calculateAge()
martin.calculateAge()
amanda.calculateAge()

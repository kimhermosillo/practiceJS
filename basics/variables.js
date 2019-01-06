var firstName = 'Kim'

console.log(firstName)


var locations = []

locations.push('Mexico')
locations.push('Madrid')
locations.push('Barcelona')
locations.push('Iceland')

console.log(locations)

locations.pop()

console.log(locations)

for (var i = 0; i < locations.length; i++) {
  console.log('These are beautiful places: ' + locations[i])
}

var thisYear = {
  goals: 'I plan on starting my career',
  travel: 'I would like to visit at least 4 countries',
  funds: 'I want to save money',
}

var forMe = {
  hair: 'Keep it dark',
  tattoo: 'Get 1-2 more tattoos',
  fitness: 'Workout at least 3-4 times a week.',
  eat: 'Continue being vegan!',
}

var speak = function () {
  console.log(this.forMe.eat)
}

speak()
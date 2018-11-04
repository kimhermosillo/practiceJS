var budgetController = (function() {

  var x = 23
  var add = function (a) {
    return x + a
  }

  return {
    publicTest: function(b) {
      console.log(add(b))
    },
  }

})()

var UIController = (function() {


// Some code

})()


var controller = (function(budgetController, UIController) {

  var z = budgetController.publicTest(5)

  return {
    anotherPublic: function() {
      console.log(z)
    },
  }


})(budgetController, UIController)
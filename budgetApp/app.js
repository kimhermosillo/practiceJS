// BUDGET CONTROLLER

var budgetController = (function() {

  // some code

})()
// UI CONTROLLER
var UIController = (function() {


// Some code

})()

// GLOBAL APP CONTROLLER
var controller = (function(budgetController, UIController) {

  var ctrlAddItem = function () {
    // 1. GET THE FILLED INPUT DATA

    //2. ADD THE ITEM TO THE BUDGET CONTROLLER

    //3. ADD THE NEW ITEM TO UI

    //4. CALCULATE THE BUDGET

    //5. DISPLAY THE BUDGET ON THE UI
    console.log('it works')
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function(event) {
     
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem()
    }

  })


})(budgetController, UIController)



//
// BUDGET CONTROLLER

var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id
    this.description = description
    this.value = value
  }

  var Income = function (id, description, value) {
    this.id = id
    this.description = description
    this.value = value
  }


  var allExpenses = []
  var allIncomes = []
  var totalExpenses = 0

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  }

  return {
    addItem: function (type, des, val) {
      var newItem, ID

      // [1 2 3 4 5], next ID = 6
      //CREATE NEW ID
      if(data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1
      } else {
        ID = 0
      }
        
      // CREATE NEW ITEM BASED ON IN OR EXP TYPE
      if(type === 'exp') {
        newItem = new Expense(ID, des, val)
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val)
      }
      // PUSH IT INTO DATA STRUCTURE
      data.allItems[type].push(newItem)
      // RETURN THE NEW ELEMENT
      return newItem
    },
    testing: function() {
      console.log(data)
    },
  }



})()
// UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
  }

  return {
    getinput: function() {
      return {
        type:
            document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      }
    },
        
    addListItem: function(obj, type) {
      var html, newHtml, element
      // Create HTML string with placeholder text
        
      if (type === 'inc') {
        element = DOMstrings.incomeContainer
            
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer
            
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }

      //REPLACE PLACEHOLDER TEXT WITH ACTUAL DATA
      newHtml = html.replace('%id', obj.id)
      newHtml = newHtml.replace('%description', obj.description)
      newHtml = newHtml.replace('%value', obj.value)
      //INSERT HTML INTO THE DOM
      document.querySelector(element).insertAdjacentHTML('beforehand', newHtml)
    },
        
    getDOMstrings: function() {
      return DOMstrings
    },
  }
})()

// GLOBAL APP CONTROLLER
var controller = (function (budgetController, UIController) {

  var setupEventListeners = function () {
    var DOM = UIController.getDOMstrings()

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem()
      }
    })
  }



  var ctrlAddItem = function () {
    var input, newItem
    // 1. GET THE FILLED INPUT DATA
    input = UIController.getinput()

    //2. ADD THE ITEM TO THE BUDGET CONTROLLER
    newItem = budgetController.addItem(input.type, input.description, input.value)

    //3. ADD THE NEW ITEM TO UI

    //4. CALCULATE THE BUDGET

    //5. DISPLAY THE BUDGET ON THE UI

  }

  return {
    init: function () {
      console.log('Application has started.')
      setupEventListeners()
    },
  }

})(budgetController, UIController)

controller.init()


//
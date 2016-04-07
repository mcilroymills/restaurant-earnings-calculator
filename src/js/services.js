angular.module("myApp").service("mealDataService", [function(){

  var meals = [];
  var totals = {};

  return {
    getMeals: function () {
        return meals;
    },
    getCumulativeTotals: function () {
      return;
    },
    addMeal: function (meal) {
      console.log(meal);
      meals.push(meal);
      console.log(meals);
    },
    resetAll: function () {
      meals = [];
    }
  };
}]);
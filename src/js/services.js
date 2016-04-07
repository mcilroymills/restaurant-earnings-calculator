angular.module("myApp").service("mealDataService", [function(){

  var meals = [
  {
    baseMealPrice: 10,
    taxRate: 6,
    tipPercentage: 18
  },
  {
    baseMealPrice: 14,
    taxRate: 6,
    tipPercentage: 19
  }];

  var totals = {};

  return {
    getMeals: function () {
        return meals;
    },
    getCumulativeTotals: function () {
      var tipTotal = 0;
      var mealCount = 0;
      var averageTip = 0;

      for (var i = 0; i < meals.length; i++) {
        tipTotal += ((meals[i].baseMealPrice * (meals[i].taxRate/100) + meals[i].baseMealPrice)) * (meals[i].tipPercentage / 100);
      }
      mealCount = meals.length;
      averageTip = tipTotal / meals.length;

      return {
        tipTotal: tipTotal,
        mealCount: mealCount,
        averageTip: averageTip
      };
    },
    addMeal: function (meal) {
      meals.push(meal);
    },
    resetAll: function () {
      meals = [];
    }
  };
}]);
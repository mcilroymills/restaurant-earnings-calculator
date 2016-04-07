app.controller('detailsCtrl', ['$scope', "mealDataService", function($scope, mealDataService) {
  $scope.meal = {};
  //Length of the meals array
  $scope.numberOfMeals = mealDataService.getMeals().length;
  $scope.formSubmit = function () {
    mealDataService.addMeal($scope.meal);
    $scope.numberOfMeals = mealDataService.getMeals().length;
  };
}]);

app.controller('chargesCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {

  //Start with first meal
  $scope.mealIndex = 0;
  $scope.meal = mealDataService.getMeals[mealIndex];

  $scope.nextMeal = function () {
    mealIndex++;
  };
  $scope.previousMeal = function () {
    mealIndex--;
  };


}]);

app.controller('earningsCtrl', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);

app.controller('resetCtrl', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);

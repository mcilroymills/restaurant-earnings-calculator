app.controller('detailsCtrl', ['$scope', "mealDataService", function($scope, mealDataService) {
  $scope.meal = {};
  //Length of the meals array
  $scope.numberOfMeals = mealDataService.getMeals().length;
  $scope.formSubmit = function () {
    mealDataService.addMeal($scope.meal);
    $scope.numberOfMeals = mealDataService.getMeals().length;
  };
}]);

app.controller('chargesCtrl', ['$scope', "mealDataService", function($scope, mealDataService) {

  //Start with first meal
  $scope.mealIndex = 0;
  $scope.meal = mealDataService.getMeals()[$scope.mealIndex];

  $scope.nextMeal = function () {
    if ($scope.mealIndex < mealDataService.getMeals().length -1) {
      $scope.mealIndex++;
      $scope.meal = mealDataService.getMeals()[$scope.mealIndex];
    }
  };
  $scope.previousMeal = function () {
    if ($scope.mealIndex > 0) {
      $scope.mealIndex--;
      $scope.meal = mealDataService.getMeals()[$scope.mealIndex];
    }
  };
}]);

app.controller('earningsCtrl', ['$scope', "mealDataService", function($scope, mealDataService) {
  $scope.serviceData = mealDataService.getCumulativeTotals();
}]);

app.controller('resetCtrl', ['$scope', "mealDataService", function($scope, mealDataService) {
  $scope.reset = function () {
    console.log("here");
    mealDataService.resetAll();
  };
}]);

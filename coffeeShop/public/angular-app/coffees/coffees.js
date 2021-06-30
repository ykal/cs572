angular.module("coffeeApp").controller("CoffeesController", CoffeesController);

function CoffeesController($scope, $location, CoffeeDataFactory) {
  CoffeeDataFactory.getAll()
    .then(coffees => {
      $scope.coffees = coffees;
    });

  $scope.goToCoffeeDetail = function (coffeeId) {
    $location.path(`/coffees/${coffeeId}`);
  }
}
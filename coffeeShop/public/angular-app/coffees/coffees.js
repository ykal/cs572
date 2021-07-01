angular.module("coffeeApp").controller("CoffeesController", CoffeesController);

function CoffeesController($scope, $location, CoffeeDataFactory) {
  CoffeeDataFactory.getAll()
    .then(coffees => {
      $scope.coffees = coffees;
    });

  $scope.goToCoffeeDetail = function (coffeeId) {
    $location.path(`/coffees/${coffeeId}`);
  }

  $scope.onAddCoffee = () => {
    CoffeeDataFactory.create($scope.coffee)
      .then(coffee => {
        $scope.coffees.push(coffee);
        $scope.coffee = {};
        $scope.coffeeForm.$setPristine();
      });
  }

  $scope.onDeleteCoffee = (coffeeId) => {
    CoffeeDataFactory.removeById(coffeeId)
      .then(res => {
        $scope.coffees = [
          ...($scope.coffees.filter(coffee => coffee._id !== coffeeId))
        ];
      });
  }
}
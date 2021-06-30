
angular.module("coffeeApp").controller("CoffeeController", CoffeeController);

function CoffeeController($scope, $routeParams, CoffeeDataFactory) {
  CoffeeDataFactory.getOneById($routeParams.coffeeId)
    .then(coffee => {
      $scope.coffee = coffee;
      const coffeeContainer = document.getElementById("coffee");
      coffeeContainer.style.background = `url("${coffee.imageUrl}")`;
      console.log(`${coffee.imageUrl})`)
    });
}
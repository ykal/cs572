angular.module("coffeeApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/coffees/coffees.html",
      controller: "CoffeesController"
    })
    .when("/coffees/:coffeeId", {
      templateUrl: "angular-app/coffee/coffee.html",
      controller: "CoffeeController"
    })
    .otherwise({
      redirectTo: "/"
    });
}
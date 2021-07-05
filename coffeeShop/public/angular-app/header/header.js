angular.module("coffeeApp").directive("header", Header);

function Header() {
  return {
    templateUrl: "angular-app/header/header.html",
    restrict: "E",
  }
}
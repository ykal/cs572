angular.module("meanGames").directive("gameRating", GameRating);

function GameRating() {
  return {
    templateUrl: "angular-app/game-rating/game-rating.html",
    restrict: "E",
    scope: {
      stars: "=stars"
    }
  }
}
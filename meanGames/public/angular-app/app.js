angular.module("meanGames", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/games/games.html",
      controller: "GamesController"
    })
    .when("/games/:id", {
      templateUrl: "angular-app/game/game.html",
      controller: "GameController"
    })
    .otherwise({
      redirectTo: "/"
    });
};
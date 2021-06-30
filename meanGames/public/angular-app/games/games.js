angular.module("meanGames").controller("GamesController", GamesController);

function GamesController($scope, GameDataFactory) {
  $scope.title = "games";
  GameDataFactory.getAll()
    .then(games => {
      $scope.games = games;
    });
}
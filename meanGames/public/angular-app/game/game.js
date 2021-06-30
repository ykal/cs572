angular.module("meanGames").controller("GameController", GameController);

function GameController($scope, $routeParams, GameDataFactory) {
  GameDataFactory.getOneById($routeParams.id)
    .then(game => {
      $scope.game = game;
      const stars = [];
      let rate = game.rate;
      while (rate > 0) {
        stars.push(rate);
        rate--;
      }
      $scope.stars = stars;
    });
}
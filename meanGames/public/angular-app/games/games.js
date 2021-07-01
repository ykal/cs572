angular.module("meanGames").controller("GamesController", GamesController);

function GamesController($scope, GameDataFactory) {
  $scope.title = "games";

  GameDataFactory.getAll()
    .then(games => {
      $scope.games = games;
    });

  $scope.onAddGame = () => {
    GameDataFactory.create($scope.game)
      .then(game => {
        $scope.games.push(game);
        $scope.game = {};
        $scope.gameForm.$setPristine();
      });
  }

  $scope.onDeleteGame = (gameId) => {
    GameDataFactory.removeById(gameId)
      .then(res => {
        $scope.games = [
          ...($scope.games.filter(game => game._id !== gameId))
        ];
      });
  }
}

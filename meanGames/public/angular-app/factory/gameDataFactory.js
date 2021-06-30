angular.module("meanGames").factory("GameDataFactory", GameDataFactory);

function GameDataFactory($http) {
  return {
    getAll: () => getAll($http),
    getOneById: (gameId) => getOneById($http, gameId)
  }
}

function getAll(http) {
  return http.get("/api/games")
    .then(res => res.data)
    .catch(error => console.log(error));
}


function getOneById(http, gameId) {
  return http.get(`/api/games/${gameId}`)
    .then(res => res.data)
    .catch(error => console.log(error));
}
angular.module("meanGames").factory("GameDataFactory", GameDataFactory);

function GameDataFactory($http) {
  return {
    getAll: () => getAll($http),
    getOneById: (gameId) => getOneById($http, gameId),
    create: (game) => create($http, game),
    removeById: (gameId) => removeById($http, gameId)
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

function create(http, game) {
  return http.post(`/api/games`, game)
    .then(res => res.data)
    .catch(error => console.log(error));
}

function removeById(http, gameId) {
  return http.delete(`/api/games/${gameId}`)
    .then(res => res.data)
    .catch(error => console.log(error));
}
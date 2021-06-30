"use strict"

const COFFEE_API = "/api/coffees";

angular.module("coffeeApp").factory("CoffeeDataFactory", CoffeeDataFactory);

function CoffeeDataFactory($http) {
  return {
    getAll: () => getAll($http),
    getOneById: (coffeeId) => getOneById($http, coffeeId)
  };
};

function getAll($http) {
  return $http.get(COFFEE_API)
    .then(res => res.data)
    .catch(error => console.log(error));
}

function getOneById($http, coffeeId) {
  return $http.get(`${COFFEE_API}/${coffeeId}`)
    .then(res => res.data)
    .catch(error => console.log(error));
}

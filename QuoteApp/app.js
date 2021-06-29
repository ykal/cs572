var app = angular.module("app", ["ngRoute"]);

app.config(config);

function config($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "quotes/quotes.html",
    controller: "QuoteController",
  }).when("/random", {
    templateUrl: "randomQuote/randomQuote.html",
    controller: "RandomQuoteController",
  }).otherwise({
    redirectTo: "/"
  });
}
// https://api.quotable.io/random
app.controller("QuoteController", function ($scope, $http) {
  $http.get("https://api.quotable.io/quotes?page=1")
    .then(res => {
      console.log(res);
      $scope.quotes = res.data.results;
    })
    .catch(err => {
      console.log(err);
    });
})

app.controller("RandomQuoteController", function ($scope, $http) {
  $http.get("https://api.quotable.io/random")
    .then(res => {
      $scope.quote = res.data;
    })
    .catch(err => {
      console.log(err);
    });
});

app.factory("QuoteFactory", QuoteFactory);

function QuoteFactory($http) {
  return {
    getQuotes: getQuotes, getRandom: getRandom
  };
  function getQuotes() {
    return $http.get("https://api.quotable.io/quotes?page=1");
  }
  function getRandom() {
    return $http.get("https://api.quotable.io/random");
  }
}



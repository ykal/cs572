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



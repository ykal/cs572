var app = angular.module("app", ["ngRoute"]);

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

app.config(config);







app.controller("QuoteController", function ($scope, QuoteFactory) {
  QuoteFactory.getQuotes()
    .then(res => {
      $scope.quotes = res.results;
    });
});

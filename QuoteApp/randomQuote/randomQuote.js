app.controller("RandomQuoteController", function ($scope, QuoteFactory) {
  QuoteFactory.getRandom()
    .then(quote => {
      $scope.quote = quote;
    });
});
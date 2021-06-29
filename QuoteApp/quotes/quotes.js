app.controller("QuoteController", function ($scope, $http) {
  $http.get("https://api.quotable.io/quotes?page=1")
    .then(res => {
      console.log(res);
      $scope.quotes = res.data.results;
    })
    .catch(err => {
      console.log(err);
    });
});
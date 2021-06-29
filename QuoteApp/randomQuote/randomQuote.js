app.controller("RandomQuoteController", function ($scope, $http) {
  $http.get("https://api.quotable.io/random")
    .then(res => {
      $scope.quote = res.data;
    })
    .catch(err => {
      console.log(err);
    });
});
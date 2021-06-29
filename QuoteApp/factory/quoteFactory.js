
app.factory("QuoteFactory", QuoteFactory);

function QuoteFactory($http) {
  return {
    getQuotes: getQuotes, getRandom: getRandom
  };
  function getQuotes() {
    return $http.get("https://api.quotable.io/quotes?page=1")
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });
  }
  function getRandom() {
    return $http.get("https://api.quotable.io/random")
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });;
  }
}
angular.module("meanGames", ["ngRoute", "angular-jwt"]).config(config).run(run);

function run($rootScope, AuthDataFactory, $location) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    if (!AuthDataFactory.isAuthenticated() && next.$$route.restricted && next.$$route.restricted.authenticated) {
      $location.path("");
    } else if (AuthDataFactory.isAuthenticated() && next.$$route.restricted && next.$$route.restricted.unAuthenticated) {
      $location.path("");
    }
  });
}


function config($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('Interceptor');

  $routeProvider
    .when("/", {
      templateUrl: "angular-app/games/games.html",
      controller: "GamesController"
    })
    .when("/games/:id", {
      templateUrl: "angular-app/game/game.html",
      controller: "GameController"
    })
    .when("/register", {
      templateUrl: "angular-app/register/register.html",
      controller: "RegisterController",
      restricted: { unAuthenticated: true, authenticated: false }
    })
    .when("/profile", {
      templateUrl: "angular-app/profile/profile.html",
      restricted: { unAuthenticated: false, authenticated: true }
    })
    .otherwise({
      redirectTo: "/"
    });
};

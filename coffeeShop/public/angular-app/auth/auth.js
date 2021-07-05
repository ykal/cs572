angular.module('coffeeApp').controller("AuthController", AuthController);

const TOKEN_NAME = "token";

function AuthController($scope, $window, $location, AuthDataFactory, jwtHelper) {
  $scope.user = $scope.user || {};

  $scope.isAuthenticated = AuthDataFactory.isAuthenticated;

  if ($scope.isAuthenticated()) {
    restoreLoggedInUserInfo($window.sessionStorage[TOKEN_NAME]);
  }

  // if ($scope.isAuthenticated()) {
  //   restoreLoggedInUserInfo($window.sessionStorage[TOKEN_NAME], $scope);
  // }

  $scope.login = () => {
    if ($scope.user.username && $scope.user.password) {
      AuthDataFactory.login($scope.user)
        .then(res => {
          $window.sessionStorage[TOKEN_NAME] = res.token;
          restoreLoggedInUserInfo(res.token, $scope);
          $location.path("");
        });
    }
  }
  function restoreLoggedInUserInfo(token) {
    const decodedToken = jwtHelper.decodeToken(token);
    $scope.loggedInUser = decodedToken;
  }

  $scope.logout = () => {
    delete $window.sessionStorage[TOKEN_NAME];
    $location.path("");
  }
}


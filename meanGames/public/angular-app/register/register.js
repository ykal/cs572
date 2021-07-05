
angular.module("meanGames").controller("RegisterController", RegisterController);

function RegisterController($scope, AuthDataFactory) {
  $scope.user = {};
  $scope.message = "";
  $scope.onRegister = () => {

    const user = $scope.user;
    console.log(user);
    if (!user.username || !user.name || !user.password || !user.rePassword) {
      $scope.err = "Please make sure you fill all the fields";
    } else if (user.password !== user.rePassword) {
      $scope.err = "Please make sure the passwords match"
      console.log("here")
    } else {
      console.log("here")
      AuthDataFactory.register({ username: user.username, password: user.password, name: user.name })
        .then(res => {
          console.log(res);
          $scope.message = "Successfull registration, please login";
          $scope.user = {};
        })
        .catch(err => {
          console.log(err);
          $scope.message = "Error while registering user";
        })
    }
  }
}
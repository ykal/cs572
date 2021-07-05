angular.module("meanGames").factory("AuthDataFactory", AuthDataFactory);

function AuthDataFactory($http, $window) {
  return {
    register: (user) => register($http, user),
    login: (user) => login($http, user),
    isAuthenticated: () => {
      return $window.sessionStorage[TOKEN_NAME];
    }
  }
}

function register(http, user) {
  return http.post("/api/auth/register", user)
    .then(res => res.data)
    .catch(error => console.log(error));
}


function login(http, user) {
  return http.post(`/api/auth/login`, user)
    .then(res => res.data)
    .catch(error => console.log(error));
}
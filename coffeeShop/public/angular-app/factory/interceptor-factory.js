angular.module("coffeeApp").factory("Interceptor", Interceptor);

function Interceptor($window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = $window.sessionStorage['token'];
      return config;
    },
  }
}
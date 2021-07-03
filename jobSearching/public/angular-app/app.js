"use strict"

angular.module("jobSearch", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "../angular-app/jobs-list/jobs-list.html",
    controller: "JobsListController"
  })
    .when("/jobs/:jobId", {
      templateUrl: "../angular-app/job-detail/job-detail.html",
      controller: "JobDetailController"
    })
    .otherwise({
      redirectTo: "/"
    });
}
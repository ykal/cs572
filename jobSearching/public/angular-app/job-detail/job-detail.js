"use strict"

angular.module("jobSearch").controller("JobDetailController", JobDetailController);

function JobDetailController($scope, $routeParams, JobDataFactory) {

  JobDataFactory.getOneById($routeParams.jobId)
    .then(job => {
      $scope.job = job;
    });
}
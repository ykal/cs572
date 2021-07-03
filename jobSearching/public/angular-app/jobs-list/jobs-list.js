"use strict"

angular.module("jobSearch").controller("JobsListController", JobsListController);

function JobsListController($scope, $location, JobDataFactory) {
  JobDataFactory.getAll()
    .then(jobs => {
      $scope.jobs = jobs;
    });

  const createJob = () => {
    $scope.job.skills = getSkillsArray($scope.job.skills);
    // todo: replace coordinate from the user input
    JobDataFactory.create({ ...$scope.job, coordinates: [-7.44, 27.53] })
      .then(newJob => {
        $scope.jobs.push(newJob);
        resetForm();
      });
  }

  const updateJob = () => {
    $scope.job.skills = getSkillsArray($scope.job.skills);
    // todo: replace coordinate from the user input
    JobDataFactory.update({ ...$scope.job, coordinates: [-7.44, 27.53] })
      .then(updatedJob => {
        const jobIndex = $scope.jobs.findIndex(item => item._id === $scope.job._id);
        $scope.jobs[jobIndex] = $scope.job;
        resetForm();
      });
  }

  $scope.onJobFormSubmitted = () => {
    if ($scope.jobForm.$valid) {
      $scope.job._id ? updateJob() : createJob();
    } else {
      console.log("invalid")
      $scope.message = "Please fill the form properly";
    }
  }

  $scope.navigateToJob = (jobId) => {
    $location.path(`jobs/${jobId}`);
  }

  $scope.onRemoveJob = (jobId) => {
    JobDataFactory.removeById(jobId)
      .then(res => {
        $scope.jobs = [
          ...($scope.jobs.filter(item => item._id !== jobId))
        ];
      })
  }

  $scope.editJob = (job) => {
    $scope.job = { ...job };
    $scope.job.skills = job.skills.join(", ");
    $scope.job.address = job.location.address;
  }

  function resetForm() {
    $scope.message = "";
    $scope.job = {};
    $scope.jobForm.$setPristine();
  }

  function getSkillsArray(rawSkills) {
    if (!rawSkills) return [];
    console.log(rawSkills)
    return rawSkills.split(",").map(skill => skill.trim());
  }
}

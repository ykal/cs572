"use strict"

const JOB_API = "/api/jobs";

angular.module("jobSearch").factory("JobDataFactory", JobDataFactory);


function JobDataFactory($http) {
  return {
    getAll: () => getAll($http),
    getOneById: (jobId) => getOneById($http, jobId),
    removeById: (jobId) => removeById($http, jobId),
    create: (job) => create($http, job),
    update: (job) => update($http, job)
  }
}

function getAll(http) {
  return http.get(JOB_API)
    .then(res => res.data)
    .catch(error => console.log(errror));
}

function getOneById(http, jobId) {
  return http.get(`${JOB_API}/${jobId}`)
    .then(res => res.data)
    .catch(error => console.log(error))
}

function removeById(http, jobId) {
  return http.delete(`${JOB_API}/${jobId}`)
    .then(res => res.data)
    .catch(error => console.log(error))
}

function create(http, job) {
  return http.post(JOB_API, job)
    .then(res => res.data)
    .catch(error => console.log(error));
}
function update(http, job) {
  return http.put(`${JOB_API}/${job._id}`, job)
    .then(res => res.data)
    .catch(error => console.log(error));
}
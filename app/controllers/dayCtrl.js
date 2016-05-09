"use strict";

var app = angular.module('auApp');

app.service("dailyService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('app/data/day.json').then(function (response){
        deferred.resolve(response.data);
    });

    this.getdays = function () {
        return deferred.promise;
    };
})

angular
.module('auApp')
.controller('dayCtrl', ['$scope', 'dailyService', '$location', function($scope, dailyService, $location) {

  var promise = dailyService.getdays();
  promise.then(function (data){
      $scope.days = data.days;
  });
}])

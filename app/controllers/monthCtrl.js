"use strict";

var app = angular.module('auApp');

app.service("monthlyService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('app/data/month.json').then(function (response){
        deferred.resolve(response.data);
    });

    this.getmonths = function () {
        return deferred.promise;
    };
})

angular
.module('auApp')
.controller('monthCtrl', ['$scope', 'monthlyService', '$location', function($scope, monthlyService, $location) {

  var promise = monthlyService.getmonths();
  promise.then(function (data){
      $scope.months = data.months;
  });
}])

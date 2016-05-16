"use strict";

var app = angular.module('auApp');

app.service("contractService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('app/data/contract.json').then(function (response){
        deferred.resolve(response.data);
    });

    this.getcontract = function () {
        return deferred.promise;
    };
})

angular
.module('auApp')
.controller('contractCtrl', ['$scope', 'contractService', '$location', function($scope, contractService, $location) {

  var promise = contractService.getcontract();
  promise.then(function (data){
      $scope.contract = data.contract;
  });
}]);

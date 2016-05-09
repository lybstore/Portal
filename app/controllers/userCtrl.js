"use strict";

var app = angular.module('auApp');

app.service("userService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('app/data/user.json').then(function (response){
        deferred.resolve(response.data);
    });

    this.getuser = function () {
        return deferred.promise;
    };
})

angular
.module('auApp')
.controller('userCtrl', ['$scope', 'userService', '$location', function($scope, userService, $location) {

  var promise = userService.getuser();
  promise.then(function (data){
      $scope.users = data.users;
  });
}])

"use strict";

var app = angular.module('auApp');

app.service("userService", function ($http, $q, $localStorage){
    var deferred = $q.defer();
    $http.get('app/data/user.json').then(function (response){
        var user = response.data.users.filter(function(userInfo){
          return userInfo.name == $localStorage.profile.name && userInfo.password == $localStorage.profile.password;
        })
        deferred.resolve(user);
    });

    this.getuser = function () {
        return deferred.promise;
    };
})

angular
.module('auApp')
.controller('userCtrl', ['$scope', 'userService', '$location', '$localStorage', function($scope, userService, $location, $localStorage) {
  console.log($localStorage);
  var promise = userService.getuser();
  promise.then(function (data){
      $scope.user = data[0];
  });

  $scope.myDate = new Date();
  $scope.convertToDate = function (stringDate) {
    var dateOut = new Date(stringDate);
    //dateOut.setDate(dateOut.getDate());
    return dateOut;
  };

}])

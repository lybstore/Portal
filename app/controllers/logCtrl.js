"use strict";

var app = angular.module('auApp');

app.service("loginService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('app/data/user.json').then(function (response){
        deferred.resolve(response.data);
    });

    this.getuser = function () {
        return deferred.promise;
    };
})
// load $location
.controller('logCtrl', ['$scope', 'auth', '$location', '$timeout', '$localStorage', function($scope, auth, $location, $timeout, $localStorage) {
    // assign Auth get user services to $scope.getUser variable
    $scope.getUser = GetUser;

    // Get the user collection from the auth service
    function GetUser(){
        auth.getUser()
            .then(function(result){
                $scope.users =  result.data.users;
            }, function(err){

            })
    }

    $scope.getUser();

    // When the Sign in form is submitted (click on button or enter)
    $scope.signIn = function () {
       var isExist = $scope.users.filter(function(userCredentials){
            return (userCredentials.password == $scope.password && userCredentials.user == $scope.username);
        })
       if (isExist.length != 0){
            $localStorage.profile = isExist[0];
            $location.url('/profile');
       }else{
        $scope.message = "Wrong credentials";
        $timeout(function(){
            $scope.message = null;
        }, 3000)
       }

    };
}]);

(function(){
  'use strict';
    angular.module('auApp')
      .service('auth', Service);

    Service.$inject = ['$http', '$localStorage', '$q'];
    function Service($http, $localStorage, $q){
      this.getUser = GetUser;
      this.isLoggedIn = CheckUser;

      function GetUser(){
        return $http.get('app/data/user.json');
      }

      function CheckUser(){
        return $localStorage.profile;
      }

    }

})();
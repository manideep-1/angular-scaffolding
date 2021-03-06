'use strict';

/**
 * @ngdoc function
 * @name basicappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the basicappApp
 */
angular.module('basicappApp')
  .controller('AboutCtrl', function ($scope,$timeout,$location) {
    $timeout(function () {
      $scope.firstname = "anudeep";
    }, 2000);
    $scope.myUrl = $location.absUrl();
    
    $scope.firstname='Manideep';
    $scope.master = {firstName:"John", lastName:"Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  angular.module('basicappApp')
.directive("w3TestDirective", function() {
    return {
        template : "<h1>h1-Made by a directive!(custom directive)</h1>"
    };
});

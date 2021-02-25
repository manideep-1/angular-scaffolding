'use strict';

/**
 * @ngdoc function
 * @name basicappApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the basicappApp
 */
angular.module('basicappApp')
  .controller('FormCtrl', function ($scope,$timeout,$location) {
    $timeout(function () {
      $scope.firstname = "anudeep";
    }, 2000);
    // console.log("form controller")
    $scope.myUrl = $location.absUrl();
    $scope.firstname='Manideep';
    // console.log(myUrl)
    // $scope.master = {firstName:"John", lastName:"Doe"};
    // $scope.reset = function() {
    //     $scope.user = angular.copy($scope.master);
    // };
    // $scope.reset();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
.directive("w3TestDirective", function() {
    return {
        template : "<h1>h1-Made by a directive!(custom directive)</h1>"
    };
});

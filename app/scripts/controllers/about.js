'use strict';

/**
 * @ngdoc function
 * @name basicappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the basicappApp
 */
angular.module('basicappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.firstname='Manideep'
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

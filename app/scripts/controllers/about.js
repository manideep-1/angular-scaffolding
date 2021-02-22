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

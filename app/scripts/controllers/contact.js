'use strict';

/**
 * @ngdoc function
 * @name basicappApp.controller:ContactCtrl
 * @description
 * # contactCtrl
 * Controller of the basicappApp
 */
// angular.module('contact')
//   .controller('ContactCtrl', function ($scope) {
//     $scope.name="Manideep"
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
    
//   });


angular.module('basicappApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.name="Manideep"
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
  });

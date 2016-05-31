/**
 * Created by Suren on 25-05-2016.
 */

angular.module('frontend', [
    'ngRoute',
    'frontend.todo'
  ])
  .config(function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/todo', {
        controller: 'TodoCtrl',
        templateUrl: '/frontend/todo/todo.html'
      })
      
      .otherwise({
        redirectTo: '/todo'
      });
  });

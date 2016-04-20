// Instance App Module
var app = angular.module('SystemApp', [
  'ui.router'
  ]);

// Main Controller 
app.controller('mainController', function ($scope) {

        $scope.todos = [
            {
                text: "Hello"
            }, {
                text: "World"
            }
        ]
})
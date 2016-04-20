var app = angular.module('SystemApp', [], function () {

}).controller('mainController', function ($scope) {

        $scope.todos = [
            {
                text: "Hello"
            }, {
                text: "World"
            }
        ]
})
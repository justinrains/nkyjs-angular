var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/presenters.json').success(function(data) {
        $scope.presenters = data;
//        $scope.presenterOrder = $scope.options[1];
    });
}]);


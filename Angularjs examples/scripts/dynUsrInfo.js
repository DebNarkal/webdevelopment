(function () {
    "use strict";
    var app = angular.module("hello", []);
    app.controller("hi", function ($scope, $http) {
        $scope.Uname = "angular";
        var onUserComplete = function (response) {
                $scope.user = response.data;
            };
        
        $scope.searchValue = function () {
            
            $http.get("https://api.github.com/users/" + $scope.Uname).then(onUserComplete);
        };

    });
}());
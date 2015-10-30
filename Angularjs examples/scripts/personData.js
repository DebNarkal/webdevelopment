
(function(){
    var app=angular.module("myApp",[]);
    app.controller("MainController",function ($scope) {
        "use strict";
        var persons = {
            firstName: "Blue",
            lastName: "whale"
        };
            $scope.person = persons;
    });
    
    
    
    app.controller("githubController",function ($scope, $http){
        //write code here
        var onUserComplete=function(response){
        $scope.users = response.data;
        };
        
        $http.get("https://api.github.com/users/DebNarkal")
                .then(onUserComplete);
    });
    
    function fb($scope,$http){
        var onUserComplte=function(response){
            $scope.nusers = response.data;
        };
        
        $http.get("https://api.github.com/users/DebNarkal").then(onUserComplte);
    };
    app.controller("newgithubController",["$scope","$http",fb]);
}());

    
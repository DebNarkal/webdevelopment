(function () {
    "use strict";
    var myApp = angular.module("myapp", []);

    var ctrlApp = function ($scope, $http) {
        var onComplete = function(response) {
            $scope.tableData = response.data;
        };
        
        var onError = function (reason) {
            $scope.error = "Could not fetch data";
        };
        
        
            $http.get("json files/tables.json").then(onComplete, onError);
            $scope.user="debasis";
        
    };
    
    var userInfo=function ($scope,$http,$locaion,$anchorScroll) {
        var completeLoading=function(response){
            $scope.userData=response.data;
            $locaion.hash("usrdet")
            $anchorScroll();
        }
        
        $http.get("json files/githubapi.json").then(completeLoading);
    }
    
    myApp.controller('ctrl', ["$scope", "$http", ctrlApp]);
    myApp.controller('usrdata',["$scope","$http","$location","$anchorScroll",userInfo]);
}());
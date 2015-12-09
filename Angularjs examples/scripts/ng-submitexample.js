(function () {
    "use strict";
    //do something here
    var app=angular.module("myApp",[]);
    
    
    var searchController=function($scope,$http) {
        var onComplete=function(response){
            $scope.user=response.data;
        };
    var onError=function(reason) {
        $scope.user=reason.data;
    }
    
        $scope.search = function(){
            $http.get("json files/"+$scope.username+".json").then(onComplete,onError);
        }
        
    };
    app.controller("formController",["$scope","$http",searchController])
}());
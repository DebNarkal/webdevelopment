// Code goes here
(function(){
  
  var control = function($scope,$http){
    $scope.userName="angular";
    
    
    var retreivedata = function(response){
      $scope.user=response.data;
      
      $http.get($scope.user.repos_url).then(onRepos);
    };
    var onRepos = function(response){
      $scope.repos = response.data;
    };
    
    $scope.search = function(username){
      $http.get("https://api.github.com/users/"+username)
    .then(retreivedata);
    };
  };
  var myapp = angular.module("myApp",[]);
  myapp.controller("MainController",["$scope","$http",control]);
}());


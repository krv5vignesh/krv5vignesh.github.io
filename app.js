var app = angular.module("DemoApp", []);

app.controller("DemoCtrl", function($scope){
    $scope.obj = [];
    $scope.add = function(){
        $scope.obj.push({'name': $scope.name,'age':$scope.age,'destination' : $scope.destination, 'salary' : $scope.salary});
        $scope.Show = "true";
    }
    $scope.assign = function(){
        $scope.aname = "Bruce Wayne";
        $scope.aage = 42;
        $scope.adestination = "CEO fo Wayne Enterprises";
        $scope.asalary = 10000000000;
        $scope.asalary;
    }
});
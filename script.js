var app = angular.module("studentApp",[]);
app.controller("studentCtrl" , ["$scope",function($scope) {
	$scope.data = [
	{ Name : "Kathan", lastName : "Shah", DBMS : 29, DSA : 25, OS : 26, WT : 28, CO : 27},
	{ Name : "Dhwanil", lastName : "Shah", DBMS : 1, DSA : 2, OS : 1 , WT : 2, CO : 1},
	{ Name : "Harshit", lastName : "Shah", DBMS : 1, DSA : 2, OS : 1 , WT : 2, CO : 1},
	{ Name : "Milind", lastName : "Shah", DBMS : 1, DSA : 2, OS : 1 , WT : 2, CO : 1}
	];
}]);

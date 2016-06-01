// public/core.js
var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};



    // when submitting the add form, send the text to the node API
    $scope.runW2V = function() {
        $http.post('/api/input', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.words = data;
                for(d in data){
                    console.log(d)
                }
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
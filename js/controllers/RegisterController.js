app.controller('RegisterController', ['$scope', function ($scope) {
    $scope.register = function (userData) {
        userData.register(userData);
    }
}]);
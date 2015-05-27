app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication) {

    function loginUser(user) {
        var resource = $resource(baseServiceUrl + 'api/users/login')
            .save(user);

        resource.$promise
            .then(function (data) {
                authentication.saveUser(data);
            });

        return resource;
    }

    function registerUser(user) {
        var resource = $resource(baseServiceUrl + 'api/users/register')
            .save(user);

        resource.$promise
            .then(function (data) {
                authentication.saveUser(data);
            });

        return resource;
    }

    function logoutUser() {
        return $resource(baseServiceUrl + 'api/users/logout')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.removeUser();
            });
    }

    return {
        login: loginUser,
        register: registerUser,
        logout: logoutUser
    }
}]);
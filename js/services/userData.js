app.factory('userData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl, paramDefaults, actions);

    function loginUser(userData) {

    }

    function registerUser(userData) {

    }

    function logoutUser() {

    }

    return {
        login: loginUser,
        register: registerUser,
        logout: logoutUser
    }
}]);
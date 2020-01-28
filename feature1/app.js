angular.module('app', ['ngMaterial']);

// Inline Annotation
angular.module('app').controller('main', ['$scope', function ($scope) {

    // TODO: MOVE JSON DATA SOURCE TO A SERVICE ()
    const data = {
        american: ['pizza', 'burgers', 'hotdogs'],
        desserts: ['ice cream', 'waffles']
    }
    $scope.data = data;
}]);

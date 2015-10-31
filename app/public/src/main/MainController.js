(function() {

    angular
        .module('main')
        .controller('MainController', [
        '$scope', '$http',
        MainController
    ]);

    /**
   * Main Controller
   * @param $scope
   * @param $http
   * @constructor
   */
    function MainController($scope, $http) {
        $scope.down = false;
        //Shutdown control
        $scope.shutdown = function() {
            $scope.enableShutdown = false;
            $scope.down = true;
            $http({url: '/shutdown', method: 'GET'});
        };

        //Volume control
        $scope.changeVolume = function() {
            $http({url: '/volume/setVolume/' + $scope.volume, method: 'GET'});
        };
        $http({url: '/volume/getVolume', method: 'GET'}).success(function(data) {
            $scope.volume = data.volume;
        });
    }

})();

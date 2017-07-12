//tabbar控制器
angular.module('app').controller('TabbarController',['$scope',function ($scope) {
    $scope.change =function (index) {
        $scope.id = index;
        // console.log($scope.id);
        $scope.navTitle = $scope.titleList[$scope.id]

    }

}]);

//总控制器
angular.module('app').controller('AppController',['$scope','$location','$window',function ($scope,$location,$window) {
    $scope.title = '今日一刻';
    $scope.id = 0;
    $scope.titleList = ['今日一刻','作者','栏目','我'];
    $scope.navTitle = $scope.titleList[$scope.id];
    $scope.isDetail = false;

    $scope.location = $location;
    $scope.$watch('location.url()',function (newV,oldV) {
        var isdetailNum = newV.toString().indexOf('detail');
        if(isdetailNum == -1){
            $scope.isDetail = false;
        }else{
            $scope.isDetail = true;
        }
    });

    $scope.back = function () {
        $window.history.back()
    }
}]);

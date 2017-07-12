//Home控制器
angular.module('app').controller('HomeController',['$scope','myHttp',function ($scope,myHttp) {
    //http://127.0.0.1/angular/home.php
    // $http({
    //     url:'http://127.0.0.1/angular/home.php',
    //     method:'jsonp'
    //
    // }).then(function (regs) {
    //     console.log(regs);
    //     $scope.homeData = regs.data;
    //
    // }).catch(function (err) {
    //     console.log(err);
    // });
    myHttp.jsonp('http://127.0.0.1/angular/home.php',null,function (regs) {
        $scope.homeData = regs;
    },function (err) {
        console.log(err);
    });

    $scope.detail = function (index) {
        // console.log(index);
        $scope.detailData = $scope.homeData.posts[index];
        // console.log($scope.detailData);
    }
}]);

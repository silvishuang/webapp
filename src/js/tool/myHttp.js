angular.module('app').service('myHttp',['$scope','$http',function ($scope,$http) {
    this.jsonp = function (url,params,success,error) {
        $http({
            url:url,
            method:'jsonp',
            params:params
        }).then(function (regs) {
            // console.log(regs);
            success(regs.data)
        }).catch(function (err) {
            // console.log(err);
            error(err)
        });
    }



}]);

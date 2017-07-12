//自定义detail指令
angular.module('app').directive('homeDetail',function () {
    return{
        restrict:'EA',
        template:'<div></div>',
        link:function ($scope,ele,attr) {
            ele.html($scope.detailData.content)
        }
    }
});

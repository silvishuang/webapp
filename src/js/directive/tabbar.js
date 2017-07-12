//自定义tabbar指令
angular.module('app').directive('tabbar',function () {
    return{
        restrict:'EA',
        templateUrl:'../view/tabbar_tpl.html',
        controller:'TabbarController'
    }
});

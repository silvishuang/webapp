//自定义nav指令
angular.module('app').directive('navs',function () {
    return{
        restrict:'EA',
        templateUrl:'../view/nav_tpl.html'
        // controller:'NavController'
    }

});

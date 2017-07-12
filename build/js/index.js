var app = angular.module('app',['ui.router']);
//路由设置
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/home',
        views:{
            home:{
                templateUrl:'../view/home_tpl.html',
                controller:'HomeController'
            },
            author:{
                template:'<h1>author</h1>'
            },
            content:{
                template:'<h1>content</h1>'
            },
            my:{
                template:'<h1>my</h1>'
            }
        }
    }).state('home.list',{
        url:'/list',
        templateUrl:'view/home_list_tpl.html'

    }).state('home.detail',{
        url:'/detail',
        template:'<div home-detail class="home_detail">test</div>'
    });

    $urlRouterProvider.otherwise('/home/list')
}]);

//白名单设置
angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://127.0.0.1/angular/**'
    ])
}]);

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

//tabbar控制器
angular.module('app').controller('TabbarController',['$scope',function ($scope) {
    $scope.change =function (index) {
        $scope.id = index;
        // console.log($scope.id);
        $scope.navTitle = $scope.titleList[$scope.id]

    }

}]);

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

//自定义nav指令
angular.module('app').directive('navs',function () {
    return{
        restrict:'EA',
        templateUrl:'../view/nav_tpl.html'
        // controller:'NavController'
    }

});

//自定义tabbar指令
angular.module('app').directive('tabbar',function () {
    return{
        restrict:'EA',
        templateUrl:'../view/tabbar_tpl.html',
        controller:'TabbarController'
    }
});

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

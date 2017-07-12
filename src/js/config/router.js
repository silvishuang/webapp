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

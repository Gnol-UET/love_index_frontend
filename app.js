angular.module('app', ['ui.router',
    'aboutModule',
    'featureModule',
    'formModule',
    'ajaxModule',
    'plusModule',
    'todoModule',
    'loveModule',
    'findLoverModule',
    'contactModule'
    ])
    .config(function ($stateProvider, $urlRouterProvider,$sceDelegateProvider ) {
        $sceDelegateProvider.resourceUrlWhitelist(['**']);
        $urlRouterProvider.otherwise('/love');
        $stateProvider
        // nested list with custom controller
            .state('home', { //Định nghĩa 1 state
                url: '/home',     //Khai báo URl hiển thị
                templateUrl: 'modules/home.html', //Đường dẫn view
                controller: 'homeController'   //Khai báo Controller phụ vụ state này
            })


    });

angular.module('app')
    .controller('homeController', function ($scope /*,injectables */) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
    });
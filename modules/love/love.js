//Nhớ thêm tên module vào app.js
angular.module('loveModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('love', { //Định nghĩa 1 state
                url: '/love',     //Khai báo URl hiển thị
                templateUrl: 'modules/love/love.html', //Đường dẫn view: modules/about/about.html
                controller: 'loveController'   //Khai báo Controller phụ vụ state này
            })


    });

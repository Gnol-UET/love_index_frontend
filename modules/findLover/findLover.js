//Nhớ thêm tên module vào app.js
angular.module('findLoverModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('findLover', { //Định nghĩa 1 state
                url: '/findLover',     //Khai báo URl hiển thị
                templateUrl: 'modules/findLover/findLover.html', //Đường dẫn view: modules/about/about.html
                controller: 'findLoverController'   //Khai báo Controller phụ vụ state này
            })


    });

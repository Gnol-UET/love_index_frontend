//Nhớ thêm tên module vào app.js
angular.module('contactModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('contact', { //Định nghĩa 1 state
                url: '/contact',     //Khai báo URl hiển thị
                templateUrl: 'modules/contact/contact.html', //Đường dẫn view: modules/about/about.html
                controller: 'contactController'   //Khai báo Controller phụ vụ state này
            })


    });

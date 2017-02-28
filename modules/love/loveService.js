//Nhớ thêm tên service vào controller
angular.module('loveModule')
    .service('loveService', function ($http) {
        var service = {
            loveCalc: loveCalc,
            cong2so: cc,
            accessible: checkAccessible
        };
        return service;

        function loveCalc(opts) {
            return $http({
                url: 'http://192.168.1.106:8080/',
                method: 'POST',
                data: opts
            })
        }
        function cc(a, b) {
            return a + b;
        }

        function checkAccessible(username, password) {
            var accessible = false;
            if ("admin" == username && "1" == password) accessible = true;
            return accessible


        }
    });
    
    
 
angular.module('loveModule')
    .controller('loveController', function ($scope, loveService, $http, $httpParamSerializerJQLike) {
        $scope.comment = '';//Xử lý logic ở đây
        $scope.score='';
        $scope.date0 = '';
        $scope.date1 = '';
        $scope.user0 = {
            name : "",
            day : 15,
            month: 11,
            year : 96
        };
        $scope.user1 = {
            name : "",
            day : 15,
            month: 10,
            year : 97
        };
        var getMonth = function(monthStr){
            return new Date(monthStr+'-1-01').getMonth()+1
        };

        $scope.calc = function () {
            $scope.user0.month = getMonth($scope.date0.toDateString().substring(4,7));
            $scope.user0.day = parseInt($scope.date0.toDateString().substring(8,10));
            if(parseInt($scope.date0.toDateString().substring(11,15)) <2000 ){
                $scope.user0.year = parseInt($scope.date0.toDateString().substring(13,15));
            }
            if(parseInt($scope.date0.toDateString().substring(11,15)) >=2000 ){
                $scope.user0.year = parseInt($scope.date0.toDateString().substring(13,15));
                $scope.user0.year = $scope.user0.year + 100;
            }



            $scope.user1.month = getMonth($scope.date1.toDateString().substring(4,7));
            $scope.user1.day = parseInt($scope.date1.toDateString().substring(8,10));
            if(parseInt($scope.date1.toDateString().substring(11,15)) <2000 ){
                $scope.user1.year = parseInt($scope.date1.toDateString().substring(13,15));
            }
            if(parseInt($scope.date1.toDateString().substring(11,15)) >=2000 ){
                $scope.user1.year = parseInt($scope.date1.toDateString().substring(13,15));
                $scope.user1.year = $scope.user1.year + 100;
            }
            var request = {
                "name0" : $scope.user0.name,
                "name1" : $scope.user1.name,
                "day0" : $scope.user0.day,
                "day1" : $scope.user1.day,
                "month0" : $scope.user0.month,
                "month1" : $scope.user1.month,
                "year0" : $scope.user0.year,
                "year1" : $scope.user1.year
            };

            $http({
                url: 'https://love-index-be.herokuapp.com',
                method: 'POST',
                // data: $httpParamSerializerJQLike(request), // Make sure to inject the service you choose to the controller
                data: request, // Make sure to inject the service you choose to the controller
                headers: {
                    'Content-Type': 'application/json' // Note the appropriate header
                }
            }).then(function(response) {

                // $scope.comment = "Result: "+angular.element(angular.element(response.data).find('p')[2]).text();
                // $scope.score = "Score: "+ angular.element(response.data).find('span').parent().text();
                $scope.comment = "Result: "+response.data.comment;
                $scope.score= "Score: "+response.data.score +"%";
                 });

        }


    });

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
                "rapide_prenom[0]" : $scope.user0.name,
                "rapide_prenom[1]" : $scope.user1.name,
                "rapide_jour[0]" : $scope.user0.day-1,
                "rapide_jour[1]" : $scope.user1.day-1,
                "rapide_mois[0]" : $scope.user0.month-1,
                "rapide_mois[1]" : $scope.user1.month-1,
                "rapide_annee[0]" : $scope.user0.year,
                "rapide_annee[1]" : $scope.user1.year,
                "date1" : $scope.date1,
                partenaire: 9999,
                lang: "en"
            };

            $http({
                url: 'https://thawing-lake-86928.herokuapp.com/http://www.astrotheme.fr/partenaires/indice_rapide.php',
                method: 'POST',
                data: $httpParamSerializerJQLike(request), // Make sure to inject the service you choose to the controller
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
                }
            }).then(function(response) {

                $scope.comment = "Result: "+angular.element(angular.element(response.data).find('p')[2]).text();
                $scope.score = "Score: "+ angular.element(response.data).find('span').parent().text();
                 });

        }


    });
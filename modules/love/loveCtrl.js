angular.module('loveModule')
    .controller('loveController', function ($scope, loveService, $http, $httpParamSerializerJQLike) {
        $scope.comment = '';//Xử lý logic ở đây
        $scope.score='';
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

        $scope.calc = function () {
            var request = {
                "rapide_prenom[0]" : $scope.user0.name,
                "rapide_prenom[1]" : $scope.user1.name,
                "rapide_jour[0]" : $scope.user0.day-1,
                "rapide_jour[1]" : $scope.user1.day-1,
                "rapide_mois[0]" : $scope.user0.month-1,
                "rapide_mois[1]" : $scope.user1.month-1,
                "rapide_annee[0]" : $scope.user0.year,
                "rapide_annee[1]" : $scope.user1.year,
                partenaire: 9999,
                lang: "en"
            };
            // var url = "http://www.astrotheme.fr/partenaires/indice_rapide.php";
            // $http({
            //     method: 'JSONP',
            //     url: url
            // }).
            // then(function(response) {
            //     console.log(response.data)
            // });
            $http({
                url: 'https://cors-anywhere.herokuapp.com/http://www.astrotheme.fr/partenaires/indice_rapide.php',
                method: 'POST',
                data: $httpParamSerializerJQLike(request), // Make sure to inject the service you choose to the controller
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
                }
            }).then(function(response) {

                $scope.comment = angular.element(angular.element(response.data).find('p')[2]).text();
                $scope.score = angular.element(response.data).find('span').parent().text();
                 });

        }


    });
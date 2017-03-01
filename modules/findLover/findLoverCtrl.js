angular.module('findLoverModule')
    .controller('findLoverController', function ($scope, $http, $httpParamSerializerJQLike) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.user0 = {
            "name": "Long",
            "day": 15,
            "month": 11,
            "year": 96
        };
        $scope.loveResult = [];
        $scope.targetYear = "";
        var i = 0, j = 0;

        $scope.findLover = function () {
            for (var i = 0; i < 12; i++) {
                for (var j = 0; j < 31; j++) {
                    calc(i, j);
                }
            }
        };
        var calc = function (i, j) {

            var request = {
                "rapide_prenom[0]": $scope.user0.name,
                "rapide_prenom[1]": "a",
                "rapide_jour[0]": $scope.user0.day - 1,
                "rapide_jour[1]": j,
                "rapide_mois[0]": $scope.user0.month - 1,
                "rapide_mois[1]": i,
                "rapide_annee[0]": $scope.user0.year,
                "rapide_annee[1]": $scope.targetYear,
                partenaire: 9999,
                lang: "en"
            };

            $http({

                url: 'https://cors-anywhere.herokuapp.com/http://www.astrotheme.fr/partenaires/indice_rapide.php',
                method: 'POST',
                data: $httpParamSerializerJQLike(request), // Make sure to inject the service you choose to the controller
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
                }
            }).then(function (response) {
                var day = j +1;
                var month = i +1;
                var str = "Month: " + month + " Day: "+ day +
                    " ---- Score: " + angular.element(response.data).find('span').parent().text();
                $scope.loveResult.push(str);
            }).catch(function (response) {
                calc(i,j);
                var day = j +1;
                var month = i +1;
                console.log(response.status + " Day: " + day + " Month: " + month);
            });
        }

    });
var myApp = angular.module('myApp', [])
    .controller('MyController', function() {
      var presenterList = this;
      presenterList.presenters =  [
     {
         "name":        "Mike",
         "enjoys":      "camping, fishing, target shooting"
     },
     {
            "name":     "Ann",
            "enjoys":   "Python, online learning"
        },
        {
            "name":     "Richard",
            "enjoys":   "Cars, money, motors,snow"
        }/*,
        {
            "name":     "Kyle",
            "enjoys":   "Snow"
        },
        {
            "name":     "Tommy",
            "enjoys":   "Campaigning, small jackets"
        },
        {
            "name":     "Justin Rains",
            "enjoys":   "Camping, Python, coding, Raspberry Pi"
        },
        {
            "name":     "Mario",
            "enjoys":   "Racing, carts, plumbing"
        }*/
    ];
//    $http.get('js/presenters.json').success(function(data) {
//        $scope.presenters = data;
////        $scope.presenterOrder = $scope.options[1];
//    }]);
      presenterList.addPresenter = function() {
        presenterList.presenters.push({
            name: presenterList.presenterText,
            enjoys: "Stuff"
        });
        presenterList.presenterText = '';
      };
      });
//      });

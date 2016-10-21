var myApp = angular.module('myApp', [])
    .controller('MyController', function() {
      var presenterList = this;
      presenterList.presenters =  [
     {
	"name":		"Laura",
	"enjoys":	"camping, campfires"
     },
     {
         "name":        "Justin",
         "enjoys":      "camping, fishing, target shooting"
     },
     {
            "name":     "Ann",
            "enjoys":   "Python, online learning"
        },
        {
            "name":     "Richard",
            "enjoys":   "Cars, money, motors,snow"
        }
    ];
//    $http.get('js/presenters.json').success(function(data) {
//        $scope.presenters = data;
//        $scope.presenterOrder = $scope.options[1];
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

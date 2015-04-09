/**
 * Created by yunfeng on 08/04/15.
 */
angular.module('myscheduler', ["ngRoute"])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/phones', {
                    templateUrl: '/homepage.html',
                    controller: 'PersonnelCtrl'
                }).
                when('/', {
                    templateUrl: '/homepage.ejs',
                    controller: 'PersonnelCtrl'
                }).
                otherwise({
                    redirectTo: '/phones'
                });
        }])
    .controller('PersonnelCtrl', ['$scope', function($scope){
        $scope.personnel = [{id:'1', name:"David"}, {id:'2', name:"Jon"}, {id:'3', name:"Tim"}, {id:'4', name:"Don"}];
    }])
    .controller('SubjectCtrl', ['$scope', function($scope){
        $scope.subjects = ['100101', '100201', '100301'];
    }])
    .controller('VisitCtrl', ['$scope', function($scope){
        $scope.visits = ["Enr", "Xab", "Conv"];
    }]);
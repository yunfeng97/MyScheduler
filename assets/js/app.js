/**
 * Created by yunfeng on 08/04/15.
 */
angular.module('Myscheduler', ["ngRoute"])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '../views/homepage.ejs',
                    controller: 'MySchedulerController'
                }).when('/phone', {
                    templateUrl: '../views/homepage.html',
                    controller: 'MySchedulerController'
                }).
                when('/signup', {
                    templateUrl: '../views/signup.html'
                }).
                otherwise({
                    redirectTo: '../views/phones'
                });
        }])
    .controller('MySchedulerController', ['$scope', function($scope){
        $scope.personnel = [{id:'1', name:"David"}, {id:'2', name:"Jon"}, {id:'3', name:"Tim"}, {id:'4', name:"Don"}];
    }]);
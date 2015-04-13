/**
 * Created by yunfeng on 08/04/15.
 */
angular.module('MyScheduler', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    //templateUrl: '/views/homepage.ejs',
                    templateUrl: '../views/dashboard.html',
                    controller: 'DashboardCtrl'
                }).when('/phone', {
                    templateUrl: '../views/homepage.html',
                    controller: 'MySchedulerController'
                }).
                when('/signup', {
                    templateUrl: '../views/signup.html'
                }).
                when('/admin', {
                    templateUrl: '/templates/index.html'
                }).
                when('/forms', {
                    templateUrl: '../views/forms.html'
                }).
                when('/dashboard', {
                    templateUrl: '../views/dashboard.html'
                }).
                otherwise({
                    redirectTo: '../views/phones'
                });
        }])
    .controller('MySchedulerController', ['$scope', function($scope){
        $scope.personnel = [{id:'1', name:"David"}, {id:'2', name:"Jon"}, {id:'3', name:"Tim"}, {id:'4', name:"Don"}];
    }]);
/*
    .controller('DashboardCtrl', ['$scope', function ($scope) {
        $scope.test = 'This is test text';
    }]);
    */
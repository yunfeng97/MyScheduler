/**
 * Created by yunfeng on 24/04/15.
 */
angular.module('MyScheduler')
    .controller('NewServiceCtrl', ['$scope', '$http', "$location", function ($scope, $http, $location) {
        $scope.name = 'test';

        $scope.submitForm = function(){

            var newService = {};
            newService.name = $scope.name;
            newService.description = $scope.description;

            $http.post('/api/service/register', newService).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available

                    //$scope.serviceName = "new service";
                   //angular.fromJson(data);
                    //console.log(angular.fromJson(data));
                    //console.log("service name is : " + $scope.newService.serviceName)
                    //$scope.$apply(function(){
                    $scope.newServiceCreated = true;
                    //});
                    //$location.path('/viewNewService');
                }).
                error(function(data, status, headers, config) {
                    console.log("staus: " + status);
                    //console.log(angular.fromJson(data))
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }

    }]);